const out = document.getElementById('out');
let openBracket = true; // toggles between ( and )

document.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener("click",()=>{
        const v = btn.textContent;

        if(v === "="){
            try{ out.value = eval(out.value) }
            catch{ out.value = "Err" }
        }
        else if(v === "C"){ 
            out.value = "";
        }
        else if(v === "⌫"){ 
            out.value = out.value.slice(0,-1);
        }
        else if(v === "()"){ 
            out.value += openBracket ? "(" : ")";
            openBracket = !openBracket;
        }
        else{
            out.value += v;
        }
    });
});