const container = document.getElementById('cards-container');

container.addEventListener('click', function (e) {
    const copyBtn = e.target.closest('.copy-btn');
    const callBtn = e.target.closest('.call-btn');
    if (!copyBtn && !callBtn) return;

    const card = e.target.closest('.card');
    const title = card.querySelector('.service-title').innerText.trim();
    const number = card.querySelector('.service-number').innerText.trim();

    if (copyBtn) {
        navigator.clipboard.writeText(number);
        alert(`Copied number: ${number}`);
    }
    if (callBtn) {
        addToCallHistory(title, number);
    }
})

function addToCallHistory(title, number) {
    const currentTime = new Date().toLocaleTimeString();
    
    const historyContainer = document.getElementById('history-container');
  
    historyContainer.innerHTML += `
        <div class="bg-gray-50/70 p-3 rounded-xl flex items-center justify-between">
            <div>
                <h4 class="font-bold text-xs text-gray-800">${title}</h4>
                <p class="text-[10px] text-gray-400 mt-0.5">${number}</p>
            </div>
            <span class="text-[10px] text-gray-400 font-medium">${currentTime}</span>
        </div>
    `;
    
const clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', function () {
    historyContainer.innerHTML = `
        <p class="text-xs text-gray-400 text-center py-4">No call history available</p>
    `;
});
}
