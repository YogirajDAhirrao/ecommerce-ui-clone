import { cart, removeFromCart , updateDeliveryOptions} from '../../data/cart.js';
import { products ,getProduct} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js';
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions, getDeliveryOptions } from '../../data/deliveryOptions.js';
import { renderPaymentSummary } from './paymentSummary.js';


let s = dayjs();

export  function renderOrderSummary(){
  let cartSummaryHTML = ``;
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;


    const matchingProduct = getProduct(productId);
    

    const deliveryOptionId = cartItem.deliveryOptionId;

    const  deliveryOption = getDeliveryOptions(deliveryOptionId);
    
    


    cartSummaryHTML += `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
              <div class="delivery-date">
                Delivery date: ${s.add(deliveryOption.time,'day').format('dddd , MMMM D,YYYY')}
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image"
                  src="${matchingProduct.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingProduct.name}
                  </div>
                  <div class="product-price">
                    ${matchingProduct.getPrice()}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>
                  ${deliveryoptionsHTML(matchingProduct, cartItem)}
                </div>
              </div>
            </div>`;



  })

  function deliveryoptionsHTML(matchingProduct, cartItem) {
    let html = '';
    deliveryOptions.forEach((deliveryopt) => {
      const cost = deliveryopt.price === 0 ? 'FREE':`$${formatCurrency(deliveryopt.price)}`;
      const isChecked = deliveryopt.id === cartItem.deliveryOptionId;
      html += `<div class="delivery-option js-delivery-option " 
                data-delivery-id="${matchingProduct.id}"
                data-delivery-option-id ="${deliveryopt.id}">
                    <input type="radio"
                    ${isChecked ? 'Checked':''}
                    
                      class="delivery-option-input"
                      name="delivery-option-1-${matchingProduct.id}">
                    <div>
                      <div class="delivery-option-date">
                      ${s.add(deliveryopt.time, 'day').format('dddd , MMMM D , YYYY')}
                      </div>
                      <div class="delivery-option-price">
                        ${cost}- Shipping
                      </div>
                    </div>
                  </div>`
    });
    return html;


  }
  document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;
  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      
      const container = document.querySelector(`.js-cart-item-container-${productId}`);
      container.remove();
      renderPaymentSummary();

    });
  });

  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click', ()=>{
      const productId= element.dataset.deliveryId;
      const deliveryOptionId = element.dataset.deliveryOptionId;
      updateDeliveryOptions(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();

    });
  });
}


