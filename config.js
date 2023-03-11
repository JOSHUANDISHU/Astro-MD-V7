const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
ALIVE_MSG: process.env.ALIVE_MSG ==='default' : process.env.ALIVE_MSG,
LANG: process.env.LANG ==='EN' : process.env.LANG,
ALIVE_LOGO: process.env.ALIVE_LOGO === 'https://i.imgur.com/v8iuP8v.jpg' : process.env.ALIVE_LOGO,
FOOTER: process.env.FOOTER ==='ᴀꜱᴛʀᴏ-ᴍᴅ ᴘᴜʙʟɪᴄ ꜱᴛᴀʙʟᴇ' : process.env.FOOTER,
CAPTION: process.env.CAPTION ==='*ɢᴇɴᴀʀᴀᴛᴇᴅ ʙʏ ᴀꜱᴛʀᴏ-ᴍᴅ*' : process.env.CAPTION,
ONLY_GROUP: process.env.ONLY_GROUP ==='false' : process.env.ONLY_GROUP,
INBOX_BL_MSG: process.env.INBOX_BL_MSG ==='*Inbox not allowed' : process.env.INBOX_BL_MSG,
HOST: process.env.HOST === '-' : process.env.HOST,
SESSION_ID: process.env.SESSION_ID === 'ASTRO=QigCQJBY#sjWtQ37Ua-1NpaV5qD7X6YR7z6SGdAAvZL5hKYNtQxM' : process.env.SESSION_ID
};
