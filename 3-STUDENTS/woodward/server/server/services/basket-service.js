//объект с чисто-JS методами

//отдельной функцией делаем поиск в корзине для методов ниже
function _search(arr, id){
    return arr.find(el => el.productId == id)
}

module.exports = {
    //во всех методах после воздействия на массив корзины возвращаем обновленный массив\корзину

    //добавить элемент в корзину
    add(basket, item){
        basket.content.push(item);
        return basket
    },

    //изменить кол-во товаров в корзине
    change(basket, id, amount){
        let find = _search(basket.content, id);
            find.amount += amount;  //добавляем amount = 1, убираем amount = -1
        return basket
    },

    //удалить из корзины
    delete(basket, id){
        let find = _search(basket.content, id);
            basket.content.splice(basket.content.indexOf(find), 1);
        return basket
    }
}