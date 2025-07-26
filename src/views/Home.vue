<script>
import { globalState } from '@/globalState';

export default {
  name: 'Home',
  data() {
    return {
      realEmailAddress: "liu.12722@osu.edu",
      protectedEmail: "[my protected email]",
      showEmail: false,
      viewerCount: null,
    }
  },
  computed: {
    language() {
      return globalState.language;
    }
  },
  methods: {
    revealEmail() { this.showEmail = true; },
    hideEmail() { this.showEmail = false; },
  },
};
</script>

<template>
  <div class="container">
    <div class="row h-100">
      <div class="col-md-4 d-flex align-items-center justify-content-center" style="min-height: 90vh;">
        <div class="card text-center shadow-sm w-100">
          <img
            src="@/assets/imgs/profile.png"
            class="card-img-top rounded-circle mx-auto mt-4"
            alt="Profile Picture"
            style="width: 160px; height: 160px; object-fit: cover;"
          >
          <div class="card-body">
            <h5 class="card-title">Guoxi Liu</h5>
            <template v-if="language === 'en'">
              Postdoc Scholar<br>
              Department of Computer Science and Engineering<br>
              <span style="color: #BA0C2F;">
                The Ohio State University
              </span>
              <hr>
              Previous affiliation: <br>
              Visual Computing Lab<br>
              School of Computing<br>
              <span style="color: #F56600;">Clemson University</span>
              <hr>
              <p class="mb-1"><strong>Current work address: </strong><br>
                680 Dreese Laboratories<br>
                2015 Neil Ave<br>
                Columbus, OH, USA 43210
              </p>
              <p class="mb-1">
                <strong>Email: </strong>
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
            </template>
            <template v-else>
              博士后研究学者<br>
              计算机科学与工程系<br>
              <span style="color: #BA0C2F;">
                美国俄亥俄州立大学
              </span>
              <hr>
              之前署名单位：<br>
              视觉计算实验室<br>
              计算机学院<br>
              <span style="color: #F56600;">克莱姆森大学</span>
              <hr>
              <p class="mb-1"><strong>工作地址：</strong><br>
                680 Dreese Laboratories<br>
                2015 Neil Ave<br>
                哥伦布，俄亥俄州，美国 43210
              </p>
              <p class="mb-1">
                <strong>邮箱：</strong>
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
            </template>
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
      </div>

      <div class="col-md-8 px-4">
        <header class="text-center my-5">
          <h1>
            <template v-if="language === 'en'">Welcome to My Academic Website</template>
            <template v-else>欢迎来到我的学术主页</template>
          </h1>
          <p>
            <template v-if="language === 'en'">Your one-stop destination for all my academic achievements and publications.</template>
            <template v-else>这里展示了我的学术成果与出版物。</template>
          </p>
        </header>
        <section class="academic-profile mb-5">
          <h2>
            <template v-if="language === 'en'">Academic Profile</template>
            <template v-else>学术简介</template>
          </h2>
          <template v-if="language === 'en'">
            <p>Your Name</p>
            <p>Your Title</p>
            <ul>
              <li>PhD in Your Field - University Name</li>
              <li>Master of Science in Your Field - University Name</li>
              <li>Bachelor of Science in Your Field - University Name</li>
            </ul>
            <h3>Research Interests</h3>
            <p>Your research interests go here.</p>
          </template>
          <template v-else>
            <p>你的名字</p>
            <p>你的头衔</p>
            <ul>
              <li>博士学位 - 学校名称</li>
              <li>硕士学位 - 学校名称</li>
              <li>学士学位 - 学校名称</li>
            </ul>
            <h3>研究方向</h3>
            <p>你的研究方向写在这里。</p>
          </template>
        </section>
        <section class="academic-achievements">
          <h2>
            <template v-if="language === 'en'">Academic Achievements</template>
            <template v-else>学术成就</template>
          </h2>
          <p>
            <template v-if="language === 'en'">
              Here you can find a summary of my academic journey, including degrees, certifications, and honors.
            </template>
            <template v-else>
              这里可以看到我的学术经历、学位、证书和荣誉。
            </template>
          </p>
        </section>
        <section class="publications">
          <h2>
            <template v-if="language === 'en'">Publications</template>
            <template v-else>出版物</template>
          </h2>
          <p>
            <template v-if="language === 'en'">Explore my research papers, articles, and other publications.</template>
            <template v-else>浏览我的论文、文章和其他出版物。</template>
          </p>
        </section>
        <section class="contact">
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
        </section>
      </div>
    </div>
  </div>
</template>
