const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  //using .then
  Admin.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) next();
    else {
      res.status(403).json({
        message: "User not found",
      });
    }
  });

  //using await
//   const response = await Admin.findOne({
//     username: username,
//     password: password,
//   });
//   if (response) {
//     next();
//   } else {
//     res.status(403).json({
//       message: "User not found",
//     });
//   }
}

module.exports = adminMiddleware;
