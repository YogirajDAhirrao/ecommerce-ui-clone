import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js';

/*
Promise.all([
    loadProductsFetch()
]).then((values)=>{
    renderOrderSummary();
    renderPaymentSummary();
})

// new Promise((resolve)=>{
//     loadProductsFetch();
//     resolve('value1');
// }).then((value)=>{ // this is the next step // Whatever we give to resolve, is saved in this paarameter
//     renderOrderSummary();
//     renderPaymentSummary();
*/
// });
// Promise.all() : Lets us run multiple promises at the same time. And wait for all of them to finish
// .all([]) contains array of promises and then use .then to add the next step
/* 
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
})
    This can be done using Promises
    */

async function loadPage(){ // async make a fxn return a promise
    console.log('load page');
    // loadProductsFetch().then(()=>{}) 
    // instead of this ^, use below
    // for error handling...
    try{
    await loadProductsFetch(); // lets us write async code like normal
    // loadproductsfetch will wait for load page 
    } catch(error){
        console.log("ERROR")

    }
    renderOrderSummary();
    renderPaymentSummary();
    return 'value 2'
}
//loadPage();
//Since it returns a promise,
loadPage().then((value)=>{
    console.log(value)
    console.log('Next step');
})
// feature of async is that it lets us use await
//await : lets us wait for a promise to finish before going to the next line