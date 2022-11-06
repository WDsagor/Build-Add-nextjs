import nc from "next-connect";
import { getSingleProducts, deleteProduct, updateProduct } from "../../../controller/product";
// import { uploader } from "../../../middlware/uploader";
const handeler = nc();

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

handeler.put(updateProduct);
handeler.get(getSingleProducts);
handeler.delete(deleteProduct);

export default handeler;
