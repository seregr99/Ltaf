import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[βππππβ] πΈπ½ππ΄πππ΄ π΄π» π½πΎπΌπ±ππ΄ π³π΄ π°π»πΆππ½ ππΈπ³π΄πΎ πΎ π²π°π½π°π» π³π΄ ππΎππππ±π΄*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β ΠΠ»ΠΈΡΠ΅Π»ΡΠ½ΠΎΡΡΡ: ${v.durationH}
β²οΈ ΠΠΏΡΠ±Π»ΠΈΠΊΠΎΠ²Π°Π½Π½ΡΠΉ ${v.publishedTime}
ποΈ ${v.view} ΠΡΠ΅Π΄ΡΡΠΎΠ²Π»Π΅Π½ΠΈΡ
`.trim()
case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} ΠΠ±ΠΎΠ½Π΅Π½ΡΡ_
π₯ ${v.videoCount} ΠΠΈΠ΄Π΅ΠΎ
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
