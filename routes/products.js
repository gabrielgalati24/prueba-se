import { Router} from 'express'
import {addProduct, deleteProduct,getProducts,updateProduct} from '../controllers/products.js'
const router = Router();

router.get("",getProducts);
router.post("",addProduct);
router.delete("",deleteProduct);
router.put("",updateProduct);
export default router;