import { dataQuery } from "../dbConnection/db";



const productImgUpload = async (req, res) => {
    try {
     const url = 'http://'+ req.headers.host;
     const filename = req.file.filename;
     console.log(filename);
     const sql= "INSERT INTO allimages (imgUrl) VALUE (?)";
    //  const getSql= `SELECT * FROM all-images WHERE img_id=${image.insertID}`
     
     let image = await dataQuery( sql, [filename]);
      // image = await dataQuery( getSql,[]);
      console.log(image);
   
      if (image.length) {
        res.status(200).json({
          result: image,
          url : url + "public/images/Products-img" + filename,
        });
      }
      res.status(404).json({ status: "failed", error: "Image upload faild" });
    } catch (error) {
      res.status(500).json(error);
    }
  };
  export {productImgUpload}