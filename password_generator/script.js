// const inputSlider=document.querySelector("[data-lengthSlider]");
// const lengthDisplay=document.querySelector("[data-lengthNumber]");

// const passwordDisplay =document.querySelector("[data-passwordDisplay]");
// const copyBtn = document.querySelector("[data-copy]");
// const copyMsg =document.querySelector("[data-copymsg]");
// const upperCase = document.querySelector("#uppercase");
// const lowecase = document.querySelector("#lowercase");
// const numbercheck = document.querySelector("#numbers");
// const symbolcheck =document.querySelector("#symbols");
// const indicator = document.querySelector("[data-indicator]");
// const generateBtn = document.querySelector(".generateButton");
// const allcheckBox =document.querySelectorAll("input[type=checkbox]");
// const symbol ='`~!@#$%^&*()_+={}[]?.,<>/|';

// let password="";
// let passwordLength=10;
// let checkCount =0; 
// handleSlider();
// //set password length
// function hanadleSlider(){ 
//       inputSlider.value=passwordLength;
//       lengthDisplay.innerText=passwordLength;
     
// }
// function setIndicator(color){
//     indicator.style.backgroundColor =color;

// }
// function getRndInteger(min,max){
//    return  Math.floor(Math.random()*(max-min))+min;
// } 
// function generateRandomNumber(){
//     return getRndInteger(0,9);
// }
// function generateLoweCase()
//  {
//     return String.fromCharCode(getRndInteger(97,123));
//  }
// function gernerateUpperCase(){
//     return String.fromCharCode(getRndInteger(65,91));
// }
// function gernerateSymbol(){
//     const randNum = getRndInteger(0,symbol.length);
//     return symbol.charAt(randNum);
     
// }
// function calStrength()
// {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNum = false;
//     let hasSym = false;
//     if(upperCase.checked) hasUpper=true;
//     if(lowecase.checked) hasLower = true;
//     if(numbercheck.checked) hasNum = true;
//     if(symbol.checked) hasSym =true;

//     if(hasLower && hasUpper && (hasSym || hasNum) && passwordLength >=8){
//         setIndicator("#0f0");
//     }
//     else if((hasLower || hasUpper) && (hasSym || hasNum) && passwordLength>=6){
//         setIndicator("#ff0");

//     }
//     else{
//         setIndicator("#f00");
//     }
// }

// function shufflePassword(array){
//     //fisher yates Method 
//     for(let i=array.length-1;i>0;i--){
//         const j=Math.floor(Math.random()*(i+1));
//         const temp=array[i];
//         array[i]=array[j];
//         array[j]=temp;

//     }
//     let str="";
//     arr.forEach((el)=>(str+=el));
//     return str;


// }

// async function  copyContent(){
//     try{
//        await navigator.clipboard.writeText(passwordDisplay.value);
//         copyMsg.innerText="copied";
//     }
//     catch(e){
//         copyMsg.innerText="Failed";
//     }

//     copyMsg.classList.add("active");
//     setTimeout(()=>{
//         copyMsg.classList.remove("active");
//     },2000);
// }

// function handleCheckBoxChange(){
//     checkCount=0;
//     allcheckBox.forEach((checkbox)=>{
//         if(checkbox.checked)
//             checkCount++;
//     });
//     if(passwordLength < checkCount){
//         passwordLength =checkCount;
//         handleSlider();
//     }
// }

// allcheckBox.forEach((checkbox)=>{
//     checkbox.addEventListener('change',handleCheckBoxChange);
// })

// inputSlider.addEventListener('input',(e)=>{
//     passwordLength = e.target.value;
//     handleSlider();
// });

// copyBtn.addEventListener('click',()=>{
//     if(passwordDisplay.value){
//         copyContent();
//     }
// });

// generateBtn.addEventListener('click',()=>{
//     //none of the check box are checked
//     if(checkCount <=0){
//         return;
//     }
//     if(passwordLength < checkCount){
//         passwordLength = checkCount;
//         handleSlider();
//     }
//     //lets start the journey to find the new password
//     //remove old password
//     password="";
//     //lets put the stuff mentioned by chckboxes
//     // if(upperCase.checked){
//     //     password+=gernerateUpperCase();
//     // }
//     // if(lowecase.checked){
//     //     password+=generateLoweCase();
//     // }
//     // if(numbercheck.checked){
//     //     password+=generateRandomNumber();
//     // }
//     // if(symbolcheck.checked){
//     //     password+=gernerateSymbol();
//     // }

//     let functionArr=[];
//     if(upperCase.checked){
//     functionArr.push(gernerateUpperCase);
//     }
//     if(lowecase.checked){
//         functionArr.push(generateLoweCase);
//     }
//     if(symbolcheck.checked){
//         functionArr.push(gernerateSymbol);
//     }
//     if(numbercheck.checked){
//         functionArr.push(generateRandomNumber);
//     }
//     //compularosry additon
//     for(let i=0;i<functionArr.length;i++){
//         password+=functionArr[i];
//     }
//     //remaning additon
//     for(let i=0; i<passwordLength - functionArr.length;i++){
//         let randIndex = getRndInteger(0,functionArr.length);
//         password+=functionArr[randIndex]();
//     }
//     //shuffle the password
//     password=shufflePassword(Array.from(password));
//     passwordDisplay.value=password; 
//     calStrength(); 

// });
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copymsg]");
const upperCase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbercheck = document.querySelector("#numbers");
const symbolcheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");
const allcheckBox = document.querySelectorAll("input[type=checkbox]");
const symbol = '`~!@#$%^&*()_+={}[]?.,<>/|';

let password = "";
let passwordLength = 10;
let checkCount = 0;

handleSlider();
setIndicator("#ccc");

// Set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
     const min=inputSlider.min;
     const max= inputSlider.max;
     inputSlider.style.backgroundSize=((passwordLength-min)*100/(max-min))+"% 100%";
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
    return getRndInteger(0, 10);  // Correct range for numbers
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    const randNum = getRndInteger(0, symbol.length);
    return symbol.charAt(randNum);
}

function calStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (upperCase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbercheck.checked) hasNum = true;
    if (symbolcheck.checked) hasSym = true;

    if (hasLower && hasUpper && (hasSym || hasNum) && passwordLength >= 8) {
        setIndicator("#0f0");  // Strong
    } else if ((hasLower || hasUpper) && (hasSym || hasNum) && passwordLength >= 6) {
        setIndicator("#ff0");  // Medium
    } else {
        setIndicator("#f00");  // Weak
    }
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch (e) {
        copyMsg.innerText = "Failed";
    }

    copyMsg.classList.add("active");
    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000);
}

function handleCheckBoxChange() {
    checkCount = 0;
    allcheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    });
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allcheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
});

generateBtn.addEventListener('click', () => {
    if (checkCount <= 0) {
        return;
    }
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    password = "";
    let functionArr = [];
    if (upperCase.checked) functionArr.push(generateUpperCase);
    if (lowercase.checked) functionArr.push(generateLowerCase);
    if (symbolcheck.checked) functionArr.push(generateSymbol);
    if (numbercheck.checked) functionArr.push(generateRandomNumber);

    for (let i = 0; i < functionArr.length; i++) {
        password += functionArr[i]();
    }

    for (let i = 0; i < passwordLength - functionArr.length; i++) {
        let randIndex = getRndInteger(0, functionArr.length);
        password += functionArr[randIndex]();
    }

    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calStrength();
});
