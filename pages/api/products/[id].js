import nc from "next-connect";
import {getSingleProducts, deleteProduct, updateProduct} from "../../../controller/product";
import { uploader } from "../../../middlware/uploader";
const handeler = nc();


export const config ={
    api:{
        bodyParser:false
    }
}
handeler.get(getSingleProducts);
handeler.put(uploader.single('img'), updateProduct);
handeler.delete(deleteProduct);

export default handeler;