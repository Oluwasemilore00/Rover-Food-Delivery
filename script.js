// scripts.js

let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrder();
}

function updateOrder() {
    const orderList = document.getElementById('order-list');
    const totalPrice = document.getElementById('total-price');
    orderList.innerHTML = '';

    order.forEach((orderItem, index) => {
        const li = document.createElement('li');
        li.textContent = `${orderItem.item} - ₦${orderItem.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromOrder(index);
        li.appendChild(removeButton);
        orderList.appendChild(li);
    });

    totalPrice.textContent = total.toFixed(2);
}

function removeFromOrder(index) {
    total -= order[index].price;
    order.splice(index, 1);
    updateOrder();
}

document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    if (order.length > 0) {
        alert(`Order placed!\nName: ${name}\nAddress: ${address}\nPhone: ${phone}\nTotal: ₦${total.toFixed(2)}`);
        order = [];
        total = 0;
        updateOrder();
        document.getElementById('order-form').reset();
    } else {
        alert('Your order is empty!');
    }
});
