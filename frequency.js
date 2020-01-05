


take two integers as the input and find if they have the same no of characters and same set of strings. 

function sameFrequency(input1,input2){

  let fc1 = {};
    let fc2 = {};
    let num1 = String(input1);
    let num2 = String(input2);
  
  if(num1.length !== num2.length)
    return false;

   [...num1].forEach((char) => fc1[char] = ++fc1[char] || 1);
   [...num2].forEach((char) => fc2[char] = ++fc2[char] || 1);
  
  for(let key in fc1){
    if(!fc2.hasOwnProperty(key))
      return false;
    else if(fc1[key] !== fc2[key])
      return false;
  }
return true;
}


