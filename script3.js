


function dvali(){
if(screen.width<=390){
    document.getElementById("b1").style.backgroundColor="#FFFFFF"
    document.getElementById("daematatab").style.display="none"
    
    const img = document.createElement("img");
    img.src="images/Frame.png"
    document.getElementById("2").appendChild(img)
    img.style.marginLeft="75px"
    img.style.marginRight="auto"
    img.style.marginTop="20vh"

    const txt1 = document.createElement("h1");
    txt1.innerHTML="ჩანაწერი"
    txt1.style.fontSize="22px"
    txt1.style.marginLeft="37%"   
    txt1.style.marginTop="-7%"

    document.getElementById("2").appendChild(txt1)

    const txt2 = document.createElement("h1");
    txt2.innerHTML="დამატებულია!"
    txt2.style.fontSize="22px"
    txt2.style.marginLeft="30%"   
    txt2.style.marginTop="2%"

    document.getElementById("2").appendChild(txt2)

    const but1 = document.createElement("button")
    but1.innerHTML="სიაში გადაყვანა"
    but1.setAttribute("class","button")
    but1.setAttribute("onclick","siashigadayvana()")

    document.getElementById("2").appendChild(but1)

    const but2 = document.createElement("button")
    but2.innerHTML="მთავარი"
    but2.setAttribute("class","buttonu")
    but2.setAttribute("onclick","goBack()")
    document.getElementById("2").appendChild(but2)

}
}

window.addEventListener('load', dvali)
window.addEventListener('resize', dvali)



window.onresize = () => {
    location.reload();
  }