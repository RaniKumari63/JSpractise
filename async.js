console.log("first");
setTimeout((()=>console.log("second")),2000);
console.log("third");

function greet()
{
    console.log("hello");
}
function sayName(name)
{
    console.log(""+name);
}
setTimeout(greet,2000);
sayName('rani');

