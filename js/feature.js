
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
    showinhistory('donateModal') 
})
document.getElementById('closeModal').addEventListener('click', function(){
    showinhistory('closeModal') 
})