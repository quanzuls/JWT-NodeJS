import { resetWatchers } from 'nodemon/lib/monitor/watch';
import userService from '../service/userService';

const handleHelloWorld = (req, res) => {

    return res.render("home.ejs");
}

const handleUserPage = async (req, res) => {
    let userList = await userService.getUserList();
    return res.render("user.ejs", { userList });

}
const handleCreateNewUser = (req, res) => {
    let newUser = req.body;
    userService.createNewUser(newUser);
    return res.redirect('/user');


}
const handleDeleteUser = async (req, res) => {
    await userService.deleteUser(req.params.id);
    return res.redirect('/user');
}


const getUpdateUserPage = async (req, res) => {
    let user = await userService.getUserById(req.params.id);
    let userData = {};
    userData = user;
    return res.render("user-update.ejs", { userData });
}
const handleUpdateUser = async (req, res) => {
    let userInfo = req.body;
    console.log(">>check body update: ", req.body);
    await userService.updateUser(userInfo);

    return res.redirect('/user');
}

module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    handleUpdateUser
}