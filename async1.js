function greet(name,callback)
{
console.log(name);
}

function callMe()
{
    console.log("i am callback function");

}

greet("rani",callMe);