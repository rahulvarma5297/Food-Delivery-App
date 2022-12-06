import img1 from "../Img/allupakoida.jpg";
import img3 from "../Img/chola.jpg";
import img4 from "../Img/corn.jpg";
import img5 from "../Img/maggi.jpg";
import img6 from "../Img/momo.jpg";
import img7 from "../Img/nonvegthali.jpg";
import img8 from "../Img/paubhaji.jpg";
import img9 from "../Img/pizza.jpg";
import img10 from "../Img/puri.jpg";
import img11 from "../Img/rajmarice.jpg";
import img13 from "../Img/samosa.jpg";
import img14 from "../Img/burger.png";
import img15 from "../Img/rotiwithmeat.jpg";
import img16 from "../Img/sweet.jpg";
import img17 from "../Img/vegthali.jpg";
import img18 from "../Img/kfc.jpeg";
import img19 from "../Img/panipuri.png";
import img20 from "../Img/idli.png";
import img21 from "../Img/alooparatha.png";
import img22 from "../Img/upma.png";
import img23 from "../Img/masaladosa.png";
import img24 from "../Img/plaindosa.png";
import img25 from "../Img/uttapam.png";
import img26 from "../Img/chickenfrybiriyani.png";
import img27 from "../Img/eggfriedrice.png";
import img28 from "../Img/chicken65.png";
import img29 from "../Img/chickenlollipop.png";
import img30 from "../Img/chickentikk.png";
import img31 from "../Img/icecream.png";
import img32 from "../Img/Quesadilla.png";

const Data = [
  {
    "id": 1,
    "img": img1,
    "food": "Aloo Pakoda",
    "data": "Aloo pakora is a popular street food snack served not only in Mumbai but in other parts of India as well.",
    "price1": "25",
    "price2": "20",
  },
  {
    "id": 2,
    "img": img3,
    "food": "Chola",
    "data": "Chola is a popular dish in the Indian subcontinent, especially in the Indian states of Gujarat, Rajasthan, and Goa.",
    "price1": "50",
    "price2": "40",
  },
  {
    "id": 3,
    "img": img4,
    "food": "Corn",
    "data": "Corn is a cereal grain first domesticated by indigenous peoples in southern Mexico about 10,000 years ago.",
    "price1": "40",
    "price2": "30",
  },
  {
    "id": 4,
    "img": img5,
    "food": "Maggi",
    "data": "Maggi is a brand of instant noodles manufactured by Nestlé. It was first introduced in Switzerland in 1948.",
    "price1": "30",
    "price2": "25",
  },
  {
    "id": 5,
    "img": img6,
    "food": "Momo",
    "data": "Momos are steamed or fried dumplings with a savoury filling, originating from the Himalayan region.",
    "price1": "70",
    "price2": "60",
  },
  {
    "id": 6,
    "img": img7,
    "food": "Non Veg Thali",
    "data": "A thali is a platter or combination of small bowls, used for serving food in India and Nepal.",
    "price1": "250",
    "price2": "240",
  },
  {
    "id": 7,
    "img": img8,
    "food": "Pav Bhaji",
    "data": "Pav Bhaji is a popular fast food dish from Maharashtra, India. It is a thick vegetable curry served with a soft bread roll.",
    "price1": "60",
    "price2": "50",
  },
  {
    "id": 8,
    "img": img9,
    "food": "Pizza",
    "data": "Pizza is a savory dish usually round, flattened base of wheat-based dough topped with cheese and often various other ingredients.",
    "price1": "100",
    "price2": "95",
  },
  {
    "id": 9,
    "img": img10,
    "food": "Puri",
    "data": "Puri is a deep-fried flatbread from the Indian subcontinent, made from maida flour, and is a common staple in the Indian diet.",
    "price1": "40",
    "price2": "35",
  },
  {
    "id": 10,
    "img": img11,
    "food": "Rajma Rice",
    "data": "Rajma Rice is a dish made with red kidney beans and rice. It is a popular dish in India and Pakistan, and is also popular in the United States.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 11,
    "img": img13,
    "food": "Samosa",
    "data": "A samosa is a fried or baked pastry with a savoury filling, such as spiced potatoes, onions, peas, lentils, macaroni, noodles or eggs.",
    "price1": "10",
    "price2": "8",
  },
  {
    "id": 12,
    "img": img14,
    "food": "Burger",
    "data": "A hamburger is a sandwich consisting of one or more cooked patties of ground meat placed inside a sliced bread roll or bun.",
    "price1": "50",
    "price2": "45",
  },
  {
    "id": 13,
    "img": img15,
    "food": "Roti with Meat",
    "data": "Roti is a flatbread from the Indian subcontinent made from whole-wheat flour. It is a staple food in many regions of the Indian subcontinent.",
    "price1": "80",
    "price2": "70",
  },
  {
    "id": 14,
    "img": img16,
    "food": "Sweet",
    "data": "A sweet is a confection that is typically eaten as part of dessert. It is often a sugary food, although some, such as bitter chocolate, are not.",
    "price1": "20",
    "price2": "15",
  },
  {
    "id": 15,
    "img": img17,
    "food": "Veg Thali",
    "data": "A thali is a platter or combination of small bowls, used for serving food in India and Nepal.",
    "price1": "200",
    "price2": "190",
  },
  {
    "id": 16,
    "img": img18,
    "food": "KFC",
    "data": "KFC is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 17,
    "img": img19,
    "food": "Pani Puri",
    "data": "Pani puri, golgappa, or puchka is a popular Indian snack. It is a savoury, hollow, deep-fried ball made from a thin, maida-based batter.",
    "price1": "20",
    "price2": "15",
  },
  {
    "id": 18,
    "img": img20,
    "food": "Idli",
    "data": "Idli is a traditional breakfast food in South Indian. It is made by steaming a batter consisting of fermented black lentils and rice.",
    "price1": "30",
    "price2": "25",
  },
  {
    "id": 19,
    "img": img21,
    "food": "Aloo Paratha",
    "data": "Aloo paratha is a popular Indian flatbread made with whole wheat flour, stuffed with a spiced potato filling.",
    "price1": "40",
    "price2": "35",
  },
  {
    "id": 20,
    "img": img22,
    "food": "Upma",
    "data": "Upma is a South Indian dish made from semolina, rava, or farina. It is a popular breakfast dish in South India.",
    "price1": "30",
    "price2": "25",
  },
  {
    "id": 21,
    "img": img23,
    "food": "Masala Dosa",
    "data": "Masala dosa is a type of dosa, a fermented crepe made from rice batter and black lentils.",
    "price1": "50",
    "price2": "45",
  },
  {
    "id": 22,
    "img": img24,
    "food": "Plain Dosa",
    "data": "Plain dosa is a type of dosa, a fermented crepe made from rice batter and black lentils.",
    "price1": "40",
    "price2": "35",
  },
  {
    "id": 23,
    "img": img25,
    "food": "Uttapam",
    "data": "Uttapam is a South Indian dish made from a fermented batter consisting of lentils and rice.",
    "price1": "40",
    "price2": "35",
  },
  {
    "id": 24,
    "img": img26,
    "food": "Chicken Fry Biriyani",
    "data": "Chicken biryani is a dish of chicken and rice that has been cooked in a seasoned broth and combined with spices and herbs.",
    "price1": "200",
    "price2": "190",
  },
  {
    "id": 25,
    "img": img27,
    "food": "Egg Fried Rice",
    "data": "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 26,
    "img": img28,
    "food": "Chicken 65",
    "data": "Chicken 65 is a spicy chicken dish from the Indian subcontinent. It is made by marinating chicken pieces in a mixture of yogurt, spices, and chili powder.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 27,
    "img": img29,
    "food": "Chicken Lolli Pop",
    "data": "Chicken Lolli Pop is a spicy chicken dish from the Indian subcontinent. It is made by marinating chicken pieces in a mixture of yogurt, spices, and chili powder.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 28,
    "img": img30,
    "food": "Chicken Tikka",
    "data": "Chicken tikka is a dish of chunks of chicken marinated in yogurt and spices and then broiled or grilled.",
    "price1": "150",
    "price2": "140",
  },
  {
    "id": 29,
    "img": img31,
    "food": "Ice Cream",
    "data": "Ice cream is a sweetened frozen food, It is usually made from dairy products and often combined with fruits or other ingredients and flavours.",
    "price1": "50",
    "price2": "45",
  },
  {
    "id": 30,
    "img": img32,
    "food": "Quesadilla",
    "data": "A quesadilla is a tortilla-based dish made by grilling or baking a tortilla with cheese and other ingredients in a frying pan.",
    "price1": "50",
    "price2": "45",
  },
];

export default Data;


// Convert to json  
