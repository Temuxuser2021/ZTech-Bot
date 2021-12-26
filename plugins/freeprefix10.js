module.exports = {
    before(m) {
      if (/\b(chutiya)\b/i.test(m.text)) m.reply('tera baap chutya tera ma chutya tera khandan chutya betichod 🐦🐦')
      return !0
    }
  }
