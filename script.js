let popUp_win = document.getElementById("popUp_win");
// let submit_subs = document.getElementById("submit_subs");
// let subs_form = document.getElementById("subs-form");



function showPopUp(){
   
    if (popUp_win.style.display="none"){
     
        popUp_win.style.display="block";
       
 
    }
    else{
        popUp_win.style.display="none";
    }
}
function hidePopUp(){
   
    if (popUp_win.style.display="block"){
     
        popUp_win.style.display="none";
       
    }
    else{
        popUp_win.style.display="block";
    }
}

function infoPopUp() {
    debugger
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }