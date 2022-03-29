const router = require("express").Router();
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = require("../config/firebase");
const { initializeApp } = require("firebase/app");
const app = initializeApp(firebaseConfig);
const auth = getAuth();

router.post("/testLogin", (req, res) => {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.json(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.status(500);
      // ..
    });
});

module.exports = router;
