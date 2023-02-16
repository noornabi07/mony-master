function getInputValue(id){
    const inputValue = document.getElementById(id);
    const inputValueString = inputValue.value;
    const inputValueNumber = parseInt(inputValueString);
    // inputValue.value = '';
    return inputValueNumber;
}

function setInnerText(id, value){
    const elementValue = document.getElementById(id);
    elementValue.innerText =value;
}

function geElementValue(id){
    const elementValue = document.getElementById(id);
    const elementValueString = elementValue.innerText;
    const elementValueNumber = parseInt(elementValueString);
    return elementValueNumber;
}

// calculate button function work

document.getElementById('calculate-btn').addEventListener('click', function(){
    const totalIncome = getInputValue('total-income');

    const foodCost = getInputValue('food-input');
   const rentCost = getInputValue('rent-input');
   const clothesCost = getInputValue('clothes-btn');

    // first validation for checking not a string
    if(isNaN(totalIncome) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothesCost)){
     alert('Please submit a valid number amount');
     return;
    }
   
   const totalCost = foodCost + rentCost + clothesCost;
    // second validation for cheacking total cost less than total income
   if(totalCost > totalIncome){
    alert('You have not found this income amount');
    return;
   };

//    third validation for cheacking a negative number
   if(totalIncome < 0 || foodCost < 0 || rentCost < 0 || clothesCost < 0){
    alert('Please type positive number');
    return;
   }


   setInnerText('total-expense', totalCost);

 
   const currentBalance = totalIncome - totalCost;

   setInnerText('total-balance', currentBalance);
    
})

// save button funtion work

document.getElementById('save-btn').addEventListener('click', function(){

    const totalIncome = getInputValue('total-income');
    const savingValue = getInputValue('save-input');
    const savinPercent = savingValue / 100;
    const currentSaving = totalIncome * savinPercent;


    // third validation checking for saving percent less than 100
    if(savingValue > 100){
        alert('Please type less then 100');
        return;
    }
 
    if(currentSaving < 0){
        alert('Type a positive number');
        return;
    }

    
    // first::same -- validation cahecking for not a string
    if(isNaN(currentSaving)){
        alert('Please submit a valid amount');
        return;
       };

       const balanceAmount = geElementValue('total-balance');

        //  const savingAmount = geElementValue('saving-amount');
       
       if(currentSaving > balanceAmount){
        alert('your have no current amount');
        return;
        }

        const remainingBalance = balanceAmount - currentSaving;

        setInnerText('saving-amount', currentSaving);

        setInnerText('remaining-balance', remainingBalance);
})