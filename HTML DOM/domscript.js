function addParagraph(){
    const para=document.createElement("p");
    para.innerHTML="<u>This is new Paragragh</u>";
    para.style.color="red";
    const parent=document.getElementById("para");
    parent.appendChild(para);

}
function removeParagragh(){
    const parent=document.getElementById("para");
    const child=document.querySelector("p");
    parent.removeChild(child);
}
function removeAllParagragh(){
    const parent=document.getElementById("para");
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    }
    
    

