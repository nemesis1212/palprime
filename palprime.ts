/*this programme is developed to check whether the input no. is palprime or not.And an inputed string is palindrome or not using generics 
palprime no=> the no which is palindrome and a prime no;
palindrome=> original string and its reverse are equal.*/
const ps = require("prompt-sync");
const prompt1=ps();
function numpal(a:any):number
{
   let A = a.toString();
   let s:string="";
   let len=A.length;
   for(let i=len-1;i>=0;i--)
   {
       s=s+A.charAt(i);
   }
   let numS=Number(s);
   let numA=Number(A);
   if(numA==numS)
   {
       console.log(`${A} is palindrome....`);
       return 1;
   }
   else
   {
       console.log(`${A} is not palindrome.........`)
       return 0;
   }
}
function strpal(a:any):void
{   
   let s:string="";
   let len=a.length;
   for(let i=len-1;i>=0;i--)
   {
       s=s+a.charAt(i);
   }
   if(s==a)
   {
       console.log(`${a} is palindrome....`);       
   }
   else
   {
       console.log(`${a} is not palindrome.........`);
   }
}
function prime(b:any):number
{
    let t=0;
    for(let i=1;i<b/2;i++)
    {
        if(b%i==0)
        {
            t++;
        }
    }
    if(t==1)
    {
        console.log(`${b} is a prime number....`);
        return 1;
    }
    else
    {
        console.log(`${b} is not prime number.....`);
        return 0;
    }
}
function Checkpalprime<t>(A:t):void
{
    if((typeof A)=="number")
    {
        if(numpal(A)==1 && prime(A)==1)
        {
            console.log(`${A} is a palprime number....`);
        }
        else
        {
            console.log(`${A} is not a palprime number.....`);
        }        
    } 
    else
    {
        if((typeof A)=="string")
        {
            console.log(`u have entered a string value i.e.: ${A}`);
            strpal(A);
        }
    }       
}
class fun
{
    a:number=0;
    as:string="";
    insert():void
    { 
        console.log("We want two input values to check palprime number if the value is integer or a string for palindrom string value.");
        console.log("enter 1 for integer value.");
        console.log("enter 2 for string value.");
        var sel:number=Number(prompt1("Enter your choice:->"));
        switch(sel)
        {
            case 1:
              {
                this.a=Number(prompt1("Enter the number to check for palprime no..... "));
                Checkpalprime<number>(this.a);
              }
            break;
            case 2:
                {
                    this.as=prompt1("Enter the word to check for palindrome word..... ");
                    Checkpalprime<string>(this.as);
                } 
                break;
            default:console.log("Wrong choice!");   
        }
    }
    constructor()
    {
        this.insert();
    }
}
let Palprime= new fun();