import { dataQuery } from "../config/db";

const productImgUpload = async (req, res) => {
  try {
    const files = req.files;

    // console.log(files);
    // const url = "http://" + req.headers.host;
    const url = files.map((file) => "/images/Products-img/" + file?.filename);
    // const productImg = "/images/Products-img/" + files?.filename;
    // const sql = "INSERT INTO allimages (imgUrl) VALUE (?)";
    // // console.log(url);

    // let image = await dataQuery(sql, url);
    // console.log(image);

    // const getSql = `SELECT * FROM all-images WHERE img_id=${image.insertID}`;
    // image = await dataQuery(getSql, []);
    // console.log(image);

    if (url) {
      res.status(200).json({
        status: "true",
        url: url,
      });
    }
    res.status(404).json({ status: "failed", error: "Image upload failed" });
    // next();
  } catch (error) {
    res.status(500).json(error);
  }
};
export { productImgUpload };
