module.exports = {
    before(m) {
      if (/\b(bruh)\b/i.test(m.text)) m.reply('🎀jyada bore ho raha hei toh nikal maderchod koi jarurat nahin teri idhar🎀 ')
      return !0
    }
  }
