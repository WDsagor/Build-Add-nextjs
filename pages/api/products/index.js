import nc from "next-connect";
import {getAllProducts, addProduct} from "../../../controller/product";
const handeler = nc();


handeler.get(getAllProducts);

handeler.post( addProduct);

export default handeler;