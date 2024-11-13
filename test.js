
<script>
const pricePerUnit = 15;

function updateTotalPrice() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const totalPrice = pricePerUnit * quantity;
    document.getElementById('total-price').textContent = totalPrice;
}

function addToCart() {
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const totalPrice = pricePerUnit * quantity;
    alert(You added ${quantity} items to your cart for Rs. ${totalPrice});
}
</script>