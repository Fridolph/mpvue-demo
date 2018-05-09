import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    'navigationBarBackgroundColor': '#357631',
    'navigationBarTextStyle': '#fff',
    'navigationBarTitleText': '动漫补番推荐',
    'backgroundColor': '#fff',
    'backgroundTextStyle': 'light'
  }
}
