document.getElementById("formRect2").style.display="block";
document.getElementById("tanamshromlisInfo").style.borderBottom = "none";
document.getElementById("tanamshromlisInfo").style.paddingBottom = "none";
document.getElementById("leptopisMaxasiateblebi").style.borderBottom = "2px solid black";
document.getElementById("leptopisMaxasiateblebi").style.paddingBottom = "5px";














function checkSecond(){
    checkPhoto();  
    checklapsaxeli();
    checkBrendi();
    checkCPUselector();
    checkCPUbirtvi();
    checkCPUnakadi();
    checkRAM();
    checkRadio1();
    checkFasi();
    checkRadio2();
  
    if(checkPhoto()&&checklapsaxeli()&&checkBrendi()&&checkCPUselector()&&checkCPUbirtvi()&&checkCPUnakadi()&&checkRAM()&&checkRadio1()&&checkFasi()&&checkRadio2()){
      secondFormDone = true;
    }
  }
  
  
  function checkPhoto(){
    if(document.getElementById("photo").files.length==0){
      var ele = document.getElementsByClassName("drop-zone")[0];
      ele.style.backgroundColor="#FFF1F1";
      ele.style.backgroundImage= "repeating-linear-gradient(-6deg, #E52F2F, #E52F2F 9px, transparent 9px, transparent 22px, #E52F2F 22px), repeating-linear-gradient(84deg, #E52F2F, #E52F2F 9px, transparent 9px, transparent 22px, #E52F2F 22px), repeating-linear-gradient(174deg, #E52F2F, #E52F2F 9px, transparent 9px, transparent 22px, #E52F2F 22px), repeating-linear-gradient(264deg, #E52F2F, #E52F2F 9px, transparent 9px, transparent 22px, #E52F2F 22px)";
      document.getElementById("suratitext").style.color="#E52F2F";
      document.getElementById("error").style.display="block";
    }
  
    if(document.getElementById("photo").files.length!=0){
      var ele = document.getElementsByClassName("drop-zone")[0];
      ele.style.backgroundColor="#F6F6F6";
      ele.style.backgroundImage= "repeating-linear-gradient(-6deg, #4386a9, #4386a9 9px, transparent 9px, transparent 22px, #4386a9 22px), repeating-linear-gradient(84deg, #4386a9, #4386a9 9px, transparent 9px, transparent 22px, #4386a9 22px), repeating-linear-gradient(174deg, #4386a9, #4386a9 9px, transparent 9px, transparent 22px, #4386a9 22px), repeating-linear-gradient(264deg, #4386a9, #4386a9 9px, transparent 9px, transparent 22px, #4386a9 22px)";
  
      console.log(true)
      return true;
    }
  }
  
  function checklapsaxeli(){
    let isnotempty;
    const nums=["0","1","2","3","4","5","6","7","8","9"];
  
    if(document.getElementById("lapsaxeli").value==""){
      document.getElementById("lapsaxeli").style.borderColor="#E52F2F";
      document.getElementById("lapsaxelh1").style.color="#E52F2F";
      document.getElementById("lapsaxelqvesh").style.color="#E52F2F";
      document.getElementById("lapsaxelqvesh").innerHTML="შეავსე ეს ველი";
  
      isnotempty = false;
    }else{
      isnotempty = true;
    }
  
    let str=document.getElementById("lapsaxeli").value;
    let formatgood = /^[\u001B-\u007E]*$/.test(str)
  
    if(!formatgood){
      document.getElementById("lapsaxeli").style.borderColor="#E52F2F";
      document.getElementById("lapsaxelh1").style.color="#E52F2F";
      document.getElementById("lapsaxelqvesh").style.color="#E52F2F";
      document.getElementById("lapsaxelqvesh").innerHTML="შეიძლება მხოლოდ შეიცავდეს: ლათინურ ასოებს, ციფრებს, !@#$%^&*()_+= ";
    }
  
    if(formatgood&&isnotempty){
      document.getElementById("lapsaxeli").style.borderColor="#8AC0E2";
      document.getElementById("lapsaxelh1").style.color="#000000";
      document.getElementById("lapsaxelqvesh").style.color="#2E2E2E";
      document.getElementById("lapsaxelqvesh").innerHTML="ლათინური ასოები, ციფრები, !@#$%^&*()_+= ";
  
      return true;
    }
    
  }
  
  function checkBrendi(){
    let brendi = document.getElementById("brandselector").value;
    if(brendi==""){
      document.getElementById("brandselector").style.outlineOffset="2px";
      document.getElementById("brandselector").style.outline="2px solid #E52F2F";
    }
  
    if(brendi != ""){
      document.getElementById("brandselector").style.outlineOffset="none";
      document.getElementById("brandselector").style.outline="none";
      return true;
    }
  }
  
  function checkCPUselector(){
    let CPU = document.getElementById("CPUselector").value;
    if(CPU==""){
      document.getElementById("CPUselector").style.outlineOffset="2px";
      document.getElementById("CPUselector").style.outline="2px solid #E52F2F";
    }
  
    if(CPU != ""){
      document.getElementById("CPUselector").style.outlineOffset="none";
      document.getElementById("CPUselector").style.outline="none";
      return true;
    }
  }
  
  function checkCPUbirtvi(){
    let isnotempty;
    let isnumbers =  /^[0-9]+$/.test(document.getElementById("cpubirtvi").value);
    
    if(document.getElementById("cpubirtvi").value != ""){
      isnotempty = true;
  
    }else{
      isnotempty = false;
    }
  
    if(!isnotempty){
      
      document.getElementById("birtvisqvesh").innerHTML="შეავსე ეს ველი";
    }
    if(!isnumbers){ 
      document.getElementById("cpubirtvi").style.borderColor="#E52F2F";
      document.getElementById("birtvih1").style.color="#E52F2F";
      document.getElementById("birtvisqvesh").style.color="#E52F2F";
    }
    if(isnotempty&&!isnumbers){
      document.getElementById("birtvisqvesh").innerHTML="მხოლოდ ციფრები";
  
    }
  
  
    if(isnotempty&&isnumbers){
      document.getElementById("cpubirtvi").style.borderColor="#8AC0E2";
      document.getElementById("birtvih1").style.color="#000000";
      document.getElementById("birtvisqvesh").style.color="#2E2E2E";
      document.getElementById("birtvisqvesh").innerHTML="მხოლოდ ციფრები";
  
      return true;
    }
  }
  
  function checkCPUnakadi(){
    let isnotempty;
    let isnumbers =  /^[0-9]+$/.test(document.getElementById("cpunakadi").value);
    
    if(document.getElementById("cpunakadi").value != ""){
      isnotempty = true;
  
    }else{
      isnotempty = false;
    }
  
    if(!isnotempty){
      
      document.getElementById("nakadisqvesh").innerHTML="შეავსე ეს ველი";
    }
    if(!isnumbers){ 
      document.getElementById("cpunakadi").style.borderColor="#E52F2F";
      document.getElementById("nakadih1").style.color="#E52F2F";
      document.getElementById("nakadisqvesh").style.color="#E52F2F";
    }
    if(isnotempty&&!isnumbers){
      document.getElementById("nakadisqvesh").innerHTML="მხოლოდ ციფრები";
  
    }
  
  
    if(isnotempty&&isnumbers){
      document.getElementById("cpunakadi").style.borderColor="#8AC0E2";
      document.getElementById("nakadih1").style.color="#000000";
      document.getElementById("nakadisqvesh").style.color="#2E2E2E";
      document.getElementById("nakadisqvesh").innerHTML="მხოლოდ ციფრები";
  
      return true;
    }
  }
  
  function checkRAM(){
    let isnotempty;
    let isnumbers =  /^[0-9]+$/.test(document.getElementById("lepram").value);
    
    if(document.getElementById("lepram").value != ""){
      isnotempty = true;
  
    }else{
      isnotempty = false;
    }
  
    if(!isnotempty){
      
      document.getElementById("lepramisqvesh").innerHTML="შეავსე ეს ველი";
    }
    if(!isnumbers){ 
      document.getElementById("lepram").style.borderColor="#E52F2F";
      document.getElementById("lepramh1").style.color="#E52F2F";
      document.getElementById("lepramisqvesh").style.color="#E52F2F";
    }
    if(isnotempty&&!isnumbers){
      document.getElementById("lepramisqvesh").innerHTML="მხოლოდ ციფრები";
  
    }
  
  
    if(isnotempty&&isnumbers){
      document.getElementById("lepram").style.borderColor="#8AC0E2";
      document.getElementById("lepramh1").style.color="#000000";
      document.getElementById("lepramisqvesh").style.color="#2E2E2E";
      document.getElementById("lepramisqvesh").innerHTML="მხოლოდ ციფრები";
  
      return true;
    }
  }
  
  function checkRadio1(){ 
    if(!document.getElementById("arch1").checked || !document.getElementById("arch2").checked){
      document.getElementById("sawitle").style.color="#E52F2F"
      document.getElementById("error2").style.display="block";
    }
    if(document.getElementById("arch1").checked || document.getElementById("arch2").checked){
      document.getElementById("error2").style.display="none";
      document.getElementById("sawitle").style.color="#000000"
      return true;
    }
  }
  
  function checkFasi(){
    let isnotempty;
    let isnumbers =  /^[0-9]+$/.test(document.getElementById("lari").value);
    
    if(document.getElementById("lari").value != ""){
      isnotempty = true;
  
    }else{
      isnotempty = false;
    }
  
    if(!isnotempty){
      
      document.getElementById("lariqvesh").innerHTML="შეავსე ეს ველი";
    }
    if(!isnumbers){ 
      document.getElementById("lari").style.borderColor="#E52F2F";
      document.getElementById("larih1").style.color="#E52F2F";
      document.getElementById("lariqvesh").style.color="#E52F2F";
    }
    if(isnotempty&&!isnumbers){
      document.getElementById("lariqvesh").innerHTML="მხოლოდ ციფრები";
  
    }
  
  
    if(isnotempty&&isnumbers){
      document.getElementById("lari").style.borderColor="#8AC0E2";
      document.getElementById("larih1").style.color="#000000";
      document.getElementById("lariqvesh").style.color="#2E2E2E";
      document.getElementById("lariqvesh").innerHTML="მხოლოდ ციფრები";
  
      return true;
    }
  }
  
  function checkRadio2(){ 
    if(!document.getElementById("arch11").checked || !document.getElementById("arch22").checked){
      document.getElementById("sawitle2").style.color="#E52F2F"
      document.getElementById("error22").style.display="block";
    }
    if(document.getElementById("arch11").checked || document.getElementById("arch22").checked){
      document.getElementById("error22").style.display="none";
      document.getElementById("sawitle2").style.color="#000000"
      return true;
    }
  }
  
  
  
  










let i =0;




















document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    

     window.addEventListener("dragover",function(e){
        e = e || event;
        e.preventDefault();    
      },false);
      window.addEventListener("drop",function(e){
        e = e || event;
        e.preventDefault();    
      },false);

    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();

      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {


    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
      dropZoneElement.querySelector("#error").remove();
      // document.getElementById("gela").style.display="none"
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
    
    document.getElementById("saxelibrendi").style.marginTop="90px"
    if(i>0){
    document.getElementById("bero").remove()
    }
    const saxdiv = document.createElement('div')
    saxdiv.style.marginLeft="170px"
    saxdiv.style.marginTop="20px"
    saxdiv.setAttribute('id', "bero")

    document.getElementById("formRect2").style.height="1670px"

    const saxdivphoto = document.createElement('img')
    saxdivphoto.src="yes.png"
    saxdivphoto.style.marginTop="10px"
    saxdivphoto.style.position="absolute"
    saxdivphoto.setAttribute('id', "jondo")

    const size = document.createElement('p');
    size.innerHTML=""
    size.innerHTML=(file.size*0.000001).toFixed(3)+"MB"
    size.style.marginLeft="150px"
    size.style.marginBottom= "-20px"
    size.style.paddingTop= "3px"
    size.style.marginTop="10px"
    size.style.position="absolute"


    const but = document.createElement('button');
    but.innerHTML="თავიდან ატვირთე"
    but.classList.add("buttoni")
    but.style.position="absolute"
    but.setAttribute('type', "button")
    but.setAttribute('id', "george")
    
    // but.setAttribute('onclick', "updateThumbnail()")

  
    


    thumbnailElement.appendChild(but)


    i++;


    saxdiv.appendChild(size)

    saxdiv.appendChild(saxdivphoto)
    document.getElementById("aqa").appendChild(saxdiv)




    if(screen.width<=390){
      document.getElementById("gela").style.display="none"

      document.getElementById("jondo").style.marginLeft="-150px"

      const d = document.head.appendChild(document.createElement("style"))
      d.innerHTML=""
      d.innerHTML = ".drop-zone__thumb:after {margin-left: -192px; margin-top: 270px; font-size: 12px; width:150px}";
      size.style.fontSize="12px"
      size.style.marginLeft="-105px"
      size.style.marginTop="20px"

      but.style.width="187px"
      but.style.height="46px"
      but.style.fontSize="12px"
      but.style.marginLeft="-12px"
      but.style.marginTop="270px"


    }














    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  






















  document.getElementById("lapsaxeli").value = getSavedValue("lapsaxeli");
  document.getElementById("cpubirtvi").value = getSavedValue("cpubirtvi");
  
  document.getElementById("cpunakadi").value = getSavedValue("cpunakadi");
  document.getElementById("lepram").value = getSavedValue("lepram");

  document.getElementById("lari").value = getSavedValue("lari");


  /* Here you can add more inputs to set value. if it's saved */

  //Save the value function - save it to localStorage as (ID, VALUE)
  function saveValue(e){
      var id = e.id;  // get the sender's id to save it . 
      var val = e.value; // get the value. 
      localStorage.setItem(id, val);// Every time user writing something, the localStorage's value will override . 
  }

  //get the saved value function - return the value of "v" from localStorage. 
  function getSavedValue  (v){
      if (!localStorage.getItem(v)) {
          return "";// You can change this to your defualt value. 
      }
      return localStorage.getItem(v);
  }































const urlBrands = 'https://pcfy.redberryinternship.ge/api/brands';
const brandsSelect = document.getElementById("brandselector");

brandsSelect.addEventListener("change", ev => onBrandsChange(ev));

function fetchBrandsData(){
    console.log(`Inside ${arguments.callee.name}`)
    fetch(urlBrands).then(res => res.json()).then(data => loadBrandsData(data)).catch(err => console.log(err));
}

function loadBrandsData(data){
    console.log(`Inside ${arguments.callee.name}`)
    for(row of data.data){
        opt = document.createElement('option');
        opt.text = row.name;
        opt.value = row.id;

        brandsSelect.options.add(opt);
    }
}

function onBrandsChange(ev){
    console.log(`Inside ${arguments.callee.name}`);
    console.log(ev);
    console.log(brandsSelect.id)
    
}

fetchBrandsData();






const urlCPUs = 'https://pcfy.redberryinternship.ge/api/cpus';
const CPUSelect = document.getElementById("CPUselector");

CPUSelect.addEventListener("change", ev => onCPUsChange(ev));

function fetchCPUsData(){
    console.log(`Inside ${arguments.callee.name}`)
    fetch(urlCPUs).then(res => res.json()).then(data => loadCPUsData(data)).catch(err => console.log(err));
}

function loadCPUsData(data){
    console.log(`Inside ${arguments.callee.name}`)
    for(row of data.data){
        opt = document.createElement('option');
        opt.text = row.name;
        opt.value = row.id;

        CPUSelect.options.add(opt);
    }
}

function onCPUsChange(ev){
    console.log(`Inside ${arguments.callee.name}`);
    console.log(ev);
    console.log(CPUSelect.id)
    
}

fetchCPUsData();












// document.querySelector("#photo").addEventListener("change", function(){
//     const reader = new FileReader();

//     reader.addEventListener("load", ()=>{
//         localStorage.setItem("image", reader.result)
//     })

//     reader.readAsDataURL(this.target.files[0]);
// })

// document.addEventListener("DOMContentLoaded", ()=>{
//     const recentImageDataURL=localStorage.getItem("image")
//     document.querySelector("#imgPrev").setAttribute("src", recentImageDataURL)
// })









// function uploadFile(inputElement) {
//   var file = document.querySelector(
//     'input[type=file]')['files'][0];

// var reader = new FileReader();
// console.log("next");
  
// reader.onload = function () {
//     base64String = reader.result.replace("data:", "")
//         .replace(/^.+,/, "");

//     imageBase64Stringsep = base64String;
//     localStorage.setItem("image", base64String)
//     // alert(imageBase64Stringsep);
//     console.log(base64String);


      
  
// }
// reader.readAsDataURL(file);
// }

























$(function() {
    $('#brandselector').change(function() {
        localStorage.setItem('brendi', this.value);
    });
    if(localStorage.getItem('brendi')){
        $('#brandselector').val(localStorage.getItem('brendi'));
    }
});




$(function() {
    $('#CPUselector').change(function() {
        localStorage.setItem('CPU', this.value);
    });
    if(localStorage.getItem('CPU')){
        $('#CPUselector').val(localStorage.getItem('CPU'));
    }
});






function first(){
  document.getElementById("formRect2").style.width="100%"
  document.getElementById("formRect2").style.height="1850px"
  document.getElementById("formRect2").style.marginTop="5%"
  document.getElementById("BACK").src="Vector (2).png"
  document.getElementById("BACK").style.marginTop="3.6vh"
  document.getElementById("tanamshromlisInfo").style.display="none"
  document.getElementById("leptopisMaxasiateblebi").style.borderBottom="none"
  document.getElementById("leptopisMaxasiateblebi").style.fontSize="16px"
  document.getElementById("leptopisMaxasiateblebi").style.marginTop="-4%"
}

function second(){
  document.getElementById("1/2").innerHTML="2/2"
  document.getElementById("1/2").style.fontSize="14px"
  document.getElementById("1/2").style.position="absolute"
  document.getElementById("1/2").style.color="#898989"
  document.getElementById("1/2").style.paddingTop="5px"  
  
  document.getElementsByClassName("drop-zone")[0].style.width="89%"
  document.getElementsByClassName("drop-zone")[0].style.marginLeft="5%"
  document.getElementsByClassName("drop-zone")[0].style.height="13.4%"
  document.getElementsByClassName("drop-zone")[0].style.borderRadius="10px"
  document.getElementById("likeBut").style.display="none"
  document.getElementById("suratitext").style.fontSize="16px"
  document.getElementsByClassName("drop-zone__prompt")[0].style.marginBottom="-30%"
  const img = document.createElement('img');
  img.setAttribute('id', "gela");
  img.src="ad.png";
  document.getElementsByClassName('drop-zone')[0].appendChild(img)
  img.style.marginTop="-30%"
}

function third(){
  document.getElementById("lapsaxeli").style.width="330px"
  document.getElementById("lapsaxeli").style.borderRadius="10px"
  document.getElementById("lapsaxelicont").style.marginLeft="5%"
  document.getElementById("lapsaxelh1").style.fontSize="18px"
  document.getElementById("lapsaxelqvesh").style.fontSize="14px"
  document.getElementById("lapsaxelicont").style.marginTop="-8%"
  document.getElementById("lapsaxelicont").style.width="100%"
  
  document.getElementById("brandselector").style.position="absolute"
  document.getElementById("brandselector").style.borderRadius="10px"
  document.getElementById("brandselector").style.width="350px"
  document.getElementById("brandselector").style.marginLeft="0%"
  document.getElementById("brandselector").style.marginTop="40%"
}

function fourth(){
  document.getElementById("hr1").style.marginTop="35%"
  document.getElementById("hr1").style.borderBottom="10px solid #F6F6F6"
  document.getElementById("hr1").style.width="100%"
  document.getElementById("hr1").style.height="0%"
  
  document.getElementById("CPUselector").style.position="absolute"
  document.getElementById("CPUselector").style.borderRadius="10px"
  document.getElementById("CPUselector").style.width="350px"
  document.getElementById("CPUselector").style.marginLeft="0%"
  document.getElementById("CPUselector").style.marginTop="7%"
}

function fifth(){
  document.getElementById("cpubirtvi").style.width="330px"
  document.getElementById("cpubirtvi").style.borderRadius="10px"
  document.getElementById("cpubirtvicont").style.marginLeft="5%"
  document.getElementById("birtvih1").style.fontSize="18px"
  document.getElementById("birtvisqvesh").style.fontSize="14px"
  document.getElementById("cpubirtvicont").style.marginTop="30%"
  document.getElementById("cpubirtvicont").style.width="100%"
  
  document.getElementById("cpunakadi").style.width="330px"
  document.getElementById("cpunakadi").style.borderRadius="10px"
  document.getElementById("cpunakadicont").style.marginLeft="10%"
  document.getElementById("nakadih1").style.fontSize="18px"
  document.getElementById("nakadisqvesh").style.fontSize="14px"
  document.getElementById("cpunakadicont").style.marginTop="70%"
  document.getElementById("cpunakadicont").style.width="100%"
  document.getElementById("cpunakadicont").style.position="absolute"
}

function sixth(){
  document.getElementById("lepram").style.width="330px"
  document.getElementById("lepram").style.borderRadius="10px"
  document.getElementById("lepram").style.marginLeft="-10%"
  document.getElementById("lepram").style.marginTop="0"
  document.getElementById("lepramh1").style.fontSize="18px"
  document.getElementById("lepramh1").style.marginTop="30%"
  document.getElementById("lepramh1").style.marginLeft="-10%"
  document.getElementById("lepramisqvesh").style.fontSize="14px"
  document.getElementById("lepramisqvesh").style.marginLeft="-10%"

  document.getElementById("mextipi").style.marginTop="80%"
  document.getElementById("mextipi").style.marginLeft="-107%"
  document.getElementById("sawitle").style.fontSize="18px"
  document.getElementById("rad1").style.marginLeft="10px"
  document.getElementById("s1").style.marginLeft="25px"
  document.getElementById("s1").style.border="none"
  document.getElementById("s1").style.marginTop="-18px"
  document.getElementById("r2").style.marginLeft="40px"
  document.getElementById("r1").style.marginLeft="-15px"
  document.getElementById("r2").style.marginTop="-18px"
  document.getElementById("s2").style.marginTop="-37px"
  document.getElementById("s2").style.marginLeft="150px"
}

function seventh(){
  document.getElementById("hr2").style.marginTop="10%"
  document.getElementById("hr2").style.borderBottom="10px solid #F6F6F6"
  document.getElementById("hr2").style.width="100%"
  document.getElementById("hr2").style.height="0%"

  document.getElementById("lari").style.width="330px"
  document.getElementById("lari").style.borderRadius="10px"
  document.getElementById("lari").style.marginLeft="0px"
  document.getElementById("lari").style.fontSize="16px"
  document.getElementById("fasi").style.marginLeft="5%"
  document.getElementById("larih1").style.fontSize="18px"
  document.getElementById("lariqvesh").style.fontSize="14px"
  document.getElementById("fasi").style.marginTop="25%"
  document.getElementById("fasi").style.width="100%"
  document.getElementById("fasi").style.position="absolute"

  document.getElementById("rodis").style.width="350px"
  document.getElementById("rodis").style.borderRadius="10px"
  document.getElementById("rodis").style.marginLeft="170px"
  document.getElementById("rodis").style.fontSize="16px"
  document.getElementById("tarigi").style.marginLeft="6%"
  document.getElementById("rodistxt").style.fontSize="18px"
  document.getElementById("rodistxt").style.marginLeft="0px"
  document.getElementById("tarigi").style.marginTop="-5%"
  document.getElementById("tarigi").style.width="100%"
  document.getElementById("tarigi").style.position="absolute"
}

function eighth(){
  document.getElementById("mdgcont").style.marginTop="65%"
  document.getElementById("mdgcont").style.marginLeft="5%"
  document.getElementById("m1").style.marginLeft="40px"
  document.getElementById("m1").style.marginTop="-20px"
  document.getElementById("n2").style.marginLeft="80px"
  document.getElementById("n2").style.marginTop="-18px"
  document.getElementById("m2").style.marginLeft="190px"
  document.getElementById("m2").style.marginTop="-38px"

  document.getElementById("t1").style.fontSize="18px"
  document.getElementById("ukangilaki").style.marginTop="80px"
  document.getElementById("t2").style.fontSize="18px"
  document.getElementById("damaxsovreba").style.marginTop="80px"
  document.getElementById("damaxsovreba").style.width="162px"
  document.getElementById("damaxsovreba").style.marginLeft="30px"

  document.getElementById("error22").style.width="25px"
  document.getElementById("error22").style.height="25px"
  document.getElementById("error22").style.marginTop="-2px"
  document.getElementById("error22").style.marginLeft="10px"
  document.getElementById("error2").style.width="25px"
  document.getElementById("error2").style.height="25px"
  document.getElementById("error2").style.position="absolute"
  document.getElementById("error2").style.marginTop="-3px"
  document.getElementById("error2").style.marginLeft="200px"
  document.getElementById("error").style.marginTop="230px"


  document.getElementById("logounderform1").style.display="none"
}




function dvali(){
if(screen.width<=390){
  first();

  second();
  
  third();
  
  fourth();
  
  fifth();

  sixth();

  seventh();

  eighth();

  
}
}


window.addEventListener('load', dvali)
window.addEventListener('resize', dvali)
window.onresize = () => {
  location.reload();
}