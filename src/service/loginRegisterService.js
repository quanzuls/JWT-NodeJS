import { Op } from 'sequelize';
import db from '../models/index';
import Utils from "../utils/Utils";

const checkEmailExist = async (userEmail) => {
    let user = await db.User.findOne({
        where: { email: userEmail }
    })

    if (user) {
        return true;
    }
    return false
}
const checkPhoneExist = async (userPhone) => {
    let user = await db.User.findOne({
        where: { phone: userPhone }
    })

    if (user) {
        return true;
    }
    return false
}

const registerNewUser = async (rawData) => {
    try {
        //Check email/phone number are exist
        let isEmailExist = await checkEmailExist(rawData.email)
        if (isEmailExist === true) {
            return {
                EM: 'The email address is already exist',
                EC: 1
            }
        }
        let isPhoneExist = await checkPhoneExist(rawData.phone)
        if (isPhoneExist === true) {
            return {
                EM: 'The phone number is already exist',
                EC: 1
            }
        }
        //hash user password
        let hashPassword = Utils.hashUserPassword(rawData.password);

        //create new user
        await db.User.create({
            email: rawData.email,
            username: rawData.username,
            password: hashPassword,
            fullname: rawData.fullName,
            phone: rawData.phone
        })
        return {
            EM: 'A user is created successfully',
            EC: 0
        }
    } catch (error) {
        console.log(error);
        return {
            EM: 'Some thing wrongs in services...',
            EC: -2
        }
    }

}

const handleUserLogin = async (rawData) => {
    try {
        let user = await db.User.findOne({
            where: {
                [Op.or]: [
                    { email: rawData.valueLogin },
                    { phone: rawData.valueLogin }
                ]
            }
        })
        if (user) {
            console.log(">> Found user with email/phone");
            let isCorrectPassword = Utils.checkPassword(rawData.password, user.password);
            console.log(">> check correct pwd: ", isCorrectPassword);
            if (isCorrectPassword === true) {
                return {
                    EM: 'Login successfully ! ...',
                    EC: 0,
                    DT: ''
                }
            } else {
                return {
                    EM: 'Your email/phone number or password is incorrect! ...',
                    EC: 1,
                    DT: ''
                }
            }
        }
        else {
            console.log(">> Input user with email/phone: ", rawData.valueLogin, " password: ", rawData.password);
            return {
                EM: 'Your email/phone number or password is incorrect! ...',
                EC: 1,
                DT: ''
            }
        }



    } catch (error) {
        console.log(error);
        return {
            EM: 'Error from servers services, Please try again...',
            EC: -2
        }
    }
}
module.exports = {
    registerNewUser, handleUserLogin
}