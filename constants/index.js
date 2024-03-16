export const categories = [
    {
        id:1,
        Item:'Vegetables',
        image: require('../assets/Vegetables.jpg'),
    },
    {
        id:2,
        Item:'Fruits',
        image: require('../assets/Fruits.jpg'),
    },
    {
        id:3,
        Item:'Groceries',
        image:require('../assets/Groceries.jpg'),
    }
]
export const featured = 
{   
    id: 1,
    title: "Mother Of All",
    description: "Entails all neccessary ingredients to prepare anything!",
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
            id: 1,
            Item: "GOFruity!",
            image: require('../assets/FruitBigi.jpg'),
            description: "Entails all necessary fruits to prepare anything",
            ingredients: " Apples\n Bananas\n Oranges\n Grapes\n Pineapples",
            stars: 5,
            reviews: '100',
            price: '450',
        }
    ],

    // id: 2,
    // title: "HOt & Spicy",
    // description: "entails all neccessary ingredients to prepare anything!",
    // // image: require('../assets/MotherOfAll.jpg'),
    // specials: [
    //     {
    //         id: 1,
    //         Item: "Mamamia!",
    //         image: require('../assets/MotherOfAll.jpg'),
    //         description: "entails all neccessary vegetables to cook anything",
    //         stars: 5,
    //         reviews: '200',
    //     }
    // ]

}
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