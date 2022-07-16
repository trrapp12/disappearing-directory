(() => {
  // create variables
  const nameElementsArray = document.getElementsByClassName('name');

  // create functions

  function compareNames (input1, input2) {
    
    Object.entries(input1).forEach(([key, value]) => {
      console.log(`input.innertext equals ${value.innerText}`)
      if (value.innerText.includes(input2)) {
        key.style.backgroundColor = 'red';
      }
      else {
        console.log('wrong one');
      }
    }

    );
}

  
  // add event listener
  window.addEventListener('keyup', (event) => {
    let currentInput = event.target.value; 
    console.log(nameElementsArray);
    compareNames(nameElementsArray, currentInput)
  })

})()