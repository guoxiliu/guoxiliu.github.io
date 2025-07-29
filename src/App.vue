<script>
import { globalState } from '@/globalState';

const copilotSVG = `<span style="display:inline-block;width:1em;height:1em;">
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M181.33 266.143c0-11.497 9.32-20.818 20.818-20.818 11.498 0 20.819 9.321 20.819 20.818v38.373c0 11.497-9.321 20.818-20.819 20.818-11.497 0-20.818-9.32-20.818-20.818v-38.373zM308.807 245.325c-11.477 0-20.798 9.321-20.798 20.818v38.373c0 11.497 9.32 20.818 20.798 20.818 11.497 0 20.818-9.32 20.818-20.818v-38.373c0-11.497-9.32-20.818-20.818-20.818z" fill-rule="nonzero"/><path d="M512.002 246.393v57.384c-.02 7.411-3.696 14.638-9.67 19.011C431.767 374.444 344.695 416 256 416c-98.138 0-196.379-56.542-246.33-93.21-5.975-4.374-9.65-11.6-9.671-19.012v-57.384a35.347 35.347 0 016.857-20.922l15.583-21.085c8.336-11.312 20.757-14.31 33.98-14.31 4.988-56.953 16.794-97.604 45.024-127.354C155.194 5.77 226.56 0 256 0c29.441 0 100.807 5.77 154.557 62.722 28.19 29.75 40.036 70.401 45.025 127.354 13.263 0 25.602 2.936 33.958 14.31l15.583 21.127c4.476 6.077 6.878 13.345 6.878 20.88zm-97.666-26.075c-.677-13.058-11.292-18.19-22.338-21.824-11.64 7.309-25.848 10.183-39.46 10.183-14.454 0-41.432-3.47-63.872-25.869-5.667-5.625-9.527-14.454-12.155-24.247a212.902 212.902 0 00-20.469-1.088c-6.098 0-13.099.349-20.551 1.088-2.628 9.793-6.509 18.622-12.155 24.247-22.4 22.4-49.418 25.87-63.872 25.87-13.612 0-27.86-2.855-39.501-10.184-11.005 3.613-21.558 8.828-22.277 21.824-1.17 24.555-1.272 49.11-1.375 73.645-.041 12.318-.082 24.658-.288 36.976.062 7.166 4.374 13.818 10.882 16.774 52.97 24.124 103.045 36.278 149.137 36.278 46.01 0 96.085-12.154 149.014-36.278 6.508-2.956 10.84-9.608 10.881-16.774.637-36.832.124-73.809-1.642-110.62h.041zM107.521 168.97c8.643 8.623 24.966 14.392 42.56 14.392 13.448 0 39.03-2.874 60.156-24.329 9.28-8.951 15.05-31.35 14.413-54.079-.657-18.231-5.769-33.28-13.448-39.665-8.315-7.371-27.203-10.574-48.33-8.644-22.399 2.238-41.267 9.588-50.875 19.833-20.798 22.728-16.323 80.317-4.476 92.492zm130.556-56.008c.637 3.51.965 7.35 1.273 11.517 0 2.875 0 5.77-.308 8.952 6.406-.636 11.847-.636 16.959-.636s10.553 0 16.959.636c-.329-3.182-.329-6.077-.329-8.952.329-4.167.657-8.007 1.294-11.517-6.735-.637-12.812-.965-17.924-.965s-11.21.328-17.924.965zm49.275-8.008c-.637 22.728 5.133 45.128 14.413 54.08 21.105 21.454 46.708 24.328 60.155 24.328 17.596 0 33.918-5.769 42.561-14.392 11.847-12.175 16.322-69.764-4.476-92.492-9.608-10.245-28.476-17.595-50.875-19.833-21.127-1.93-40.015 1.273-48.33 8.644-7.679 6.385-12.791 21.434-13.448 39.665z"/></svg>
</span>`;

export default {
  name: 'App',
  data() {
    return {
      languageContent: {
        en: {
          brand: 'Guoxi <strong>LIU</strong>',
          home: 'Home',
          publications: 'Publications',
          trajectory: 'Trajectory',
          switchLanguage: 'Languages',
          chinese: '中文🇨🇳',
          english: 'English🇺🇸',
          footer: `This website is built with 
            <a href="https://getbootstrap.com/" target="_blank">
              <i class="fab fa-bootstrap" style="color:#7952b3;"></i> Bootstrap
            </a>, 
            <a href="https://vuejs.org/" target="_blank">
              <i class="fab fa-vuejs" style="color:#42b883;"></i>Vue.js
            </a>, and 
            <a href="https://github.com/features/copilot" target="_blank">
              ${copilotSVG} GitHub Copilot
            </a>.<br>
            The views expressed here do not necessarily represent the views of The Ohio State University or other institutes.`
        },
        zh: {
          brand: '<strong>刘</strong>国玺',
          home: '主页',
          publications: '出版物',
          trajectory: '行踪轨迹',
          switchLanguage: '切换语言',
          chinese: '中文🇨🇳',
          english: 'English🇺🇸',
          footer: `本网站基于 
            <a href="https://getbootstrap.com/" target="_blank">
              <i class="fab fa-bootstrap" style="color:#7952b3;"></i> Bootstrap
            </a>、
            <a href="https://vuejs.org/" target="_blank">
              <i class="fab fa-vuejs" style="color:#42b883;"></i>Vue.js
            </a> 和 
            <a href="https://github.com/features/copilot" target="_blank">
              ${copilotSVG} GitHub Copilot
            </a> 构建。<br>
            本网站所表达的观点不代表俄亥俄州立大学以及其他学术机构的立场。`
        }
      }
    }
  },
  computed: {
    language() {
      return globalState.language;
    },
    lang() {
      return this.languageContent[this.language];
    }
  },
  methods: {
    setLanguage(lan) {
      globalState.language = lan;
    }
  }
}
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <div class="container-fluid">
        <transition name="zoom-fade" mode="out-in">
          <a
            :key="language"
            class="navbar-brand ms-3"
            href="/"
          >
            <span v-html="lang.brand"></span>
          </a>
        </transition>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <transition name="zoom-fade" mode="out-in">
            <ul class="navbar-nav ms-auto" :key="language">
              <li class="nav-item">
                <router-link class="nav-link" to="/">{{ lang.home }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/publications">{{ lang.publications }}</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/trajectory">{{ lang.trajectory }}</router-link>
              </li>
              <li class="nav-item dropdown me-3">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {{ lang.switchLanguage }}
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="setLanguage('zh')"
                      :class="{ active: language === 'zh' }"
                    >{{ lang.chinese }}</a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="setLanguage('en')"
                      :class="{ active: language === 'en' }"
                    >{{ lang.english }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>

    <router-view v-slot="{ Component }">
      <transition name="zoom-fade" mode="out-in">
        <component :is="Component" :key="language" />
      </transition>
    </router-view>

    <!-- Footer -->
    <footer class="footer mt-auto py-3 bg-light border-top">
      <div class="container text-center small text-muted">
        <span v-html="lang.footer"></span>
      </div>
    </footer>
  </div>
</template>

<style>
@import './assets/styles.css';
</style>
