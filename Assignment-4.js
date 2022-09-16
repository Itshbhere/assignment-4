for (let i = 0;i < 10;i++)
{
    console.log(i);    
}

//Simple for loop

let forWhile=2
while(forWhile < 10)
{
console.log(forWhile);
forWhile++;
}

//Simple While loop


let forTable = prompt("Enter any number",8)
for (let j = 1; j < 11; j++){
    console.log(forTable," ","x"," ",j,"=",forTable*j);
   
}

//For showing the outpiut of any number

for (let j = 1; j < 10; j++) {
    for (let n = 1; n < 10; n++) {
        if(j==n)
        {
            console.log(j," & ",n," are equal .");
        }
        console.log("\n");
        
    }
    
}

//Array equalizer


var PrimeNumber=parseInt(prompt("Enter a prime or non prime number ",10))
var p=0;
for (let i = 2; i < PrimeNumber; i++) {
    if(PrimeNumber%i==0)
    {
      p++;  
    }
}
if(p==0)
{
    alert(PrimeNumber);
    alert("It is a prime number .")
}
else
{
    alert(PrimeNumber);
    alert("It is not a prime number .")
}


//Identifying Prime Number


var oddOrEven=parseInt(prompt("Enter Even or odd number ",3))
if(oddOrEven%2==0)
{
    alert(" It is an Even Number ");
}
else
{
    alert("It is an Odd Number ");
}


//Identifying Even & Odd number


var posOrNeg=parseInt(prompt("Enter a positive or negative Integer ",18))
if(posOrNeg>0)
{
    alert ("It is a positive integer");
}
else if(posOrNeg==0)
{
    alert ("It is a 0");
}
else if(posOrNeg<0)
{
    alert ("It is a negative  integer");
}


//Identifying Positive & Negative Number


var forVowel= prompt("Enter any alphabet ","O");
if(forVowel=="a"||forVowel=="e"||forVowel=="i"||forVowel=="o"||forVowel=="u")
{
    alert("It is a vowel ",forVowel);
}
else
{
alert("It is a consonent");
}


//Identifying Vowel 


var rows=parseInt(prompt("Enter any number"));
for (let i = 0; i < rows; i++) {
    var output = '';
    for (let j =0; j < rows - i; j++) output += ' ';
    for (let k = 0; k <= i; k++) output += '* ';
    console.log(output);  
} 


//PRINTING A PYRAMID


var brands=[];
brands.push("Addidas");
brands.push("Nike");
brands.push("MRF")
alert(brands[0]);


//Simple push function

for(let i=3;i<=6;i++)
{
    brands.push(prompt("Any brand name ","UnderArmer"));
}

for(let j=0;j<=6;j++)
{
alert(brands[j]);
}


//inserting enteries via loop


var gym=[1,2,3,4,5,6]
gym.pop();
gym.shift();
gym.unshift(7);
for(let i=0;i<=6;i++)
{
    alert(gym[i]);
}


//USING POP,SHIFT&UNSHIFT FUNCTION


var numbers=[]
for(let o=0;o<=9;o++)
{
    numbers[o]=parseInt(prompt("Any number of your choice "))
}
var index;
var element=parseInt(prompt("Enter the number to find in the array ",0));

for(let k=0;k<=9;k++)
{
   if(numbers[k]==element)
   {
    index=k;
   } 
}
alert("The number is at the index no",index);

//Inserting all elements through question to the user and after then matching given number within the array















