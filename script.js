var display = document.getElementById("screen");
var calculations = [];

function clicked(value){
  display.value += value
}

function calculate(){
  var regex = /^(-?\d+(?:\.\d+)?)([-+*\/])(-?\d+(?:\.\d+)?)$/;

  let str = display.value;
  let res = str.match(regex)
  let num1 = ""
  let num2 = ''
  

  if(res!==null){
     num1 = parseFloat(res[1])
   operator = res[2]
   num2 = parseFloat(res[3])


   if(operator==="*"){
    let total = num1*num2;
    display.value  = (total).toFixed(2);
    let myData = {
      input: res[0],
      output:(total).toFixed(2)
    }
    calculations.push(myData)
  
  }else if(operator==="/") {
    let total = num1/num2;
    display.value = (total).toFixed(2);
    let myData = {
      input: res[0],
      output:(total).toFixed(2)
    }
    calculations.push(myData)
  
  }
  else if(operator==="+"){
    let total = num1+num2;
    display.value = (total).toFixed(2);
    let myData = {
      input: res[0],
      output:(total).toFixed(2)
    }
    calculations.push(myData)
  
  }
  else if(operator==="-"){
    let total = num1-num2;
    display.value = (total).toFixed(2);
    let myData = {
      input: res[0],
      output:(total).toFixed(2)
    }
    calculations.push(myData)
  
  } 
  }
  
  else{
    alert("Enter valid input. One calculation at a time");
    display.value=""
  } 

  const table = document.getElementById("user-table-data");
  let userHtml = "";
  calculations.forEach((user, i) => {
    userHtml += `<tr><th scope="row">${i+1}</th><td>${user.input}</td><td>${user.output}</td></tr>`;
  });
  table.innerHTML = userHtml; 

  console.log(calculations)
  
}

function clearall(){
  display.value=""
}

function clearHistory(){
  const table = document.getElementById("user-table-data");
  calculations=[]
  table.innerHTML = null; 
}

function backspace(){
  let string = display.value;
  string = string.substring(0, string.length-1);
display.value = string
}

