import userApiService from '../service/userApiService';

const readFnc = async (req, res) => {

    try {
        if (req.query.page && req.query.limit) {
            let page = req.query.page;
            let limit = req.query.limit;
            let data = await userApiService.getUserWithPagination(+page, +limit);
            return res.status(200).json({
                EM: data.EM, //error message
                EC: data.EC, //error code
                DT: data.DT, //data

            })
        } else {
            let data = await userApiService.getAllUser();
            return res.status(200).json({
                EM: data.EM, //error message
                EC: data.EC, //error code
                DT: data.DT, //data

            })
        }



    } catch (error) {
        console.log(error)
        return res.status(500).json({
            EM: 'Error from server..', //error message
            EC: -1, //error code
            DT: '', //data

        })
    }
};
const createFnc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server..', //error message
            EC: -1, //error code
            DT: '', //data

        })
    }
};
const updateFnc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server..', //error message
            EC: -1, //error code
            DT: '', //data

        })
    }
};
const deleteFnc = (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Error from server..', //error message
            EC: -1, //error code
            DT: '', //data

        })
    }
};
module.exports = {
    readFnc, createFnc, updateFnc, deleteFnc
}