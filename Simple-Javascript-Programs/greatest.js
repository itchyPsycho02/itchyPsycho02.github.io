function maximumOfThree( x, y, z)
{
    max_val = 0;
    if(x > y)
    {
        max_val = x;
    }
    else
    {
        max_val = y;
    }
    if(z > max_val)
    {
        max_val = z;
    }

    return max_val;
}

const x = parseInt(prompt("Enter the number 1 : ",""),10);
const y = parseInt(prompt("Enter the number 2 : ",""),10);
const z = parseInt(prompt("Enter the number 3 : ",""),10);
let ans = maximumOfThree(x,y,z)
console.log("Maximum : " + ans)