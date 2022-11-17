function factorial(n)
{
    if(n === 0 || n === 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n - 1);
    }
}

let n = Number(window.prompt("Enter a number", ""));
let attribute = factorial(n);
console.log("Factorial = " + attribute);