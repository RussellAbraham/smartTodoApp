const { response } = require('express');
const request = require('request-promise');

const accessToken = 'l7aFeQPUuTrP';

const toWatch = {
  method: 'POST',
  uri: 'https://api.uclassify.com/v1/me/smart-classifier/To_Watch/train',
  headers: {
    Authorization: `Token ${accessToken}`,
    'Content-Type': 'application/json',
  },
  json: true,
  body: {
    texts: [
      'The Boys', 'Lord of The Rings', 'The Avengers', 'Stranger Things', 'Game of Thrones',
  'Friends', 'Breaking Bad', 'The Witcher', 'Black Mirror', 'The Office',
  'Harry Potter and the Sorcerer\'s Stone', 'Star Wars: Episode IV - A New Hope',
  'The Matrix', 'Jurassic Park', 'Inception', 'Avatar', 'The Dark Knight',
  'Toy Story', 'E.T. the Extra-Terrestrial', 'Forrest Gump', 'Pulp Fiction',
  'Back to the Future', 'The Lion King', 'Titanic', 'Gladiator', 'Finding Nemo',
  'The Godfather', 'The Shawshank Redemption', 'Avatar: The Last Airbender',
  'Stranger Things', 'Breaking Bad', 'Friends', 'The Witcher', 'Black Mirror',
  'The Office', 'The Mandalorian', 'Westworld', 'The Crown', 'Fargo',
  'Chernobyl', 'Sherlock', 'Narcos', 'Peaky Blinders', 'The Big Bang Theory',
  'Game of Thrones', 'Harry Potter and the Chamber of Secrets', 'Star Wars: The Empire Strikes Back',
  'Inception', 'The Dark Knight Rises', 'Toy Story 3', 'Jaws', 'The Exorcist',
  'Gone with the Wind', 'Snow White and the Seven Dwarfs', 'The Sound of Music', 'Titanic',
  'The Shawshank Redemption', 'The Godfather: Part II', 'The Lord of the Rings: The Return of the King',
  'Forrest Gump', 'The Lion King', 'Jurassic Park', 'Avengers: Endgame', 'Avatar',
  'The Matrix', 'Spider-Man: No Way Home', 'Dune', 'Black Widow', 'Wonder Woman 1984',
  'The Eternals', 'Fast & Furious 9', 'Shang-Chi and the Legend of the Ten Rings',
  'Ghostbusters: Afterlife', 'A Quiet Place Part II', 'No Time to Die', 'Top Gun: Maverick',
  'Mulan', 'Tenet', 'The Batman', 'Joker', 'The Irishman', 'Parasite',
  '1917', 'Once Upon a Time in Hollywood', 'Knives Out', 'Ford v Ferrari']
    ,
  },
};

const toRead = {
  method: 'POST',
  uri: 'https://api.uclassify.com/v1/me/smart-classifier/To_Read/train',
  headers: {
    Authorization: `Token ${accessToken}`,
    'Content-Type': 'application/json',
  },
  json: true,
  body: {
    texts: [
      'To Kill a Mockingbird', '1984', 'The Great Gatsby', 'Pride and Prejudice', 'Harry Potter and the Sorcerer\'s Stone',
  'The Lord of the Rings', 'The Catcher in the Rye', 'Animal Farm', 'Brave New World', 'The Hobbit',
  'Fahrenheit 451', 'The Hunger Games', 'The Da Vinci Code', 'The Alchemist', 'The Girl on the Train',
  'The Giver', 'Gone Girl', 'The Shining', 'The Kite Runner', 'The Secret Garden',
  'A Tale of Two Cities', 'The Chronicles of Narnia', 'To All the Boys I\'ve Loved Before', 'The Help', 'Little Women',
  'Frankenstein', 'Jane Eyre', 'The Picture of Dorian Gray', 'Moby-Dick', 'Dracula',
  'Alice\'s Adventures in Wonderland', 'Lord of the Flies', 'The Grapes of Wrath', 'One Hundred Years of Solitude', 'Crime and Punishment',
  'The Odyssey', 'War and Peace', 'Wuthering Heights', 'The Adventures of Huckleberry Finn', 'Don Quixote',
  'The Handmaid\'s Tale', 'The Scarlet Letter', 'Anna Karenina', 'The Count of Monte Cristo', 'Catch-22',
  'The Sun Also Rises', 'The Little Prince', 'Gulliver\'s Travels', 'A Christmas Carol', 'The Jungle Book',
  'Pippi Longstocking', 'The Wind in the Willows', 'The Hobbit', 'Charlotte\'s Web', 'Matilda',
  'Harry Potter and the Prisoner of Azkaban', 'Lord of the Rings: The Fellowship of the Ring', 'Alice Through the Looking Glass', 'A Wrinkle in Time', 'Nineteen Eighty-Four',
  'The Book Thief', 'The Fault in Our Stars', 'The Diary of a Young Girl', 'Maus', 'The Hitchhiker\'s Guide to the Galaxy',
  'The War of the Worlds', 'Slaughterhouse-Five', 'The Bell Jar', 'The Road', 'East of Eden',
  'Watership Down', 'The Gruffalo', 'The Very Hungry Caterpillar', 'Goodnight Moon', 'Where the Wild Things Are',
  'Green Eggs and Ham', 'Harry Potter and the Chamber of Secrets', 'Harry Potter and the Half-Blood Prince', 'Harry Potter and the Deathly Hallows', 'The Lion, the Witch and the Wardrobe']
    ,
  },
};

const toEat = {
  method: 'POST',
  uri: 'https://api.uclassify.com/v1/me/smart-classifier/To_Eat/train',
  headers: {
    Authorization: `Token ${accessToken}`,
    'Content-Type': 'application/json',
  },
  json: true,
  body: {
    texts: [
      'Pizza', 'Sushi', 'Burger', 'Taco', 'Pasta',
  'Sushi Rolls', 'Burrito', 'Fried Chicken', 'Ice Cream', 'Steak',
  'Ramen', 'Dim Sum', 'Pancakes', 'Cupcakes', 'Pho',
  'Tandoori Chicken', 'Pad Thai', 'Churros', 'Fish and Chips', 'Kebab',
  'Croissant', 'Nachos', 'Donuts', 'Hamburger', 'Hot Dog',
  'Falafel', 'Samosa', 'Philly Cheesesteak', 'Poutine', 'Bagel',
  'Ceviche', 'Gelato', 'Ravioli', 'Sushi Bar', 'BBQ Ribs',
  'Noodle Soup', 'Macarons', 'Chicken Wings', 'Tiramisu', 'Cannoli',
  'Dosa', 'Waffle', 'Spring Rolls', 'Gyoza', 'Shawarma',
  'Crab Cakes', 'Sashimi', 'Lobster Roll', 'Croissant', 'French Fries']
    ,
  },
};

const toBuy = {
  method: 'POST',
  uri: 'https://api.uclassify.com/v1/me/smart-classifier/To_Buy/train',
  headers: {
    Authorization: `Token ${accessToken}`,
    'Content-Type': 'application/json',
  },
  json: true,
  body: {
    texts: [
      'Smartphone', 'Laptop', 'Headphones', 'Camera', 'Backpack',
  'Running Shoes', 'Cookware Set', 'Coffee Maker', 'Bluetooth Speaker', 'Fitness Tracker',
  'E-book Reader', 'Hiking Gear', 'Portable Charger', 'Wireless Earbuds', 'Yoga Mat',
  'Gaming Console', 'Blender', 'Smart Watch', 'Dumbbells', 'Water Bottle',
  'Sneakers', 'Tablet', 'External Hard Drive', 'Wireless Mouse', 'Sleeping Bag',
  'Sunglasses', 'Cookbook', 'Instant Pot', 'Robot Vacuum', 'Gym Membership',
  'Car Accessories', 'Smart Home Hub', 'Desk Chair', 'Board Games', 'Protein Powder',
  'Plant Pot', 'Camping Tent', 'Resistance Bands', 'Juicer', 'Air Fryer',
  'Art Supplies', 'Skincare Products', 'Grill', 'Bike', 'Hammock',
  'Sewing Machine', 'Telescope', 'Baking Tools', 'Guitar', 'Portable Grill',
  'Workout Clothes', 'Wine Glasses', 'Fitness DVD', 'Yoga Blocks', 'Cooking Classes',
  'Cookware Set', 'Food Processor', 'Hiking Boots', 'Blender', 'Barbecue Grill',
  'Ski Gear', 'Digital Camera', 'Vacuum Cleaner', 'Gaming Mouse', 'Bicycle',
  'Smart Speaker', 'Rice Cooker', 'Smart TV', 'Air Purifier', 'Home Gym Equipment']
    ,
  },
};

const requests = [toWatch, toEat, toBuy];

requests.reduce((promiseChain, requestObj) => {
  return promiseChain.then(() => {
    return request(requestObj);
  });
}, Promise.resolve())
  .then(() => {
    console.log("All requests completed.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

