import Item from './ITEM'


let types = {
    Catalog: 'catalog',
    Basket: 'basket',
}

export default class List{
    constructor (container, url, basket = null){
        this.url = 'https://raw.githubusercontent.com/kellolo/static/master/JSON' + url;
        this.container = document.querySelector(container);
        this.basket = basket;
        this.items = [];
        this._init();
    }

    _init(){
        this._get(this.url)
            .then(data => {this.items = this.basket ? data : data.content})
            .finally(() => {
                this._render();
                this._handleActions();
            })
    }

    _get(url){
        return fetch(url) //JSON
        .then(data => data.json()) // JSON >>> Obj/Array
    }

    _render(){
        let htmlStr = '';
        this.items.forEach(item => {
           // htmlStr += createItemTemplate(item);
           htmlStr += new Item(item, types[this.constructor.name])._render();
        });
        this.container.innerHTML = htmlStr;
    }
}