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

function Product(category, name, type, price){
    let typeName;
    this.category = category;
    this.type = type;
    this.price = price;
    this.render = function(){
        category.forEach( stuff => {
            document.write(`<tr>
                                <td class="tableCeil">
                                    <img class="tableImage" src="images/${name}/${stuff.type}.svg">
                                </td>
                                <td class="tableCeil">${typeName = stuff.type[0].toUpperCase() + stuff.type.slice(1,stuff.type.length).toLowerCase()}</td>`);
                if(Array.isArray(stuff.price)){
                    document.write(`<td class="tableCeil">${stuff.price[0]}$ - ${stuff.price[1]}$</td>`);
                }else{
                    document.write(`<td class="tableCeil">${stuff.price}$</td>`);
                }
                document.write(`</tr>`);
        });
    }
}

document.write('<div class="wrapper"><table class="mainTable"><tr><th>Illustration</th><th>Type</th><th>Price</th></tr>');
let productFurniture = new Product(furniture, Object.keys({furniture})[0]);             // я не понял как можно обнаружить название массива объектов,
let productDevices = new Product(devices, Object.keys({devices})[0]);                   // кроме такого способа. это значени требуется для паса картинки
let productAppliances = new Product(appliances, Object.keys({appliances})[0]);

productFurniture.render();
productDevices.render();
productAppliances.render();
document.write('</table></div>');