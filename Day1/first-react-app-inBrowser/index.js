console.log('Welcome to JS!!!')
//window.alert('welcome to JS')
//window.addEventListener('DOMContentLoaded',changeHeaderText)
// function changeHeaderText()
// {
// var headervalue = document.getElementById('main_header')
// console.log(headervalue)
// headervalue.innerText = 'Modified header value';
// }

// window.addEventListener('DOMContentLoaded',
// function changeHeaderText()
//  {
//  var headervalue = document.getElementById('main_header')
//  console.log(headervalue)
//  headervalue.innerText = 'Modified header value'
//  this.window.alert("click OK to change")
//  headervalue.innerHTML = '<i>Modified header value</i>'
//  })


function changeHeaderText()
  {
  var headervalue = document.getElementById('main_header')
  console.log(headervalue)
  headervalue.innerText = 'Modified header value'
  this.window.alert("click OK to change")
  headervalue.innerHTML = '<i>Modified header value</i>'
}
changeHeaderText()