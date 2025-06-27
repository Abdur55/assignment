

document.getElementById('donat-btn').addEventListener('click', function(event){
    event.preventDefault

   
    
    
    const donatedbalance = gettextidbyshardfunction('donated-balance')
    const fromdonation = gettextidbyshardfunction('from-donated')
    const inputnumber = getinputbyshardid('donat-area')
     const place = getelement('place')
    
    if(inputnumber > 0){

        newdonation = inputnumber + donatedbalance 

      
 document.getElementById('donated-balance').innerText = newdonation

 const    nagativenumber =  fromdonation - inputnumber
     document.getElementById('from-donated').innerText = nagativenumber

        
    const div =   document.createElement('div')
    div.classList.add('bg-slate-200')
     div.innerHTML = `
     <p class="text-black text-2xl">  ${inputnumber} tk Donate for Flood at Noakhali, Bangladesh  </p>
     <p class=" space-y-3"> Date : Tue Sep 17 2024 08:39:11 GMT +0600 (Bangladesh Standard Time) </p>
     `
     document.getElementById('history-containt').appendChild(div)
    }
    else{
       alert('You can to donat Money')
    }
})













