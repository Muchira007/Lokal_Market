export const categories = [
    {
        id: 1,
        Item: 'Vegetables',
        image: require('../assets/Vegetables.jpg'),
        subcategories: [
            {
                id: 1,
                Item: 'Spinach',
                image: require('../assets/Spinach.jpg'),
            },
            {
                id: 2,
                Item: 'Tomatoes',
                image: require('../assets/Tomatoes.jpg'),
            },
            {
                id: 3,
                Item: 'BokChoy',
                image: ('../assets/bokchoy.jpg'),
            },
            {
                id: 4,
                Item: 'Corriander',
                image: ('../assets/Corriander.jpg'),
            },
            {
                id: 5,
                Item: 'Cucumber',
                image: ('../assets/cucumber.jpg'),
            },
            {
                id: 6,
                Item: 'Green Pepper',
                image: ('../assets/Green Pepper.jpg'),
            },
            {
                id: 7,
                Item: 'Ovacado',
                image: ('../assets/Ovacado.jpg'),
            },
            {
                id: 8,
                Item: 'Potatoes',
                image: ('../assets/Potatoes.jpg'),
            },
            {
                id: 9,
                Item: 'Yellow Pepper',
                image: ('../assets/YellowPepper.jpg'),
            },
            ],
    },
    {
        id: 2,
        Item: 'Fruits',
        image: require('../assets/Fruits.jpg'),
        subcategories: [
            {
                id: 1,
                Item: 'Bananas',
                image: require('../assets/Banana.jpg'),
            },
            {
                id: 2,
                Item: 'Oranges',
                image: require('../assets/Oranges.jpg'),
            },
            {
                id: 3,
                Item: 'Grapes',
                image: ('../assets/grapes.jpg'),
            },
            {
                id: 4,
                Item: 'Green Apples',
                image: ('../assets/Green Apples.jpg'),
            },
            {
                id: 5,
                Item: 'Lemons',
                image: ('../assets/lemon.jpg'),
            },
            {
                id: 6,
                Item: 'Pineapples',
                image: ('../assets/Pineapple.jpg'),
            },
            {
                id: 7,
                Item: 'Plums',
                image: ('../assets/Plums.jpg'),
            },
            {
                id: 8,
                Item: 'Red Apple',
                image: ('../assets/RedApple.jpg'),
            },
            {
                id: 9,
                Item: 'Tanjerin',
                image: ('../assets/Tanjerins.jpg'),
            },
            {
                id: 10,
                Item: 'Watermelon',
                image: ('../assets/Watermelon.jpg'),
            },
            {
                id: 11,
                Item: 'StrawBerries',
                image: ('../assets/StrawBerries.jpg'),
            },
        ],
    },
    {
        id: 3,
        Item: 'Groceries',
        image: require('../assets/Groceries.jpg'),
        subcategories: [
            {
                id: 1,
                Item: 'Rice',
                image: require('../assets/Rice.jpg'),
            },
            {
                id: 2,
                Item: 'Eggs',
                image: require('../assets/Eggs.jpg'),
            },
            {
                id: 3,
                Item: 'Popcorn',
                image: ('../assets/Popcorn Seeds.jpg'),
            },
            {
                id: 4,
                Item: 'French Beans',
                image: ('../assets/French Beans.jpg'),
            },
            {
                id: 5,
                Item: 'Green beans',
                image: ('../assets/Green beans.jpg'),
            },
            {
                id: 6,
                Item: 'Green Peas',
                image: ('../assets/GreenPeas.jpg'),
            },
            {
                id: 7,
                Item: 'Mixed Beans',
                image: ('../assets/Mixed Beans.jpg'),
            },
            {
                id: 8,
                Item: 'Spices',
                image: ('../assets/Spices.jpg'),
            },
        ],
    }
];
export const featured = [
    {   
        id: 1,
        title: "The Roaming Chef",
        description: "Hey general chief chef! Are You in th mood to prepare scrumptious meals, then I got you. This offers entails all necessary ingredients to prepare anything!",
        // image: require('../assets/MotherOfAll.jpg'),
        specials: [
            {
                id: 1,
                Item: "Mamamia!",
                image: require('../assets/MotherOfAll.jpg'),
                description: "Entails all necessary vegetables to cook anything",
                ingredients: " Carrots\n Potatoes\n Onions\n Tomatoes\n Spinach",
                stars: 5,
                reviews: '200',
                price: '600',
            },
            {
                id: 2,
                Item: "GOFruity!",
                image: require('../assets/FruitBigi.jpg'),
                description: "Entails all necessary fruits to prepare anything",
                ingredients: " Apples\n Bananas\n Oranges\n Grapes\n Pineapples",
                stars: 5,
                reviews: '100',
                price: '450',
            }
        ],
    },
    {   
        id: 2,
        title: "Dash & Go",
        description: "You, yes you over there! I know you want this.. Come and gerrit. These are quick and deliceous meals to get you through the day",
        // image: require('../assets/MotherOfAll.jpg'),
        specials: [
            {
                id: 11,
                Item: "Kenyan Soilder",
                image: require('../assets/Kenyan Soilder.jpg'),
                description: "Famously known as Githeri, a Kenyan Original. Are you in a rush? Or mabe feeling nostalgic grab this and you'll be energized for the day.",
                ingredients: " Carrots\n Potatoes\n Onions\n Tomatoes\n Mixed Beans\n Maize",
                stars: 5,
                reviews: '400',
                price: '100',
            },
            {
                id: 22,
                Item: "Up&Go",
                image: require('../assets/Up&Go.jpg'),
                description: "Talk about heritage, talk about character and this will always pop  up. Better Known as rice beans, this delicacy will never dissapoint",
                ingredients: " Carrots\n Potatoes\n Onions\n Tomatoes\n Mixed Beans\n Rice",
                stars: 5,
                reviews: '400',
                price: '150',
            }
        ],
    },
    {   
        id: 3,
        title: "Hulk & Bulk",
        description: "Make less trips to the store with this bulk offers!!",
        // image: require('../assets/MotherOfAll.jpg'),
        specials: [
            {
                id: 111,
                Item: "Cereal Killa",
                image: require('../assets/Cereal Killa.jpg'),
                description: "Do you like cereals? Then we Gat You! Everything you can think of we got it here",
                ingredients: " Yellow Beans\n Rice\n Green Peas\n French Beans\n Mixed Beans\n Maize",
                stars: 5,
                reviews: '50',
                price: '1500',
            },
            {
                id: 222,
                Item: "Fruity Friday",
                image: require('../assets/Fruits.jpg'),
                description: "Talk about healthy living! Chill in the house with  a fruit salad.",
                ingredients: " Bananas\n Tanjerins\n Oranges\n Ovacados\n Mixed Apples\n Grapes",
                stars: 5,
                reviews: '400',
                price: '1000',
            }
        ],
    }
];

export const specials = 
[
    {
        id: 1,
        Item: "Mamamia!",
        image: require('../assets/MotherOfAll.jpg'),
        description: "entails all neccessary vegetables to cook anything",
        stars: 5,
        reviews: '200',
    }
]