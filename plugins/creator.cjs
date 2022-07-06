let handler = function(m) {
	const data = global.Владелец.filter(([id, isCreator]) => id && isCreator)
	this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['владелиц', 'создатель']
handler.tags = ['инфо']

handler.command = /^(Владелец|creator)$/i

module.exports = handler