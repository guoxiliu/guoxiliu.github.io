<script>
import { globalState } from '@/globalState';

export default {
  name: 'App',
  computed: {
    language() {
      return globalState.language;
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
            <template v-if="language === 'en'">
              Guoxi <strong>LIU</strong>
            </template>
            <template v-else>
              <strong>刘</strong>国玺
            </template>
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
                <router-link v-show="language === 'en'" class="nav-link" to="/">Home</router-link>
                <router-link v-show="language === 'zh'" class="nav-link" to="/">主页</router-link>
              </li>
              <li class="nav-item">
                <router-link v-show="language === 'en'" class="nav-link" to="/publications">Publications</router-link>
                <router-link v-show="language === 'zh'" class="nav-link" to="/publications">出版物</router-link>
              </li>
              <li class="nav-item">
                <router-link v-show="language === 'en'" class="nav-link" to="/trajectory">Trajectory</router-link>
                <router-link v-show="language === 'zh'" class="nav-link" to="/trajectory">行踪轨迹</router-link>
              </li>
              <li class="nav-item dropdown me-3">
                <a v-show="language === 'en'" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <a v-show="language === 'zh'" class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  切换语言
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#" @click="setLanguage('zh')">中文🇨🇳</a></li>
                  <li><a class="dropdown-item" href="#" @click="setLanguage('en')">English🇺🇸</a></li>
                </ul>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>

    <transition name="zoom-fade" mode="out-in">
      <router-view :key="language" />
    </transition>
  </div>
</template>

<style>
@import './assets/styles.css';
</style>
