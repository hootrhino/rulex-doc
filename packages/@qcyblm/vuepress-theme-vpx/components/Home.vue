<template>
  <main
    class="home"
    :aria-labelledby="data.heroText !== null ? 'main-title' : null"
  >
  <div v-if="data.notice">
       <h2 class="custom-block theorem" style="text-align:center;color:red;">{{data.notice}}</h2>
  </div>

    <header class="hero inner">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      />
      <h1 v-if="data.heroText !== null" id="main-title">
        {{ data.heroText || $title || "Hello" }}
      </h1>
      <h2 v-if="data.tagline !== null" v-html="tagline" class="tagline"></h2>
      <ul v-if="data.action" class="action">
        <template v-for="item in data.action">
          <li v-if="item.text && item.link"  :key="item.link">
            <a class="nav-link action-button" :href="item.link">
              <i v-if="item.icon" :class="item.icon" />
              {{ item.text }}
            </a>
          </li>
        </template>

      </ul>
    </header>

    <article v-if="data.features && data.features.length" class="features inner">
      <section
        v-for="(item, index) in data.features"
        :key="index"
        class="feature"
      >
        <template v-if="item.title">
          <a v-if="item.link" :href="item.link">
            <img
              v-if="item.imgUrl"
              :src="$withBase(item.imgUrl)"
              :alt="item.title"
            />
            <h2>{{ item.title }}</h2>
            <p>{{ item.desc }}</p>
          </a>
          <span v-else>
            <img
              v-if="item.imgUrl"
              :src="$withBase(item.imgUrl)"
              :alt="item.title"
            />
            <h2>{{ item.title }}</h2>
            <p v-html='item.desc'>{{ item.desc }}</p>
          </span>
        </template>
      </section>
    </article>

    <Content class="theme-vpx-content custom inner" />
    <footer v-if="$themeConfig.footer">
      <div class="footer-links" v-if="data.footerWrap">
        <section class="wrap" v-for="footerWrap in data.footerWrap" :key="footerWrap.title">
          <h4><i v-if="footerWrap.icon" :class="footerWrap.icon" class="fa-fw" />{{ footerWrap.title }}</h4>
          <ul>
            <li v-for="item in footerWrap.item" :key="item.text">
              <a :href="item.link" target="_blank" rel="noopener noreferrer"> {{ item.text }}</a>
              <span v-if="item.desc">- {{ item.desc }}</span>
            </li>
          </ul>
        </section>
      </div>
      <div class="footer-copyright">
        <p class="left-wrap" v-if="data.socialIcons">
          <ul>
            <SocialIcon
              v-for="icon in data.socialIcons"
              :type="icon.type"
              :link="icon.link"
              :key="icon.link"
              class="social-icon"
              extra-class="inverted"
            />
          </ul>
        </p>
        <p class="right-wrap">
          <ul class="copyright">
            <li>Theme by <a href="https://gitee.com/qcyblm/vuepress-theme-vpx" title="本站主题" target="_blank" rel="noopener noreferrer">VPX</a> </li>
            <li>Powered by <a href="https://www.vuepress.cn/" target="_blank" rel="noopener noreferrer">VuePress</a> </li>
            <li v-if="footer.licensedLink">
              <a :href="footer.licensedLink" target="_blank" rel="noopener noreferrer">{{ footer.licensed }}</a> Licensed
            </li>
            <li v-if="footer.createYear < new Date().getFullYear()">
              &copy; {{ footer.createYear }}-{{ new Date().getFullYear() }}
              <a v-if="footer.authorLink" :href="footer.authorLink" target="_blank" rel="noopener noreferrer"> {{ footer.author }} </a>
              <template v-else> {{ footer.author }} </template>
            </li>
            <li v-else-if="footer.createYear">
              Copyright &copy; {{ footer.createYear }}
              <a v-if="footer.authorLink" :href="footer.authorLink" target="_blank" rel="noopener noreferrer"> {{ footer.author }} </a>
              <template v-else> {{ footer.author }} </template>
            </li>
            <li v-if="footer.beianLink">
              <a :href="footer.beianLink" target="_blank" rel="noopener noreferrer">
                <img v-if="footer.beianicon" :src="footer.beianicon" >  {{footer.beian}}
              </a>
            </li>
            <li v-for="item in copyright" :key="item.link">
              <a v-if="item.link" :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
              <template v-else><span v-html="item.text">{{ item.text }}</span></template>
            </li>
          </ul>
        </p>
      </div>
    </footer>
  </main>
</template>

<script>
import NavLink from "@theme/components/NavLink.vue";
import SocialIcon from "@theme/components/ui/SocialIcon.vue";

export default {
  name: "Home",

  components: { NavLink, SocialIcon },

  computed: {
    data() {
      return this.$page.frontmatter;
    },
    tagline() {
      return (
        this.data.tagline || this.$description || "欢迎来到你的 VuePress 网站"
      );
    },
    footer() {
      return this.$themeConfig.footer;
    },
    copyright() {
      return this.$themeConfig.footer.copyright
    }
  },
};
</script>

<style lang="stylus">
.home
  padding: $navbarHeight 0 0
  display block
  margin 0px auto
  .inner
    max-width: $homePageWidth
    margin 0px auto
  .hero
    text-align center
    img
      max-width 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .tagline, .action
      margin 1.8rem auto
    .tagline
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color: lighten($textColor, 40%)
      border-bottom 0
      font-weight 300
    .action
      display flex
      justify-content center
      align-content center
      list-style-type none
    .action-button
      font-size 1.2rem
      color #fff
      background-color: $accentColor
      padding 0.8rem 1.6rem
      border-radius 99px
      &:hover
        background-color: lighten($accentColor, 10%)
  .features
    border-top: 1px solid $borderColor
    border-bottom: 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    text-align center
    a:hover
      h2
        color: $accentColor
    img
      width 128px
      height auto
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color: lighten($textColor, 10%)
    p
      color: lighten($textColor, 25%)
      text-align left
      text-indent 2em
  footer
    margin 1em 0 0
    bottom 0
    background-color #41424E
    color #767683
    ul
      margin 0
    a
      color #AAABB6
      &:hover
        color #c5c6ce
    .footer-links
      padding-top 1rem
      max-width 1024px
      margin 0.3rem auto 0
      display flex
      flex-wrap wrap
      align-items flex-start
      align-content stretch
      justify-content space-between
      border-bottom 1px solid #585965
      .fa-fw
        width 2em
    .wrap
      flex-grow 1
      flex-basis 20%
      max-width 100%
      text-align left
      border-left 1px solid #585965
      margin-bottom 1rem
      padding-left 15px
      h4
        font-size 14px
        line-height 1.43
        font-weight 400
        color #fff
        margin 0
        margin-block-start 0
        padding 0 0 0.5rem
      ul
        margin 0
        padding 0
      li
        list-style-type none
        font-size 14px
        line-height 1.43
        font-weight 300
        padding 0
        text-align left
    .footer-copyright
      max-width 1280px
      margin auto
      display flex
      width 100%
    .left-wrap
      flex 1
      width 50%
      ul li
        display inline-block
        line-height 30px
      .social-icon
        padding 0 5px
    .right-wrap
      flex 1
      text-align center
      width 50%
      li
        display inline-block
        font-size 12px
        padding 0 10px
        border-right 1px solid #999
        &:last-child
          border-right none
          padding-right 0
        img
          vertical-align middle
          margin-right 8px

@media (max-width: $MQMobile)
  .home
    .action
      flex-direction column
      li
        padding 1rem 0
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    .inner
      padding-left 1.5rem
      padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .tagline, .action
        margin 1.2rem auto
      .tagline
        font-size 1.2rem
      .action
        flex-direction column
        li
          padding 1rem 0
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      padding 0
      h2
        font-size 1.25rem
    footer
      flex-direction column
      padding 1rem 0
      .footer-links
        flex-direction column
        margin-top 0
        padding-top 0
      .wrap
        max-width 100%
        padding 0.5rem 0
        margin 0 auto
        border-left 0
        text-align center
        &:first-child
          padding-top 0
        li
          text-align left
      .footer-copyright
        display block
        padding-top 0.5rem
      .left-wrap
        margin 0
        width 100%
        justify-content center
        text-align center
      .right-wrap
        margin 0
        width 100%
        justify-content center
        text-align center
        ul > li
          display block
          border none
          padding 0
          text-align center
          line-height 1rem

[data-theme = dark ] &
  .home
    .hero
      .tagline
        color: lighten($dark[--textColor], 40%)
      .action-button
        color #35363a
        background-color: $dark[--accentColor]
        &:hover
          background-color: lighten($dark[--accentColor], 10%)
    .features
      border-top: 1px solid $dark[--borderColor]
      border-bottom: 1px solid $dark[--borderColor]
    .feature
      a:hover
        h2
          color: $dark[--accentColor]
      h2
        color: lighten($dark[--textColor], 10%)
      p
        color: lighten($dark[--textColor], 25%)

</style>