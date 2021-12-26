module.exports = {
    before(m) {
       if (/\b(bot)\b/i.test(m.text)) m.reply('🎀type kar ye maderchod: /help 🎀')
       return !0
  }
}
 
