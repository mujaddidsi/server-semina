const User = require('../../api/v1/users/model');
const Organizer = require('../../api/v1/organizers/model');
const { BadRequestError } = require('../../errors');

const createOrganizer = async (req) => {
	const { organizer, role, email, password, confirmPassword, name } = req.body;

	if (password !== confirmPassword) {
		throw new BadRequestError('Password dan Konfirmasi password tidak cocok');
	}

	const result = await Organizer.create({ organizer });

	const user = await User.create({
		email,
		name,
		password,
		organizer: result._id,
		role,
	});

	delete user._doc.password;

	return user;
};

module.exports = { createOrganizer };
