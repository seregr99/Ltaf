let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling.cjs')
let handler = async (m, {
	conn,
	usedPrefix
}) => {
	let _p = profil
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.quoted ? m.quoted.sender : m.sender
	try {
		_p = await conn.profilePictureUrl(who, 'image')
	} catch (e) {

	} finally {
		let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
		var pp = /^https?:\/\//.test(_p) ? await getbuffer(_p) : _p
		if (typeof db.data.users[who] == "undefined") {
			db.data.users[who] = {
				exp: 0,
				limit: 10,
				lastclaim: 0,
				registered: false,
				name: conn.getName(m.sender),
				age: -1,
				regTime: -1,
				afk: -1,
				afkReason: '',
				banned: false,
				level: 0,
				role: 'Warrior V',
				autolevelup: false
			}
		}
		let {
			name,
			limit,
			exp,
			lastclaim,
			registered,
			regTime,
			age,
			level,
			role,
			banned,
			pasangan,
			premium
		} = db.data.users[who]
		let {
			min,
			xp,
			max
		} = levelling.xpRange(level, global.multiplier)
		let username = conn.getName(who)
		let math = max - xp
		let jodoh
		if (pasangan == "") {
			jodoh = `Gak punya`
		} else if (db.data.users[db.data.users[who].pasangan].pasangan != who) {
			jodoh = `sedang menunggu jawaban dari @${pasangan.split('@')[0]}`
		} else {
			jodoh = `@${pasangan.split('@')[0]}`
		}
		let str = `
Nama: ${username} ${registered ? '(' + name + ') ' : ''}(@${who.replace(/@.+/, '')})${about != 401 ? '\nInfo: ' + about : ''}
Nomor: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: https://wa.me/${who.split`@`[0]}${registered ? '\nUmur: ' + age : ''}
XP: TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Siap untuk *${usedPrefix}levelup*` : `${math} XP lagi untuk levelup`}]
Level: ${level}
Role: *${role}*
Limit: ${limit}
Premium: ${premium ? 'Ya' : 'Tidak'}
Terdaftar: ${registered ? 'Ya (' + new Date(regTime).toLocaleString() + ')' : 'Tidak'}${lastclaim > 0 ? '\nTerakhir Klaim: ' + new Date(lastclaim).toLocaleString() : ''}
Pasangan: ${jodoh}
`.trim()
		let mentions = pasangan ? [who, pasangan] : [who]
		conn.reply(m.chat, banned ? 'jiakh ke banned' : str, m, {
			mentions,
			contextInfo: {
				externalAdReply: {
					mediaType: 2,
					description: 'anu',
					title: await tiny('hai' + username),
					mediaUrl: yt,
					body: '𓃗𓅜',
					thumbnail: pp,
					sourceUrl: gc,
					showAdAttribution: true, // false
					//renderLargerThumbnail: true // false
				}
			}
		})
	}
}
handler.help = ['profile *@user*']
handler.tags = ['user']
handler.command = /^profile$/i
module.exports = handler