let token = "234a96241c3ec6ac6de13c5a6d586d38"

let allLaps=[];


let id;


let images =[];



const getData = async() => {
    const response = await fetch('https://pcfy.redberryinternship.ge/api/laptops?token=234a96241c3ec6ac6de13c5a6d586d38', 
    { method: 'GET',
    headers: {'Content-Type': 'application/json'}})
    const data = await response.json()

    let mas = new Array()

    console.log(data);

        allLaps.push(data.data);
        for(let i =0; i< data.data.length; i++){


            let laptopDiv = document.createElement('div');
            laptopDiv.classList.add("content")
            laptopDiv.setAttribute('id', "cont"+[i])

            mas.push(laptopDiv)


            let newNameDiv = document.createElement('div');
            newNameDiv.classList.add("names");

            let saxeli = JSON.stringify(data.data[i].user);
            saxeli = saxeli.replace(/{|}|name|,|:|"|sur/g, ' ')
            // console.log(saxeli)

            if(screen.width<=390){
                newNameDiv.style.width="160px"
                newNameDiv.style.transform="translate(-110px,-30px)"
            }

            let newName = document.createTextNode(saxeli)
            newNameDiv.appendChild(newName);


            laptopDiv.appendChild(newNameDiv);
            




            id = JSON.stringify(data.data[i].laptop.id)
            // console.log(id)
            localStorage.setItem("id",id)



            let laptopNameDiv = document.createElement('div')
            laptopNameDiv.classList.add("laptopNameClass")

            if(screen.width<=390){
                laptopNameDiv.style.width="160px"
                laptopNameDiv.style.transform="translate(-110px,-40px)"
            }

            let lapsaxeli = JSON.stringify(data.data[i].laptop.name)
            lapsaxeli = lapsaxeli.replace(/"/g, ' ')
            // console.log(lapsaxeli)

            let newLapName = document.createTextNode(lapsaxeli)
            laptopNameDiv.appendChild(newLapName);


            laptopDiv.appendChild(laptopNameDiv);


            let more = document.createElement('button');
            more.classList.add("more");
            more.setAttribute('onclick', "openMore(this.id)")
            more.setAttribute('id',id)

            let buttonText = document.createTextNode("მეტის ნახვა");
            more.appendChild(buttonText)

            if(screen.width<=390){
                more.style.width="100px"
                more.style.transform="translate(0px,-70px)"
            }

            laptopDiv.appendChild(more);


            let imageDiv = document.createElement('img')
            imageDiv.classList.add("imageClass")
            imageDiv.setAttribute('id', "img"+[i])
            images.push(imageDiv)
            if(screen.width<=390){
                imageDiv.style.height="100px"
                imageDiv.style.transform="translate(0px, -73px)"

            }
            
            imageDiv.setAttribute('src', "https://pcfy.redberryinternship.ge/"+data.data[i].laptop.image)

            laptopDiv.appendChild(imageDiv)

            images.push(imageDiv)

            let motherDiv = document.getElementById("table");
            motherDiv.appendChild(laptopDiv);

            

        }           
        

    
    
    return mas
}










function openMore(elem){
    localStorage.setItem("id", elem)
    location.assign("info.html")
}




function me(){
   
if(screen.width<=390){
    document.body.style.width="390px"
    document.getElementById("gb").src="Vector (2).png"
    document.getElementById("gb").style.marginLeft="-110px"
    document.getElementById("gb").style.marginTop="30px"
    document.getElementById("table").style.gridTemplateColumns="1fr"
    document.getElementById("chanawerebis sia").style.marginLeft="-80%"
    document.getElementById("chanawerebis sia").style.marginTop="29px"
    document.getElementById("chanawerebis sia").style.fontSize="16px"
    document.getElementById("table").style.gridTemplateColumns="358px"

   
    
let ilia =  getData().then(res => (
    res.map(elem => {
        elem.style.width="358px";
        elem.style.height="109px";
    })
   )).catch(error=>console.error(error))
   

    // mas.map(element => console.log(element))

    // a.map(element => console.log(element))
    
}
}
window.addEventListener('load', me)
window.addEventListener('resize', me)

window.onresize = () => {
    if(screen.width>390){
        getData();
    }
    location.reload();
  }

  window.addEventListener('load', getData)
