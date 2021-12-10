/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

require('./config')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { pinterest, wallpaper, wikimedia, porno, hentai, quotesAnime } = require('./lib/scraper')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database.json')


module.exports = hisoka = async (hisoka, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? m.message.buttonsResponseMessage.selectedButtonId : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const isCreator = [hisoka.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == hisoka.user.id ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await hisoka.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!hisoka.public) {
            if (!m.key.fromMe) return
        }
        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

        switch(command) {
	    case 'sc': {
                m.reply('Script : https://youtu.be/Ifz4A0KFtK8\n\n Dont Forget Give Star\n\nDonasi : https://saweria.co/K4HFZ\n\n Dont Forget Donate')
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    hisoka.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    hisoka.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    hisoka.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    hisoka.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    hisoka.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    hisoka.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    hisoka.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await hisoka.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await hisoka.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await hisoka.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await hisoka.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await hisoka.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await hisoka.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value open/close'
                if (args[0].toLowerCase() === 'close') {
                    await hisoka.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0].toLowerCase() === 'open') {
                    await hisoka.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await hisoka.groupInviteCode(m.chat)
                hisoka.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await hisoka.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                hisoka.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	    case 'sticker': case 's': case 'stickergif': case 'sgif': {
		if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
		m.reply(mess.wait)
                if (/image/.test(mime)) {
		    let media = await quoted.download()
		    let encmedia = await hisoka.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else if (/video/.test(mime)) {
		    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
		    let media = await quoted.download()
		    let encmedia = await hisoka.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
		    await fs.unlinkSync(encmedia)
		} else {
            	    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
        	}
	    }
	    break
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    hisoka.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	    case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await hisoka.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	    case 'tourl': {
                m.reply(mess.wait)
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'pinterest': {
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'wallpaper': {
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wikimedia': {
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { image: { url: anu.result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'porno': case 'porn': case 'bokep': {
                m.reply(mess.wait)
                anu = await porno()
                hisoka.sendMessage(m.chat, { video: { url: 'https://tikporntok.com/'+anu.video }, caption: `⭔ Title : ${anu.title}\n⭔ Viewers : ${anu.views}\n⭔ Tags : ${anu.tags}\n⭔ Likes : ${anu.like}\n⭔ Dislikes : ${anu.dislike}\n⭔ Favourite : ${anu.favorite}\n⭔ Time Upload : ${anu.upload}\n⭔ Description : ${anu.desc}\n⭔ Source : https://tikporntok.com/${anu.source}` }, { quoted: m })
            }
            break
            case 'hentai': {
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                hisoka.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
		let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'faktaunik': case 'katabijak': case 'pantun': case 'bucin': {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=NGONTOLLAHKAUDEK`)
                              let buttons = [
                    {buttonId: `faktaunik`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: get_result.result,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
                    break              
	    case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.nowatermark },
                    caption: `Download From ${text}`,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result },
                    caption: `Download From ${text}`,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('lol', '/api/tiktok', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: '► No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: '► With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	    case 'igdl': case 'ig': case 'instagram': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/instagram2', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.data[0] }, caption: `Download From ${text}` }, { quoted: m})
            }
            break
// Gak ke fix Kontol
/*case 'wetglass': case 'multicolor3d': case 'watercolor':
              if (args.length == 0) return m.reply(`Example: ${prefix + command} text`)
              ini_txt = args.join(" ")
              m.reply(mess.wait)
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=NGONTOLLAHKAUDEK&text=${ini_txt}`)
              hisoka.sendMessage(m.chat, { image: { url: ini_buffer }, caption: `Nih Kak` }, { quoted: m})
              break*/
              
              //GAK KE FIX KONTOL 
              /*case 'asupan1':
			
				m.reply(mess.wait)
				data = fs.readFileSync('./lib/asupan.js');
				jsonData = JSON.parse(data);
				randIndex = Math.floor(Math.random() * jsonData.length);
				randKey = jsonData[randIndex];
				asupan = await getBuffer(randKey.result)
				hisoka.sendMessage(m.chat, { video: { url: asupan[0] }, caption: `Asupan Dari Lord Kahfz` }, { quoted: m})
				break*/
case 'jadwalsholat': 
if (args.length == 0) return m.reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=NGONTOLLAHKAUDEK`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.maghrib}\n`
ini_txt += `Isya : ${get_result.isya}`
m.reply(ini_txt)
break
	    case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: '► Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footerText: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
                hisoka.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
/*case 'alquranaudio': {
if (args.length == 0) return m.reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
  surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=NGONTOLLAHKAUDEK`)
await hisoka.sendMessage(m.chat, { audio: { url: ini_buffer.result } }, { quoted: msg, mimetype: Mimetype.mp4Audio  })
}
break*/
	    case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `⭔ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	    case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                m.reply(mess.wait)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                hisoka.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'public': {
    
                hisoka.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
    
                hisoka.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
✗⃝⏩Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

✗⃝💻 Info Server
✗⃝📖RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_✗⃝🎀NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:;KahfzBot;;;'
                    + 'FN:KahfzBot\n' // full name
                    + 'ORG:Owner Kontol🖕;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6283127014833:+62 831-2701-4833\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                hisoka.sendMessage(m.chat, { contacts: { displayName: 'Dika Ardnt.', contacts: [{ vcard }] } }, { quoted: m })
                m.reply(`Tuh Owner Kontol Kek Jembud Ku`)
            }
            break
            case 'eval': {
                if (!isCreator) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return m.reply(bang)
                }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
                }
            }
            break
            case 'bot': {
                m.reply(mess.wait)
                let buttons = [
                    {buttonId: 'ping', buttonText: {displayText: 'Status Bot'}, type: 1}
                ]
                let buttonMessage = {
                    image: {url: 'https://telegra.ph/file/bb15c9a53c4a0b68a99fa.jpg' },
                    caption: `Hello @${m.sender.split("@")[0]}`,
                    footerText: 'Hi Im Hisoka Bot',
                    buttons: buttons,
                    headerType: 4
                }
                hisoka.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'menu': case 'help': case '?': {
 ngentot = `
 Hai kak  @${m.sender.split("@")[0]}👋, saya *KahfzBot*\n\nBot ini adalah Beta *Multi-Device* Whatsapp
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ngentot,
                            hydratedFooterText: 'Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏\n\n©KahfzBot 2021',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Script Bot',
                                    url: 'https://youtu.be/Ifz4A0KFtK8'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'MyYoutube😎',
                                    url: 'https://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' ListMenu📸',
                                    id: 'menu2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner👤',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Rules🔍',
                                    id: 'rules'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'rules': {
	ules = `*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *⚠️ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *‼️ PERMANENT BLOCK ‼️*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan KahfzBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan Kahfz-Md
😖🙏
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: ules,
                            hydratedFooterText: 'Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Script Bot',
                                    url: 'https://youtu.be/Ifz4A0KFtK8'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'InstagramOwner',
                                    url: 'https://instagram.com/Kahfz_13'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' ListMenu📸',
                                    id: 'menu2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi📸',
                                    id: 'donate'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner👤',
                                    id: 'owner'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'donate': {
	donte = `
	_MAU DONASI YA KAK_
	GOPAY : PC OWNER 
	DANA   : PC OWNER
    OVO     : PC OWNER 
    No Owner 
    wa.me/6283127014833
    
    *NOTE :*
    MAU DONASI APA LIAT DOANG ANJING
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/memek.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: donte,
                            hydratedFooterText: 'Jika kamu menemukan semacam bug atau kesalahan mohon dimaklumi dulu ya 😖, Lapor Owner Jika Perlu atau Mendesak 🙏',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'MyGithub',
                                    url: 'https://github.com/K4HFZ'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'InstagramOwner',
                                    url: 'https://instagram.com/Kahfz_13'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' ListMenu📸',
                                    id: 'menu2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' Owner📸',
                                    id: 'owner'
                               }
                            }, {
                                quickReplyButton: {
                                    displayText: 'QRIS GOPAY💱',
                                    id: 'gopay'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'gopay': {
kontoljembud = `
SILAHKAN SCAN *QRIS / QR BARCODE DI ATAS*

SESUAIKAN DENGAN DONASI YG INGIN ANDA TRANSFER 
`
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/gopey.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: kontoljembud,
                            hydratedFooterText: 'Jika Ingin Via Dana Link Silahkan Pencet Button Di Bawah',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Link Donasi Dana',
                                    url: 'https://link.dana.id/minta/2pl5xn39wms'
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Link Donasi Saweria',
                                    url: 'https://saweria.co/K4HFZ'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' Back〽️',
                                    id: 'menu2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: ' Script Bot',
                                    id: 'sc'
                               }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner❣️',
                                    id: 'ownet'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
/*case 'bugreport':
    if (!text)  throw 'Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]' 
 teks = args.join(' ')
  m.reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')
  hisoka.sendMessage('6283127014833@s.whatsapp.net',`*Bug Report:* ${teks}`)
  break*/
/*case 'bot3': {
                m.reply(mess.wait)
                let message = await prepareWAMessageMedia({ video: { url: 'https://telegra.ph/file/2367fda45e9ff04778890.mp4' }, gifPlayback: true }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            videoMessage: message.videoMessage,
                            hydratedContentText: `Hello ${m.pushName}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'This Is My Project',
                                    url: 'https://github.com/DikaArdnt/Hisoka-Morou'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Number Phone Owner',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Status Bot',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Contact Owner',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
		console.log(message)
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break*/
case 'kisahnabi':
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
  query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=GuraHentai095`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
m.reply(ini_txt)
break
case 'asmaulhusna': 
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=GuraHentai095`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
m.reply(ini_txt)
break
            case 'allmenu': case 'menu2': {
            	let anjng = '✗⃝'
            let kontol = '\`\`\`'
                anu = `
  ${anjng}👋Halo @${m.sender.split("@")[0]}
                
  ${anjng}🗓️TANGGAL :${tanggal(new Date())}
  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
  
*『 🌋Group Menu🌋』*
${anjng}🐢${kontol}${prefix}linkgroup${kontol}
${anjng}🐢${kontol}${prefix}ephemeral${kontol} [option]
${anjng}🐢${kontol}${prefix}setpp${kontol}
${anjng}🐢${kontol}${prefix}setname${kontol} [text]
${anjng}🐢${kontol}${prefix}group${kontol} [option]
${anjng}🐢${kontol}${prefix}add${kontol} @user
${anjng}🐢${kontol}${prefix}kick${kontol} @user
${anjng}🐢${kontol}${prefix}promote${kontol} @user
${anjng}🐢${kontol}${prefix}demote${kontol} @user

*『🔸Downloader Menu🔸』*
${anjng}🦕${kontol}${prefix}tiktoknowm${kontol} [url]
${anjng}🦕${kontol}${prefix}tiktokwm${kontol} [url]
${anjng}🦕${kontol}${prefix}tiktokmp3${kontol} [url]
${anjng}🦕${kontol}${prefix}instagram${kontol} [url]
${anjng}🦕${kontol}${prefix}twitter${kontol} [url]
${anjng}🦕${kontol}${prefix}twittermp3${kontol} [url]
${anjng}🦕${kontol}${prefix}facebook${kontol} [url]
${anjng}🦕${kontol}${prefix}pinterestdl${kontol} [url]

*『🔍Search Menu🔍』*
${anjng}🐨${kontol}${prefix}pinterest${kontol} [query]
${anjng}🐨${kontol}${prefix}wallpaper${kontol} [query]
${anjng}🐨${kontol}${prefix}wikimedia${kontol} [query]
${anjng}🐨${kontol}${prefix}ytsearch${kontol} [query]

*『💌Random Menu🍒』*
${anjng}🐼${kontol}${prefix}porno${kontol}
${anjng}🐼${kontol}${prefix}hentai${kontol}
${anjng}🐼${kontol}${prefix}quotesanime${kontol}
${anjng}🐼${kontol}${prefix}motivasi${kontol}
${anjng}🐼${kontol}${prefix}dilanquote${kontol}
${anjng}🐼${kontol}${prefix}bucinquote${kontol}
${anjng}🐼${kontol}${prefix}katasenja${kontol}
${anjng}🐼${kontol}${prefix}puisi${kontol}

*『🕌Islam Menu』*
${anjng}🧸${kontol}${prefix}jadwalsholat${kontol} _[daerah]_
${anjng}🧸${kontol}${prefix}asmaulhusna${kontol}
${anjng}🧸${kontol}${prefix}kisahnabi${kontol} _[nabi yg di inginkan]_

*『🎓Pendidikan Menu』*
${anjng}📖${kontol}${prefix}faktaunik${kontol}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/ngentot.jpg') }, { upload: hisoka.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedFooterText: '[ THANKS TO ]\n\nXlpg<Team>\nMhankBarbar\nNurutomo\nDikaArdiant\nidoGanz\nTemen Gua Yang Bantu\n\n©KahfzBot 2021',
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '🌐MyGithub',
                                    url: 'https://github.com/K4HFZ'
                                }
                             }, {
                                quickReplyButton: {
                                    displayText: ' Donasi💸',
                                    id: 'donate'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back⏩',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                hisoka.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
