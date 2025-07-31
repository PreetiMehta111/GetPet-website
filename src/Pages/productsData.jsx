import Dog1 from '../assets/dog1.jpg';
import Dog2 from '../assets/dog2.jpg';
import Dog3 from '../assets/dog3.jpg';
import Dog4 from '../assets/dog4.jpg';
import Dog5 from '../assets/dog5.jpg';
import Dog6 from '../assets/dog6.jpg';
import Cat1 from '../assets/cat1.jpg';
import Cat2 from '../assets/cat2.jpg';
import Cat3 from '../assets/cat3.jpg';
import Cat4 from '../assets/cat4.jpg';
import Cat5 from '../assets/cat5.jpg';
import Cat6 from '../assets/cat6.jpg';
import Rabbit1 from '../assets/rabbit1.jpg';
import Rabbit2 from '../assets/rabbit2.jpg';
import Rabbit3 from '../assets/rabbit3.jpg';
import Rabbit4 from '../assets/rabbit4.jpg';
import Rabbit5 from '../assets/rabbit5.jpg';
import Rabbit6 from '../assets/rabbit6.jpg';
import Tortoise1 from '../assets/tortoise1.jpg';
import Tortoise2 from '../assets/tortoise2.jpg';
import Tortoise3 from '../assets/tortoise3.jpg';
import Tortoise4 from '../assets/tortoise4.jpg';
import Tortoise5 from '../assets/tortoise5.jpg';
import Tortoise6 from '../assets/tortoise6.jpg';
import Fish1 from '../assets/fish1.jpg';
import Fish2 from '../assets/fish2.jpg';
import Fish3 from '../assets/fish3.jpg';
import Fish4 from '../assets/fish4.jpg';
import Fish5 from '../assets/fish5.jpg';
import Fish6 from '../assets/fish6.jpg';
import DogProduct from '../assets/dog-product.jpg';
import CatProduct from '../assets/cat-product.jpg';
import RabbitProduct from '../assets/rabbit-product.jpg';
import TortoiseProduct from '../assets/tortoise-product.jpg';
import FishProduct from '../assets/fish-product.jpg';

export const categoryProducts = {
  Dogs: [
    {
      id: 1,
      name: 'Labrador Retriever',
      image: Dog1,
      price: 8000,
      discount: 0.1,
      desc: {
        breed: 'Labrador Retriever',
        origin: 'Newfoundland, Canada',
        behavior: 'Friendly, energetic, great with families',
        diet: 'High-quality dog food, lean meats',
        feeding: 'Feed premium kibble twice daily, avoid overfeeding.',
      },
    },
    {
      id: 2,
      name: 'Beagle',
      image: Dog2,
      price: 6000,
      discount: 0.15,
      desc: {
        breed: 'Beagle',
        origin: 'England, 13th century',
        behavior: 'Playful, loving, enjoys company',
        diet: 'Balanced dog food, occasional treats',
        feeding: 'Small, frequent meals to prevent bloating.',
      },
    },
    {
      id: 3,
      name: 'Pug',
      image: Dog3,
      price: 5000,
      discount: 0.0,
      desc: {
        breed: 'Pug',
        origin: 'China',
        behavior: 'Charming, playful, affectionate',
        diet: 'Low-calorie dog food',
        feeding: 'Controlled portions to maintain healthy weight.',
      },
    },
    {
      id: 4,
      name: 'German Shepherd',
      image: Dog4,
      price: 10000,
      discount: 0.2,
      desc: {
        breed: 'German Shepherd',
        origin: 'Germany, late 19th century',
        behavior: 'Loyal, intelligent, protective',
        diet: 'High-protein dog food',
        feeding: 'Feed twice daily with lean protein sources.',
      },
    },
    {
      id: 5,
      name: 'Golden Retriever',
      image: Dog5,
      price: 9000,
      discount: 0.05,
      desc: {
        breed: 'Golden Retriever',
        origin: 'Scotland',
        behavior: 'Gentle, friendly, kind temperament',
        diet: 'Balanced dog food, fish oils',
        feeding: 'Include omega-3 supplements for coat health.',
      },
    },
    {
      id: 6,
      name: 'Husky',
      image: Dog6,
      price: 12000,
      discount: 0.1,
      desc: {
        breed: 'Siberian Husky',
        origin: 'Siberia',
        behavior: 'Energetic, enduring, friendly',
        diet: 'High-protein dog food',
        feeding: 'Feed nutrient-dense kibble, avoid fatty foods.',
      },
    },
  ],
  Cats: [
    {
      id: 7,
      name: 'Persian Cat',
      image: Cat1,
      price: 5000,
      discount: 0.1,
      desc: {
        breed: 'Persian',
        origin: 'Persia (Iran)',
        behavior: 'Elegant, calm, loves to relax',
        diet: 'Premium cat food, wet food',
        feeding: 'Wet food daily to support hydration.',
      },
    },
    {
      id: 8,
      name: 'Siamese Cat',
      image: Cat2,
      price: 4500,
      discount: 0.0,
      desc: {
        breed: 'Siamese',
        origin: 'Thailand',
        behavior: 'Talkative, social, affectionate',
        diet: 'High-protein cat food',
        feeding: 'Feed small portions multiple times daily.',
      },
    },
    {
      id: 9,
      name: 'British Shorthair',
      image: Cat3,
      price: 5500,
      discount: 0.15,
      desc: {
        breed: 'British Shorthair',
        origin: 'United Kingdom',
        behavior: 'Cuddly, easygoing, affectionate',
        diet: 'Balanced cat food',
        feeding: 'Dry kibble with occasional wet food.',
      },
    },
    {
      id: 10,
      name: 'Bengal Cat',
      image: Cat4,
      price: 7000,
      discount: 0.25,
      desc: {
        breed: 'Bengal',
        origin: 'USA',
        behavior: 'Wild-looking, affectionate, energetic',
        diet: 'High-protein, grain-free food',
        feeding: 'Raw or wet food for energy needs.',
      },
    },
    {
      id: 11,
      name: 'Maine Coon',
      image: Cat5,
      price: 8000,
      discount: 0.0,
      desc: {
        breed: 'Maine Coon',
        origin: 'Maine, USA',
        behavior: 'Friendly, sociable, gentle giant',
        diet: 'High-quality cat food',
        feeding: 'Large portions to match their size.',
      },
    },
    {
      id: 12,
      name: 'Sphynx Cat',
      image: Cat6,
      price: 6000,
      discount: 0.1,
      desc: {
        breed: 'Sphynx',
        origin: 'Canada',
        behavior: 'Affectionate, warm-seeking, playful',
        diet: 'High-calorie cat food',
        feeding: 'Nutrient-rich food to support metabolism.',
      },
    },
  ],
  Rabbits: [
    {
      id: 13,
      name: 'Mini Lop',
      image: Rabbit1,
      price: 2000,
      discount: 0.1,
      desc: {
        breed: 'Mini Lop',
        origin: 'Netherlands',
        behavior: 'Gentle, cuddly, compact',
        diet: 'Hay, pellets, fresh veggies',
        feeding: 'Unlimited hay, limited pellets daily.',
      },
    },
    {
      id: 14,
      name: 'Dutch Rabbit',
      image: Rabbit2,
      price: 1800,
      discount: 0.0,
      desc: {
        breed: 'Dutch',
        origin: 'Netherlands',
        behavior: 'Friendly, sweet, calm',
        diet: 'Hay, greens, pellets',
        feeding: 'Fresh greens like romaine daily.',
      },
    },
    {
      id: 15,
      name: 'Lionhead Rabbit',
      image: Rabbit3,
      price: 2500,
      discount: 0.15,
      desc: {
        breed: 'Lionhead',
        origin: 'Belgium',
        behavior: 'Lively, social, playful',
        diet: 'Hay, veggies, pellets',
        feeding: 'Timothy hay with carrot treats.',
      },
    },
    {
      id: 16,
      name: 'Rex Rabbit',
      image: Rabbit4,
      price: 2200,
      discount: 0.0,
      desc: {
        breed: 'Rex',
        origin: 'France',
        behavior: 'Calm, gentle, velvety fur',
        diet: 'Hay, pellets, greens',
        feeding: 'High-fiber hay, avoid sugary treats.',
      },
    },
    {
      id: 17,
      name: 'Harlequin Rabbit',
      image: Rabbit5,
      price: 2300,
      discount: 0.2,
      desc: {
        breed: 'Harlequin',
        origin: 'France',
        behavior: 'Playful, energetic, colorful',
        diet: 'Hay, veggies, pellets',
        feeding: 'Diverse greens for nutrition.',
      },
    },
    {
      id: 18,
      name: 'Netherland Dwarf',
      image: Rabbit6,
      price: 2400,
      discount: 0.1,
      desc: {
        breed: 'Netherland Dwarf',
        origin: 'Netherlands',
        behavior: 'Bold, compact, full of personality',
        diet: 'Hay, pellets, veggies',
        feeding: 'Limited pellets, abundant hay.',
      },
    },
  ],
  Tortoise: [
    {
      id: 19,
      name: 'Indian Star Tortoise',
      image: Tortoise1,
      price: 4000,
      discount: 0.05,
      desc: {
        breed: 'Indian Star',
        origin: 'India, Sri Lanka',
        behavior: 'Docile, calm, sun-loving',
        diet: 'Leafy greens, grasses',
        feeding: 'Kale, dandelion greens daily.',
      },
    },
    {
      id: 20,
      name: 'Sulcata Tortoise',
      image: Tortoise2,
      price: 6000,
      discount: 0.15,
      desc: {
        breed: 'Sulcata',
        origin: 'Sahel, Africa',
        behavior: 'Hardy, long-living, social',
        diet: 'Grasses, hay, veggies',
        feeding: 'High-fiber grasses, minimal fruit.',
      },
    },
    {
      id: 21,
      name: 'Greek Tortoise',
      image: Tortoise3,
      price: 3500,
      discount: 0.0,
      desc: {
        breed: 'Greek',
        origin: 'Southern Europe, North Africa',
        behavior: 'Sun-loving, calm, hardy',
        diet: 'Leafy greens, weeds',
        feeding: 'Mixed greens, avoid spinach.',
      },
    },
    {
      id: 22,
      name: 'Leopard Tortoise',
      image: Tortoise4,
      price: 5000,
      discount: 0.1,
      desc: {
        breed: 'Leopard',
        origin: 'East Africa',
        behavior: 'Gentle, spotted, calm',
        diet: 'Grasses, succulents',
        feeding: 'Grass-based diet, occasional cactus.',
      },
    },
    {
      id: 23,
      name: 'Red-Footed Tortoise',
      image: Tortoise5,
      price: 4500,
      discount: 0.0,
      desc: {
        breed: 'Red-Footed',
        origin: 'South America',
        behavior: 'Friendly, sociable, colorful',
        diet: 'Greens, fruits, protein',
        feeding: 'Mixed greens with occasional fruit.',
      },
    },
    {
      id: 24,
      name: 'Hermann’s Tortoise',
      image: Tortoise6,
      price: 3800,
      discount: 0.05,
      desc: {
        breed: 'Hermann’s',
        origin: 'Southern Europe',
        behavior: 'Easygoing, long-living, calm',
        diet: 'Greens, weeds, grasses',
        feeding: 'Mixed greens daily, avoid high-protein foods.',
      },
    },
  ],
  'Aquarium Fish': [
    {
      id: 25,
      name: 'Goldfish',
      image: Fish1,
      price: 500,
      discount: 0.0,
      desc: {
        breed: 'Goldfish',
        origin: 'East Asia',
        behavior: 'Calming, hardy, social',
        diet: 'Flake food, pellets',
        feeding: 'Feed small amounts twice daily.',
      },
    },
    {
      id: 26,
      name: 'Betta Fish',
      image: Fish2,
      price: 800,
      discount: 0.2,
      desc: {
        breed: 'Betta',
        origin: 'Southeast Asia',
        behavior: 'Bold, colorful, territorial',
        diet: 'Betta pellets, frozen food',
        feeding: 'High-protein pellets, avoid overfeeding.',
      },
    },
    {
      id: 27,
      name: 'Angelfish',
      image: Fish3,
      price: 1000,
      discount: 0.15,
      desc: {
        breed: 'Angelfish',
        origin: 'Amazon River, South America',
        behavior: 'Graceful, elegant, social',
        diet: 'Flakes, live food',
        feeding: 'Varied diet with brine shrimp.',
      },
    },
    {
      id: 28,
      name: 'Tetra Fish',
      image: Fish4,
      price: 600,
      discount: 0.0,
      desc: {
        breed: 'Tetra',
        origin: 'South America',
        behavior: 'Schooling, shiny, peaceful',
        diet: 'Flakes, small pellets',
        feeding: 'Feed flakes in small amounts.',
      },
    },
    {
      id: 29,
      name: 'Guppy',
      image: Fish5,
      price: 400,
      discount: 0.1,
      desc: {
        breed: 'Guppy',
        origin: 'Northeast South America',
        behavior: 'Colorful, active, easygoing',
        diet: 'Flakes, live food',
        feeding: 'Flakes with occasional live food.',
      },
    },
    {
      id: 30,
      name: 'Clownfish',
      image: Fish6,
      price: 700,
      discount: 0.05,
      desc: {
        breed: 'Clownfish',
        origin: 'Pacific/Indian Oceans',
        behavior: 'Playful, social, anemone-loving',
        diet: 'Flakes, pellets, frozen food',
        feeding: 'Small portions of varied diet.',
      },
    },
  ],
};

export const featuredProducts = [
  {
    id: 31,
    name: 'Golden Retriever',
    image: DogProduct,
    price: 15000,
    discount: 0.1,
    desc: {
      breed: 'Golden Retriever',
      origin: 'Scotland',
      behavior: 'Gentle, friendly, kind',
      diet: 'Balanced dog food, fish oils',
      feeding: 'Omega-3 rich kibble twice daily.',
    },
  },
  {
    id: 32,
    name: 'Sulcata Tortoise',
    image: TortoiseProduct,
    price: 8000,
    discount: 0.15,
    desc: {
      breed: 'Sulcata',
      origin: 'Sahel, Africa',
      behavior: 'Hardy, social, long-living',
      diet: 'Grasses, leafy greens',
      feeding: 'High-fiber grasses daily.',
    },
  },
  {
    id: 33,
    name: 'Lionhead Rabbit',
    image: RabbitProduct,
    price: 10000,
    discount: 0.0,
    desc: {
      breed: 'Lionhead',
      origin: 'Belgium',
      behavior: 'Lively, social, playful',
      diet: 'Hay, pellets, veggies',
      feeding: 'Timothy hay with fresh greens.',
    },
  },
  {
    id: 34,
    name: 'Betta Fish',
    image: FishProduct,
    price: 800,
    discount: 0.2,
    desc: {
      breed: 'Betta',
      origin: 'Southeast Asia',
      behavior: 'Bold, colorful, territorial',
      diet: 'Betta pellets, frozen food',
      feeding: 'High-protein pellets, avoid overfeeding.',
    },
  },
];

export const bestSellingPets = [
  {
    id: 1,
    name: 'Labrador Retriever',
    image: Dog1,
    price: 8000,
    discount: 0.1,
    desc: {
      breed: 'Labrador Retriever',
      origin: 'Newfoundland, Canada',
      behavior: 'Friendly, energetic, great with families',
      diet: 'High-quality dog food, lean meats',
      feeding: 'Feed premium kibble twice daily, avoid overfeeding.',
    },
  },
  {
    id: 7,
    name: 'Persian Cat',
    image: Cat1,
    price: 5000,
    discount: 0.1,
    desc: {
      breed: 'Persian',
      origin: 'Persia (Iran)',
      behavior: 'Elegant, calm, loves to relax',
      diet: 'Premium cat food, wet food',
      feeding: 'Wet food daily to support hydration.',
    },
  },
  {
    id: 13,
    name: 'Mini Lop',
    image: Rabbit1,
    price: 2000,
    discount: 0.1,
    desc: {
      breed: 'Mini Lop',
      origin: 'Netherlands',
      behavior: 'Gentle, cuddly, compact',
      diet: 'Hay, pellets, fresh veggies',
      feeding: 'Unlimited hay, limited pellets daily.',
    },
  },
  {
    id: 26,
    name: 'Betta Fish',
    image: Fish2,
    price: 800,
    discount: 0.2,
    desc: {
      breed: 'Betta',
      origin: 'Southeast Asia',
      behavior: 'Bold, colorful, territorial',
      diet: 'Betta pellets, frozen food',
      feeding: 'High-protein pellets, avoid overfeeding.',
    },
  },
];