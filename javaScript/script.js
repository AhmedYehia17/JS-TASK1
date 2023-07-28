var allProducts =  document.querySelectorAll(".section2 .prod");

var content = document.querySelector("#content");

var btn = document.querySelector("#btn1");

var total=document.querySelector("#showprice")

var section3=document.querySelector("#section3");

var price= 0;

allProducts.forEach(function(item){
    item.onclick = function(){
       section3.style.display = "block";
        content.innerHTML += item.textContent+ "\n";
        price +=  +(item.getAttribute("price"))
        if(content.innerHTML != ""){
            btn.style.display = "block";
        }

        
    }
})

btn.onclick = function(){
    showprice.innerHTML = price;
    showprice.style.display = "block";
}