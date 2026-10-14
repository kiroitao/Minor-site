const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
     if(document.getElementsByTagName("div")[0].innerHTML==="Высоцкий") {
         document.getElementsByTagName("div")[0].innerHTML = "Visotskii"
         document.getElementsByTagName("div")[1].innerHTML = "Leonid"
         document.getElementsByTagName("div")[2].innerHTML = "Dmitrievich"
         document.getElementsByTagName("div")[3].innerHTML="Male &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 06.05.2004"
         document.getElementsByTagName("div")[6].innerHTML="MVD PO REPUBLIC OF BASHKORTOSTAN"
         document.getElementsByTagName("div")[7].innerHTML="G.UFA"
     }
     else{
         document.getElementsByTagName("div")[0].innerHTML="Высоцкий"
         document.getElementsByTagName("div")[1].innerHTML="Леонид"
         document.getElementsByTagName("div")[2].innerHTML="Дмитриевич"
         document.getElementsByTagName("div")[3].innerHTML="Муж &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 05.06.2004"
         document.getElementsByTagName("div")[6].innerHTML="МВД ПО РЕСПУБЛИКЕ БАШКОРТОСТАН"
         document.getElementsByTagName("div")[7].innerHTML="Г.УФА"

     }
}