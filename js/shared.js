

// text function

function gettextidbyshardfunction(id){
   const sheard1 =  document.getElementById(id).innerText
   const sheard1num = parseFloat(sheard1)
   return sheard1num

}

function getelement(id){
    const elementtext = document.getElementById
    return elementtext
}

// input function

function getinputbyshardid(id){
    const sheard2 = document.getElementById(id).value
    const sheardnum = parseFloat(sheard2)
    return sheardnum
}

function showinhistory(id){
    document.getElementById('main').classList.add('hidden')
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById('Important-section').classList.add('hidden')
    document.getElementById('donateModal').classList.add('hidden')

    // remove hidden class

    document.getElementById(id).classList.remove('hidden')
}


function showhidden(id){
  document.getElementById('closeModal').classList.add('hidden')
}



