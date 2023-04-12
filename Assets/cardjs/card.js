const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.btn');

btns.forEach(btn =>{
    btn.onclick =(e)=>{
        // console.log("click")
        const colour = e.currentTarget.classList;
        if(colour.contains('btn1')){
            theme.style.setProperty("--theme-color", "#3498db");
        }else if(colour.contains('btn2')){
            theme.style.setProperty("--theme-color", "#833ae0");
        }else if(colour.contains('btn3')){
            theme.style.setProperty("--theme-color", "#ff1756");  
        }else if(colour.contains('btn4')){
            theme.style.setProperty("--theme-color", "#08aa4b");
        }else{
            theme.style.setProperty("--theme-color", "#f4b932");
        }   
            
    }
});