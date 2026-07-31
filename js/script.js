const container = document.getElementById('cards-container');

container.addEventListener('click', function (e) {
    const copyBtn = e.target.closest('.copy-btn');
    const callBtn = e.target.closest('.call-btn');
const heartBtn = e.target.closest('.heart-btn');
if (heartBtn) {
    const heartCountElement = document.getElementById('heart-count');
    let currentCount = parseInt(heartCountElement.innerText) || 0;
    
  
    heartCountElement.innerText = currentCount + 1;
    const heartIcon = heartBtn.querySelector('i');
    if (heartIcon) {
        heartIcon.classList.remove('fa-regular', 'text-gray-400');
        heartIcon.classList.add('fa-solid', 'text-red-500');
    }
};
    if (!copyBtn && !callBtn) return;
    const card = e.target.closest('.card');
    const title = card.querySelector('.service-title').innerText.trim();
    const number = card.querySelector('.service-number').innerText.trim();

    if (copyBtn) {
        navigator.clipboard.writeText(number);
        alert(`Copied number: ${number}`);
        const copyElement = document.getElementById('copy-count');
        const currentCopyCount = parseInt(copyElement.innerText);
        copyElement.innerText = currentCopyCount + 1;
    }
    if (callBtn) {
       alert(`Calling ${title} ${number}`);
        const scoreElement = document.getElementById('score');
        let currentScore =  parseInt(scoreElement.innerText);

        if (currentScore < 20) {
        alert('❌ You do not have enough tokens! A call requires at least 20 tokens.');
        return; 
    }
         scoreElement.innerText= currentScore - 20;
       
       
        addToCallHistory(title, number);
    }

if (heartBtn) {
    const heartCountElement = document.getElementById('heart-count');
    let currentCount = parseInt(heartCountElement.innerText) || 0;
    
  
    heartCountElement.innerText = currentCount + 1;
    const heartIcon = heartBtn.querySelector('i');
    if (heartIcon) {
        heartIcon.classList.remove('fa-regular', 'text-gray-400');
        heartIcon.classList.add('fa-solid', 'text-red-500');
    }
}
});

function addToCallHistory(title, number) {
    const currentTime = new Date().toLocaleTimeString();
    
    const historyContainer = document.getElementById('history-container');
  
    historyContainer.innerHTML += `
        <div class="bg-gray-50/70 p-3 rounded-xl flex items-center justify-between">
            <div>
                <h4 class="font-bold  text-gray-800">${title}</h4>
                <p class="text-[14px] text-gray-400 mt-0.5">${number}</p>
            </div>
            <span class="text-[14px] text-gray-400 font-medium">${currentTime}</span>
        </div>
    `;
    
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
    historyContainer.innerHTML = `
        <p class="text-xs text-gray-400 text-center py-4">No call history available</p>
    `;
});
}
