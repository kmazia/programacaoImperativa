let productsArr = [
    {
        "name": "banana",
        "price": 483,
        "quality": 30,
        "status": true
    },
    {
        "name": "pêra",
        "price": 10,
        "quality": 76,
        "status": false
    },
    {
        "name": "maçã",
        "price": 5,
        "quality": 80,
        "status": true
    }
];

newProduct = () => {

    ibtPrice = parseFloat(document.getElementById('price').value)
    quality = parseInt(document.getElementById('quality').value)
    parsedStatus = parseSTatus(document.getElementById('status').value)

    const newProduct = {
        name: document.getElementById('name').value,
        price: ibtPrice,
        quality: quality,
        status: parsedStatus
    }

    productsArr.push(newProduct)

    showProducts()
}

parseSTatus = (status) => {
    if(status === 'true') {
        return true
    } else {
        return false
    }
}

showProducts = () => {

    var myDiv = document.getElementById("myList1");
    myDiv.innerHTML = "";

    var row, cell, text, r, c,
    prop = [
        'name',
        'price',
        'quality',
        'status'
    ],
    table = document.getElementById("myList1");
    for (r = 0; r < productsArr.length; r++) {
        row = document.createElement('tr');
        for (c = 0; c < 4; c++) {
            cell = document.createElement('td');
            text = document.createTextNode(productsArr[r][prop[c]]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

mountCart = () => {
    let cart = []
    firstFilter = productsArr.filter(p => p.price >= 482 && p.price <= 1600)
    secoundFilter = productsArr.filter(p => p.quality > 60)
    thirdFilter = productsArr.filter(p => p.status)

    
    for(let i = 0; i < firstFilter.length; i++) {
        cart.push(firstFilter[i])
    }
    for(let i = 0; i < secoundFilter.length; i++) {
        cart.push(secoundFilter[i])
    }
    for(let i = 0; i < thirdFilter.length; i++) {
        cart.push(thirdFilter[i])
    }

    cart = removeDuplicates(cart)

    console.log(cart)

    var myDiv = document.getElementById("cart");
    myDiv.innerHTML = "";

    var row, cell, text, r, c,
    prop = [
        'name',
        'price',
        'quality',
        'status'
    ],
    table = document.getElementById("cart");
    for (r = 0; r < cart.length; r++) {
        row = document.createElement('tr');
        for (c = 0; c < 4; c++) {
            cell = document.createElement('td');
            text = document.createTextNode(cart[r][prop[c]]);
            cell.appendChild(text);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

removeDuplicates = (arr) => {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(!newArr.includes(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr
}