module.exports = ctx => {
  ctx.state.data = {
    books: [
      {
        book: '001',
        sort: 'js',
        img: 'https://img1.doubanio.com/view/subject/l/public/s29478358.jpg',
        title: '深入理解ES6',
        author: '【美】Nicholas C. Zakas',
        pubtime: '2017-7-1',
        star: '★★★★★',
        readed: 1,
        summary: '高级程序设计的作者所写，很厚实，对ES6相关很多，各种知识点的细致讲解值得一看。',
      }
    ]
  }
}

// module.exports = ctx => {
//   ctx.state.data = {
//       msg: 'Hello World'
//   }
// }
