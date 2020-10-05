
console.log('it is working');
//get an input from a user for celsius degree
//Calculate kelvin degree
//print the result

let celsius= prompt("Enter celsius degree")*1;

let kelvin=celsius+273.15;
//kelvin=Math.round(kelvin);
kelvin=kelvin.toFixed(2);
console.log(celsius +" Celsius degree equals to "+kelvin + " degree kelvin" )
//alert(celsius +" Celsius degree equals to "+kelvin + " degree kelvin" );