// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
var obj = {};
	if (currency>10000){
    obj.error="You are rich, my friend! We don't have so much coins for exchange";
    return obj;
    }
    if (currency/50>=1){
   var z = Math.floor(currency/50);
   obj.H=z;
   currency = currency % 50;
   }
   if (currency/25>=1){
   var z = Math.floor(currency/25);
   obj.Q=z;
   currency = currency%25;
   }
     if (currency/10>=1){
   var z = Math.floor(currency/10);
   obj.D=z;
   currency = currency%10;
   }
     if (currency/5>=1){
   var z = Math.floor(currency/5);
   obj.N=z;
   currency = currency%5;
   }
     if (currency/1>=1){
   var z = Math.floor(currency/1);
   obj.P=z;
   currency = currency%1;
   }
   return(obj);
}