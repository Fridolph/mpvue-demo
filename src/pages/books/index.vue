<template>
  <div class="page-books">
    <h1 class="main-title">
      前端好书推荐
      <small v-if="!sortClicked">点击图标可切换分类</small>
    </h1>
    <div class="icon-action" @click="showSidebar">
      <i class="iconfont icon-liebiao11"></i>
    </div>
    <div class="books-wrapper">
      <div class="item-box">
        <div class="img-wrapper">
          <img src="https://img1.doubanio.com/view/subject/l/public/s29478358.jpg" alt="img">
        </div>
        <h2>深入理解es6</h2>
        <p>【美】Nicholas C. Zakas</p>
        <p>2017-7</p>
      </div>
      <div class="item-box">
        <div class="img-wrapper">
          <img src="https://img1.doubanio.com/view/subject/l/public/s29478358.jpg" alt="img">
        </div>
        <h2>深入理解es6</h2>
        <p>【美】Nicholas C. Zakas</p>
        <p>2017-7</p>
      </div>
      <div class="item-box">
        <div class="img-wrapper">
          <img src="https://img1.doubanio.com/view/subject/l/public/s29478358.jpg" alt="img">
        </div>
        <h2>深入理解es6</h2>
        <p>【美】Nicholas C. Zakas</p>
        <p>2017-7</p>
      </div>
      <div class="item-box">
        <div class="img-wrapper">
          <img src="https://img1.doubanio.com/view/subject/l/public/s29478358.jpg" alt="img">
        </div>
        <h2>深入理解es6</h2>
        <p>【美】Nicholas C. Zakas</p>
        <p>2017-7</p>
      </div>
      <div class="item-box">
        <div class="img-wrapper">
          <img src="https://img1.doubanio.com/view/subject/l/public/s29478358.jpg" alt="img">
        </div>
        <h2>深入理解es6</h2>
        <p>【美】Nicholas C. Zakas</p>
        <p>2017-7</p>
      </div>
    </div>

    <div class="sidebar" :class="[isSidebarShow ? 'show-sidebar' : '']">
      <div class="fanhui" @click="hideSidebar">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <ul>
        <li>JavaScript</li>
        <li>html&css</li>
        <li>web相关知识</li>
        <li>前端工具框架</li>
        <li>职业领域拓展</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
      isSidebarShow: false,
      sortClicked: false
    }
  },
  methods: {
    showSidebar() {
      this.isSidebarShow = true
      this.sortClicked = true
    },
    hideSidebar() {
      this.isSidebarShow = !this.isSidebarShow
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/mixins.styl';
@import '~@/styles/iconfont.css';

.page-books
  width 100vw
  height 100vh
  background-color #f7f8f9
.main-title
  padding 30rpx 0 0 30rpx
  small
    display inline-block
    font-size 12px
.icon-action
  position fixed
  right 10rpx
  top 10rpx
  .icon-liebiao11
    font-size 24px
    color #666
    padding 10rpx
.sidebar
  position fixed
  z-index 100
  top 0
  right -350rpx
  width 340rpx
  height 100%
  background linear-gradient(to bottom, rgba(215,228,238,0.94) , rgb(201,215,224))
  box-shadow -4rpx 0 8rpx rgba(0,0,0,.1)
  transition all ease 0.6s
  &.show-sidebar
    right 0
  ul
    padding 20rpx
    li
      font-size 16px
      color #333
      padding-bottom 14rpx
      border-bottom 1rpx solid #c5d2db
      margin-bottom 20rpx
  .fanhui
    position absolute
    bottom 20rpx
    left 50%
    transform translate(-50%) rotate(180deg)
    .iconfont
      font-size 24px
      padding 40rpx
.books-wrapper
  position fixed
  top 100rpx
  bottom 0
  left 0
  right 0
  overflow hidden
  overflow-y auto
  width calc(100% - 60rpx)
  display flex
  flex-wrap wrap
  padding 0 30rpx
  .item-box
    overflow hidden
    width calc(47% - 40rpx)
    border 1rpx solid #efefef
    background-color #fff
    padding 20rpx
    margin-bottom 20rpx
    border-radius 8rpx
    &:nth-child(2n)
      margin-left 3%
    .img-wrapper
      position relative
      padding-bottom 360rpx
      img
        position absolute
        left 0
        top 0
        width 100%
        height 100%
    h2, p
      ellipsis()
      text-align center
    h2
      font-size 16px
      margin-top 10rpx
    p
      font-size 12px
      color #999
</style>
