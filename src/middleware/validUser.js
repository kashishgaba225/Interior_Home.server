const { validname, validemail, validpassword } = require('../validation/allvalidations');


exports.validUserData = (req, res, next) => {

    try {

        const data = req.body;

        const { name, email, password } = data;

        if (!name) return res.status(400).send({ status: false, msg: "Name is required." });
        if (!validname(name)) return res.status(400).send({ status: false, msg: "Enter a valid name." });

        if (!email) return res.status(400).send({ status: false, msg: "Email is required." });
        if (!validemail(email)) return res.status(400).send({ status: false, msg: "Enter a valid email." });

        if (!password) return res.status(400).send({ status: false, msg: "Password is required." });
        if (!validpassword(password)) return res.status(400).send({ status: false, msg: "Enter a valid password." });

        next()

    }
    catch (e) { return res.status(500).send({ status: false, msg: e.message }) }
}