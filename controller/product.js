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
    res.status(500).send (new Error('Server nor ready'));
  }
};


const addProduct = async (req, res) => {
  try {
    const product_img = req.file.filename;
     const { name, price, details, about, size,} = req.body;
     const sql= "INSERT INTO products( name, price, details, about, size, product_img) VALUES (?,?,?,?,?,?)"
     
     const product = await dataQuery( sql,[name,price, details, about, size, product_img]);
   //   console.log(product);
    if (product.affectedRows) {
      res.status(201).json({ status: "success", massge: "New Product added Successfully" });
    }
    res
      .status(500)
      .json({ status: "failed", error: "New Product could not added" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).json(error);
  }
};


const updateProduct = async (req, res) => {
  try {
   const id = req.query.id;
   const { name, price, details, about, size, product_img, } = req.body;
   const sql = "UPDATE `products` set name=?, price=?, details=?, about=?, size=?, product_img=? where id=?";
   const product = await dataQuery( sql,[name, price, details, about, size, product_img, id]);
    if (product.affectedRows) {
      res.status(201).json({ status: "success", massge: "Product updated Successfully" });
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
   const product = await dataQuery( sql,[id]);
   //   console.log(product);
    if (product.affectedRows) {
      res.status(201).json({ status: "success", massge: "Product delete Successfully" });
    }
    res.status(500).json({ status: "failed", error: "Product delete Failed" });
    // console.log(products[0].id);
  } catch (error) {
    res.status(500).json(error);
  }
};


export { getAllProducts, getSingleProducts, addProduct,updateProduct, deleteProduct};
