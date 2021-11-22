
    a = 0
    textarea = document.getElementById("textarea")
    result = document.getElementById("iframe")
    varToogle = document.getElementById('toogle')
    function toogle() {
        Preview()
        if(a == 0 ){
textarea.style.display = "none"
result.style.display = "block"
varToogle.innerText = "Edit" 
a = 1

}
else{
    textarea.style.display = "grid"
    result.style.display = "none"
    varToogle.innerText = "Preview" 
a = 0
        }
    }

    

    function Preview(){
  var html= document.getElementById("html").value;
  var css= document.getElementById("css").value;
  var js= document.getElementById("js").value;
 
  var iframe = document.getElementById("iframe").contentWindow.document;
  iframe.open();
  iframe.write(`${html} <style>${css}<style><script>${js}</script>`);

  iframe.close();
//   alert(`${html} <style>${css}<style><script>${js}</script>`)
}
