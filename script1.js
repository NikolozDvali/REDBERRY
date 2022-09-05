document.getElementById("tanamshromlisInfo").style.borderBottom = "2px solid black";
document.getElementById("tanamshromlisInfo").style.paddingBottom = "5px";
document.getElementById("goBackButton").style.display="block";























const urlTeams = 'https://pcfy.redberryinternship.ge/api/teams';
const teamsSelect = document.getElementById("timiselector");

teamsSelect.addEventListener("change", ev => onTeamsChange(ev));

function fetchTeamsData(){
    console.log(`Inside ${arguments.callee.name}`)
    fetch(urlTeams).then(res => res.json()).then(data => loadTeamsData(data)).catch(err => console.log(err));
}

function loadTeamsData(data){
    console.log(`Inside ${arguments.callee.name}`)
    for(row of data.data){
        opt = document.createElement('option');
        opt.text = row.name;
        opt.value = row.id;
        teamsSelect.options.add(opt);
    }
}

function onTeamsChange(ev){
    console.log(`Inside ${arguments.callee.name}`);
    console.log(ev);
    console.log(teamsSelect.id)
    
}

fetchTeamsData();



const urlPositions = 'https://pcfy.redberryinternship.ge/api/positions';
const PositionsSelect = document.getElementById("poziciaselector");

teamsSelect.addEventListener("change", ev => onPositionsChange(ev));

function fetchPositionsData(){
    console.log(`Inside ${arguments.callee.name}`)
    fetch(urlPositions).then(res => res.json()).then(data => loadPositionsData(data)).catch(err => console.log(err));
}

function loadPositionsData(data){
    console.log(`Inside ${arguments.callee.name}`)
    for(row of data.data){
        opt = document.createElement('option');
        opt.text = row.name;
        opt.value = row.id;
        opt.teamsid = row.teams_id;

        PositionsSelect.options.add(opt);
    }
}

function onPositionsChange(ev){
    console.log(`Inside ${arguments.callee.name}`);
    console.log(ev);
    console.log(PositionsSelect.team_id)
    
}

fetchPositionsData();


  document.getElementById("saxeli").value = getSavedValue("saxeli");    // set the value to this input
  document.getElementById("gvari").value = getSavedValue("gvari");   // set the value to this input

  document.getElementById("mail").value = getSavedValue("mail");
  document.getElementById("phone").value = getSavedValue("phone");


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



  const geoalph=["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ"];

function checkFirst(){

  checkSaxeli();
  checkGvari();
  checkTimi();
  checkPozicia();
  checkMail();
  checkT();

  if(checkSaxeli()&&checkGvari()&&checkTimi()&&checkPozicia()&&checkMail()&&checkT()){
    firstFormDone = true;
  }
  if(!checkSaxeli()){
    document.getElementById("saxeli").style.borderColor="#E52F2F";
    document.getElementById("saxelih1").style.color="#E52F2F";
    document.getElementById("saxelisqvesh").style.color="#E52F2F";
  }
  if(!checkGvari()){
    document.getElementById("gvari").style.borderColor="#E52F2F";
    document.getElementById("gvarih1").style.color="#E52F2F";
    document.getElementById("gvarisqvesh").style.color="#E52F2F";
  }
  if(!checkTimi()){
    document.getElementById("timiselector").style.outlineOffset="2px";
    document.getElementById("timiselector").style.outline="2px solid #E52F2F";
  }
  if(!checkPozicia()){
    document.getElementById("poziciaselector").style.outlineOffset="2px";
    document.getElementById("poziciaselector").style.outline="2px solid #E52F2F";
  }
  if(!checkMail()){
    document.getElementById("mail").style.borderColor="#E52F2F";
    document.getElementById("mailh1").style.color="#E52F2F";
    document.getElementById("mailisqvesh").style.color="#E52F2F";
  }
  if(!checkT()){
    document.getElementById("phone").style.borderColor="#E52F2F";
    document.getElementById("phoneh1").style.color="#E52F2F";
    document.getElementById("phoneqvesh").style.color="#E52F2F";
  }
}

function checkSaxeli(){
  let islongenough;
  let isnotempty;
  let elem = document.getElementById("saxeli").value;

  if(elem != ""){
    isnotempty = true;
  }else{
    isnotempty = false;
  }
  
  if(elem.length>=2){
    islongenough = true;
  }else{
    islongenough = false;
  }

  let charar = elem.split('');

  let isgeorgian = charar.every(element => {
    if(geoalph.indexOf(element)>=0){
      return true
    }else{
      return false;
    }
  })
  
  if(!isnotempty){
    document.getElementById("saxelisqvesh").innerHTML="შეავსე ეს ველი";
  }else if(!isgeorgian){
    document.getElementById("saxelisqvesh").innerHTML="გამოიყენე ქართული ასოები";
  }else if(!islongenough){
    document.getElementById("saxelisqvesh").innerHTML="უნდა შეიცავდეს 2 სიმბოლოს მაინც";
  }
  
  if(islongenough&&isnotempty&&isgeorgian){
    document.getElementById("saxelisqvesh").innerHTML="მინიმუმ 2 სიმბოლო, ქართული ასოები";
    document.getElementById("saxelisqvesh").style.color="#2E2E2E";
    document.getElementById("saxeli").style.borderColor="#8AC0E2";
    document.getElementById("saxelih1").style.color="#00000099";



    return true;
  }
}

function checkGvari(){
  let islongenough;
  let isnotempty;
  let elem = document.getElementById("gvari").value;


  if(elem != ""){
    isnotempty = true;
  }else{
    isnotempty = false;
  }
  
  if(elem.length>=2){
    islongenough = true;
  }else{
    islongenough = false;
  }

  let charar = elem.split('');

  let isgeorgian = charar.every(element => {
    if(geoalph.indexOf(element)>=0){
      return true
    }else{
      return false;
    }
  })
  
  if(!isnotempty){
    document.getElementById("gvarisqvesh").innerHTML="შეავსე ეს ველი";
  }else if(!isgeorgian){
    document.getElementById("gvarisqvesh").innerHTML="გამოიყენე ქართული ასოები";
  }else if(!islongenough){
    document.getElementById("gvarisqvesh").innerHTML="უნდა შეიცავდეს 2 სიმბოლოს მაინც";
  }
  
  if(islongenough&&isnotempty&&isgeorgian){
    document.getElementById("gvarisqvesh").innerHTML="მინიმუმ 2 სიმბოლო, ქართული ასოები";
    document.getElementById("gvarisqvesh").style.color="#2E2E2E";
    document.getElementById("gvari").style.borderColor="#8AC0E2";
    document.getElementById("gvarih1").style.color="#00000099";



    return true;
  }
}


function checkTimi(){
  let timi = document.getElementById("timiselector").value;
  if(timi != ""){
    document.getElementById("timiselector").style.outlineOffset="none";
    document.getElementById("timiselector").style.outline="none";
    return true;
  }
}

function checkPozicia(){
  let pozicia = document.getElementById("poziciaselector").value;
    if(pozicia != ""){
    document.getElementById("poziciaselector").style.outlineOffset="none";
    document.getElementById("poziciaselector").style.outline="none";
    return true;
    }else{
    return false;
    }
}

function checkMail(){
  let mail = document.getElementById("mail").value;
  let isnotempty;
  let mailformat;

  if(mail != ""){
    isnotempty = true;
  }else{
    isnotempty =false;
  }

  if(mail.endsWith("@redberry.ge")){
    mailformat=true;
  }else{
    mailformat=false;
  }
  
  if(!isnotempty){
    document.getElementById("mailisqvesh").innerHTML="შეავსე ეს ველი";

  }
  if(!mailformat){
    document.getElementById("mailisqvesh").innerHTML="უნდა მთავრდებოდეს @redberry.ge-ით";
  }

  if(isnotempty&&mailformat){
    document.getElementById("mailisqvesh").innerHTML="უნდა მთავრდებოდეს @redberry.ge-ით";
    document.getElementById("mail").style.borderColor="#8AC0E2";
    document.getElementById("mailh1").style.color="#000000";
    document.getElementById("mailisqvesh").style.color="#2E2E2E";
    return true;
  }
}

function checkT(){
  let T = document.getElementById("phone").value;
  let isnotempty;
  let Tformat;
  let Tr = T.substring(1);

  if(T != ""){
    isnotempty = true;
  }else{
    isnotempty =false;
  }

 if(T[0]=="+"&&T.length==13){
  Tformat=true;
 }else{
  Tformat=false;
 }

  if(!isnotempty){
    document.getElementById("phoneqvesh").innerHTML="შეავსე ეს ველი";
  }

  let isnumbers =  /^[0-9]+$/.test(Tr);

  if(!isnumbers){
    document.getElementById("phoneqvesh").innerHTML="უნდა შეიცავდეს მხოლოდ რიცხვებს";
  }

  if(isnotempty&&Tformat&&isnumbers){
    document.getElementById("phoneqvesh").innerHTML="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს";
    document.getElementById("phone").style.borderColor="#8AC0E2";
    document.getElementById("phoneh1").style.color="#000000";
    document.getElementById("phoneqvesh").style.color="#2E2E2E";
    return true;
  }
}





$(function() {
    $('#poziciaselector').change(function() {
        localStorage.setItem('pozicia', this.value);
    });
    if(localStorage.getItem('pozicia')){
        $('#poziciaselector').val(localStorage.getItem('pozicia'));
    }
});



$(function() {
    $('#timiselector').change(function() {
        localStorage.setItem('timi', this.value);
    });
    if(localStorage.getItem('timi')){
        $('#timiselector').val(localStorage.getItem('timi'));
    }
});









function dvali(){
  if(screen.width<=390){
    document.getElementById("formRect").style.width="100%"
    document.getElementById("formRect").style.marginTop="5%"

    document.getElementById("BACK").src="Vector (2).png"
    document.getElementById("BACK").style.marginTop="3.6vh"
    document.getElementById("leptopisMaxasiateblebi").style.display="none"
    document.getElementById("tanamshromlisInfo").style.borderBottom="none"
    document.getElementById("tanamshromlisInfo").style.fontSize="16px"
    document.getElementById("tanamshromlisInfo").style.marginTop="-4%"


    document.getElementById("1/2").innerHTML="1/2"
    document.getElementById("1/2").style.fontSize="14px"
    document.getElementById("1/2").style.position="absolute"
    document.getElementById("1/2").style.color="#898989"
    document.getElementById("1/2").style.paddingTop="5px"  



    document.getElementById("saxeli").style.width="350px"
    document.getElementById("imsaxeli").style.marginLeft="-4%"
    document.getElementById("saxelih1").style.fontSize="18px"
    document.getElementById("saxelisqvesh").style.fontSize="14px"
    document.getElementById("imsaxeli").style.marginTop="-13%"

    document.getElementById("imgvari").style.position="absolute";
    document.getElementById("imgvari").style.marginTop="20%"
    document.getElementById("gvari").style.width="350px"
    document.getElementById("imgvari").style.marginLeft="-4%"
    document.getElementById("gvarih1").style.fontSize="18px"
    document.getElementById("gvarisqvesh").style.fontSize="14px"
    document.getElementById("imgvari").style.marginTop="26%"

    document.getElementById("timiselector").style.width="70%"
    document.getElementById("timi").style.marginLeft="-33.5%"
    document.getElementById("timi").style.marginTop="50%"

    document.getElementById("poziciaselector").style.width="70%"
    document.getElementById("pozicia").style.marginLeft="-33.5%"
    document.getElementById("pozicia").style.marginTop="10%"

    document.getElementById("mailContainer").style.position="absolute";
    document.getElementById("mailContainer").style.marginTop="20%"
    document.getElementById("mail").style.width="135%"
    document.getElementById("mailContainer").style.marginLeft="3%"
    document.getElementById("mailh1").style.fontSize="18px"
    document.getElementById("mailisqvesh").style.fontSize="14px"
    document.getElementById("mailContainer").style.marginTop="10%"

    document.getElementById("TContainer").style.position="absolute";
    document.getElementById("TContainer").style.marginTop="20%"
    document.getElementById("phone").style.width="350px"
    document.getElementById("TContainer").style.marginLeft="3%"
    document.getElementById("phoneh1").style.fontSize="18px"
    document.getElementById("phoneqvesh").style.fontSize="14px"
    document.getElementById("TContainer").style.marginTop="50%"
    document.getElementById("phoneqvesh").innerHTML="ქართული მობ-ნომრის ფორმატი"

    document.getElementById("logounderform1").style.display="none"
    document.getElementById("body2").style.height="1000px"
    document.getElementById("formRect").style.height="1000px"

    document.getElementById("button3").style.width="33.8%"
    document.getElementById("button3").style.height="6vh"
    document.getElementById("button3").style.fontSize="18px"
    document.getElementById("button3").style.marginRight="5%"
    document.getElementById("button3").style.marginBottom="-13%"

  }
}




window.addEventListener('load', dvali)
window.addEventListener('resize', dvali)

window.onresize = () => {
  location.reload();
}