const postModel = require("../models/post.model.js");

// Récupère tous les Argonautes de la base de données.
module.exports.getall = (req, res) => {
  postModel
    .find((err, docs) => {
      if (!err) return res.status(200).send(docs);
      else return res.status(400).send("Error to get data : " + err);
    })
    .sort({ createdAt: 1 });
};

// Ajoute un Argonaute
module.exports.addone = async (req, res) => {
  const newPost = new postModel({
    name: req.body.name,
  });
  try {
    postModel.findOne({ name: newPost.name }, async function (err, obj) {
      if (obj == null) {
        // Création de l'Argonaute.
        const post = await newPost.save();
        return res.status(201).json(post);
      } else {
        // L'Argonaute exsite déjà.
        return res.json({ err: "AlreadyExiste", name: newPost.name });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// Supprime un Argonaute
module.exports.deleteone = (req, res) => {
  postModel.findByIdAndRemove(req.params.id).exec();
};
