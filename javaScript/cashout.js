document.getElementById('cashout-btn').addEventListener('click', function(){
    // 1. get the agent Number and validate 
    const cashOutNumberInput = document.getElementById('cashout-number');
    const cashOutNumber = cashOutNumberInput.value;
    console.log(cashOutNumber)
    if(cashOutNumber.length != 11){
        alert('Invalid Agent Number');
        return;
    }
    // 2. get the amount , validate , convert to number 
    const cashOutAmountInput = document.getElementById('cashout-amount');
    const cashOutAmount = cashOutAmountInput.value;
    console.log(cashOutAmount)
    // 3. get the blance , validate , convert to number 
    const balanceElement = document.getElementById('blance');
    const blance = balanceElement.innerText;
    console.log(blance)
    // 4. calculate new blance 
    const newBlance = Number(blance) - Number(cashOutAmount);
    if(newBlance < 0){
        console.log('Invalid blance')
        return;
    }
    console.log('New Blance is :',newBlance)
    // 5. get the pin and varify
    const cashOutPinInput = document.getElementById('cashout-pin');
    const pin = cashOutPinInput.value;
    if(pin==='1515'){
        // 5-1. true :: show an alert > set blance
        alert('Cashout Successfull');
         console.log('New Blance is :',newBlance);
         balanceElement.innerText = newBlance;

    }else{
        // 5-2. false :: show an error > return
        alert('Pin is Invalid')
        return;
    }
})