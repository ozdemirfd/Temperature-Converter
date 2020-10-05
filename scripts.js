
console.log('it is working');
//get an input from a user for celsius degree
//Calculate kelvin degree
//print the result

let celsius= prompt("Enter celsius degree")*1;

let kelvin=celsius+273.15;
let fahrenheit=(celsius*9/5)+32;
fahrenheit=fahrenheit.toFixed(2);
//kelvin=Math.round(kelvin);
kelvin=kelvin.toFixed(2);
console.log(celsius +" Celsius degree equals to "+kelvin + " kelvin and " +  fahrenheit +" fahrenheit" )
//alert(celsius +" Celsius degree equals to "+kelvin + " degree kelvin" +  fahrenheit +" fahrenheit" );