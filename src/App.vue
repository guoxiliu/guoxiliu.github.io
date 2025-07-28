<script>
import { globalState } from '@/globalState';

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
        },
        zh: {
          brand: '<strong>刘</strong>国玺',
          home: '主页',
          publications: '出版物',
          trajectory: '行踪轨迹',
          switchLanguage: '切换语言',
          chinese: '中文🇨🇳',
          english: 'English🇺🇸',
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
  </div>
</template>

<style>
@import './assets/styles.css';
</style>
