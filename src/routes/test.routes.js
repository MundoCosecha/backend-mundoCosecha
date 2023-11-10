import { Router } from "express";
import { getUser } from '../middleware/getUser.js'
import { isAdmin } from '../middleware/roles.js'

const testRouter = Router()

testRouter.get('/', getUser, isAdmin, (req, res) => {
    res.json(req.user)
})

export { testRouter }