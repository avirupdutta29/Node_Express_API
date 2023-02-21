import express, { request, response } from "express";

import { createUser, getUsers, getUsersbyId, deleteUsers, patchUsers } from "../controllers/users1.js";

const router = express.Router();

let users =[];


//all routes in here are starting with /users
router.get("/",getUsers )

router.post("/",createUser);

router.get('/:id', getUsersbyId);

router.delete('/:id',deleteUsers);

router.patch('/:id',patchUsers);

export default router;