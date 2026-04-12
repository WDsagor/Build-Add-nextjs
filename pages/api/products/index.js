import nc from "next-connect";
import { addProduct, getAllProducts } from "../../../controller/product";
const handeler = nc();

handeler.get(getAllProducts);

handeler.post(addProduct);

export default handeler;
