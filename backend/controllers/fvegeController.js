import freshVeges from "../models/freshVeges.js";
import fs from "fs";


//add fresh veges items(create)

const addFreshVeges = async (req, res) => {
    let image_filename = `${req.file.filename}`;
    
    const fvege = new freshVeges({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    })
    try {
        await fvege.save();
        res.json({
            success: true,
            message: "Product added successfully",
            name: req.body.name,
        });
    } catch(error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error.Product not added",
        });
    }
}

//all fresh veges items(retrive)

const listFreshVeges = async (req, res) => {
    try {
        const fveges = await freshVeges.find({});
        res.json({
            success: true,
            message: "All Products List",
            data: fveges,
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error. Products found",
        });
    }
}

//remove fresh veges items(delete)

const removeFreshVeges = async (req, res) => {
    try {
        const fvege = await freshVeges.findById(req.body.id);
        const image = fvege.image;
        fs.unlink(`./upload/images/${image}`, () => { });
        
        await freshVeges.findByIdAndDelete(req.body.id);
        res.json({
            success: true,
            message: "Product removed successfully",
        });

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: "Error. Product not removed",
        });
    }
}

// update fresh veges item(update)

const updateFreshVeges = async (req, res) => {
  try {
    const { id, name, price, category } = req.body;
    let image_filename = req.file ? `${req.file.filename}` : null;

    // Find the item by id
    const fvege = await freshVeges.findById(id);

    if (!fvege) {
      return res.json({
        success: false,
        message: "Product item not found",
      });
    }

    // Update fields
    fvege.name = name || fvege.name;
    fvege.price = price || fvege.price;
    fvege.category = category || fvege.category;

    if (image_filename) {
      // Remove old image if a new one is uploaded
      const oldImagePath = path.join(
        __dirname,
        `../upload/images/${fvege.image}`
      );
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }

      fvege.image = image_filename;
    }

    // Save the updated item
    await fvege.save();

    res.json({
      success: true,
      message: "Item updated successfully",
      data: fvege,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error. Item not updated",
    });
  }
};

export { addFreshVeges, listFreshVeges, removeFreshVeges, updateFreshVeges };
