function factorial(n)
{
   let fact;  
   console.log(fact);
    if (n >1)
    {
      fact = fact * factorial(n-1);
    }
    
}


function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}