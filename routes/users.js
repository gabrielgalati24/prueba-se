import { Router} from 'express'
import {addUsers,deleteUsers,getUsers,updateUSers} from '../controllers/users.js'
const router = Router();

router.get("",getUsers );
router.post("",addUsers);
router.delete("",deleteUsers);
router.put("",updateUSers);
export default router;