let prf ="getmyscript.eu: "
const agar = document.createElement("button");
    agar.setAttribute("id", "open_nav");
    document.body.appendChild(agar);
    agar.innerText="| | |";    
    var linkElem = document.createElement('link');
document.getElementsByTagName('head')[0].appendChild(linkElem);
linkElem.rel = 'stylesheet';
linkElem.type = 'text/css';
linkElem.href = './assets/styles/main.css';
CreateContent = () => {
    const Layer1 = document.createElement('div');
    Layer1.setAttribute('id', 'Layer1');
    document.body.appendChild(Layer1);
    let Layer1content = "<h1 id='textcontent'></h1><button id='Accept' onclick='accepted()'>accept</button><button id='decline' onclick='notaccepted()'>decline</button>";
    Layer1.innerHTML = Layer1content;
    notaccepted = () => {
        alert("we are sorry but to visit this page you we need your agreement !");
        console.warn(prf+"declined...!")
        console.error(prf+"could not load page!")
        console.info(prf+"this page will be closed in 8 seconds (8000ms) !")
                    setTimeout(() => {
                        window.close();
                    }, 8000); setTimeout(() => {
                        console.log(prf+"could not close page... reloading inzialisation!")
                        location.reload();
                    }, 1000);
    }
    accepted = () =>{
    document.getElementById('Layer1').remove();
    console.log(prf+"succesfully accepted!")
    console.log(prf+"Loading page...")
    const mainbar = document.createElement("div");
    mainbar.setAttribute("id", "mainbar");
    document.body.appendChild(mainbar); 
    mainbar.innerHTML="<h1 class=''>Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " +"<h1> Text </h1>" + "</br> " ;
}
    
 
    
}
CreateContent();
let lhostpath = "http://127.0.0.1:5500/";
let gmspth = "https://getmyscript.eu/";
if  (location.href===lhostpath){
    document.title="localhost";
}else if (location.href==gmspth || "https://constawg.github.io/getmyscript.github.io/") {
    document.title="getmyscript.eu";
}
