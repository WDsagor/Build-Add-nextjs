import { dataQuery } from "../config/db";

const getAllProducts = async (req, res) => {
  try {
    const products = await dataQuery("SELECT * FROM `products` WHERE 1");
    if (products.length) {
      res.status(200).json(products);
    }
    res
      .status(404)
      .json({ status: "failed", error: "Products not Found this ID" });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleProducts = async (req, res) => {
  try {
    const id = req.query.id;
    const products = await dataQuery(
      `SELECT *  FROM Products WHERE id=${id}`,
      []
    );
    if (products.length) {
      res.status(200).json(products);
    }
    res
      .status(404)
      .json({ status: "failed", error: "Products not Found this ID" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).send(new Error("Server nor ready"));
  }
};

const addProduct = async (req, res) => {
  try {
    // console.log(req?.body);
    const {
      productName,
      productDetails,
      size1,
      size4,
      size10,
      size20,
      productImg,
      price1,
      price4,
      price10,
      pirce20,
    } = req.body;
    console.log(pirce20);
    const sql =
      "INSERT INTO products ( name, details, size1, size4, size10, size20, product_img, price1, price4, price10, price20) VALUES (?,?,?,?,?,?,?,?,?,?,?)";

    const product = await dataQuery(
      sql,
      [
        productName,
        productDetails,
        size1,
        size4,
        size10,
        size20,
        productImg,
        price1,
        price4,
        price10,
        pirce20,
      ],
      (error, results) => {
        if (error) throw error;
        console.log("The solution is: ", results);
        res.send(results);
      }
    );
    // console.log(product);
    if (product.insertId) {
      res
        .status(201)
        .json({ status: "success", massage: "New Product added Successfully" });
    }
    res
      .status(500)
      .json({ status: "failed", massage: "New Product could not added" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.query.id;
    // const fileName = req.file.filename;
    console.log(req.body);
    console.log(id);
    // const productImg = "/images/Products-img/" + fileName;
    const { name, price, details, about, size, product_img } = req.body;
    const sql =
      "UPDATE `products` set name=?, price=?, details=?, about=?, size=?, product_img=? where id=?";
    const product = await dataQuery(sql, [
      name,
      price,
      details,
      about,
      size,
      product_img,
      id,
    ]);
    if (product.affectedRows) {
      res
        .status(201)
        .json({ status: "success", massage: "Product updated Successfully" });
    }
    res.status(500).json({ status: "failed", error: "Product update Failed" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.query.id;
    const sql = "DELETE FROM `products` WHERE id=?";
    const product = await dataQuery(sql, [id]);
    //   console.log(product);
    if (product.affectedRows) {
      res
        .status(201)
        .json({ status: "success", massage: "Product delete Successfully" });
    }
    res.status(500).json({ status: "failed", error: "Product delete Failed" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).json(error);
  }
};

export {
  getAllProducts,
  getSingleProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
