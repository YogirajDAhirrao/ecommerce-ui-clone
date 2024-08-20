export const orders = JSON.parse(localStorage.getItem('orders')) || [];
export function addOrders(order){
    orders.unshift(order); // to add order at the front instead of the back

    saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders));
}