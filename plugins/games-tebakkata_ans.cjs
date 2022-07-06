const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function(m) {
	let id = m.chat
	if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*teka/i.test(m.quoted.text))
		return !0
	this.tebakkata = this.tebakkata ? this.tebakkata : {}
	if (!(id in this.tebakkata))
		return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, ['tebakkata', '/tebakkata'], m)
	if (m.quoted.id == this.tebakkata[id][0].id) {
		let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
		// m.reply(JSON.stringify(json, null, '\t'))
		if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
			db.data.users[m.sender].exp += this.tebakkata[id][2]
			conn.sendButton(m.chat, `*Benar!*\n+${this.tebakkata[id][2]} XP`, author, ['tebakkata', '/tebakkata'], m)
			clearTimeout(this.tebakkata[id][3])
			delete this.tebakkata[id]
		} else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
			m.reply(`*Dikit Lagi!*`)
		else
			m.reply(`*Salah!*`)
	}
	return !0
}
module.exports = handler