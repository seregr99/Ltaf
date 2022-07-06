let handler = async (m, {
	conn,
	args,
	usedPrefix
}) => {
	let user = Object.entries(db.data.users).filter(user => user[1].premium).map(([key, value]) => {
		return {
			...value,
			jid: key
		}
	})
	let premTime = db.data.users[m.sender].expired
	let prem = db.data.users[m.sender].premium
	let sortedP = user.map(toNumber('expired')).sort(sort('expired'))
	let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedP.length)
	await conn.sendButton(m.chat, `\t\t\t\t\t\t° *PREMIUM* °
${prem ? `\t\t\t\t\t\t*My Premium Time*\n*Name:* ${conn.getName(m.sender)}\n*Expired:* ${msToDate(premTime - new Date() * 1)}` : ''}

${sortedP.slice(0, len).map(({ jid, name, expired, registered }, i) => `\n*${registered ? name : conn.getName(jid)}*\n⚄ wa.me/${jid.split`@`[0]}\n⚄ ${msToDate(expired - new Date() * 1)}\n`).join`\n`}
`.trim(), author, null, [
			[prem ? '⭐ Owner' : '⭐ Buy Premium', prem ? '/owner' : '/premium']
		], null)
}
handler.help = ['premlist *angka*']
handler.tags = ['premium']
handler.command = /^(listprem|premlist)$/i

module.exports = handler

function sort(property, ascending = true) {
	if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
	else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function msToDate(ms) {
	temp = ms
	years = Math.floor(ms / (12 * 30 * 24 * 60 * 60 * 1000));
	yearsms = ms % (12 * 30 * 24 * 60 * 60 * 1000);
	month = Math.floor((yearsms) / (30 * 24 * 60 * 60 * 1000));
	monthms = ms % (30 * 24 * 60 * 60 * 1000);
	days = Math.floor((monthms) / (24 * 60 * 60 * 1000));
	daysms = ms % (24 * 60 * 60 * 1000);
	hours = Math.floor((daysms) / (60 * 60 * 1000));
	hoursms = ms % (60 * 60 * 1000);
	minutes = Math.floor((hoursms) / (60 * 1000));
	minutesms = ms % (60 * 1000);
	sec = Math.floor((minutesms) / (1000));
	return years + " Tahun " + month + " Bulan " + days + " Hari " + hours + " Jam " + minutes + " Menit";
	// +minutes+":"+sec;
}
function toNumber(property, _default = 0) {
	if (property) return (a, i, b) => {
		return {
			...b[i],
			[property]: a[property] === undefined ? _default : a[property]
		}
	}
	else return a => a === undefined ? _default : a
}