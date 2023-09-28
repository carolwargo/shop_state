const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Individual Sessions' },
    { name: 'Group Sessions' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Winter Group Sessions #1',
      description:
        'Group Catching Sessions: blocking, framing, throwing, stance and more!',
      category: categories[1]._id,
      image: 'cookie-tin.jpg',
      price: 250.00,
      quantity: 200
    },
    {
      name: 'Winter Group Sessions #2',
      description:
        'Group Catching Sessions: blocking, framing, throwing, stance and more!',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
      price: 250.00,
      quantity: 200
    },
    {
      name: 'Individual Session: Initial Evaluation',
      description:
        'See where you are and where you need to be: 301Catching Evaluation, set goals, expose weaknesses and offer solutions.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
      price: 100.00,
      quantity: 500
    },
    {
      name: 'Individual Session: Progress Evaluation',
      description:
        'Check-In on your progress: 301Catching Progress Evaluation.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
      price: 100.00,
      quantity: 500
    },
    {
      name: 'Individual Session: Game Ready Evaluation',
      description:
        'Simulated game: 301Catching game simulation helps to mentally prepare and tests instinct behind the plate.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
      price: 100.00,
      quantity: 500
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Carol',
    lastName: 'Wargo',
    cellPhone:'443-771-1726',
    email: 'carol@gmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Corey',
    lastName: 'Wargo',
    cellPhone:'443-771-1708',
    email: 'cw14094@gmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
