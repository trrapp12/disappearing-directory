(() => {
  // create variables
  const nameElementsArray = document.getElementsByClassName('name');

  // create functions

  function compareNames (input1, input2) {
    input1.map(() => {
      if (input1.includes(input2.innerText)) {
        console.log(input2.innerText)
      } else {
        console.log("not there")
      }
    })
  }

  
  // add event listener
  window.addEventListener('keyup', (event) => {
    let currentInput = event.target.value; 
    console.log(nameElementsArray);
    compareNames(nameElementsArray, currentInput)
  })

})()