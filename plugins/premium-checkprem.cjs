let handler = async (m, {
	conn,
	text,
	usedPrefix,
	command
}) => {
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let user = db.data.users[who]
	if (!(who in db.data.users)) return m.reply(`User ${who} not in database`)
	if (!user.premium) return conn.reply(m.chat, '@' + who.split('@')[0] + " bukan member premium", false, {
		mentions: [who],
		quoted: m
	})
	m.reply(`{\n\t\t"username": ${user.name}\n\t\t"premium": true,\n\t\t"expired": ` + new Intl.DateTimeFormat('id-ID', {
		dateStyle: 'full',
		timeStyle: 'long'
	}).format(user.expired) + `\n}`)
}
handler.help = ['checkprem']
handler.tags = ['Владелец', 'premium']
handler.command = /^checkprem$/i

module.exports = handler