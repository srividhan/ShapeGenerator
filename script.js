var number=1;
function generate(){
    a=parseInt(document.getElementById("no").value);
    color=document.getElementById("selcolor").value;
    shape=document.getElementById("selShape").value;
    b=document.querySelector("#main2");
    for(i=1;i<=a;i++){
        c=document.createElement('div');
        b.classList.add('c');
        b.appendChild(c);
        d=document.createElement('div');
        c.classList.add('d');
        c.appendChild(d);
        if(shape=="square"){
        c.className="sh1";
        d.innerHTML=number;
        d.style="color: white;align-items: center;justify-content: center;margin-top:35%;";
        number++;
        }
        else if(shape=="rectangle"){
            c.className="sh2";
            d.innerHTML=number;
            d.style="color: white;align-items: center;justify-content: center;margin-top:15%;";
            number++;
        }
        else if(shape=="circle"){
            c.className="sh3";
            d.innerHTML=number;
            d.style="color: white;align-items: center;justify-content: center;margin-top:35%;";
            number++;
        }
        c.style="margin:0 0 1% 2%;";
        c.style.backgroundColor=color;
    }
}