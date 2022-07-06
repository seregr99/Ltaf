const {
	addExif
} = require('../lib/sticker.cjs');
const {
	Image
} = require('node-webpmux')

let handler = async (m, {
	conn,
	text
}) => {
	if (!m.quoted) throw 'Quoted the sticker!'
	let stiker = false
	try {
		let [packname, ...author] = text.split('|')
		author = (author || []).join('|')
		let mime = m.quoted.mimetype || ''
		if (!/webp/.test(mime)) throw 'Reply sticker!'
		let img = await m.quoted.download()
		if (!img) throw 'Reply a sticker!'
		var exif = new Image()
		await exif.load(img)
		if (JSON.parse(exif.exif.slice(22).toString())['sticker-pack-publisher'] == global.author) {
			return m.reply('terdapat nama bot di situ, kamu tidak dapat mengubah wm')
		}
		stiker = await addExif(img, packname || '', author || '')
	} catch (e) {
		console.error(e)
		if (Buffer.isBuffer(e)) stiker = e
	} finally {
		if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {
			asSticker: true
		})
		else throw 'Conversion failed'
	}
}
handler.help = ['wm *packname|author*']
handler.tags = ['sticker']
handler.command = /^wm$/i

module.exports = handler