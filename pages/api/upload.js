import nc from "next-connect";
import { productImgUpload } from "../../controller/uploadController";
import { uploader } from "../../middlware/uploader";
const handeler = nc();

export const config = {
  api: {
    bodyParser: false,
  },
};

handeler.post(uploader.array("img", 4), productImgUpload);

export default handeler;
