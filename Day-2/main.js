const Container = document.querySelector('.container')
const BB = document.querySelector('body')
let Count = document.querySelector('.count')

Container.addEventListener ("click", ()=>{
    
    var array = ["white","Red","Green","Blue","Lime","tomato","lightblue","orange","indigo","lightpink","lightblue"]
    let interval = setInterval(updated , 600)
    let upto = 0

    function updated(){

        Count.innerHTML = ++upto
        BB.style.backgroundColor = array[upto]

        if(upto === 10){

            clearInterval(interval)
            Count.innerHTML =  "Fuck You!"
            
        }

       
    }
    
})