const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	urlDb: process.env.URL_MONGODB_DEV,
	jwtSecret: process.env.JWT_SECRET_KEY,
	jwtExpiration: process.env.JWT_EXPIRATION,
	gmail: process.env.EMAIL_GMAIL,
	password: process.env.PASSWORD_GMAIL,
};
