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
for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].addEventListener('click', function() {
        const serviceName = document.getElementsByClassName('service-name')[i].innerText;
        const phoneNumber = document.getElementsByClassName('phone-number')[i].innerText;
        alert(`Calling ${serviceName} at: ${phoneNumber}`);

        let coinCountElement = document.getElementById('coin-count');
        let coinCount = parseInt(coinCountElement.innerText);

        if (coinCount > 20) {
            coinCount = coinCount - 20;
            coinCountElement.innerText = coinCount;
        } else {
            alert("Insufficient coins to make a call.");
            return; // terminate the process if coins are insufficient
        }

        const callTime = new Date().toLocaleTimeString();
        const entry = document.createElement('div');
        entry.classList.add("bg-gray-100", "shadow-sm", "rounded-lg", "p-3", "flex", "justify-between", "items-center", "mb-2");
        entry.innerHTML = `
            <div>
                <h3 class="font-bold text-xl">${serviceName}</h3>
                <p class="font-semibold">${phoneNumber}</p>
            </div>
            <div class="text-right">
                <p class="text-gray-600 text-sm">${callTime}</p>
            </div>
        `;

        const historyList = document.getElementById('history-list');
        // historyList.append(entry);
        historyList.prepend(entry);

        // Clear History functionality
        const clearHistoryButton = document.getElementById('clear-history');
        clearHistoryButton.addEventListener('click', function() {
            historyList.innerHTML = '';
        });
    });
}

// Copy button functionality
const copyButtons = document.getElementsByClassName('copy-button');


for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener('click', function() {
        console.log("Copy button clicked");
        alert("Phone Number Copied to Clipboard");
        let numberOfCopyElement = document.getElementById('number-of-copy');
        let copyCount = parseInt(numberOfCopyElement.innerText);
        copyCount++;
        numberOfCopyElement.innerText = copyCount;
        
    
    

        
        
    });
    
}
