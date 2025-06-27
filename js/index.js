

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
     div.innerHTML = `
       <p> You have donated ${inputnumber} tk  </p>
     `
     document.getElementById('history-containt').appendChild(div)
    }
    else{
       alert('You can to donat Money')
    }
})



document.getElementById('blog').addEventListener('click', function(event){
  event.preventDefault

  
})









