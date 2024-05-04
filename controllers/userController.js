const db = require("../models");
const bcrypt = require("bcrypt");


const User = db.users;

exports.createUser = async (req, res) => {
    try {
        const { first_name, last_name, username, password, email } =
            req.body;
        const emailCheck = await User.findOne({ where: { email: email } });

        if (emailCheck) {
            return res
                .status(409)
                .json({ message: "User with given Email already exist" });
        }
        const salt = await bcrypt.genSalt(Number(10));
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            first_name: first_name,
            last_name: last_name,
            username: username,
            password: hashedPassword,
            email: email,
        });
        return res.status(200).send(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({
            where: { username: username },
        });

        if (!user) {
            return res.status(401).json({ message: "Invalid User Name or password" });
        };

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid User Name or password" });
        };

        return res.status(200).json({
            status: true,
            user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


exports.updateUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.update(req.body, { where: { user_id: id } });
        res.status(200).send({ message: "User updated successfully", user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 6. delete user by id

exports.deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        await User.destroy({ where: { user_id: id } });
        res.status(200).send({ message: "User deleted successfully", User });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// 7. change password for a user
exports.changePassword = async (req, res) => {
    try {
        const userId = req.params.id;
        const { oldPassword, newPassword } = req.body;

        // Find the user by ID
        const user = await User.findOne({ where: { user_id: userId } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the old password provided is valid
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid old password" });
        }

        // Generate a new hash for the new password
        const newSalt = await bcrypt.genSalt(Number(10));
        const newHashedPassword = await bcrypt.hash(newPassword, newSalt);

        // Update the user's password in the database
        await User.update(
            { password: newHashedPassword },
            { where: { user_id: userId } }
        );

        res.status(200).json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};