const express = require("express");
const app = express();
const { initializeDatabase } = require("../db/db.connect");
const Product = require("../models/products.model");
const Category = require("../models/categories.model");


app.use(express.json());
initializeDatabase();

const cors = require("cors");

const corsOption = {
  origin: "*",
  credential: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOption));

async function createProductsData(productData) {
  try {
    const product = new Product(productData);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    console.log(error);
  }
}

app.post("/api/products", async (req, res) => {
  try {
    const savedProduct = await createProductsData(req.body);
    if (savedProduct) {
      res.status(201).json({message: "Product saved succussfully",product: savedProduct});
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to add data" });
  }
});

async function readAllProducts() {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    console.log(error);
  }
}

app.get("/api/products", async (req, res) => {
  try {
    const products = await readAllProducts();
    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No product found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data." });
  }
});

async function readByProductId(productId) {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    console.log(error);
  }
}

app.get("/api/products/:productId", async (req, res) => {
  try {
    const product = await readByProductId(req.params.productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "No product found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
});

async function createCategory (categoryData){
  try{
    const category = new Category(categoryData)
    const savedCategory = await category.save()
    return savedCategory
  }catch(error){
    console.log(error)
  }
}

app.post("/api/categories", async(req,res) => {
  try{
    const category = await createCategory(req.body)
    if(category){
      res.status(201).json({message: "Category added successfully.", category: {category}})
    }
  }catch(error){
    res.status(500).json({error: "Failed to fetch categories."})
  }
})
async function readAllCategories(){
  try{
    const categories = await Category.find()
    return categories
  }catch(error){
    console.log(error)
  }
}

app.get("/api/categories", async (req,res) => {
  try{
    const categories = await readAllCategories()
    if(categories){
      res.json(categories)
    }else{
      res.status(404).json({error: "No category found."})
    }
  }catch(error){
    res.status(500).json({error: "Failed to fetch categories."})
  }
})

async function readAllCategoriesById(categoryId){
  try{
    const category = await Category.findById(categoryId)
    return category
  }catch(error){
    console.log(error)
  }
}

app.get('/api/categories/:categoryId', async (req, res) => {
  try {
    const category = await readAllCategoriesById(req.params.categoryId);
    if(category){
      res.json(category)
    }else{
      res.status(404).json({error: "No category found."})
    }
  } catch (error) {
    res.status(500).json({error: "Failed to fetch category."})
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
