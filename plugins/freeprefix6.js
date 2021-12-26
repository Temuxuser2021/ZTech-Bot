module.exports = {
    before(m) {
      if (/\b(baka)\b/i.test(m.text)) m.reply('🎀tu hei baka maka bhaka bhenchod🎀 ')
      return !0
    }
  }
