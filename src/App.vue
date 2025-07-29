<script>
import { globalState } from '@/globalState';
import { copilotSVG, chinaFlagSVG, usaFlagSVG } from './svgIcons';

export default {
  name: 'App',
  data() {
    return {
      chineseLanguage: `<span style="display:inline-flex;align-items:center;gap:0.5em;">${chinaFlagSVG}<span>简体中文</span></span>`,
      englishLanguage: `<span style="display:inline-flex;align-items:center;gap:0.5em;">${usaFlagSVG}<span>English (US)</span></span>`,
      languageContent: {
        en: {
          brand: 'Guoxi <strong>LIU</strong>',
          home: 'Home',
          publications: 'Publications',
          trajectory: 'Trajectory',
          switchLanguage: 'Languages',
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
  created() {
    // Auto detect the IP address location on the first load
    if (!localStorage.getItem('languageAutoSet')) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country === 'CN') {
            globalState.language = 'zh';
          } else {
            globalState.language = 'en';
          }
          localStorage.setItem('languageAutoSet', 'true');
        })
        .catch(() => {
          // fallback to English
          globalState.language = 'en';
        });
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
                    ><span v-html="chineseLanguage"></span></a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      @click="setLanguage('en')"
                      :class="{ active: language === 'en' }"
                    ><span v-html="englishLanguage"></span></a>
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
