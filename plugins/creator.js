function handler(m) {
this.sendContact(m.chat, '+919707905478', 'Noob Hacker Raj', m)

}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
