// console.log("file is connected")
// Login Event
document.getElementById('btn-login').addEventListener('click', function(){
    // console.log('Login Button is clicked!')
    // 1. get the mobile number 
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;
    console.log(contactNumber);
    // 2. get the pin
    const pinInput = document.getElementById('input-pin');
    const pin = pinInput.value;
    console.log(pin)
    // 3.Match mobile number and pin
    if(contactNumber=='01818106618' && pin=='1515'){
        // 3-1 true :::> alert> HomePage
        alert('Login success')
        // window.location.replace('/home.html');
        window.location.assign('/home.html');

    }else{
        // 3-1 false :::> alert> return
        alert('Login failed')
        return;

    }
})