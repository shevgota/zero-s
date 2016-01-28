


/*function pow(x,n){
	var res = x;
	for(var i=1; i<n; i++){
		res *= x;
			}
	return res;
	}
alert(pow(3, 3));*/


/*
function min(a, b){
	return (a<b) ? a: b;
}
alert(min(3, -1));
*/


/*function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}
alert(checkAge(2))*/


/*function checkAge(age) {
 return (age > 18) ? true: confirm ('Родители разрешили?');
}
//checkAge(20);
alert(checkAge(2))*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

var age = prompt('Ваш возраст?');

if (checkAge(age)) {
  alert( 'Доступ разрешен' );
} else {
  alert( 'В доступе отказано' );
}
*/


/*var a = +prompt('a?');
alert(a);*/


/*var a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}*/


/*
  if ( browser === 'IE')
  {
	  alert( 'О, да у вас IE!' );
     }else if{
	  (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
	  {alert( 'Да, и эти браузеры мы поддерживаем' );
    }else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
*/



/*nextPrime:
for (var i = 2; i < 10; i++){
	for(var n = 2; n < i; n++){
		if (i % n == 0) continue nextPrime;
			}
	alert(i);
}*/


/*var num;

do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num != null);*/



/*var i = 0
while (i < 3) {
  alert( "номер " + i + "!" );
	i++;
}*/


/*
for (var i = 0; i <= 10; i++){
	if (i % 2 ==0 && i != 0) {
    alert( i );
  }
}
*/



/*var i;

for (i = 0; i < 3; i++) {
  alert( i );
}*/


/*var age = prompt ('Age');
if (!(age >= 14 && age <= 90)){
	alert ( 'OK' );
} else
{alert( 'NO');}*/



/*var message;

(login == 'Вася') ? message = 'Привет':
(login == 'Директор') ? message = 'Здравствуйте':
(login == '') ? message = 'Нет логина':
  message = '';
}*/


/*if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}

result = (a + b < 4) ? 'Мало': 'Много';*/

/*
var login = prompt ('Кто пришёл?', '');
//var pass = 'Чёрный Властелин';

if (login == null) {
	alert ('Вход отменён');
} else if (login != 'Админ'){
	alert ('Я вас не знаю');
} else if (login =='Админ'){
	var pass = prompt ('Введите пароль');
}
if (pass == null){
	alert ('Вход отменён');
} else if (pass == 'Чёрный Властелин'){
	alert ('Добро пожаловать');
} else {
	alert ('Пароль неверен');
}
*/


/*
var value = prompt('Введите число', '');

if (value > 0) {
  alert(1);
} else if (value < 0 ) {
  alert(-1);
}
else {
		alert (0);
	}
*/


/*
var nameCmpany = prompt('Каково «официальное» название JavaScript?', '');

if (nameCmpany == 'EcmaScript') {
  alert('Да, верно');
} else {
  alert('Не знаете? «EcmaScript»!');
}*/



/*
x = 5;
alert(x);

"use strict"; // слишком поздно

function getDate(str) {
	var f = str.match(/^(\d\d?)-(\d\d?)-(\d{4})$/);
	if(!f)
		throw new Error("Неправильная дата!");
		return new Date(f[3], f[2]-1, f[1]);
}
try{
var d = getDate("21-10-2014");
alert(d.toString());
//console.log(d.toString());
//WScript.Echo(d.toString());
}catch(e){
alert(e.message);
//console.log(e.message);
//WScript.Echo(e.message);
	}
*/



///\d\d?-\d\d?-\d{4}/
///^\d\d?-\d\d?-\d{4}$/.test("14-02-2014")
///\d{1,2}-\d{1,2}-\d{4}/
