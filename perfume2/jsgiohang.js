let totalAmount = 3350000; // Initial total amount

function addToCart() {
    const selectedQuantity = parseInt(document.getElementById('quantity').value);
    const productPrice = 3350000; // Price per item

    const subtotal = selectedQuantity * productPrice;
    totalAmount += subtotal;

    document.getElementById('total').innerHTML = `
        Phiếu thanh toán <br>
        Tạm tính : ${subtotal} <br>
        Tổng : ${totalAmount}
    `;
}