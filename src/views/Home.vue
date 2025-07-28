<script>
import { globalState } from '@/globalState';
import { Counter } from 'counterapi';

export default {
  name: 'Home',
  data() {
    return {
      realEmailAddress: "liu.12722@osu.edu",
      protectedEmail: "[my protected email]",
      showEmail: false,
      viewerCount: null,
      languageContent: {
        en: {
          name: "Guoxi Liu",
          title: "Postdoc Scholar",
          department: "Department of Computer Science and Engineering",
          university: "The Ohio State University",
          previous: "Previous affiliation:",
          previousLab: "Visual Computing Lab",
          previousDepartment: "School of Computing",
          previousUniversity: "Clemson University",
          currentAddress: "Current work address:",
          workAddress: "680 Dreese Laboratories<br>2015 Neil Ave<br>Columbus, OH, USA 43210",
          emailLabel: "Email: ",
          aboutLabel: "About Me",
          aboutParagraphs: [
            [
              "I am currently a postdoctoral scholar in ",
              { type: "span", color: "#BA0C2F", text: "Department of Computer Science and Engineering" },
              " at ",
              { type: "img", src: require('@/assets/imgs/osu-logo.png'), alt: "Ohio State University Logo", color: "#BA0C2F", text: "The Ohio State University", url: null },
              ", working with ",
              { type: "a", url: "https://hguo.github.io/", color: "#BA0C2F", text: "Dr. Hanqi Guo" },
              ". Before joining OSU, I obtained my Ph.D. in Computer Science from ",
              { type: "img", src: require('@/assets/imgs/clemson-logo.png'), alt: "Clemson University Logo", color: "#F56600", text: "Clemson University", url: null },
              ", where I was advised by ",
              { type: "a", url: "https://fiurici.people.clemson.edu/", color: "#F56600", text: "Dr. Federico Iuricich" },
              ". My research interests include scientific visualization, topological data analysis, parallel computation, and data compression."
            ],
            [
              "Prior to my doctoral studies, I got my Bachelor’s degree in Computer Science and Technology from ",
              { type: "img", src: require('@/assets/imgs/chd-logo.jpg'), alt: "Chang'an University Logo", color: "#005BAC", text: "Chang’an University (CHD)", url: "https://en.chd.edu.cn/" },
              ". During my undergraduate years, I studied as an exchange student at ",
              { type: "img", src: require('@/assets/imgs/ncu-logo.png'), alt: "National Central University Logo", color: "#FBCB59", text: "National Central University", url: "https://www.ncu.edu.tw/en/" },
              " in Taoyuan City, Taiwan Province. I was also a visiting student in Digital Biology Lab at ",
              { type: "img", src: require('@/assets/imgs/mizzou-logo.png'), alt: "University of Missouri-Columbia Logo", color: "#F1B82E", text: "University of Missouri-Columbia (Mizzou)", url: "https://missouri.edu/" },
              "."
            ],
            [
              "BTW, my name can be pronounced as “Gwoh-shee Lee-oo” :)"
            ]
          ],
          newsLabel: "News",
          news: [
            {
              date: "2025-07-27",
              text: `Our paper, "<i>GALE: Leveraging Heterogeneous Systems for Efficient Unstructured Mesh Data Analysis</i>", has been accepted to <a href="https://ieeevis.org/year/2025/welcome" target="_blank"><img src="${require('@/assets/imgs/news/VIS-2025-logo.svg')}" alt="IEEE VIS 2025 Logo" style="height:1.65em;vertical-align:middle;margin-left:2px;" /></a>. Thanks to all the reviewers for their valuable feedback during the review process. See you in Vienna, Austria this November!`
            },
            {
              date: "2025-03-07",
              text: "I have successfully defended my dissertation, “<a href='https://open.clemson.edu/all_dissertations/3872/' target='_blank' style='color:#F56600'><i>Advancing Efficiency of Unstructured Mesh Processing With Localized Data Structures</i></a>”! Special thanks to my advisory committee and everyone who has supported me throughout this journey.",
            },
            {
              date: "2024-10-15",
              text: `Our paper submitted to <i>IEEE Workshop on Topological Data Analysis and Visualization (TopoInVis)</i> at <a href="https://ieeevis.org/year/2024/welcome" target="_blank"><img src="${require('@/assets/imgs/news/VIS-2024-logo.png')}" alt="IEEE VIS 2024 Logo" style="height:1.5em;vertical-align:middle;margin-left:2px;" /></a> has been selected for the <strong>Best Paper Award</strong>. Congratulations to Yuehui! I feel very honored to be part of the team and contribute to the work.`,
            },
            {
              date: "2024-07-15",
              text: "I have been selected for Doctoral Dissertation Completion Grant from Clemson University! I am looking forward to defending my dissertation later this year.",
            },
            {
              date: "2024-04-30",
              text: "I have successfully passed my dissertation proposal! Thanks to my dissertation committee!",
            },
            {
              date: "2023-07-15",
              text: `Our paper, A Task-Parallel Approach for Localized Topological Data Structures, has been accepted to <a href="https://ieeevis.org/year/2023/welcome" target="_blank"><img src="${require('@/assets/imgs/news/VIS-2023-logo.svg')}" alt="IEEE VIS 2023 Logo" style="height:1.4em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a>. Thanks to all the reviewers for their thoughtful comments and feedback during the review process. See you in Melbourne, Australia this October!`,
            },
            {
              date: "2022-04-28",
              text: "Our paper, TopoEmbedding, A Web Tool for the Interactive Analysis of Persistent Homology, has been accepted to TDA Workshop at SIAM International Conference on Data Mining (SDM) 2022. Congratulations to Xueyi, and thanks to all the reviewers!",
            },
            {
              date: "2022-01-26",
              text: "I have successfully passed my portfolio review, an alternative version of the qualification exam, and will proceed to the dissertation phase of my doctoral study.",
            },
            {
              date: "2022-01-05",
              text: "Our memory-efficient topological data structure, TopoCluster, has been officially integrated in the Topology Toolkit. Please check out this page on how to invoke the CompactTriangulation class in TTK. Thanks to Dr. Julien Tierny and Dr. Pierre Guillou for their valuable help throughout the whole integration process.",
            },
            {
              date: "2021-11-09",
              text: `I have been allocated a slot to present my TVCG paper at <a href="https://ieeevis.org/year/2022/welcome" target="_blank"><img src="${require('@/assets/imgs/news/VIS-2022-logo.svg')}" alt="IEEE VIS 2022 Logo" style="height:1.35em;vertical-align:middle;margin-left:2px;margin-right:2px;" /></a>. Thanks to Dr. Han-Wei Shen for providing me with such great opportunity. See you in Oklahoma City next year!`
            },
            {
              date: "2021-10-15",
              text: "My first paper, TopoCluster: A Localized Data Structure for Topology-based Visualization, has been accepted for publication in IEEE Transactions on Visualization and Computer Graphics (TVCG). Thanks to all the collaborators and reviewers for their valuable contributions and efforts."
            },
            {
              date: "2021-07-16",
              text: "Our project submitted to ICLR Computational Geometry & Topology Challenge 2021 has been included in the final summary white paper. For more details, please visit this link. Even though our project did not secure a top-three ranking, participating in this event was a highly enjoyable experience. Thanks to the organizers for providing such a creative and welcoming environment."
            },
            {
              date: "2018-08-25",
              text: "I have started my doctoral study at Clemson University!"
            }
          ]
        },
        zh: {
          name: "刘国玺",
          title: "博士后研究学者",
          department: "计算机科学与工程系",
          university: "美国俄亥俄州立大学",
          previous: "此前署名单位：",
          previousLab: "视觉计算实验室",
          previousDepartment: "计算机学院",
          previousUniversity: "克莱姆森大学",
          currentAddress: "目前工作地址：",
          workAddress: "德里斯实验室6楼680<br>尼尔大道2015号<br>美国俄亥俄州哥伦布市<br>邮政编码：43210",
          emailLabel: "电子邮箱：",
          aboutLabel: "个人简介",
          aboutParagraphs: [
            [
              "我目前在",
              { type: "img", src: require('@/assets/imgs/osu-logo.png'), alt: "Ohio State University Logo", color: "#BA0C2F", text: "美国俄亥俄州立大学（R1大学）", url: null },
              { type: "span", color: "#BA0C2F", text: "计算机科学与工程系" },
              "从事博士后研究，合作导师为",
              { type: "a", url: "https://hguo.github.io/", color: "#BA0C2F", text: "郭翰琦博士" },
              "。在加入俄亥俄州立大学之前，我在",
              { type: "img", src: require('@/assets/imgs/clemson-logo.png'), alt: "Clemson University Logo", color: "#F56600", text: "克莱姆森大学（R1大学）", url: null },
              "获得计算机科学博士学位，导师为",
              { type: "a", url: "https://fiurici.people.clemson.edu/", color: "#F56600", text: "Federico Iuricich博士" },
              "。我的研究方向包括数据可视化、拓扑数据分析、并行计算与数据压缩。"
            ],
            [
              "我本科毕业于",
              { type: "img", src: require('@/assets/imgs/chd-logo.jpg'), alt: "长安大学校徽", color: "#005BAC", text: "长安大学", url: "https://www.chd.edu.cn/" },
              "计算机科学与技术（卓越工程师）专业。期间曾在",
              { type: "img", src: require('@/assets/imgs/ncu-logo.png'), alt: "中央大学校徽", color: "#FBCB59", text: "台湾中央大学", url: "https://www.ncu.edu.tw/" },
              "资讯工程学系交换学习，并在",
              { type: "img", src: require('@/assets/imgs/mizzou-logo.png'), alt: "密苏里大学校徽", color: "#F1B82E", text: "密苏里大学哥伦比亚分校（R1大学）", url: "https://missouri.edu/" },
              "数字生物实验室访学。"
            ],
          ],
          newsLabel: "更新",
          news: [
            {
              date: "2025-03-07",
              text: "我已成功完成博士论文答辩，论文题目为“Advancing Efficiency of Unstructured Mesh Processing With Localized Data Structures”！特别感谢我的指导委员会以及在整个过程中支持我的每一位朋友。",
            },
            {
              date: "2024-10-08",
              text: "我们提交至IEEE VIS 2024的IEEE Workshop on Topological Data Analysis and Visualization (TopoInVis)的论文荣获最佳论文奖。祝贺Yuehui！很荣幸能作为团队成员参与这项工作。",
            },
            {
              date: "2024-07-15",
              text: "我获得了克莱姆森大学博士论文完成奖学金！期待11月顺利答辩。",
            },
            {
              date: "2024-04-30",
              text: "我已顺利通过博士论文开题答辩！感谢我的论文委员会！",
            },
            {
              date: "2024-06-01",
              text: "在IEEE VIS 2024会议上展示了我们的最新论文。",
            },
            {
              date: "2024-04-15",
              text: "以博士后身份加入俄亥俄州立大学。",
            },
            {
              date: "2023-12-10",
              text: "在克莱姆森大学成功完成博士论文答辩。",
            },
            {
              date: "2023-07-15",
              text: "我们的论文《A Task-Parallel Approach for Localized Topological Data Structures》被IEEE VIS 2023录用。感谢所有评审在评审过程中提出的宝贵意见和反馈。10月墨尔本见！",
            },
            {
              date: "2022-04-28",
              text: "我们的论文《TopoEmbedding, A Web Tool for the Interactive Analysis of Persistent Homology》被SIAM国际数据挖掘大会（SDM 2022）TDA Workshop录用。祝贺Xueyi，也感谢所有评审！",
            },
            {
              date: "2022-01-26",
              text: "我已顺利通过博士资格考试（Portfolio Review），正式进入论文阶段。",
            },
            {
              date: "2022-01-05",
              text: "我们高效的拓扑数据结构TopoCluster已正式集成到Topology Toolkit (TTK) 中。欢迎访问TTK页面了解如何调用CompactTriangulation类。感谢Dr. Julien Tierny和Dr. Pierre Guillou在整个集成过程中的宝贵帮助。",
            },
          ]
        }
      },
    }
  },
  async mounted() {
    const counter = new Counter({
      workspace: "guoxi",
      debug: false,
      timeout: 5000,
    });
    try {
      const result = await counter.get('page-clicks');
      this.viewerCount = result.data.up_count;
    } catch (error) {
      console.error('Error incrementing counter:', error.message);
      throw error;
    }
  },
  computed: {
    lang() {
      return this.languageContent[this.language];
    },
    language() {
      return globalState.language;
    },
  },
  methods: {
    revealEmail() { this.showEmail = true; },
    hideEmail() { this.showEmail = false; },
  },
};
</script>

<template>
  <div class="container">
    <div class="row h-100 w-100">
      <div class="col-md-4 my-4 d-flex align-items-start justify-content-center">
        <div class="w-100">
          <div class="card text-center shadow-sm w-100">
            <img
              src="@/assets/imgs/profile.png"
              class="card-img-top rounded-circle mx-auto mt-4"
              alt="Profile Picture"
              style="width: 160px; height: 160px; object-fit: cover;"
            >
            <div class="card-body">
              <h5 class="card-title">{{ lang.name }}</h5>
              {{ lang.title }}<br>
              <p style="color: #BA0C2F;">
                <a href="https://cse.osu.edu/" class="school-link-text" target="_blank">{{ lang.department }}</a><br>
                <a href="https://www.osu.edu/" class="school-link-text" target="_blank" style="display: inline-flex;">
                  <img 
                  src="@/assets/imgs/osu-logo.png" 
                  alt="Ohio State University Logo" 
                  class="school-link-img"
                  />
                  {{ lang.university }}
                </a>
              </p>
              <hr>
              {{ lang.previous }} <br>
              {{ lang.previousLab }}<br>
              <p style="color: #F56600;">
                <a href="https://computing.clemson.edu/" class="school-link-text" target="_blank">{{lang.previousDepartment}}</a><br>
                <a href="https://www.clemson.edu/" class="school-link-text" target="_blank" style="display: inline-flex;">
                  <img 
                  src="@/assets/imgs/clemson-logo.png" 
                  alt="Clemson University Logo" 
                  class="school-link-img"
                  />
                  {{ lang.previousUniversity }}
                </a>
              </p>
              <hr>
              <p class="mb-1"><strong>{{ lang.currentAddress}} </strong><br>
                <span v-html="lang.workAddress"></span>
              </p>
              <p class="mb-1">
                <strong>{{ lang.emailLabel }} </strong>
                <span
                  class="blur-on-hover"
                  @mouseenter="revealEmail"
                  @mouseleave="hideEmail"
                >
                  <template v-if="showEmail">
                    <a
                      :href="`mailto:${realEmailAddress}`"
                      style="text-decoration: underline;"
                    >
                      {{ realEmailAddress }}
                    </a>
                  </template>
                  <template v-else>
                    {{ protectedEmail }}
                  </template>
                </span>
              </p>
              <div class="mt-3">
                <a href="https://github.com/guoxiliu" target="_blank" class="ms-1" title="GitHub" style="color: black;">
                  <i class="fa-brands fa-github fs-4"></i>
                </a>
                <a href="https://scholar.google.com/citations?user=S83EyDgAAAAJ" target="_blank" class="ms-1" title="Google Scholar">
                  <i class="fa fa-graduation-cap fs-4"></i>
                </a>
                <a href="https://www.linkedin.com/in/liuguoxi" target="_blank" class="ms-1" title="LinkedIn">
                  <i class="fa-brands fa-linkedin fs-4"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center mt-2" style="color: #888;">
            <p v-show="language === 'en'"><i class="fa fa-eye"></i> Website views: {{ viewerCount !== null ? viewerCount : '...' }}</p>
            <p v-show="language === 'zh'"><i class="fa fa-eye"></i> 网站访问量: {{ viewerCount !== null ? viewerCount : '...' }}</p>
          </div>
        </div>
      </div>

      <div class="col-md-8 my-4 d-flex align-items-center justify-content-center">
        <div class="card mx-4 w-90 shadow-sm">
          <div class="card-header">
            <p class="fs-3 my-1 px-2">{{ lang.aboutLabel }}</p>
          </div>
          <div class="card-body mx-2">
            <div v-for="(para, idx) in lang.aboutParagraphs" :key="idx">
              <p>
                <template v-for="(part, i) in para" :key="i">
                  <template v-if="typeof part === 'string'">
                    {{ part }}
                  </template>
                  <template v-else-if="part.type === 'span'">
                    <span :style="{ color: part.color }">{{ part.text }}</span>
                  </template>
                  <template v-else-if="part.type === 'a'">
                    <a :href="part.url" target="_blank" :style="{ color: part.color }">{{ part.text }}</a>
                  </template>
                  <template v-else-if="part.type === 'img'">
                    <span :style="{ color: part.color, display: 'inline-flex' }">
                      <img :src="part.src" :alt="part.alt" class="school-link-img" />
                      <template v-if="part.url">
                        <a :href="part.url" target="_blank" style="color: inherit;">{{ part.text }}</a>
                      </template>
                      <template v-else>
                        {{ part.text }}
                      </template>
                    </span>
                  </template>
                </template>
              </p>
            </div>
          </div>

          <div class="card-header">
            <p class="fs-3 my-1 px-2">{{ lang.newsLabel }}</p>
          </div>
          <div class="card-body mb-0 pb-1" style="max-height: 600px; overflow-y: auto;">
            <table class="table pb-0 mb-0">
              <colgroup>
                <col style="min-width: 100px; width: 120px; text-align: center;">
                <col>
              </colgroup>
              <tbody>
                <tr v-for="(item, index) in lang.news" :key="`news-${index}`">
                  <td class="align-middle text-center">{{ item.date }}</td>
                  <td class="align-middle">
                    <span v-html="item.text"></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          Test overlay

          <!-- <div class="card-header mt-3">
            <h2>
              <template v-if="language === 'en'">Contact Me</template>
              <template v-else>联系方式</template>
            </h2>
            <p>
              <template v-if="language === 'en'">
                If you would like to get in touch, please reach out via email or connect with me on LinkedIn.
              </template>
              <template v-else>
                如需联系，请通过邮箱或LinkedIn与我取得联系。
              </template>
            </p>
          </div> -->
        </div>
      </div>
    </div>

  </div>
</template>
