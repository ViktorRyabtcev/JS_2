`use strict`;

const itemList = document.querySelector(`.goodsList`);


//https://github.com/GeekBrainsTutorial/online-store-api/
const goods = [
    {title:`Пиджак`, price: 1150},
    {title:`Ботинки`, price: 550},
    {title:`Носки`, price: 150},
    {title:`Шорты`, price: 550},
    {title:`Рубашка`, price: 550},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    null,
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},
    {title:`Футболка`, price: 450},


];




// Создаем список товаров для вывода
function createGoodsList(goods){
    let goodsList = ``;
    for(item of goods){
        if (item === undefined || item === null){
            continue;
        } else {
            goodsList += createItem(item);
        }
    };
    return goodsList;

};
//Создаем отдельный элемент из списка товаров
function createItem(item){
    return `
    <div class="item">
    <span>${item[`title`]}</span>
    <div class="foto">
        <img src="" alt="Фото товара">
    </div>
    <span>${item[`price`]} рублей</span>
    <a  class = "buttBascket" href="http://#">Добавить в корзину</a>
    </div>
`
};

itemList.innerHTML = createGoodsList(goods);

 