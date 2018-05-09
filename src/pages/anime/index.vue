<template>
  <div class="page-anime">
    <h1 class="main-title">
      动漫好番推荐
    </h1>
    <div class="icon-action" @click="showSidebar">
      <span>分类</span>
      <i class="iconfont icon-liebiao11"></i>
    </div>
    <div class="anime-wrapper">
      <div class="item-box" v-for="(v, index) in animeList" :key="v.bid">
        <h2>{{v.title}}</h2>
        <div class="content-box">
          <div class="img-wrapper">
            <img :src="v.src" alt="v.title" :data-index="index">
          </div>
          <div class="detail-wrapper">
            <p class="p-e"><b>年代:</b>{{v.date}}</p>
            <p class="p-e"><b>类型:</b>{{v.type}}</p>
            <p class="p-e2"><b>看点:</b>{{v.point}}</p>
            <p class="p-en"><b>简介:</b>{{v.summary}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" :class="[isSidebarShow ? 'show-sidebar' : '']">
      <div class="bg"></div>
      <div class="fanhui" @click="hideSidebar">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div class="menu-list">
        <div class="item">
          <b class="year">2018年</b>
          <span class="month" @click="testCgianimes('201801')">1月</span>
          <span class="month" @click="testCgianimes('201804')">4月</span>
          <span class="month"></span>
          <span class="month"></span>
        </div>
        <div class="item disable">
          <b class="year">2017年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2016年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2015年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2014年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2013年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2012年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2011年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="item disable">
          <b class="year">2010年</b>
          <span class="month">1月</span>
          <span class="month">4月</span>
          <span class="month">7月</span>
          <span class="month">12月</span>
        </div>
        <div class="more">
          <p>
            <span>更多精彩，敬请期待</span>
            <i class="icon mingren"></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const HOST = 'https://oyg5umzv.qcloud.la'
export default {
  data() {
    return {
      animes: [],
      animeList: [],
      isSidebarShow: false
    }
  },
  watch: {
    animes(newVal) {
      this.animeList = newVal
    }
  },
  methods: {
    showSidebar() {
      this.isSidebarShow = true
    },
    hideSidebar() {
      this.isSidebarShow = !this.isSidebarShow
    },
    filterAnimes(type) {
      if (!type) {
        this.animeList = this.animes.filter(item => item.sort !== 'undefined')
        this.isSidebarShow = false
        return
      }
      this.animeList = this.animes.filter(item => item.sort === type)
      this.isSidebarShow = false
    },
    selectType(num) {
      switch (num) {
        case 0:
          this.filterAnimes()
          return
        case 1:
          this.filterAnimes('js')
          return
        case 2:
          this.filterAnimes('htmlcss')
          return
        case 3:
          this.filterAnimes('web')
          return
        case 4:
          this.filterAnimes('lib')
          return
        case 5:
          this.filterAnimes('other')
          return
        default:
          return
      }
    },
    getDataFromServer(animeDate) {
      var that = this
      wx.request({
        url: `${HOST}/weapp/anime/${animeDate}`,
        login: false,
        success(result) {
          // util.showSuccess('请求成功完成')
          // console.log('请求服务端拿到animeList', result.data.data.animeList)
          that.animes = result.data.data.animeList
          wx.setStorage({
            key: `animeList_${animeDate}`,
            data: result.data.data.animeList
          })
        },
        fail(error) {
          // util.showModel('请求失败', error)
          console.log('request fail', error)
        }
      })
    },

    testCgianimes(animeDate) {
      // util.showBusy('请求中...')
      this.isSidebarShow = false
      let that = this
      wx.getStorage({
        key: `animeList_${animeDate}`,
        success(res) {
          // console.log('从缓存拿animeList', res.data)
          that.animes = res.data
        },
        fail(err) {
          console.log(err)
          that.getDataFromServer(animeDate)
        }
      })
    }
  },
  created() {
    this.testCgianimes('201804')
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';
@import '~@/styles/iconfont.css';

.page-anime
  width 100vw
  height 100vh
  background-color #f7f8f9
.main-title
  padding 30rpx 0 0 50rpx
  small
    display inline-block
    font-size 12px
.icon-action
  position fixed
  right 10rpx
  top 10rpx
  span, i
    display inline-block
    vertical-align middle
  span
    font-size 12px
    color #999
    transform translateX(8rpx)
  .icon-liebiao11
    font-size 24px
    color #666
    padding 10rpx
.sidebar
  position fixed
  z-index 100
  top -100%
  right 0
  left 0
  bottom 0
  width 100%
  height 100%
  color #ccc
  background linear-gradient(to bottom, rgba(215,228,238,0.88) , rgba(201,215,224,0.96))
  transition all ease-in-out 0.4s
  .bg
    background url('http://blog.fueson.top/bg/lufei.jpg') no-repeat center center
    background-size cover
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    width 100%
    height 100%
    filter blur(4rpx) saturate(0.4) brightness(0.7)

  &.show-sidebar
    top 0
  .menu-list
    position absolute
    top 50rpx
    bottom 140rpx
    background rgba(0,0,0,0.5)
    width calc(100% - 160rpx)
    left 50rpx
    border-radius 24rpx
    overflow hidden
    overflow-y auto
    padding 30rpx
    .more
      text-align center
      position absolute
      bottom 30rpx
      line-height 30px
      width 100%
      span, i
        vertical-align top
        display inline-block
      .mingren
        width 100rpx
        height 94rpx
        background url(http://blog.fueson.top/icon/pika.png) no-repeat center center
        background-size cover
        margin-left 20rpx
        transform translateY(-30rpx)
    .disable
      color #666
    .item
      display flex
      align-items center
      padding 10rpx 0
      margin-bottom 10rpx
      .year
        font-size 20px
        flex 100rpx
      .month
        font-size 16px
        flex 1
        padding 0 10rpx
  .fanhui
    position absolute
    bottom 0
    z-index 100
    left 50%
    transform translate(-50%) rotate(90deg)
    .iconfont
      font-size 30px
      padding 40rpx
      color #fff
.anime-wrapper
  position fixed
  top 120rpx
  bottom 0
  left 0
  right 0
  overflow hidden
  overflow-y auto
  width calc(100% - 60rpx)
  display flex
  flex-wrap wrap
  padding 0 30rpx
  h2
    font-size 16px
    margin-bottom 20rpx
    text-align center
  .item-box
    overflow hidden
    width 100%
    border 1rpx solid #efefef
    background-color #fff
    padding 20rpx
    margin-bottom 20rpx
    border-radius 8rpx
    .content-box
      display flex

    .img-wrapper
      width 360rpx
      position relative
      padding-bottom 520rpx
      img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
    .detail-wrapper
      padding 0 20rpx
      width calc(100% - 320rpx)
      display block
      .p-e
        ellipsis()
      p
        font-size 12px
        color #999
        display block
        text-align justify
      b, span
        display inline-block
      b
        margin-right 10rpx
        color #666
        font-weight bold
</style>
