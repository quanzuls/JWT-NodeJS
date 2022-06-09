import loginRegisterService from '../service/loginRegisterService';


const testApi = (req, res) => {

    return res.status(200).json({
        message: "ok",

    })
}
const handleRegister = async (req, res) => {
    try {
        //req.body email, fullName, password, username
        console.log(req.body);

        if (!req.body.email || !req.body.password) {
            return res.status(200).json({
                EM: 'Missing required parameters', //error message
                EC: '1', //error code
                DT: '', //data
            })
        }
        if (req.body.password && req.body.password.length < 6) {
            return res.status(200).json({
                EM: 'Your password must have at least 6 letters', //error message
                EC: '1', //error code
                DT: '', //data
            })
        }
        // services: create user
        let data = await loginRegisterService.registerNewUser(req.body);

        return res.status(200).json({
            EM: data.EM, //error message
            EC: data.EC, //error code
            DT: '', //data
        })

    } catch (e) {
        return res.status(500).json({
            EM: 'error', //error message
            EC: '-1', //error code
            DT: '', //data

        })
    }
}
const handleLogin = async (req, res) => {
    try {

        let data = await loginRegisterService.handleUserLogin(req.body);

        return res.status(200).json({
            EM: data.EM, //error message
            EC: data.EC, //error code
            DT: data.DT, //data

        })
    } catch (error) {
        return res.status(500).json({
            EM: 'Error from servers services, Please try again..', //error message
            EC: -1, //error code
            DT: '', //data

        })
    }

}
module.exports = {
    testApi, handleRegister, handleLogin
}