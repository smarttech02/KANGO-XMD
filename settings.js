//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : 𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪 
// @author : 𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +2349047650772

//----------------------[ 𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪 ]----------------------//

const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || '' 
//Enter your 𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪 session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '2349047650772' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['2349047650772', '2349047650772'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || '𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪" 

//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "HEis" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©𓆩𝕭𝖔𝖐𝖔 𝕳𝖆𝖗𝖆𝖒𓆪"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-𝕳𝖆𝖗𝖆𝖒𓆪mD ]----------------------//
