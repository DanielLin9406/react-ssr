import { Router } from "express";

const userRouterContainer = Router();
const userRouter = Router();

userRouter.get("/users", (req, res) => {
  return res.send(usersData);
});

// userRouter.get("/current_user", (req, res) => {
//   return res.send(req.user);
// });

const usersData = {
  users: [
    { id: 1, name: "Leanne Graham" },
    { id: 2, name: "Ervin Howell" },
    { id: 3, name: "Clementine Bauch" },
    { id: 4, name: "Patricia Lebsack" },
    { id: 5, name: "Chelsey Dietrich" },
  ],
};

userRouterContainer.use("/user", userRouter);

export { userRouterContainer };
