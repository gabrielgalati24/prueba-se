import { Router} from 'express'
import {addOrder,getOrders,deleteOrder,updateOrder} from '../controllers/orders.js'
const router = Router();

router.get("",getOrders);
router.post("",addOrder);
router.delete("",deleteOrder);
router.put("",updateOrder);
export default router;