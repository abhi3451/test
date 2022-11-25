console.dir(document)
// var element=document.getElementsByClassName("list-group-item")
// console.log(element[i])
// element[2].style.background="green"
// for(var i=0;i<element.length;i++)
// {
//     element[i].style.fontWeight="bold"
// }

//getelement by tag name and class name 

// var element=document.getElementsByTagName('li')
// element.style.background="yellow"
// console.log(element[4])
// element[4].style.background="yellow"
// element[4].style.fontWeight="bold"
// element[4].style.fontStyle="italic"

//var element=document.getElementsByClassName("xyz")
//element.textContent="hello"
//console.log(element)
//element.style.background= "yellow"
 

//Queryselector
// var seconditem=document.querySelector('.list-group-item:nth-child(2)')
// seconditem.style.background="green"
// var thirditem=document.querySelector('.list-group-item:nth-child(3)')
// thirditem.style.visibility="hidden"  
//or other method is
// thirditem.style.display="none"



//QuerySelectorall
//  var item=document.querySelectorAll('li:nth-child(2)')
//  var odd=document.querySelectorAll('li:nth-child(odd)')
//   for(var i=0;i<odd.length;i++)
//  {
//     odd[i].style.backgroundColor="grey"
//     item[i].style.color="red"
    

//  }

//CREATING NODE AND MODIFYING DOM
//var itemlist=document.querySelector("#items")
//CREATE PARENTELEMENT
// console.log(itemlist.parentNode)
// lastElementChild
//console.log(itemlist.lastElementChild)
/*console.log(itemlist.firstElementChild)
 itemlist.firstElementChild.textContent="Hello"
 itemlist.firstElementChild.style.fontWeight="bold"*/


//   var text=document.createElement('text')
//   text.className="list-group-item"
//   var newtext=document.createTextNode('Hello')
//   text.appendChild(newtext)
//   var listgroupitem=document.querySelector('ul')
//   var li=document.querySelector('ul li')
//  listgroupitem.insertBefore(text,li)


//console.log(itemlist.previousSibling)
//console.log(itemlist.nextSibling)
// console.log(itemlist.nextElementSibling)
// console.log(itemlist.previousElementSibling)


//  var newDiv=document.createElement('div')
//   newDiv.setAttribute('title','Hello Div')
//  newDiv.className="Hello"
//  newDiv.id="Hello1"
//  // //create textnode
//  newDivText=document.createTextNode('Hello world')
//  newDiv.appendChild(newDivText)
//  var container=document.querySelector('header .container')
//  var h1=document.querySelector('header h1')
// //console.log(h1)
//  container.insertBefore(newDiv,h1)



 