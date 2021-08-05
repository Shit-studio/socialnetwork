const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const { User, Post } = require("../../models");
const { response } = require("express");

router.get("/getuserposts", (req, res) => {
    if(req.query.userId) {
      User.findOne({where: {id: req.query.userId}})
        .then(user => {
          user.getPosts().then(posts => res.json(posts));
          // res.json({user:user, posts: user.getPosts().then((res) => console.log(res)), count: user.countPosts().then((res) => console.log(res))});
        })
        .catch((err) => console.log(err))
    }
})

router.get("/getposts", (req, res) => {
  result = []
  Post.findAll({include: [ User ]})
      .then(posts => {
        posts.map((post) => {
          result.push(
            {
              id: post.dataValues.id,
              caption: post.dataValues.caption,
              username: post.dataValues.user.dataValues.name + " " + post.dataValues.user.dataValues.surname,
              userId: post.dataValues.user.dataValues.id
            }
          );
          })
      })
        .then(() => res.json(result))
      

})

router.post("/createpost", (req, res) => {
  Post.create({
    userId: req.body.userId,
    caption: req.body.caption
  });
})

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ where: { email: req.body.email }})
        .then(user => {
            if (user) {
                return res.status(400).json({email: "Email already exists!"})
            } else {

                const newUser = User.build({
                    name: req.body.name,
                    surname: req.body.surname,
                    email: req.body.email,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err))
                    })
                })


            }
        });
})


router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({where: { email: req.body.email }}).then(user => {
        if (!user) {
          return res.status(404).json({ emailnotfound: "Email not found" });
        }

        bcrypt.compare(req.body.password, user.password).then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name,
              surname: user.surname
            };

            jwt.sign(
              payload,
              keys.secretOrKey,
              {
                expiresIn: 31556926
              },
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              }
            );
          } else {
            return res
              .status(400)
              .json({ passwordincorrect: "Password incorrect" });
          }
        });
      });
});

module.exports = router;