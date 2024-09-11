const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db.connect");
const Product = require("./models/products.model");
const Category = require("./models/categories.model");
const Wishlist = require("./models/wishlist.model");
const Cart = require("./models/cart.model");
const Address = require("./models/address.model");

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);

app.use(express.json());
initializeDatabase();

// const cors = require("cors");

// const corsOption = {
//   origin: "*",
//   credential: true,
//   optionSuccessStatus: 200,
// };

//app.use(cors());

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
      res
        .status(201)
        .json({ message: "Product saved succussfully", product: savedProduct });
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

async function createCategory(categoryData) {
  try {
    const category = new Category(categoryData);
    const savedCategory = await category.save();
    return savedCategory;
  } catch (error) {
    console.log(error);
  }
}

app.post("/api/categories", async (req, res) => {
  try {
    const category = await createCategory(req.body);
    if (category) {
      res.status(201).json({
        message: "Category added successfully.",
        category: { category },
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories." });
  }
});
async function readAllCategories() {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log(error);
  }
}

app.get("/api/categories", async (req, res) => {
  try {
    const categories = await readAllCategories();
    if (categories) {
      res.json(categories);
    } else {
      res.status(404).json({ error: "No category found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories." });
  }
});

async function readAllCategoriesById(categoryId) {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    console.log(error);
  }
}

app.get("/api/categories/:categoryId", async (req, res) => {
  try {
    const category = await readAllCategoriesById(req.params.categoryId);
    if (category) {
      res.json(category);
    } else {
      res.status(404).json({ error: "No category found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch category." });
  }
});

//wishlist management
app.get("/api/wishlist", async (req, res) => {
  try {
    const products = await Wishlist.find();

    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No product found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get wishlist" });
  }
});

app.post("/api/wishlist", async (req, res) => {
  try {
    const product = new Wishlist(req.body);
    const savedProduct = await product.save();

    if (savedProduct) {
      res
        .status(201)
        .json({ message: "Product saved succussfully", product: savedProduct });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to post wishlist" });
  }
});

app.delete("/api/wishlist/:id", async (req, res) => {
  try {
    const deletedProduct = await Wishlist.findOneAndDelete({
      productId: req.params.id,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// cart management

app.get("/api/cart", async (req, res) => {
  try {
    const products = await Cart.find();

    if (products) {
      res.json(products);
    } else {
      res.status(404).json({ error: "No product found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to get cart list" });
  }
});

app.post("/api/cart", async (req, res) => {
  try {
    const product = new Cart(req.body);
    const savedProduct = await product.save();

    if (savedProduct) {
      res
        .status(201)
        .json({ message: "Product saved succussfully", product: savedProduct });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to post product" });
  }
});

app.put("/api/updateCart/:id", async (req, res) => {
  const updatedProductData = req.body;

  try {
    const updatedProduct = await Cart.findOneAndUpdate(
      { productId: req.params.id },
      updatedProductData,
      { new: true },
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.delete("/api/cart/:id", async (req, res) => {
  try {
    const deletedProduct = await Cart.findOneAndDelete({
      productId: req.params.id,
    });

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

//address

app.post("/api/user/address", async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    const savedAddress = await newAddress.save();

    if (savedAddress) {
      res
        .status(201)
        .json({ message: "Address saved succussfully", product: savedAddress });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to post address." });
  }
});

app.get("/api/user/address", async (req, res) => {
  try {
    const allAddress = await Address.find();
    if (allAddress) {
      res.json(allAddress);
    } else {
      res.status(404).json({ error: "No address found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch address." });
  }
});

app.put("/api/user/address/:id", async (req, res) => {
  try {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (updatedAddress) {
      res.status(200).json(updatedAddress);
    } else {
      res.status(404).json({ error: "Address not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update address." });
  }
});

app.delete("/api/user/address/:id", async (req, res) => {
  try {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);
    if (deletedAddress) {
      res.status(200).json({ message: "Address deleted successfully" });
    } else {
      res.status(404).json({ error: "Address not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete address." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
