// Heart count functionality
const heartIcons = document.querySelectorAll('.heart-count');
const heartCounter = document.getElementById('heartCount');
let count = 0;

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener('click', function() {
        count++;
        heartCounter.innerText = count;
    });
}

// Call button functionality
const callButtons = document.getElementsByClassName('call-button');
for(let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        const serviceName = document.getElementsByClassName('service-name')[i].innerText;
        const phoneNumber = document.getElementsByClassName('phone-number')[i].innerText;
        alert(`Calling ${serviceName} at: ${phoneNumber}`);
        //
        

});
}

