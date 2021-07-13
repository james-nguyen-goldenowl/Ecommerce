const productList = [
  {
    id: 1,
    name: 'Romneya',
    price: '$46.04',
    imageUrl: require('../public/1.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'T-shirt',
    categoryBonus: 'New',
  },
  {
    id: 2,
    name: 'Verrucaria',
    price: '$38.75',
    imageUrl: require('../public/2.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet'],
    size: ['S', 'M', 'L'],
    sale: '$22.56',
    category: 'Tops',
  },
  {
    id: 3,
    name: 'Cladonia abbreviatula G. Merr.',
    price: '$48.82',
    imageUrl: require('../public/3.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$23.50',
    category: 'Ice Cream - Fudge Bars',
  },
  {
    id: 4,
    name: 'Argythamnia candicans Sw.',
    price: '$46.63',
    imageUrl: require('../public/4.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$23.98',
    category: 'Tops',
  },
  {
    id: 5,
    name: 'Miconia tetrastoma Naud.',
    price: '$36.88',
    imageUrl: require('../public/5.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$32.72',
    category: 'Tops',
  },
  {
    id: 6,
    name: 'Carludovica Ruiz & Pav.',
    price: '$41.06',
    imageUrl: require('../public/6.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Tops',
    categoryBonus: 'New',
  },
  {
    id: 7,
    name: 'Selaginella densa Rydb. var. scopulorum (Maxon) R. Tryon',
    price: '$44.49',
    imageUrl: require('../public/7.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Puce'],
    size: ['S', 'M', 'L', '2XL'],
    categoryBonus: 'New',
    category: 'Pork - Hock And Feet Attached',
  },
  {
    id: 8,
    name: 'Camassia cusickii S. Watson',
    price: '$44.68',
    imageUrl: require('../public/8.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Tops',
    categoryBonus: 'New',
  },
  {
    id: 9,
    name: 'Sanicula crassicaulis Poepp. ex DC.',
    price: '$47.46',
    imageUrl: require('../public/9.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow'],
    size: ['S', 'M', 'L', '2XL'],
    categoryBonus: 'New',
    category: 'Demo',
  },
  {
    id: 10,
    name: 'Frangula purshiana (DC.) A. Gray ssp. annonifolia (Greene) Sawyer & S.W. Edwards',
    price: '$38.49',
    imageUrl: require('../public/10.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    categoryBonus: 'New',
    category: 'Tops',
  },
  {
    id: 11,
    name: 'Stokesia laevis (Hill) Greene',
    price: '$44.54',
    imageUrl: require('../public/11.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$30.01',
    category: 'Wine - Red Oakridge Merlot',
  },
  {
    id: 12,
    name: 'Ardisia humilis Vahl',
    price: '$44.74',
    imageUrl: require('../public/12.jpeg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$25.99',
    category: 'Sugar - Palm',
  },
  {
    id: 13,
    name: 'Fevillea L.',
    price: '$41.67',
    imageUrl: require('../public/13.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise', 'Blue'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$30.46',
    category: 'Juice - Lime',
  },
  {
    id: 14,
    name: 'Dubautia plantaginea Gaudich.',
    price: '$41.08',
    imageUrl: require('../public/14.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$20.18',
    category: 'Tops',
  },
  {
    id: 15,
    name: 'Cestrum L.',
    price: '$38.01',
    imageUrl: require('../public/15.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    categoryBonus: 'New',
    category: 'Tops',
  },
  {
    id: 16,
    name: 'Pilea Lindl.',
    price: '$48.75',
    imageUrl: require('../public/16.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$26.10',
    category: 'Soup - Clam Chowder, Dry Mix',
  },
  {
    id: 17,
    name: 'Navarretia intertexta (Benth.) Hook. ssp. propinqua (Suksd.) Day',
    price: '$47.74',
    imageUrl: require('../public/17.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    categoryBonus: 'New',
    category: 'Salt - Table',
  },
  {
    id: 18,
    name: 'Wolffiella lingulata (Hegelm.) Hegelm.',
    price: '$47.95',
    imageUrl: require('../public/18.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Appetiser - Bought',
    categoryBonus: 'New',
  },
  {
    id: 19,
    name: 'Palafoxia texana DC. var. texana',
    price: '$46.00',
    imageUrl: require('../public/19.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$29.43',
    category: 'Juice - Apple, 500 Ml',
  },
  {
    id: 20,
    name: 'Allium dichlamydeum Greene',
    price: '$39.49',
    imageUrl: require('../public/20.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Demo',
    categoryBonus: 'New',
  },
  {
    id: 21,
    name: 'Cynanchum scoparium Nutt.',
    price: '$43.47',
    imageUrl: require('../public/21.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$20.88',
    category: 'Jam - Raspberry,jar',
  },
  {
    id: 22,
    name: 'Poeltinula cerebrina (DC.) Hafellner',
    price: '$42.18',
    imageUrl: require('../public/22.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$40',
    category: 'Demo',
  },
  {
    id: 23,
    name: 'Iva imbricata Walter',
    price: '$39.27',
    imageUrl: require('../public/23.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$23.69',
    category: 'Mustard',
  },
  {
    id: 24,
    name: 'Buellia nantiana de Lesd.',
    price: '$44.48',
    imageUrl: require('../public/24.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Lemon Grass',
    categoryBonus: 'New',
  },
  {
    id: 25,
    name: 'Strychnos nux-vomica L.',
    price: '$44.09',
    imageUrl: require('../public/25.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Lentils',
  },
  {
    id: 26,
    name: 'Sarracenia ×readii C.R. Bell',
    price: '$42.74',
    imageUrl: require('../public/26.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Demo',
    categoryBonus: 'New',
  },
  {
    id: 27,
    name: 'Schefflera morototonii (Aubl.) Maguire, Steyerm. & Frodin',
    price: '$40.22',
    imageUrl: require('../public/27.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$30.74',
    category: 'Assorted',
  },
  {
    id: 28,
    name: 'Erodium brachycarpum (Godr.) Thell.',
    price: '$47.87',
    imageUrl: require('../public/28.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Demo',
    categoryBonus: 'New',
  },
  {
    id: 29,
    name: 'Hibiscus brackenridgei A. Gray',
    price: '$41.74',
    imageUrl: require('../public/29.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$40.49',
    category: 'Tart',
  },
  {
    id: 30,
    name: 'Thelypteris rudis (Kunze) Proctor',
    price: '$41.35',
    imageUrl: require('../public/30.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Quail',
    categoryBonus: 'New',
  },
  {
    id: 31,
    name: 'Corallorhiza striata Lindl. var. striata',
    price: '$49.18',
    imageUrl: require('../public/31.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$26.34',
    category: 'Pepper',
  },
  {
    id: 32,
    name: 'Astrolepis cochisensis (Goodding) Benham & Windham ssp. chihuahuaensis Benham',
    price: '$35.78',
    imageUrl: require('../public/32.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$22.44',
    category: 'Onions',
  },
  {
    id: 33,
    name: 'Sicyos microphyllus Kunth',
    price: '$37.26',
    imageUrl: require('../public/33.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$21.86',
    category: 'Wooden',
  },
  {
    id: 34,
    name: 'Pinus densiflora Siebold & Zucc.',
    price: '$36.77',
    imageUrl: require('../public/34.jpeg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Flour',
    categoryBonus: 'New',
  },
  {
    id: 35,
    name: 'Elaphoglossum',
    price: '$36.55',
    imageUrl: require('../public/35.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$33.47',
    category: 'Pork',
  },
  {
    id: 36,
    name: 'Liatris pycnostachya',
    price: '$45.59',
    imageUrl: require('../public/36.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$25.04',
    category: 'Crab',
  },
  {
    id: 37,
    name: 'Isothecium Brid.',
    price: '$40.86',
    imageUrl: require('../public/37.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Salmon',
  },
  {
    id: 38,
    name: 'Lycium californicum',
    price: '$49.14',
    imageUrl: require('../public/38.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$27.65',
    category: 'Crush',
  },
  {
    id: 39,
    name: 'Cheirodendron',
    price: '$48.34',
    imageUrl: require('../public/39.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Wine',
    categoryBonus: 'New',
  },
  {
    id: 40,
    name: 'Helianthemum',
    price: '$35.73',
    imageUrl: require('../public/40.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$21.39',
    category: 'Shrimp',
  },
  {
    id: 41,
    name: 'Betula papyrifera',
    price: '$46.38',
    imageUrl: require('../public/41.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$22.69',
    category: 'Wine',
  },
  {
    id: 42,
    name: 'Euphorbia floridana',
    price: '$42.95',
    imageUrl: require('../public/42.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Container',
    categoryBonus: 'New',
  },
  {
    id: 43,
    name: 'Astragalus lentiginosus',
    price: '$49.48',
    imageUrl: require('../public/43.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$20.21',
    category: 'Glaze',
  },
  {
    id: 44,
    name: 'Ceanothus jepsonii',
    price: '$49.23',
    imageUrl: require('../public/44.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Chick Peas',
    categoryBonus: 'New',
  },
  {
    id: 45,
    name: 'Tournefortia volubilis L.',
    price: '$49.92',
    imageUrl: require('../public/45.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$22.71',
    category: 'Lobster',
  },
  {
    id: 46,
    name: 'Galactia volubilis',
    price: '$41.28',
    imageUrl: require('../public/46.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    category: 'Lady Fingers',
    categoryBonus: 'New',
  },
  {
    id: 47,
    name: 'Achnatherum P',
    price: '$42.70',
    imageUrl: require('../public/47.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$23.74',
    category: 'Water - Tonic',
  },
  {
    id: 48,
    name: 'Brickellia',
    price: '$48.04',
    imageUrl: require('../public/48.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$23.16',
    category: 'Beef Wellington',
    categoryBonus: 'New',
  },
  {
    id: 49,
    name: 'Diplotomma',
    price: '$42.92',
    imageUrl: require('../public/49.jpg'),
    color: ['Indigo', 'Teal', 'Mauv', 'Violet', 'Yellow', 'Turquoise'],
    size: ['S', 'M', 'L', '2XL'],
    sale: '$33.45',
    category: 'Pasta',
  },
  {
    id: 50,
    name: 'Desmanthus',
    price: '$41.57',
    imageUrl: require('../public/50.jpg'),
    color: 'Orange',
    size: ['S', 'M', 'L', '2XL'],
    category: 'Tart Shell',
    categoryBonus: 'New',
  },
];
export {productList};
