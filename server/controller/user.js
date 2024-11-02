const db = require("../models");
const bcrypt = require("bcrypt");
const User = db.users;


exports.create = async (req, res) => {
    const { fullname, email, password } = req.body;

    const checkEmail = await User.findOne({ where: { email: email } });
    console.log(checkEmail)

    if (checkEmail) {
       return res
         .status(409)
         .json({ message: "User with given Email already exist" });
    }

    const salt = await bcrypt.genSalt(Number(10));
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({
        fullname,
        email,
        password: hashedPassword,
    })

    return res.status(201).send({
        message: "User was registered successfully!",
    });
};


exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email } });

    if (!user) {
        return res.status(404).send({ message: "User Not found." });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
        return res.status(401).send({
            message: "Invalid Password!",
        });
    }

    return res.status(200).send({
        id: user.id,
        fullname: user.fullname,
        email: user.email,
    });
};