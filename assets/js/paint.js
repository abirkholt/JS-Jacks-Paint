function configureListeners() {
    let images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        // iterate over images and add mouseover event listeners 
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity);
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity);
    }
}

function addOpacity(event) {
    // add appropriate CSS class
    this.classList.add('dim');
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    //remove appropriate CSS class
    this.classList.remove('dim');
    document.getElementById('color-price').textContent = '';
    document.getElementById('color-name').textContent = '';

    event.preventDefault();
}

function getProductInfo(paintColor) {
    let price;
    let colorName;

    switch (paintColor) {
        case 'pn1':
            price = '$14.99';
            colorName = 'Lime Green';
            updatePrice(colorName, price)
            break;
        case 'pn2':
            price = '$11.14';
            colorName = 'Medium Brown';
            updatePrice(colorName, price)
            break;
        case 'pn3':
            price = '$22.99';
            colorName = 'Royal Blue';
            updatePrice(colorName, price)
            break;
        case 'pn4':
            price = '$13.42';
            colorName = 'Soild Red';
            updatePrice(colorName, price)
            break;
        case 'pn5':
            price = '$21.98';
            colorName = 'Solid White';
            updatePrice(colorName, price)
            break;
        case 'pn6':
            price = '$4.99';
            colorName = 'Solid Black';
            updatePrice(colorName, price)
            break;
        case 'pn7':
            price = '$8.22';
            colorName = 'Solid Cyan';
            updatePrice(colorName, price)
            break;
        case 'pn8':
            price = '$11.99';
            colorName = 'Solid Purple';
            updatePrice(colorName, price)
            break;
        case 'pn9':
            price = '$14.99';
            colorName = 'Solid Yellow';
            updatePrice(colorName, price)
            break;
        default:
    }

    function updatePrice(colorName, price) {
        document.getElementById('color-name').textContent = colorName;
        document.getElementById('color-price').textContent = price;
    }

}
