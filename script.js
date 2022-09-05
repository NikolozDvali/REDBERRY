let firstFormDone = false;
let secondFormDone = false;
let page = 0
let firstSaved;
let secondSaved;

// if(window.screen.width = 390){
//   alert("IPHONE")
// }


function zeroOne() {
  page = 1;
  localStorage.setItem("page", page);
  location.assign('MOMXMAREBELI.html');
}



function saveFirst() {
  firstSaved = {
    name: localStorage.getItem("saxeli"),
    surname: localStorage.getItem("gvari"),
    team_id: parseInt(localStorage.getItem("timi")),
    position_id: parseInt(localStorage.getItem("pozicia")),
    phone_number: localStorage.getItem("phone"),
    email: localStorage.getItem("mail"),
  }

  // formData.append('name', localStorage.getItem("saxeli"))
  // formData.append('surname', localStorage.getItem("gvari"))
  // formData.append('team_id', parseInt(localStorage.getItem("timi")))
  // formData.append('position_id', parseInt(localStorage.getItem("pozicia")))
  // formData.append('phone_number', localStorage.getItem("phone"))
  // formData.append('email', localStorage.getItem("mail"))

  localStorage.setItem("PIRVELIFORMA", JSON.stringify(firstSaved))
}















function oneTwo() {
  checkFirst();
  if (firstFormDone) {
    saveFirst()
    page = 2;
    localStorage.setItem("page", page);
    location.assign('LAPTOP.html');
  }
}


function goBack() {
  page = 0;
  localStorage.setItem("page", page);
  location.assign('index.html');
}


function wadiukan() {
  page = 1;
  localStorage.setItem("page", page);
  location.assign('MOMXMAREBELI.html');
}



const formData = new FormData();



function saveSecond() {
  secondSaved = {
    token: localStorage.getItem("token"),
    laptop_name: localStorage.getItem("lapsaxeli"),
    laptop_image: localStorage.getItem("image"),
    laptop_brand_id: parseInt(localStorage.getItem("brendi")),
    laptop_cpu: localStorage.getItem("CPU"),
    laptop_cpu_cores: parseInt(localStorage.getItem("cpubirtvi")),
    laptop_cpu_threads: parseInt(localStorage.getItem("cpunakadi")),
    laptop_ram: parseInt(localStorage.getItem("lepram")),
    laptop_hard_drive_type: localStorage.getItem("mexstipi"),
    laptop_state: localStorage.getItem("mdgom"),
    laptop_purchase_date: localStorage.getItem("date"),
    laptop_price: parseInt(localStorage.getItem("lari"))
  }

  // formData.append('token', localStorage.getItem("token"));
  // formData.append('laptop_name', localStorage.getItem("lapsaxeli"));
  // formData.append('laptop_image', localStorage.getItem("image"));
  // formData.append('laptop_brand_id', parseInt(localStorage.getItem("brendi")));
  // formData.append('laptop_cpu', localStorage.getItem("CPU"));
  // formData.append('laptop_cpu_cores', parseInt(localStorage.getItem("cpubirtvi")));
  // formData.append('laptop_cpu_threads', parseInt(localStorage.getItem("cpunakadi")));
  // formData.append('laptop_ram', parseInt(localStorage.getItem("lepram")),);
  // formData.append('laptop_hard_drive_type', localStorage.getItem("mexstipi"));
  // formData.append('laptop_state', localStorage.getItem("mdgom"));
  // formData.append('laptop_purchase_date', localStorage.getItem("date"));
  // formData.append('laptop_price', parseInt(localStorage.getItem("lari")));


  localStorage.setItem("MEOREFORMA", JSON.stringify(secondSaved))

}




function storeRam() {
  if (document.getElementById("arch1").checked = true) {
    localStorage.setItem("mexstipi", "SSD");
  }
}

function storeRam2() {
  if (document.getElementById("arch2").checked = true) {
    localStorage.setItem("mexstipi", "HDD")
  }
}

function storeMdg() {
  if (document.getElementById("arch11").checked = true) {
    localStorage.setItem("mdgom", "new");
  }
}

function storeMdg2() {
  if (document.getElementById("arch22").checked = true) {
    localStorage.setItem("mdgom", "used")
  }
}



function storeDate() {
  let date = document.getElementById("rodis").value;
  localStorage.setItem("date", date)
}





localStorage.setItem("token", "234a96241c3ec6ac6de13c5a6d586d38");



function clearForm(){
  localStorage.clear()
}





function DAAMAX() {
  checkSecond();

  if (secondFormDone) {
    // let sax = localStorage.getItem("saxeli")
    // formData.append('name', sax)
    // formData.append('surname', localStorage.getItem("gvari"))
    // formData.append('team_id', parseInt(localStorage.getItem("timi")))
    // formData.append('position_id', parseInt(localStorage.getItem("pozicia")))
    // formData.append('phone_number', localStorage.getItem("phone"))
    // formData.append('email', localStorage.getItem("mail"))
    saveSecond()
    page = 3;
    localStorage.setItem("page", page);
    handleLocalStorageForms(function(){
      location.assign('damaxsovrda.html');
    });
  }
}



function siashigadayvana(){
  clearForm();

  location.assign('sia.html');
}







































$("#forma1").submit(function(e) {
  e.preventDefault();
});


$("#forma2").submit(function(e) {
  e.preventDefault();
});








// function sendJSON(e){
//   let url="http://localhost:8000/api/laptop/create";
//   let headers = {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
//   async function makePostRequest(url, requestType, headers){
//     await fetch(
//         url,
//         {
//             method: requestType,
//             headers: headers,
//             body: JSON.stringify(e)
//         },
//     ).then(async rawResponse =>{
//         var content = await rawResponse.json()
//         console.log(content);
//     });
// }
// }

const headers = {
  'Content-Type':'multipart/form-data'
};


async function sendJSON(e){
await axios.post('https://pcfy.redberryinternship.ge/api/laptop/create', e, {headers}).then(res => {
  console.log(res)
}).catch(error => {
  console.error(error)
})
}





// async function sendJSON(e) {
//   const response = await fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
//     method: 'POST',
//     headers: { 'Content-Type': 'multipart/form-data' },
//     body: e,
//   }).then(function(response) {
//     console.log(response)
//   }).catch((error)=>{
//     console.error(error)
//   })
// }




function string(e){
  switch(e){
    case "1":
      e = "Intel Core i3";
      break;
    case "2":
      e = "Intel Core i5";
      break;
    case "3":
      e = "Intel Core i7";
      break;
    case "4":
      e = "Intel Core i9";
      break;
    case "5":
      e = "AMD Ryzen 3";
      break;
    case "6":
      e = "AMD Ryzen 5";
      break;
    case "7":
      e = "AMD Ryzen 7";
      break;
    case "8":
      e = "AMD Athlon";
      break;
    case "9":
      e = "Apple M1";
      break;
    case "10":
      e = "Apple M2";
      break;
  }
  return e;
}




function check(e){
  if(e==null){
    e="10-10-2010"
  }
  return e
}



function change(e){
  if(e==1||e==2||e==3||e==4||e==5){
    return 1;
  }
  if(e==6||e==7||e==8){
    return 2;
  }
  if(e==9||e==10||e==11){
    return 3;
  }
  if(e==12||e==13||e==14||e==15){
    return 4;
  }
  if(e==16||e==17||e==18){
    return 5;
  }
}






let image;

function uploadFile(e) {
  image = e.target.files[0];
  console.log(image)
}

// formData.append('token', localStorage.getItem("token"));
  // formData.append('laptop_name', localStorage.getItem("lapsaxeli"));
  // formData.append('laptop_image', localStorage.getItem("image"));
  // formData.append('laptop_brand_id', parseInt(localStorage.getItem("brendi")));
  // formData.append('laptop_cpu', localStorage.getItem("CPU"));
  // formData.append('laptop_cpu_cores', parseInt(localStorage.getItem("cpubirtvi")));
  // formData.append('laptop_cpu_threads', parseInt(localStorage.getItem("cpunakadi")));
  // formData.append('laptop_ram', parseInt(localStorage.getItem("lepram")),);
  // formData.append('laptop_hard_drive_type', localStorage.getItem("mexstipi"));
  // formData.append('laptop_state', localStorage.getItem("mdgom"));
  // formData.append('laptop_purchase_date', localStorage.getItem("date"));
  // formData.append('laptop_price', parseInt(localStorage.getItem("lari")));




function handleLocalStorageForms(callback) {
  // let a = JSON.parse(localStorage.getItem("PIRVELIFORMA"));
  // let b = JSON.parse(localStorage.getItem("MEOREFORMA"));

  // let finalForm = $.extend(a,b)


  let formData = new FormData();
  formData.append('name', localStorage.getItem("saxeli"))
  formData.append('surname', localStorage.getItem("gvari"))
  formData.append('team_id', change(parseInt(localStorage.getItem("pozicia"))))
  formData.append('position_id', parseInt(localStorage.getItem("pozicia")))
  formData.append('phone_number', localStorage.getItem("phone"))
  formData.append('email', localStorage.getItem("mail"))
  formData.append('token', '234a96241c3ec6ac6de13c5a6d586d38')
  formData.append('laptop_name', localStorage.getItem("lapsaxeli"))
  formData.append('laptop_image', image)
  formData.append('laptop_brand_id', parseInt(localStorage.getItem("brendi")))
  formData.append('laptop_cpu', string(localStorage.getItem("CPU")))
  formData.append('laptop_cpu_cores', parseInt(localStorage.getItem("cpubirtvi")))
  formData.append('laptop_cpu_threads', parseInt(localStorage.getItem("cpunakadi")))
  formData.append('laptop_ram', parseInt(localStorage.getItem("lepram")))
  formData.append('laptop_hard_drive_type', localStorage.getItem("mexstipi"))
  formData.append('laptop_state', localStorage.getItem("mdgom"))
  formData.append('laptop_purchase_date', check(localStorage.getItem("date")))
  formData.append('laptop_price', parseInt(localStorage.getItem("lari")))


for (var pair of formData.entries()) {
    console.log(pair[0] + ', ' + pair[1])
  }
  // const createLaptop = async (formData) => {
  //   await axios.post('https://pcfy.redberryinternship.ge/api/laptop/create',
  //     formData,
  //     {}
  //   ).then(res => {
  //     console.log(res)
  //   })
  // }
  sendJSON(formData);

  // getMethod();
  // createLaptop(formData)
  callback()
  
}


// function sendJSON(e){

//     $.ajax({
//       type : "POST",
//       url : "https://pcfy.redberryinternship.ge/api/laptop/create",
//       data : e,
//       success : function(Args){
//           console.log(Args);
//       },
//       error : function(Args){
//           console.log("Error");
//       }
//     })
//   }



// function getFormData(object) {
//     const formData = new FormData();
//     Object.keys(object).forEach(key => formData.append(key, object[key]));
//     return formData;
// }



// function getMethod(){
//   const Http = new XMLHttpRequest();
// const url='https://pcfy.redberryinternship.ge/api/laptop/create';
// Http.open("GET", url);
// Http.send();

// Http.onreadystatechange = (e) => {
//   console.log(Http.responseText)
// }
// }



function dvali(){
  console.log(screen.width)
if(screen.width<=390){
  document.getElementById("LandingPicture").src="landing2.png"
  document.getElementById("LandingPicture").style.width= "69%"
  document.getElementById("LandingPicture").style.marginLeft= "auto"
  document.getElementById("LandingPicture").style.marginRight= "auto"
  document.getElementById("LandingPicture").style.marginTop= "10%"
  document.getElementById("button1").style.marginTop= "10%"
  document.getElementById("button2").style.marginTop= "10%"

  document.getElementById("button1").style.width= "90%"
  document.getElementById("button2").style.width= "90%"
  document.getElementById("button1").style.height= "7%"
  document.getElementById("button2").style.height= "7%"
}
}



window.addEventListener('resize', dvali)
window.addEventListener('load', dvali)








window.onresize = () => {
  location.reload();
}