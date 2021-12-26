module.exports = {
    before(m) {
      if (/\b(bitch)\b/i.test(m.text)) m.reply('ma chod denge bitch kisko bola tuh maderchod gand me ungli dal le 🐦🐦')
      return !0
    }
  }
