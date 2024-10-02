function counterinc(){
    var btn1 = document.getElementById("bt1")
    var inc = document.getElementById("counternuminc")
    inc.style.color =  "green"
    
    inc.innerHTML = parseInt(inc.innerHTML)+1
}

function counterdec(){
    var btn1 = document.getElementById("bt1")
    var dec = document.getElementById("counternuminc")
    if(dec.innerText == 0){
        dec.innerHTML = parseInt(dec.innerHTML)
    }else{
        dec.style. color = "purple"
        dec.innerHTML = parseInt(dec.innerHTML)-1
    }
}
function counterrst(){
    var btn1 = document.getElementById("bt1")
    var res = document.getElementById("counternuminc")
    if(res.innerText > 0){
        res.style.color = "black"
        console.log(res.innerHTML = 0)
    }
}