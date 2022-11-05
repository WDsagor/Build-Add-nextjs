import nc from "next-connect";
import { productImgUpload } from "../../controller/uploadController";
import { uploader } from "../../middlware/uploader";
const handeler = nc();

export const config = {
  api: {
    bodyParser: false,
  },
};

handeler.post(uploader.single("img"), productImgUpload);

export default handeler;
