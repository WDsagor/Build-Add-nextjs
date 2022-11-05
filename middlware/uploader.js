import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/Products-img");
  },
  filename: function (req, file, cb) {
    const imgName = file.originalname.split(".");
    cb(null, imgName[0] + "-" + Date.now() + path.extname(file.originalname));
  },
});
export const uploader = multer({ storage: storage });
