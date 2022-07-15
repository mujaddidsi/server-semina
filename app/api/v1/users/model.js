const mongoose = require('mongoose');
const { model, Schema } = mongoose;
const bcrypt = require('bcryptjs')


let userSchema = Schema(
	{
		name: {
			type: String,
			required: [true, 'Nama harus diisi'],
			minLength: 3,
			maxLength: 40,
		},
		email: {
			type: String,
			unique: true,
			required: [true, 'Email harus diisi'],
		},
		password: {
			type: String,
			required: true,
			minLength: 6,
		},
		role: {
            type: String,
            enum['admin', 'organizer', 'owner'],
            default: 'admin',
        },
        organizer: {
            type: mongoose.Types.ObjectId,
            ref: 'Organizer',
            required: true
        }
	},
	{ timestamps: true }
);

userSchema.pre('save', async function (next) {
    const User = this;
    if (User.isModified('password')) {
        User.password = await brypt.hash(User.password, 12);
    }
    next();
})

userSchema.method.comparePassword = async function (candidatePassword) {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
}

module.exports = model('User', userSchema);