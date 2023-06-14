
function run(){
     let Htmlcode = document.getElementById("html-code").value;
     let Csscode = document.getElementById("css-code").value;
     let Jscode = document.getElementById("js-code").value;
     let OutPut = document.getElementById("output");
     OutPut.contentDocument.body.innerHTML = Htmlcode + "<style>" + Csscode+ "</style" ;
     OutPut.contentWindow.eval(Jscode);
}