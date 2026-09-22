const bookdata={
};
function Book(data){
    const div=document.createElement("div");
div.setAttribute("class","book");
const image=document.createElement("img");
image.setAttribute("src","data.image");
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const heading=document.createElement("h2");
heading.innerText="Price:"+data.price+"₹ ";
const bt=document.createElement("button");
bt.innerText="AddToCart";
div.appendChild(image);
div.appendChild(heading);
div.appendChild(bt);
return div;
}
const bookstore =bookdata.map((i)=>(
    book(i)
))
const parent=document.getElementById("root");
for(i of bookstore){
    parent.appendChild(b);
}
parent.appendChild(div);