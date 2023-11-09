var allProduct = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var div2 = document.querySelector("#div2")
var btn1 = document.querySelector("#showPrice")
var totalPrice = 0

allProduct.forEach(function(item){
        
    item.onclick = function(){
        totalPrice += +(item.getAttribute("price"))
        div1.innerHTML += item.textContent +"<br> "


            if (div1.innerHTML != "")
            {
                btn1.style.display ="block"
                btn1.style.color="red"
                
            }
    

    }

})
btn1.onclick = function(){
    div2.innerHTML = totalPrice


}

