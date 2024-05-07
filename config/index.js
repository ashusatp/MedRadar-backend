require("dotenv").config();
module.exports =  {  
  APP_PORT,
  DEBUG_MODE,
  DB_URL,
  JWT_SECRET,
  REFRESH_SECRET,
  APP_URL,
  CLOUDINARY_CLIENT_NAME,
  CLOUDINARY_CLIENT_API,
  CLOUDINARY_CLIENT_SECRET,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  HASH_SECRET,
  CLIENT_ID,
  CLIENT_SECRET
} = process.env;
