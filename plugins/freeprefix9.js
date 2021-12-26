module.exports = {
    before(m) {
      if (/\b(chumtiya)\b/i.test(m.text)) m.reply('bhag Madarchod 🥱🐦🐦')
      return !0
    }
  }
