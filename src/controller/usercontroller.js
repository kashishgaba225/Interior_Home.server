const usermodel = require('../model/usermodel');
const bcrypt = require('bcrypt');
const { otpSender } = require('../nodemailer/sendotp');
const { userprofileimg } = require('../Cloudinary/uploadimages');

// Create User Function
exports.createuser = async (req, res) => {
    try {
        const data = req.body;
        const profileimg = req.file;

        const { name, email, password } = data;

        const randomOtp = Math.floor(1000 + Math.random() * 9000);
        const checkemail = await usermodel.findOneAndUpdate({ email: email, role: 'user' }, { $set: { otp: randomOtp } }, { new: true });


        if (checkemail) {
            if ((checkemail.toVerify) == true) return res.status(200).send({ status: true, msg: "Email already verified. Please log in." });
            otpSender(name, email, randomOtp);
            return res.status(200).send({ status: true, msg: "Sucessfull otp send", data: checkemail._id });
        }


        if (profileimg) {
            const imgURL = await userprofileimg(profileimg.path);
            data.profileimg = imgURL;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        data.password = hashedPassword;
        data.otp = randomOtp;
        data.role = 'user';

        otpSender(name, email, randomOtp);
        const user = await usermodel.create(data);

        return res.status(201).send({ status: true, msg: "User created successfully.", data: user._id });
    } catch (e) {
        return res.status(500).send({ status: false, msg: e.message });
    }
};



exports.getalluser = async (req, res) => {
    try {
        const users = await usermodel.find();
        return res.status(200).send({
            status: true,
            msg: "Users retrieved successfully.",
            data: users
        });
    } catch (e) {
        return res.status(500).send({ status: false, msg: e.message });
    }
};
