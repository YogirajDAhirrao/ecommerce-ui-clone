export const deliveryOptions = [{
    id : "1",
    time: 7,
    price: 0
},{
    id: '2',
    time: 3,
    price: 499
},{
    id: '3',
    time: 1,
    price: 999
}];

export function getDeliveryOptions(deliveryOptionId){
   

    let deliveryOption;
    deliveryOptions.forEach((option)=>{
      if(option.id=== deliveryOptionId){
        deliveryOption = option;

      }
    });
    return deliveryOption || deliveryOptions[0];
}
