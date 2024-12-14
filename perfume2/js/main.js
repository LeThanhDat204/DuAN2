var produceItems = document.querySelectorAll('.produce');
var overlay = document.querySelector('.overlay');
var detailProduct = document.querySelector('.detailProduct');
var closeBtn = document.querySelector('.close');

produceItems.forEach(function(element) {
    element.addEventListener('mouseover', function() {
        var nameProduct = element.querySelector('#hangsp').textContent;
        var categoryProduct = element.querySelector('#tensp').textContent;
        var priceProduct = element.querySelector('#giasp').textContent;
        var imageProduct = element.querySelector('img').src;

        document.getElementById('nameProductDetail').textContent = nameProduct;
        document.getElementById('categoryProductDetail').textContent = categoryProduct;
        document.getElementById('imageProductDetail').src = imageProduct;
        document.getElementById('priceProductDetail').textContent = priceProduct;

        overlay.style.display = 'block';
        detailProduct.style.display = 'block';
    });
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    detailProduct.style.display = 'none';
});












