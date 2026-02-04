const createUser = (request, response) => {
  const { name, email, password } = request.body;

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  response.status(201).send(newUser);
};

const userController = {
  createUser,
};

export default userController;
