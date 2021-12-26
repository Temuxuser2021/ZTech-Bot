module.exports = {
    before(m) {
      if (/\b(wass up)\b/i.test(m.text)) m.reply('🎀 Nothing Am Here To fuck  You My Server Is Online🎀 ')
      return !0
    }
  }
