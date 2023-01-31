let arr = [[{ a: { price: 20 } }], [{ a: { price: 35 } }], [{ a: { price: 44 } }]];
let num_one = arr[0][0].a.price;
let num_two = arr[1][0].a.price;
let num_three = arr[2][0].a.price;
let total = num_one + num_two + num_three;


alert(num_one + ' + ' + num_two + ' + ' + num_three);
alert(num_one + ' + ' + num_two + ' + ' + num_three + ' = ' + total)
console.log('How many digits: ' + num_one + ', ' + num_two + ', ' + num_three);
console.log('Math: ' + total)