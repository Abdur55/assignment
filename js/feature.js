

document.getElementById('history-btn').addEventListener('keyup', function(){
    document.getElementById('Donation-btn').classList.add('bg-slate-400')
})


document.getElementById('Donation-btn').addEventListener('click', function(){
    
    showinhistory('main')
    
})

document.getElementById('history-btn').addEventListener('click', function(){
    showinhistory('history-container')
})

document.getElementById('blog').addEventListener('click', function(){
    showinhistory('Important-section') 
})
document.getElementById('donat-btn').addEventListener('click', function(){
    donateModal.classList.remove('hidden');
})
document.getElementById('closeModal').addEventListener('click', function(){
    document.getElementById('donateModal').classList.add('hidden')
})

document.getElementById('Donation-btn').addEventListener('click', function () {
    this.classList.add('bg-cyan-500', 'text-white');
    document.getElementById('history-btn').classList.remove('bg-cyan-500', 'text-white');
    document.getElementById('history-btn').classList.add('bg-black', 'text-white');
});
document.getElementById('history-btn').addEventListener('click', function () {
    this.classList.add('bg-cyan-500', 'text-white');
    document.getElementById('Donation-btn').classList.remove('bg-cyan-500', 'text-white');
    document.getElementById('Donation-btn').classList.add('bg-black', 'text-white');
});






