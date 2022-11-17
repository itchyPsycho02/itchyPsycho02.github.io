function checkPalindrome(String)
{
    const len = String.length;
    for(let i = 0; i < len / 2; i++)
    {
        if(String[i] !== String[len - 1 - i])
        {
            return "It is not a palindrome"
        }
    }
    return "It is a palindrome"
}

const String = prompt("Enter a String : ","")
const value = checkPalindrome(String)
console.log(value)