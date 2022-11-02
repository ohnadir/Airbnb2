const router = require('express').Router();
const passport = require("passport");
const {
  userRegister,
  userLogin,
  updateUser,
  deleteUser,
  getUsers,
  searchUser,
  getSingleUser,
  logoutUser,
  forgotPassword,
  resetPassword
} = require('../user/controller');

const {
  addUserValidator,
  updateUserValidator,
  idValidator,
} = require('../user/validator');

const validationResult = require('../validators');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth')


// authorizeRoles('user');
// authorizeRoles('admin');

router.post('/signup', addUserValidator, validationResult, userRegister);
router.post('/login', userLogin);

router.patch(
  '/:id',
  idValidator,
  updateUserValidator,
  validationResult,
  updateUser
);

router.delete('/:id', idValidator, validationResult, deleteUser);

router.get('/', getUsers);

router.get('/search', searchUser);
router.get('/logout', logoutUser);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);

router.get('/:id', isAuthenticatedUser, authorizeRoles('admin'), idValidator, validationResult, getSingleUser);


// social login
router.get("/google", passport.authenticate("google", { scope: ["profile"] }))
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "/login/failed",
  })
);
module.exports = router;