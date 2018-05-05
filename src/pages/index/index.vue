<template>
  <!-- <div class="container" @click="clickHandle('test click', $event)"> -->
  <div class="container">

    <!-- <div class="userinfo" @click="bindViewTap"> -->
    <p class="welcome">欢迎访问小程序</p>
    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="link-wrap">
      <a href="/pages/books/main">前端图书推荐 »</a>
      <a href="/pages/anime/main">动漫好番推荐 »</a>
      <a href="/pages/cgi/main">cgi »</a>
    </div>

    <div class="footer-text">
      <p>会同步更新公众号、博客、图书和动漫推荐等，敬请期待</p>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    // bindViewTap () {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang="stylus">
@import '~@/styles/variables.styl';
.userinfo
  display: flex
  flex-direction: column
  align-items: center
.welcome
  margin-bottom 40rpx

.userinfo-avatar
  width: 128rpx
  height: 128rpx
  margin: 20rpx
  border-radius: 50%

.userinfo-nickname
  color: $text

.link-wrap
  margin-top 160rpx
  a
    color $theme
    margin-bottom 20rpx

.footer-text
  position fixed
  bottom 40rpx
  left 40rpx
  right 40rpx
  font-size 12px
  text-align center
  color: #999
</style>
