import Utils from "../utils/Utils";
import mysql from 'mysql2/promise';
import bluebird from 'bluebird';
import db from "../models/index";
const createNewUser = async (email, password, username) => {
    let hashPassword = Utils.hashUserPassword(password);
    try {
        await db.User.create({
            username: username,
            email: email,
            password: Utils.hashUserPassword(password)
        })
    } catch (error) {
        console.log(error);

    }
}
const getUserList = async () => {
    let users = []
    try {
        users = await db.User.findAll();

    } catch (error) {
        console.log(error);
    }
    return users;
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
    return user;
}
const updateUser = async (email, username, userId) => {

    // const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'jwt', Promise: bluebird });
    // const [rows, fields] = await connection.execute('UPDATE user SET email = ?, username =? WHERE id=?', [email, username, id]);
    // return rows;
    let userUpdated = await db.User.update(
        {
            email,
            username
        }
        , {
            where: { id: userId }
        })
    return userUpdated;
}
module.exports = {
    createNewUser, getUserList, deleteUser, getUserById, updateUser
}