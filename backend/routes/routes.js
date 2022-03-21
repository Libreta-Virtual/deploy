import express from 'express'
import { createDash, deleteDash, getDash, getDashs, updateDash } from '../controllers/DashController.js'
const router = express.Router()

router.get('/', getDashs)
router.get('/:id', getDash)
router.post('/', createDash)
router.put('/:id', updateDash)
router.delete('/:id', deleteDash)

export default router