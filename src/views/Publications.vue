<script>
import { globalState } from '@/globalState';
import { parseBibTeX } from '@/utils/bibtexParser';

export default {
  name: 'Publications',
  data() {
    return {
      showModal: false,
      modalBibtex: '',
      publications: [],
      expandedAbstracts: new Set(), // track which abstracts are expanded
      loading: true,
      error: null,
      // Copy notification state
      showCopyNotification: false,
      copyNotificationText: '',
      languageContent: {
        en: {
          title: 'Publications',
          description: 'Here you can find a list of my publications. Each entry includes links to papers, supplementary materials, code, slides, and videos where applicable.',
          loading: 'Loading publications...',
          error: 'Error loading publications. Please try again later.',
          doiLabel: 'DOI',
          codeLabel: 'Code',
          suppLabel: 'Supp',
          arxivLabel: 'arXiv',
          htmlLabel: 'HTML',
          videoLabel: 'Video',
          slidesLabel: 'Slides',
          bibtexLabel: 'BibTeX',
          pubTypes: {
            'Conference': 'Conference',
            'Journal': 'Journal',
            'Workshop': 'Workshop',
            'Book Chapter': 'Book Chapter',
            'Book': 'Book',
            'Thesis': 'Thesis',
            'Preprint': 'Preprint',
            'Technical Report': 'Technical Report',
          },
        },
        zh: {
          title: '学术成果',
          description: '此处展示我的学术成果，每条记录包含论文链接、补充材料、演示幻灯片、程序代码和演示视频等相关资源（如适用）。',
          loading: '正在加载学术成果...',
          error: '加载学术成果时出错，请稍后重试。',
          doiLabel: 'DOI链接',
          codeLabel: '源代码',
          suppLabel: '补充材料',
          arxivLabel: '预印本',
          htmlLabel: '网页链接',
          videoLabel: '视频',
          slidesLabel: '演示文稿',
          bibtexLabel: 'BibTeX引用',
          pubTypes: {
            'Conference': '会议论文',
            'Journal': '期刊论文',
            'Workshop': '研讨会论文',
            'Book Chapter': '书籍章节',
            'Book': '专著',
            'Thesis': '学位论文',
            'Preprint': '预印本',
            'Technical Report': '技术报告',
          },
        },
      },
    }
  },
  async created() {
    await this.loadPublications();
  },
  computed: {
    // Group publications by year
    groupedPublications() {
      const groups = {};
      this.publications.forEach(pub => {
        const year = pub.date || 'Other';
        if (!groups[year]) groups[year] = [];
        groups[year].push(pub);
      });
      // Sort years descending
      return Object.keys(groups)
        .sort((a, b) => b.localeCompare(a))
        .map(year => ({ year, pubs: groups[year] }));
    },
    lang() {
      return this.languageContent[this.language];
    },
    language() {
      return globalState.language;
    },
  },
  methods: {
    async loadPublications() {
      try {
        this.loading = true;
        this.error = null;
        
        // Fetch the BibTeX file from public directory
        const response = await fetch('/papers.bib');
        if (!response.ok) {
          throw new Error(`Failed to load BibTeX file: ${response.status}`);
        }
        const bibContent = await response.text();
        this.publications = parseBibTeX(bibContent);
      } catch (error) {
        console.error('Error loading publications:', error);
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    showBibtexModal(pub) {
      this.modalBibtex = this.generateBibtex(pub);
      this.showModal = true;
    },
    generateBibtex(pub) {
      // Fields to exclude from BibTeX output
      const excludeFields = ['abstract', 'supp', 'code', 'website', 'figure', 'award', 'url', 'html', 'arxiv', 'video'];

      // Determine entry type based on publication type
      let entryType = 'article';
      if (pub.type === 'Conference') entryType = 'inproceedings';
      else if (pub.type === 'Workshop') entryType = 'inproceedings';
      else if (pub.type === 'Book Chapter') entryType = 'incollection';
      else if (pub.type === 'Book') entryType = 'book';
      else if (pub.type === 'Thesis') entryType = 'phdthesis';
      
      let bibtex = `@${entryType}{${pub.id},\n`;
      
      // Standard field order for BibTeX
      const fieldOrder = [
        'title', 'author', 'journal', 'booktitle', 'year', 'month', 
        'volume', 'number', 'pages', 'publisher', 'organization', 
        'address', 'doi', 'ISSN', 'ISBN',
      ];
      
      fieldOrder.forEach(field => {
        if (pub[field] && !excludeFields.includes(field)) {
          let value = pub[field];
          
          // Convert month back to abbreviated form
          if (field === 'month') {
            const monthMap = {
              'January': 'jan', 'February': 'feb', 'March': 'mar', 'April': 'apr',
              'May': 'may', 'June': 'jun', 'July': 'jul', 'August': 'aug',
              'September': 'sep', 'October': 'oct', 'November': 'nov', 'December': 'dec'
            };
            value = monthMap[value] || value.toLowerCase();
            bibtex += `  ${field} = ${value},\n`;
          } else {
            bibtex += `  ${field} = {${value}},\n`;
          }
        }
      });
      
      // Remove trailing comma and close
      bibtex = bibtex.replace(/,\n$/, '\n');
      bibtex += '}';
      
      return bibtex;
    },
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.showCopySuccess('Copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        try {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          this.showCopySuccess('Copied to clipboard!');
        } catch (fallbackErr) {
          this.showCopySuccess('Failed to copy. Please copy manually.');
        }
      }
    },
    showCopySuccess(message) {
      this.copyNotificationText = message;
      this.showCopyNotification = true;
      
      // Auto-hide after 2 seconds
      setTimeout(() => {
        this.showCopyNotification = false;
      }, 2000);
    },
    toggleAbstract(pubId) {
      if (this.expandedAbstracts.has(pubId)) {
        this.expandedAbstracts.delete(pubId);
      } else {
        this.expandedAbstracts.add(pubId);
      }
      // Force reactivity update
      this.expandedAbstracts = new Set(this.expandedAbstracts);
    },
    isAbstractExpanded(pubId) {
      return this.expandedAbstracts.has(pubId);
    },
    getAbstractText(pub) {
      if (!pub.abstract) return '';
      
      const isExpanded = this.isAbstractExpanded(pub.id);
      if (isExpanded) {
        return pub.abstract;
      }
      
      // For truncation, use word count instead of character count
      const words = pub.abstract.split(/\s+/);
      if (words.length > 50) {
        const truncatedWords = words.slice(0, 50);
        let truncated = truncatedWords.join(' ');
        
        // Try to end at a sentence boundary if possible within the last few words
        const lastFewWords = truncatedWords.slice(-10).join(' ');
        const sentenceEndMatch = lastFewWords.match(/(.*[.!?])\s+\w/);
        
        if (sentenceEndMatch) {
          // Find the position of this sentence end in the full truncated text
          const sentenceEndIndex = truncated.lastIndexOf(sentenceEndMatch[1]);
          if (sentenceEndIndex > truncated.length * 0.8) { // Only if it's near the end
            truncated = truncated.substring(0, sentenceEndIndex + sentenceEndMatch[1].length);
          }
        }
        
        return truncated;
      }
      
      return pub.abstract;
    },
    hasLongAbstract(pub) {
      if (!pub.abstract) return false;
      const words = pub.abstract.split(/\s+/);
      return words.length > 50;
    },
    closeModal() {
      this.showModal = false;
      this.modalBibtex = '';
    },
    formatAuthors(authors) {
      if (!authors || authors.length === 0) return '';
      
      return authors.map(author => {
        // Check if this is Guoxi Liu (case insensitive)
        if (author.toLowerCase().includes('guoxi liu') || author.toLowerCase().includes('liu, guoxi')) {
          return `<strong>${author}</strong>`;
        }
        return author;
      }).join(', ');
    },
    getChineseZodiac(year) {
      const animalEmojis = [
        '🐭', // Rat
        '🐂', // Ox
        '🐅', // Tiger
        '🐰', // Rabbit
        '🐉', // Dragon
        '🐍', // Snake
        '🐎', // Horse
        '🐐', // Goat
        '🐵', // Monkey
        '🐓', // Rooster
        '🐕', // Dog
        '🐷'  // Pig
      ];
      
      return animalEmojis[(parseInt(year) - 4) % 12];
    },
    translatePubType(type) {
      if (!type) return '';
      return this.lang.pubTypes[type] || type;
    },
  }
}
</script>

<template>
  <div class="container">
    <div class="publications row-100 h-100">
      <h2>{{ lang.title }}</h2>
      <p>{{ lang.description }}</p>
      
      <!-- Loading State -->
      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{{ lang.loading }}</span>
        </div>
        <p class="mt-2 text-muted">{{ lang.loading }}</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="alert alert-danger" role="alert">
        <i class="fas fa-exclamation-triangle me-2"></i>
        {{ lang.error }}
        <details class="mt-2">
          <summary>Technical details</summary>
          <pre class="small mt-2">{{ error }}</pre>
        </details>
      </div>

      <!-- Publications List -->
      <div v-else-if="publications.length > 0" v-for="group in groupedPublications" :key="group.year" class="mb-4">
        <div class="card shadow-sm">
          <div class="card-header">
            <h5 class="m-1">
              {{ group.year }} 
              <span class="ms-1" style="font-size: 1em;">
                {{ getChineseZodiac(group.year) }}
              </span>
            </h5>
          </div>
          <ul class="list-group list-group-flush">
            <li v-for="pub in group.pubs" :key="pub.id" class="list-group-item">
              <div class="row align-items-start mt-2">
                <!-- Date Badge Column -->
                <div class="col-xs-2 col-sm-2 col-md-2 text-center" style="width: 100px;">
                  <div class="table-cv">
                    <span class="badge bg-primary font-weight-bold text-uppercase align-middle px-2 py-2" 
                          style="min-width: 80px; font-size: 0.8rem;">
                      {{ pub.month ? pub.month.substring(0, 3) : 'UNK' }}
                    </span>
                  </div>
                </div>

                <!-- Publication Content Column -->
                <div :class="pub.figure ? 'col-xs-6 col-sm-6 col-md-6' : 'col-xs-10 col-sm-10 col-md-10'">
                  <h6 :class="['title font-weight-bold ml-1 ml-md-2', { 'mb-1': pub.note }]">
                    <a :href="pub.url || pub.html" target="_blank" class="text-decoration-none">
                      {{ pub.title }}
                    </a>
                  </h6>

                  <div v-if="pub.note" class="ml-1 ml-md-2 mb-2">
                    <span class="badge bg-info text-dark">{{ pub.note }}</span>
                  </div>
                  
                  <h6 class="ml-1 ml-md-2 text-muted" style="font-size: 1rem; font-style: italic;">
                    {{ pub.venue }}
                    <span v-if="pub.volume && pub.number && pub.pages">
                      , Vol. {{ pub.volume }}({{ pub.number }}), pp. {{ pub.pages }}
                    </span>
                  </h6>

                  <h6 class="ml-1 ml-md-2 text-muted" style="font-size: 0.9rem;">
                    <span v-html="formatAuthors(pub.authors)"></span>
                  </h6>

                  <!-- Abstract (truncated with more/less link) -->
                  <div v-if="pub.abstract" class="ml-1 ml-md-2 mt-1">
                    <div class="text-muted small mb-1" style="white-space: pre-line;">{{ getAbstractText(pub) }}<span v-if="!isAbstractExpanded(pub.id) && hasLongAbstract(pub)">...</span></div>
                    <button 
                      v-if="hasLongAbstract(pub)"
                      @click="toggleAbstract(pub.id)"
                      class="btn btn-link btn-sm p-0 text-primary"
                      style="font-size: 0.75rem; text-decoration: none;"
                    >
                      {{ isAbstractExpanded(pub.id) ? 'Show less' : 'Show more' }}
                    </button>
                  </div>

                  <!-- Links -->
                  <div class="ml-1 ml-md-2 mb-2">
                    <small>
                      <span class="badge bg-secondary me-1">{{ translatePubType(pub.type) }}</span>
                      
                      <a v-if="pub.doi" :href="'https://doi.org/' + pub.doi" target="_blank" class="me-2">
                        <i class="fas fa-external-link-alt"></i> {{ lang.doiLabel }}
                      </a>
                      
                      <a v-if="pub.arxiv" :href="'https://arxiv.org/abs/' + pub.arxiv" target="_blank" class="me-2">
                        <img src='../assets/pubs/arxiv-logomark-small-white.svg' alt="arXiv" style="width: 12px; height: 12px; vertical-align: baseline; filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);"> {{ lang.arxivLabel}}
                      </a>
                      
                      <a v-if="pub.code" :href="pub.code" target="_blank" class="me-2">
                        <i class="fab fa-github"></i> {{ lang.codeLabel }}
                      </a>
                      
                      <a v-if="pub.supp" :href="pub.supp" target="_blank" class="me-2">
                        <i class="fas fa-database"></i> {{ lang.suppLabel }}
                      </a>
                      
                      <a v-if="pub.html && pub.html !== pub.url" :href="pub.html" target="_blank" class="me-2">
                        <i class="fas fa-globe"></i> {{ lang.htmlLabel }}
                      </a>
                      
                      <a v-if="pub.video" :href="pub.video" target="_blank" class="me-2">
                        <i class="fas fa-video"></i> {{ lang.videoLabel }}
                      </a>
                      
                      <button @click="showBibtexModal(pub)" class="btn btn-sm btn-outline-secondary me-2" style="font-size: 0.75rem; padding: 0.1rem 0.3rem;">
                        <i class="fas fa-quote-left"></i> {{ lang.bibtexLabel }}
                      </button>
                    </small>
                  </div>
                </div>

                <!-- Figure display -->
                <div v-if="pub.figure" class="col-xs-4 col-sm-4 col-md-4 d-flex justify-content-center">
                  <img 
                    :src="require(`@/assets/pubs/${pub.figure}`)" 
                    :alt="pub.title + ' figure'"
                    class="rounded shadow-sm publication-figure"
                    style="width: 100%; height: auto; max-height: 180px; object-fit: contain;"
                  >
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- No Publications State -->
      <div v-else class="text-center py-5">
        <i class="fas fa-file-alt fa-3x text-muted mb-3"></i>
        <p class="text-muted">No publications found.</p>
      </div>
    </div>

    <!-- Modal for Figures and BibTeX -->
    <div v-if="showModal" class="overlay-backdrop" @click="closeModal">
      <div class="overlay-modal-content" @click.stop>
        <button 
          type="button" 
          class="btn-close position-absolute top-0 end-0 m-2" 
          style="z-index: 1050;"
          @click="closeModal"
        ></button>
        
        <!-- BibTeX Modal Content -->
        <div class="p-4" style="max-width: 750px; max-height: 80vh; overflow-y: auto;">
          <h5 class="mb-3">
            <i class="fas fa-quote-left me-2"></i>
            BibTeX Citation
            <button 
              @click="copyToClipboard(modalBibtex)"
              class="btn btn-sm btn-outline-secondary ms-2"
              title="Copy to clipboard"
            >
              <i class="fas fa-copy"></i>
            </button>
          </h5>
          <div>
            <pre class="bg-light p-3 rounded border" style="font-size: 0.9rem; line-height: 1.5; white-space: pre-wrap; word-wrap: break-word;"><code>{{ modalBibtex }}</code></pre>
          </div>
          <div class="mt-2 text-center">
            <div>
              <small class="text-muted">
                <i class="fas fa-info-circle"></i>
                Click the copy button to copy this citation to your clipboard
              </small>
            </div>
            <div v-if="showCopyNotification" class="toast-notification-inline mt-2">
              <i class="fas fa-check-circle"></i>
              {{ copyNotificationText }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
