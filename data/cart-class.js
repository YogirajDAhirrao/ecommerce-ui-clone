class Cart{
    cartItems =undefined;
    #localStorageKey = undefined; // # is used to make a property private

    constructor(key){
        this.#localStorageKey = key;
        this.#loadFromStorage;
    }

    #loadFromStorage() {

        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
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
    }
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
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
    }
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
    }
    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId != productId) {
                newCart.push(cartItem);
            }

        });
        this.cartItems = newCart;
        this.saveToStorage();
    }
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

const cart = new Cart('cart-oop');
const Business = new Cart('cart-business');

console.log(Business);
console.log(cart);





