let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [089603042257]
│ • DANA [089603042257]
│ • GOPAY [085363810820]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
