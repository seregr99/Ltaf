let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
	if (!text) throw `kalo kamu nemu pesan eror, lapor pake perintah ini\n\ncontoh:\n${usedPrefix + command} selamat siang Владелец, sy menemukan eror seperti berikut <copy/tag pesan erornya>`
	if (text.length < 1) throw `Laporan terlalu pendek, minimal 10 karakter!`
	if (text.length > 1000) throw `Laporan terlalu panjang, maksimal 1000 karakter!`
	let teks = `*${command.toUpperCase()}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
	conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
		mentions: [m.sender]
	})
	m.reply('☑️ Pesan Telah terkirim ke Владелец!\n_*Menunggu confirmasi Dari Владелец...*_')
	await delay(3000)
	conn.reply(m.chat, 'atau chat ownernya secara langsung biar nyaman ngobrolnya @' + nomorown, null, {
		mentions: [m.sender,nomorown + '@s.whatsapp.net']
	})
}
handler.command = /^(order)$/i
module.exports = handler