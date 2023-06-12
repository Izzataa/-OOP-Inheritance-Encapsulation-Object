let btn = document.getElementById("calculate-button");

btn.onclick = () => {
    let radiusInput = document.getElementById("radius-input");
    let radius = parseFloat(radiusInput.value);

    if (isNaN(radius)) {
       
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = "Please do not leave the field empty.";
    } else {
      
        let area = Math.PI * Math.pow(radius, 2);

       
        let resultElement = document.getElementById("result");
        resultElement.innerHTML = `Area: ${area.toFixed(2)}`;
    }
};




class Programming {
    #language;
    #level;
  
    constructor(language, level) {
      this.#language = language;
      this.#level = level;
    }
  
    getLanguage() {
      return this.#language;
    }
  
    getLevel() {
      return this.#level;
    }
  }
  
  class WebDevelopment extends Programming {
    #framework;
  
    constructor(language, level, framework) {
      super(language, level);
      this.#framework = framework;
    }
  
    getFramework() {
      return this.#framework;
    }
  }
  
  let programming = new WebDevelopment("C#", "Senior", ".NET");
  console.log(programming.getLanguage()); 
  console.log(programming.getLevel()); 
  console.log(programming.getFramework()); 

  




  let findSmallestNumber = (array) => {
    if (!Array.isArray(array)) {
        console.log("This is not an array.");
        return;
    }

    if (array.length === 0) {
        console.log("The array is empty.");
        return;
    }

    let smallest = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }

    console.log("The smallest element: " + smallest);
};

let array1 = [15, 32, 56, 73, 41, 22, 31];
findSmallestNumber(array1);