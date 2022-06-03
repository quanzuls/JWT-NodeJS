import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);

const hashUserPassword = (userPassword) => {
    let hashPassword = bcrypt.hashSync(userPassword, salt);
    return hashPassword;
}
const checkPassword = (inputPwd, hashPwd) => {
    return bcrypt.compareSync(inputPwd, hashPwd);
}
module.exports = {
    hashUserPassword, checkPassword
}