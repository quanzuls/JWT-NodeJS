import db from '../models/index';

const getUserWithPagination = async (page, limit) => {
    try {
        let offset = (page - 1) * limit;
        const { count, rows } = await db.User.findAndCountAll({
            attributes: ['id', 'username', 'email', 'phone', 'gender'],
            include: { model: db.Group, attributes: ['name', 'description'] },
            offset: offset,
            limit: limit,
        })
        let totalPages = Math.ceil(count / limit);

        let data = {
            totalRows: count,
            totalPages,
            users: rows

        }
        console.log(">> check data pagination: ", data);

        return {
            EM: 'Fetch Done',
            EC: 0,
            DT: data
        }

    } catch (error) {
        console.log(error);
        return {
            EM: 'something wrongs wit service',
            EC: -1,
            DT: []
        }
    }
}

const getAllUser = async () => {
    let data = {

    }
    try {
        let users = await db.User.findAll({
            attributes: ['id', 'username', 'email', 'phone', 'gender'],
            include: { model: db.Group, attributes: ['name', 'description'] }
        });
        if (users) {
            return {
                EM: 'get success',
                EC: 0,
                DT: users
            }
        } else {
            return {
                EM: 'get success',
                EC: 0,
                DT: []
            }
        }

    } catch (error) {
        console.log(error)
        return {
            EM: 'something wrongs with service',
            EC: -1,
            DT: []
        }
    }
}
const createNewUser = async (data) => {
    try {
        await db.User.create({

        })
    } catch (error) {
        console.log(error);

    }
}
const updateUser = async (data) => {
    try {
        let user = await db.User.findOne({
            where: { id: data.id }
        })
        if (user) {
            //update

        }
        else {
            //not found
        }
    } catch (error) {
        console.log(error);

    }
}
const deleteUser = async (id) => {
    try {
        await db.User.delete({
            where: { id: id }
        })
    } catch (error) {
        console.log(error);

    }
}
module.exports = {
    getAllUser, createNewUser, updateUser, deleteUser, getUserWithPagination

}