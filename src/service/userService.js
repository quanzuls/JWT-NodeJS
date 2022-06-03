import Utils from "../utils/Utils";
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from "../models/index";


const createNewUser = async (newUser) => {
    const { email, password, username, fullname, gender } = newUser;
    let hashPassword = Utils.hashUserPassword(password);

    try {
        await db.User.create({
            username,
            email,
            fullname,
            gender,
            password: hashPassword
        })
    } catch (error) {
        console.log(error);

    }
}
const getUserList = async () => {

    // //test relationship

    // let group = await db.Group.findAll({
    //     attributes: ['name', 'description'],
    //     where: { id: 1 },
    //     include: { model: db.Role, attributes: ['id', 'url', 'description'], }
    // })
    // console.log(">>check new role : ", JSON.stringify(group, null, 2));



    //Call get all users from user table
    let users = []
    try {
        users = await db.User.findAll();

    } catch (error) {
        console.log(error);
    }

    //Call get all user from user table join role table using sequelize
    let usersAndRole = await db.User.findAll({
        include: {
            model: db.Group,
            attributes: ['name', 'description'],
        },
    })
    return usersAndRole;
}
const deleteUser = async (userId) => {
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    // const [rows, fields] = await connection.execute('DELETE FROM user WHERE id= ?', [userId]);
    // return rows;
    try {
        const users = await db.User.destroy({
            where: {
                id: userId
            }
        });
        console.log(">> check status deleted user: ", users);

    } catch (error) {
        console.log(error);
    }
}

const getUserById = async (userId) => {
    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    // const [rows, fields] = await connection.execute('SELECT * FROM user WHERE id=?', [id]);
    // return rows;
    let user = {};
    user = await db.User.findOne({
        where: { id: userId }
    })
    return user.get({ plain: true });
}
const updateUser = async (userObject) => {

    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    // const [rows, fields] = await connection.execute('UPDATE user SET email = ?, username =? WHERE id=?', [email, username, id]);
    // return rows;
    const { id, fullname, gender, email, password, username } = userObject;
    let userUpdated = await db.User.update(
        {
            email,
            username,
            fullname,
            gender
        }
        , {
            where: { id: id }
        })
    return userUpdated;
}
module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUser
}