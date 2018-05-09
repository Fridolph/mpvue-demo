const puppeteer = require('puppeteer')

const BASE = 'https://book.douban.com/subject/'

// 16 以后
let bids = [
  '30159269',
  '27133217',
  '24533314',
  '19952400',
  '26658600',
  '26937361',
  '25879763',
  '27003732',

]

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

console.log('-----------------------')

;(async () => {
  let results = []
  await bids.forEach(async bid => {
    await sleep(1500)

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      dumpio: false
    })

    const page = await browser.newPage()
    await page.goto(BASE + bid, {
      waitUntil: 'networkidle2'
    })

    const result = await page.evaluate(() => {
      let $ = window.$
      let it = $('#content')
      let item = {}

      let src = it.find('#mainpic img').attr('src')
      let title = it.find('#mainpic img').attr('alt')
      let info = it.find('#info').text().trim()
      let summary = it.find('#link-report .intro p').text().trim().slice(0, 57) + '...'

      let str = info.replace(/[\n\s]+/g, '')
      str = str.replace('出版社', '|出版社')
      str = str.replace('译者', '|译者')
      str = str.replace('出版年', '|出版年')
      str = str.replace('页数', '|页数')
      str = str.replace('定价', '|定价')
      str = str.replace('装帧', '|装帧')
      str = str.replace('丛书', '|丛书')
      str = str.replace('ISBN', '|ISBN')
      let arr = str.split('|')

      item.bid = '000'
      item.sort = 'web'
      item.src = src
      item.title = title
      // item.author = arr[0].slice(3)
      item.author = (arr.find(v => v.includes('作者')) + '').slice(3)
      item.pubtime = (arr.find(v => v.includes('出版年')) + '').slice(4)
      // item.pubtime = arr[3].slice(4)
      item.star = 4
      item.readed = 0
      item.summary = summary

      return item
    })

    results.push(result)
    console.log(', ')
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
