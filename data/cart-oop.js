function Cart(localStorageKey) {// function to create objects
    const cart = {
        cartItems: undefined,
        loadFromStorage() {

            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));
            if (!this.cartItems) {
                this.cartItems = [{
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: '1'
                }, {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: '2'
                }];
            }
        },

        saveToStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        AddtoCart(productId) {
            let matchingitem;
            this.cartItems.forEach((item) => {
                if (productId === item.productId) {
                    matchingitem = item

                }
            });

            if (matchingitem) {
                matchingitem.quantity += 1;
            } else {
                this.cartItemspush({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: '1'
                });

            };
            this.saveToStorage();
        },
        removeFromCart(productId) {
            const newCart = [];
            this.cartItems.forEach((cartItem) => {
                if (cartItem.productId != productId) {
                    newCart.push(cartItem);
                }

            });
            this.cartItems = newCart;
            this.saveToStorage();
        },

        updateDeliveryOptions(productID, deliveryOptionId) {
            let matchingitem;
            this.cartItems.forEach((item) => {
                if (productID === item.productId) {
                    matchingitem = item

                }
            });
            matchingitem.deliveryOptionId = deliveryOptionId;
            this.saveToStorage();
        }
    };
    return cart;
}
const cart = Cart('Cart-oop');
const Business = Cart('cart-business');

cart.loadFromStorage();
console.log(cart);





