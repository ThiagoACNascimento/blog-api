import userController from "../controller/user.controller.js";

const userRoutes = async (fastify, options) => {
  fastify.post("/users", userController.createUser);
};

export default userRoutes;
