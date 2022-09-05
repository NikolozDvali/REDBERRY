const getData = () => {
    const xhr = new XMLHttpRequest();
    // const url = 'https://pcfy.redberryinternship.ge/api/laptops/'+localStorage.getItem("id")+'?token=9e13635cfad30a9f81e869b51be6bb9a';
    const url = "https://pcfy.redberryinternship.ge/api/laptop/"+localStorage.getItem("id")+"?token=234a96241c3ec6ac6de13c5a6d586d38"
    xhr.open('GET', url);
    console.log(url)
    
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        console.log(data)




        let saxeli = JSON.stringify(data.data.user.name+" "+data.data.user.surname)
        saxeli = saxeli.replace(/['"]+/g, '')

        document.getElementById("saxelivar").innerHTML = saxeli






        let teamid= JSON.stringify(data.data.user.team_id);
        let teamOutput;
        
        switch(teamid){
            case "1":
                teamOutput="დეველოპერი"
                break;
            case "2":
                teamOutput="HR"
                break;
            case "3":
                teamOutput="გაყიდვები"
                break;
            case "4":
                teamOutput="დიზაინი"
                break;
            case "5":
                teamOutput="მარკეტინგი"
                break;
        }

        document.getElementById("timivar").innerHTML = teamOutput;



        document.getElementById("img").setAttribute("src", "https://pcfy.redberryinternship.ge/"+data.data.laptop.image)




        let positionid= JSON.stringify(data.data.user.position_id);
        let positionOutput;


        switch(positionid){
            case "1":
                positionOutput="ინტერნი"
                break;
            case "2":
                positionOutput="ჯუნიორ დეველოპერი"
                break;
            case "3":
                positionOutput="მიდლ დეველოპერი"
                break;
            case "4":
                positionOutput="სენიორ დეველოპერი"
                break;
            case "5":
                positionOutput="ლიდ დეველოპერი"
                break;
            case "6":
                positionOutput="HR სპეციალისტი"
                break;
            case "7":
                positionOutput="HR პროექტ მენეჯერი"
                break;
            case "8":
                positionOutput="HR ბიზნეს პარტნიორი"
                break;
            case "9":
                positionOutput="ჯუნიორ ბიზნეს დეველოპერი"
                break;
            case "10":
                positionOutput="ბიზნეს დეველოპერი"
                break;
            case "11":
                positionOutput="სენიორ ბიზნეს დეველოპერი"
                break;
            case "12":
                positionOutput="ჯუნიორ UI/UX დიზაინერი"
                break;
            case "13":
                positionOutput="UI/UX დიზაინერი"
                break;
            case "14":
                positionOutput="სენიორ UI/UX დიზაინერი"
                break;
            case "15":
                positionOutput="ლიდ UI/UX დიზაინერი"
                break;
            case "16":
                positionOutput="ბლოგერი"
                break;
            case "17":
                positionOutput="growth მარკეტინგის სპეციალისტი"
                break;
            case "18":
                positionOutput="მარკეტინგის თიმ ლიდი"
                break;
        }

        document.getElementById("poziciavar").innerHTML = positionOutput;






        let mail= JSON.stringify(data.data.user.email);
        mail = mail.replace(/['"]+/g, '')
        document.getElementById("meilivar").innerHTML = mail;




        let tel = JSON.stringify(data.data.user.phone_number);
        tel = tel.slice(0,5)+" "+tel.slice(5,8)+" "+tel.slice(8,10)+" "+tel.slice(10,12)+" "+tel.slice(12,14);
        tel = tel.replace(/['"]+/g, '')
        document.getElementById("telnomerivar").innerHTML = tel;


        let lapname = JSON.stringify(data.data.laptop.name);
        lapname = lapname.replace(/['"]+/g, '')
        document.getElementById("saxelivar1").innerHTML = lapname;


        let brand = JSON.stringify(data.data.laptop.brand_id);
        let brandOutput;

        switch(brand){
            case "1":
                brandOutput = "HP"
                break;
            case "2":
                brandOutput = "Dell"
                break;
            case "3":
                brandOutput = "Microsoft"
                break;
            case "4":
                brandOutput = "Apple"
                break;
            case "5":
                brandOutput = "Lenovo"
                break;
            case "6":
                brandOutput = "Acer"
                break;
        }



        document.getElementById("lapbrandvar").innerHTML = brandOutput;







        let ram = JSON.stringify(data.data.laptop.ram);
        ram = ram.replace(/['"]+/g, '')
        document.getElementById("RAMvar").innerHTML = ram;


        let HDT = JSON.stringify(data.data.laptop.hard_drive_type);
        HDT = HDT.replace(/['"]+/g, '')
        document.getElementById("mexsvar").innerHTML = HDT;





        let cpu = JSON.stringify(data.data.laptop.cpu.name);
        cpu = cpu.replace(/['"]+/g, '')
        document.getElementById("CPUvar").innerHTML = cpu;


        let cpubirtvi = JSON.stringify(data.data.laptop.cpu.cores);
        cpubirtvi = cpubirtvi.replace(/['"]+/g, '')
        document.getElementById("birtvivar").innerHTML = cpubirtvi;



        let cpunakadi = JSON.stringify(data.data.laptop.cpu.threads);
        cpunakadi = cpunakadi.replace(/['"]+/g, '')
        document.getElementById("nakadivar").innerHTML = cpunakadi;


        let mdgom = JSON.stringify(data.data.laptop.state);
        mdgom = mdgom.replace(/['"]+/g, '')

        switch(mdgom){
            case "new":
                mdgom = "ახალი"
                break;
            case "used":
                mdgom = "მეორადი"
                break;
        }
        document.getElementById("mdgomvar1").innerHTML = mdgom;



        let fasi = JSON.stringify(data.data.laptop.price);
        fasi = fasi.replace(/['"]+/g, '')
        document.getElementById("fasivar").innerHTML = fasi+" ₾";


        let date = JSON.stringify(data.data.laptop.purchase_date);
        date = date.replace(/[-]+/g, ' / ')
        date = date.replace(/['"]+/g, '')
        document.getElementById("drovar").innerHTML = date;







        if(screen.width<=390){

            document.getElementById("title").style.fontSize="16px"
            document.getElementById("goBack").style.width="70px"
            document.getElementById("goBack").style.height="70px"
            document.getElementById("goBack").style.backgroundImage="url('./Vector (2).png')";


            document.getElementById("img").style.width="358px"
            document.getElementById("img").style.height="191px"
            document.getElementById("img").style.marginLeft="-67px"

            document.getElementById("saxeli").style.fontSize="14px"
            document.getElementById("timi").style.fontSize="14px"
            document.getElementById("pozicia").style.fontSize="14px"
            document.getElementById("meili").style.fontSize="14px"
            document.getElementById("telnomeri").style.fontSize="14px"
            document.getElementById("saxelivar").style.fontSize="14px"
            document.getElementById("timivar").style.fontSize="14px"
            document.getElementById("poziciavar").style.fontSize="14px"
            document.getElementById("meilivar").style.fontSize="14px"
            document.getElementById("telnomerivar").style.fontSize="14px"

            document.getElementById("humanInfoLeft").style.marginLeft="-190px"
            document.getElementById("humanInfoLeft").style.marginTop="150px"

            document.getElementById("humanIndoRight").style.marginLeft="-60px"
            document.getElementById("humanIndoRight").style.marginTop="150px"

            document.getElementById("hr1").style.marginTop="180px"
            document.getElementById("hr1").style.marginLeft="5px"
            document.getElementById("hr1").style.width="95%"

            
            document.getElementById("lapsaxeli").style.fontSize="14px"
            document.getElementById("lapbrand").style.fontSize="14px"
            document.getElementById("RAM").style.fontSize="14px"
            document.getElementById("mexs").style.fontSize="14px"
            document.getElementById("saxelivar1").style.fontSize="14px"
            document.getElementById("lapbrandvar").style.fontSize="14px"
            document.getElementById("RAMvar").style.fontSize="14px"
            document.getElementById("mexsvar").style.fontSize="14px"
            document.getElementById("CPU").style.fontSize="14px"
            document.getElementById("birtvi").style.fontSize="14px"
            document.getElementById("nakadi").style.fontSize="14px"
            document.getElementById("CPUvar").style.fontSize="14px"
            document.getElementById("birtvivar").style.fontSize="14px"
            document.getElementById("nakadivar").style.fontSize="14px"

            document.getElementById("LaptopInfoLeft").style.marginLeft="-60px"
            document.getElementById("LaptopInfoLeft").style.marginTop="-30px"

            document.getElementById("laptopIndoRight1").style.marginLeft="110px"
            document.getElementById("laptopIndoRight1").style.marginTop="-30px"

            document.getElementById("laptopInfoLeft").style.marginLeft="-190px"
            document.getElementById("laptopInfoLeft").style.marginTop="90px"

            document.getElementById("laptopIndoRight").style.marginLeft="-60px"
            document.getElementById("laptopIndoRight").style.marginTop="90px"
            document.getElementById("mdgom").innerHTML="მდგომარეობა:"
            document.getElementById("mdgom").style.fontWeight="bold"


            document.getElementById("hr2").style.marginTop="100px"
            document.getElementById("hr2").style.marginLeft="5px"
            document.getElementById("hr2").style.width="95%"
            document.getElementById("dro").style.fontSize="14px"
            document.getElementById("drovar").style.fontSize="14px"
            document.getElementById("mdgom").style.fontSize="14px"
            document.getElementById("fasi").style.fontSize="14px"
            document.getElementById("mdgomvar1").style.fontSize="14px"
            document.getElementById("fasivar").style.fontSize="14px"

            document.getElementById("mdgInfoLeft").style.marginLeft="-60px"
            document.getElementById("mdgInfoLeft").style.marginTop="0px"

            document.getElementById("mdgomIndoRight1").style.marginLeft="110px"
            document.getElementById("mdgomIndoRight1").style.marginTop="-30px"

            document.getElementById("droCont").style.marginLeft="-190px"
            document.getElementById("droCont").style.marginTop="20px"
            document.getElementById("droContR").style.marginLeft="-60px"
            document.getElementById("droContR").style.marginTop="0px"

            document.getElementById("gela").style.height="900px"

        }





















    }

    xhr.send();
}

getData();

window.addEventListener('load', getData)
window.addEventListener('resize', getData)


window.onresize = () => {
    location.reload();
  }