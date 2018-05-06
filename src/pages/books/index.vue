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
      <div class="item-box" v-for="(v, index) in booklist" :key="v.bid">
        <div class="img-wrapper">
          <img :src="v.src" alt="v.title" :data-index="index">
        </div>
        <h2>{{v.title}}</h2>
        <p>{{v.author}}</p>
        <p>{{v.pubtime}}</p>
      </div>
    </div>

    <div class="sidebar" :class="[isSidebarShow ? 'show-sidebar' : '']">
      <div class="fanhui" @click="hideSidebar">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <ul>
        <li @click="selectType(0)">默认展示全部</li>
        <li @click="selectType(1)">JavaScript</li>
        <li @click="selectType(2)">html&css</li>
        <li @click="selectType(3)">web相关知识</li>
        <li @click="selectType(4)">前端工具框架</li>
        <li @click="selectType(5)">职业领域拓展</li>
      </ul>
    </div>
  </div>
</template>

<script>
const HOST = 'https://oyg5umzv.qcloud.la'
export default {
  data() {
    return {
      books: [],
      booklist: [],
      isSidebarShow: false,
      sortClicked: false
    }
  },
  watch: {
    books(newVal) {
      this.booklist = newVal
    }
  },
  methods: {
    showSidebar() {
      this.isSidebarShow = true
      this.sortClicked = true
    },
    hideSidebar() {
      this.isSidebarShow = !this.isSidebarShow
    },
    filterBooks(type) {
      if (!type) {
        this.booklist = this.books.filter(item => item.sort !== 'undefined')
        this.isSidebarShow = false
        return
      }
      this.booklist = this.books.filter(item => item.sort === type)
      this.isSidebarShow = false
    },
    selectType(num) {
      switch (num) {
        case 0:
          this.filterBooks()
          return
        case 1:
          this.filterBooks('js')
          return
        case 2:
          this.filterBooks('htmlcss')
          return
        case 3:
          this.filterBooks('web')
          return
        case 4:
          this.filterBooks('lib')
          return
        case 5:
          this.filterBooks('other')
          return
        default:
          return
      }
    },
    testCgiBooks() {
      // util.showBusy('请求中...')
      let that = this
      wx.getStorage({
        key: 'booklist',
        success(res) {
          console.log('从缓存拿booklist', res.data)
          that.books = res.data
        },
        fail(err) {
          console.log(err)
          wx.request({
            url: `${HOST}/weapp/books`,
            login: false,
            success(result) {
              // util.showSuccess('请求成功完成')
              console.log('请求服务端拿到booklist', result.data.data.books)
              that.books = result.data.data.books
              wx.setStorage({
                key: 'booklist',
                data: result.data.data.books
              })
            },
            fail(error) {
              // util.showModel('请求失败', error)
              console.log('request fail', error)
            }
          })
        }
      })
    }
  },
  created() {
    this.testCgiBooks()
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
  transition all ease-in-out 0.4s
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
