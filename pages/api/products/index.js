import nc from "next-connect";
import { addProduct, getAllProducts } from "../../../controller/product";
import { uploader } from "../../../middlware/uploader";
const handeler = nc();

handeler.get(getAllProducts);

handeler.post(addProduct);

export default handeler;
