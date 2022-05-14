"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    data.shops.forEach(shop => {
        square += shop.width * shop.length;
    });
    console.log(square);
    let volume = data.height * square;
    console.log(volume);
    if (volume * data.moneyPer1m3 <= data.budget) {
        console.log('Бюджета достаточно');
    } else {console.log('Бюджета недостаточно');}
}
isBudgetEnough(shoppingMallData);