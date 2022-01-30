let name = prompt("Adınızı girin:")
let myName = document.querySelector("#myName")
myName.innerHTML =`${name[0].toUpperCase()}${name.slice(1)} `

function time(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    document.querySelector("#myClock").innerHTML = `${hour}:${minute}:${second}`
    
}


setInterval(time,1000)
