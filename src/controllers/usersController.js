import users from "../models/Users.js";

class userController {
  static listarUser = async (req, res) => {
    try {
      const result = await users.find();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  };

  static listarUsersPorId = async (req, res) => {
    const { id } = req.params;

    try {
      const result = await users.findById(id);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
    }
  };

  static criarUsers = async (req, res) => {
    let user = new users(req.body);

    try {
      await user.save();
      res.send("Usuário cadastrado com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

  static atualizarUser = async (req, res) => {
    const { id } = req.params;
    try {
      await users.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Usuário atualizado com sucesso" });
    } catch (err) {
      console.log(err);
    }
  };

  static excluirUser = async (req, res) => {
    const { id } = req.params;
    try {
      await users.findByIdAndDelete(id);
      res.status(200).send({ message: "Usuário removido com sucesso" });
    } catch (err) {
      console.log(err);
    }
  };
}

export default userController;
