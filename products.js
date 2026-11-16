/*
  Kidnova products
  ----------------
  To add a new product, copy one block { ... }, paste it at the end of the list, and change:
    title  : product name shown on the site
    page   : the product's own page on this site (folder name + "/")
    note   : one short line under the name
    price  : price shown on the card, e.g. "$3.99"
    type   : "digital"  (Etsy printable)   or   "printed"  (Amazon KDP paperback)
    image  : link to the product photo
    link   : link to the product page on Etsy or Amazon
  Don't forget the comma between blocks.
*/

const PRODUCTS = [
  {
    title: "Car Play Mat Printable – Road Number Matching Game",
    page: "car-play-mat-printable/",
    note: "Parking-lot counting fun for little drivers",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/b4a536/8710331936/il_794xN.8710331936_5zpl.jpg",
    price: "$3.99",
    link: "https://www.etsy.com/listing/1579407304/road-themed-number-matching-activity-a3"
  },
  {
    title: "Kids Savings Tracker – Treasure Map Money Goal Chart",
    page: "kids-savings-tracker-printable/",
    note: "Teach saving habits with a pocket-money adventure",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/c48a0f/8758275007/il_794xN.8758275007_aazb.jpg",
    price: "$4.55",
    link: "https://www.etsy.com/listing/4557424901/explorers-savings-tracker-printable-kids"
  },
  {
    title: "Kids Allowance Chart – Pay Per Chore Money Tracker",
    page: "kids-allowance-chart-printable/",
    note: "Kids earn for every chore they finish",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/906bab/8757837681/il_794xN.8757837681_5wki.jpg",
    price: "$4.56",
    link: "https://www.etsy.com/listing/4548995049/kids-chore-chart-with-price-11-chores"
  },
  {
    title: "Space Reward Chart for Kids",
    page: "space-reward-chart-printable/",
    note: "Sticker behavior tracker that kids love to fill",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/241728/8757160867/il_794xN.8757160867_7mg8.jpg",
    price: "$5.13",
    link: "https://www.etsy.com/listing/4549071026/space-reward-chart-for-kids-printable"
  },
  {
    title: "Space Chore Chart – Weekly Routine Tracker",
    page: "space-chore-chart-printable/",
    note: "7 chores, one happy weekly routine",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/f08058/8758072969/il_794xN.8758072969_1vqo.jpg",
    price: "$3.99",
    link: "https://www.etsy.com/listing/4548579176/task-treasure-7-chores-kids-chore-chart"
  },
  {
    title: "Cute Daily Planner – Woodland Hourly Schedule",
    page: "kids-daily-planner-printable/",
    note: "Hourly schedule and to-do list for students",
    type: "digital",
    image: "https://i.etsystatic.com/47663208/r/il/4e19b6/8757301625/il_794xN.8757301625_jc3i.jpg",
    price: "$3.42",
    link: "https://www.etsy.com/listing/4550828607/daily-planner-for-students-printable-for"
  },
  {
    title: "Picture Sudoku: Cut and Paste Logic Puzzles",
    page: "picture-sudoku-for-kids/",
    note: "33 easy & medium picture puzzles, ages 4–6",
    type: "printed",
    image: "https://m.media-amazon.com/images/I/61QtcFwQAvL._SL600_.jpg",
    price: "$9.99",
    link: "https://www.amazon.com/dp/B0HRPT5D3W"
  },
  {
    title: "Duo Game Book: Alphabet Mazes & Tic-Tac-Toe",
    page: "duo-game-book-for-kids/",
    note: "Face-to-face A to Z maze race for two players, ages 5–8",
    type: "printed",
    image: "https://m.media-amazon.com/images/I/71-iwyCTO3L._SL600_.jpg",
    price: "$13.49",
    link: "https://www.amazon.com/dp/B0HRQ8C9HR"
  },
  {
    title: "Color by Number for Toddlers",
    page: "color-by-number-for-toddlers/",
    note: "68 big & easy pages to learn numbers and colors, ages 3–5",
    price: "$10.99",
    type: "printed",
    image: "images/color-by-number-toddlers.jpg",
    link: ""   // paste the Amazon link here when the book is live
  }
];
