import { dataQuery } from "../config/db";

const productImgUpload = async (req, res) => {
  try {
    const filename = req.file.filename;
    // const url = "http://" + req.headers.host;
    const productImg = "/images/Products-img/" + filename;
    const sql = "INSERT INTO allimages (imgUrl) VALUE (?)";

    let image = await dataQuery(sql, [productImg]);
    console.log(image);
    // const getSql = `SELECT * FROM all-images WHERE img_id=${image.insertID}`;
    // image = await dataQuery(getSql, []);
    // console.log(image);

    if (image.insertId) {
      res.status(200).json({
        status: "success",
        url: productImg,
      });
    }
    res.status(404).json({ status: "failed", error: "Image upload failed" });
  } catch (error) {
    res.status(500).json(error);
  }
};
export { productImgUpload };
