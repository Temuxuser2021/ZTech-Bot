module.exports = {
    before(m) {
      if (/\b(gay)\b/i.test(m.text)) m.reply('lund dekhega kya hutya 🐦🐦')
      return !0
    }
  }
