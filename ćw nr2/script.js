


//zadanie. ex_2_1

/*parseInt converts the character by character,
if it is unable to convert any character 
it ignores it and all succeeding characters, 
returns the integer value parsed up to that point.

var d = parseInt("123edf56", 10); // Return 123

If the first character cannot be converted to a number, parseInt returns NaN.
*




//1.Podstawę 10 jeśli łańcuch zaczyna się od jakiejkolwiek innej wartości.
/*
parseInt(1e1); //wynik 10
parseInt('0xFF'); //0xFF = 15*16+15 = wynik=255. 
parseInt('0xFF', 10); // wynik = 0
parseInt('0xFF', 16); // wynik =255
parseInt(0377, 10);//wynik =255
parseFloat('1e1'); //wynik =10
parseFloat('10.909em'); //wynik 10.909 nie sprawdza 09
*/

//zadanie ex_2_1

/*const model = 'Iphone11'
console.log(model)

const brand = 'Apple'
console.log(brand)


const description ={
brnad: 'iPhone 11 Pro',
color: 'Silver',
screen: 5.8 ,
processor: 'Apple A13',
RAM: '6GB'
}
console.log(description)
*/


//zadanie ex_2_2

// let narzedzia =
// ['Szeroka lopata',
// 'Grabki',
// 'Miotla',
// 'Pazurki',
// 'Motyka'];


// console.log(narzedzia.length)


/*

zadanie-ex_2_3

const obj = {
color: 'black',
}

console.log(1,obj)

obj.backGroundColor='white'


console.log(2,obj)

const first_color='frist-color';
obj[first_color]='blue'
console.log(obj[first_color])
*/


