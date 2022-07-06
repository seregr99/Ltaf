const {
	areJidsSameUser
} = require('@adiwajshing/baileys');
let handler = async (m, {
	conn,
	participants
}) => {
	let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
	console.log(users)
	if (!users) return m.reply("tag orangnya dong bang")
	let kickedUser = []
	for (let user of users)
		if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || {
				admin: true
			}).admin) {
			const res = await conn.groupParticipantsUpdate(m.chat, [user], 'удалить')
			kickedUser.concat(res)
			await delay(1 * 1000)
		}
	m.reply(`Succes kick ${kickedUser.map(v => '@' + v.split('@')[0])}`, null, {
		mentions: kickedUser
	})

}
handler.help = ['kick', '-'].map(v => 'o' + v + ' @user')
handler.tags = ['Владелец']
handler.command = /^(okick|o-)$/i

handler.Владелец = true
handler.group = true
handler.botAdmin = true

module.exports = handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))