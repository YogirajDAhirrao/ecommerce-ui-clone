import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js';



new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('Value1');// resolve helps us control when to go to the next step ie when after execution
    });
}).then((value)=>{ // this is the next step // Whatever we give to resolve, is saved in this paarameter
    renderOrderSummary();
    renderPaymentSummary();

});
// Promise.all() : Lets us run multiple promises at the same time. And wait for all of them to finish
// .all([]) contains array of promises and then use .then to add the next step
/* 
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
})
    This can be done using Promises
    */


