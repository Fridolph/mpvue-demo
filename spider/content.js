// let content = '我的三体：罗辑传\n\n                            \n                                地区：中国\n         年代：2018年1月\n                            \n                            \n                                标签：科幻\n                               播放：239634\n                            \n                            看点：我的三体系列第二季\n                          简介：《我的三体》是一部国人自制的MC剧，改编自刘慈欣的科幻小说《三体》。旨在用方块游戏《MineCraft（我的世界）》作为引擎把《三体》的故事改编成游戏动画（第一季第九集及以后的采用C4D制作，第二季采用C4D和blender制作），并保留完整的原著剧情。除正片外，制作团队还制作了一系列符合原著描写的\n                            状态: 完结'

// let str = content.replace((/[\n\s]+/g), '')

// str = str.replace('地区：', '¥地区：')
// str = str.replace('年代：', '¥年代：')
// str = str.replace('标签：', '¥标签：')
// str = str.replace('播放：', '¥播放：')
// str = str.replace('看点：', '¥看点：')
// str = str.replace('简介：', '¥简介：')
// str = str.replace('状态：', '¥状态：')

// function filterStr(arrs, type) {
//   return (arrs.find(v => v.includes(type))).slice(3)
// }

// let arr = str.split('¥')
// let title = arr[0]
// let date = filterStr(arr, '年代') + ' - ' + filterStr(arr, '状态')
// let type = filterStr(arr, '标签')
// let point = filterStr(arr, '看点')
// let summary = filterStr(arr, '简介')
