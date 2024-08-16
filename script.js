let htmlCode = document.getElementById('html')
let cssCode = document.getElementById('css')
let jsCode = document.getElementById('js')
let result = document.getElementById('iframe')


function Run(){
// let hello =  result.contentDocument.body.innerHTML =  htmlCode.value
 result.contentDocument.body.innerHTML = htmlCode.value+'<style>'+cssCode.value +'</style>'  
    result.contentWindow.eval(jsCode.value)

}