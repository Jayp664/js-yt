//***************************************primitive************************************

// 7 type = String ,number,boolean,null,undefined,symbol,BigInt

const name = "jay"
const score = 100
const scorevalue = 100.4

const isLoggedin = false

const temprator = null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNumber = 2457984135648898n

console.log(typeof bigNumber); //bigint
console.log(typeof id);        //symbol
console.log(typeof userEmail); //undefined
console.log(typeof temprator); //object
console.log(typeof isLoggedin);//boolean
console.log(typeof scorevalue);//number




//****************************reference (non primitive)*****************************

// type = array,objects,functions

const heros = ["superman","spiderman","batman"];

const myobj = {
    name : "jay",
    age : 30,
}

const myFunction = function(){
    console.log("Jay panchal");
}


console.log(typeof myFunction); //function object
console.log(typeof myobj);      //object
console.log(typeof heros);      //object







