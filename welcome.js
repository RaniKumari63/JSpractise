//window.alert("hello");
console.log("hello");
var x=10;
var y=20;
var z=x*y;
console.log(z);

function msg()
{
    var name="Shiva";
    console.log('mybest friend'+name);
}
var a=40;
console.log("a variable data type"+typeof(a));
//console.log('mybest friend'+name);
var b="suchiit ";
console.log("ooooo"+typeof(b));;
var c=false
console.log(""+typeof(c));
var d;
console.log(""+typeof(d));
var e=null;
console.log(""+typeof(e));
emp={id:100,name:"rani",salary:4000};
console.log(emp);

var emp1=new Object();
emp1.id=100;
emp1.name="rani";
emp1.salary=90;
console.log(emp1);

function emp3(id,name,salary)
{
    this.id=id;
    this.name=name;
    this.salary=salary;
}

var employee= new emp3(200,"kumari",5000);
console.log(emp3);
function f1()
{
    console.log("welcome to functions");

}
f1();

function sayHello(name)
{
    return "welcome"+name;
}
console.log(sayHello("rani"));
let add=(a,b)=>
{
    return a+b;
}
console.log(add(5,5));

var add1=function()
{
    console.log("welcome to array functions");
}
add1();

var a=10;
function addition()
{
    let b=20;
    console.log(a+b);
}
addition();

