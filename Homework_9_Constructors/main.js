let furniture = [
    {
        type: 'desk',
        price: 27.87
    },
    {
        type: 'closet',
        price: 187.32
    },
    {
        type: 'chair',
        price: 79.29
    },
    {
        type: 'bed',
        price: 239.99
    }
];

let devices = [
    {
        type: 'desktop',
        price: [272, 769]
    },
    {
        type: 'laptop',
        price: [499, 1800]
    },
    {
        type: 'smartphone',
        price: [100, 800]
    },
    {
        type: 'tablet',
        price: [185, 1000]
    },
    {
        type: 'console',
        price: 889
    }
];

let appliances = [
    {
        type: 'oven',
        price: 780
    },
    {
        type: 'microwave',
        price: [50, 1400]
    },
    {
        type: 'mixer',
        price: 215.17
    }
];

function Product(category, type, price){
    this.category = category;
    this.type = type;
    this.price = price;
}
Product.prototype.render = function (){
    this.renderStr = (`<tr><td class="tableCeil"><img class="tableImage" src="images/${this.category}/${this.type}.svg"></td>
                           <td class="tableCeil">${this.type[0].toUpperCase() + this.type.slice(1,this.type.length).toLowerCase()}</td>`);
    if(Array.isArray(this.price)){
        this.renderStr += (`<td class="tableCeil">${this.price[0]}$ - ${this.price[1]}$</td>`);
    }else{
        this.renderStr += (`<td class="tableCeil">${this.price}$</td>`);
    }
    this.renderStr += (`</tr>`);
    return this.renderStr;
}
let category = (arr, name) => {
    arr.forEach(el =>{
        const product = new Product(name, el.type, el.price);
        document.write(product.render());
    });
}
document.write('<div class="wrapper"><table class="mainTable"><tr><th>Illustration</th><th>Type</th><th>Price</th></tr>');

category(furniture, "furniture");
category(devices, "devices");
category(appliances, "appliances");

document.write('</table></div>');
