const puppeteer = require('puppeteer')

const BASE = 'http://www.dilidili.wang/anime/'

// 16 以后
let animeIDs = [
  '201804'
]

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

console.log('-----------------------')

;(async () => {
  // let results = []

  await animeIDs.forEach(async aid => {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      dumpio: false
    })

    const page = await browser.newPage()
    await page.goto(BASE + aid, {
      waitUntil: 'networkidle2'
    })

    await sleep(2000)

    const result = await page.evaluate(() => {
      let $ = window.$
      let it = $('.anime_list')[0]
      let items = []
      let dl = $(it).find('dl')

      function filterStr(arrs, type) {
        return (arrs.find(v => v.includes(type))).slice(3)
      }

      Array.from(dl).forEach(v => {
        let item = {}
        let src = $(v).find('img').attr('src')
        let content = $(v).find('dd').text().trim()
        let str = content.replace((/[\n\s]+/g), '')

        str = str.replace(/地区[：:]/, '¥地区：')
        str = str.replace(/年代[：:]/, '¥年代：')
        str = str.replace(/标签[：:]/, '¥标签：')
        str = str.replace(/播放[：:]/, '¥播放：')
        str = str.replace(/看点[：:]/, '¥看点：')
        str = str.replace(/简介[：:]/, '¥简介：')
        str = str.replace(/状态[：:]/, '¥状态：')

        let arr = str.split('¥')
        let title = arr[0]
        let date = filterStr(arr, '年代') + ' - ' + filterStr(arr, '状态')
        let type = filterStr(arr, '标签')
        let point = filterStr(arr, '看点')
        let summary = filterStr(arr, '简介')

        item.src = src
        item.title = title
        item.date = date
        item.type = type
        item.point = point
        item.summary = summary

        items.push(item)
      })

      return items
    })

    console.log(result)
    browser.close()
  })
})()

// taskBook(booksUrl).then(() => {
//   setTimeout(() => {
//     console.log('-----------------------')
//     console.log(results)
//   }, 5000)
// })
