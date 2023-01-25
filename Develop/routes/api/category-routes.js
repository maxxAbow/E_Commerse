const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.json(await Category.findAll())
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(req.body,{
    where:{
      categoryId: req.params.id
    }
  })
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const result = await Category.destroy ({
    where:{
      categoryId: req.params.id
    }
  })
  res.json(result)
});

module.exports = router;
