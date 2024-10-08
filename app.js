const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
 const submitBtn = document.getElementById('submit')
 const plusBtn = document.getElementById('plus')
 const minusBtn = document.getElementById('minus')
 let action = '+'

 

// console.log(resultElement.textContent)
// resultElement.textContent = 42



// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}


// submitBtn.onclick = function () {
//     if (action == '+') {
//         const sum = Number(input1.value) + Number(input2.value)
//         resultElement.textContent = sum
//     }
//     if (action == '-') {
//         const sum = Number(input1.value) - Number(input2.value)
//         resultElement.textContent = sum
//     }
// }

// submitBtn.onclick = function () {
//     if (action == '+') {
//         const sum = Number(input1.value) + Number(input2.value)
//         resultElement.textContent = sum
//     } else if (action == '-') {
//         const sum = Number(input1.value) - Number(input2.value)
//         resultElement.textContent = sum
//     }
// }

function computeNumberWithAction(inp1 , inp2, actionSymbol) {
 const num1 = Number(inp1.value)
 const num2 = Number(inp2.value)
 if (actionSymbol = '+') {
   return num1 + num2
 } else if (actionSymbol = '-') {
   return num1 - num2
 }
}

submitBtn.onclick = function () {
    const result = computeNumberWithAction(input1, input2, action)
    printResult(result)
}





//  submitBtn.onclick = function () {
//      if (action = '+') {
//          const sum = Number(input1.value) + Number(input2.value)
//          printResult(sum)
//      } else if (action = '-') {
//          const sum = Number(input1.value) - Number(input2.value)
//          printResult(sum)
//      }
//  }