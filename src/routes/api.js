import express from "express";
import apiController from '../controller/apiController';
import userController from '../controller/userController'
const router = express.Router();
/**
 * 
 * @param {*} app : express app
 */
const initApiRoutes = (app) => {
    //GET - R, POST - C, PUT - U, DELETE - D
    router.post('/test-api', apiController.testApi);
    router.post('/register', apiController.handleRegister);
    router.post('/login', apiController.handleLogin);


    router.get('/user/read/', userController.readFnc);
    router.post('/user/create', userController.createFnc);
    router.put('/user/update', userController.updateFnc);
    router.delete('/user/delete', userController.deleteFnc);

    return app.use("/api/v1", router);

}
export default initApiRoutes;