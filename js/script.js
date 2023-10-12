var sideMenu = document.getElementById("sideMenu") ;

function openMenu(){
    sideMenu.style.right = "0"
}

function closeMenu(){
    sideMenu.style.right = "-200px"
}


var tabLinks = document.getElementsByClassName("tab-link") ;
var tabContents = document.getElementsByClassName("tab-content") ;

function openTab(tabName){

    for(tLink of tabLinks){
        tLink.classList.remove("active-title");
    }

    for(tContent of tabContents){
        tContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-title")
    document.getElementById(tabName).classList.add("active-tab")
} //openTab