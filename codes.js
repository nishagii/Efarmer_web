

// API creation

app.get("/", (req, res) => {
  res.send("Express App is Running uttooo");
});



const upload = multer({ storage: storage });

// Creating upload endpoint for images

app.use("/images", express.static("upload/images"));


//schema for creating and adding products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }
  const product = new Product({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    price: req.body.price,
  });
  console.log(product);
  await product.save(); //automatically saves the data to the database
  console.log("Product added successfully");
  res.json({
    success: true,
    message: "Product added successfully",
    name: req.body.name,
  });
});

//creating api for deleting products

app.post("/deleteproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Product deleted successfully");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//creating api for getting all products

app.get("/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All products fetched successfully");
  res.send(products); //respond for the frontend
});
