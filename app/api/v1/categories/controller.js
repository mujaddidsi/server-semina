// import model category
const Categories = require('./model');

// create categories
const create = async (req, res, next) => {
  try {
    let { name } = req.body;

    let category = new Categories({ name });

    await category.save();

    return res.json(category);

    // Atau bisa dengan
    /*
    const result = await Categories.create({ name })
    res.status.json({
      data: result
    })
    */
  } catch (err) {
    if (err && err.name === 'ValidationError') {
      return res.json({
        message: err.message,
        fields: err.errors,
      });
    }

    next(err);
  }
};

const index = async (req, res, next) => {
  try {
    const result = await Categories.find();
    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// (6) Export fungsi create pada controller categories
module.exports = {
  index,
  create,
};
