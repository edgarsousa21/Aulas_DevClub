//const element = document.getElementById("main-text") //03 - Trás apenas um elemtento (element)

//const element = document.getElementsByClassName("paragraph") // 04 - Trás diversos elementos (HTML Collection)

//const element = document.getElementsByTagName("body") // 05 - Trás diversos elementos (HTML Collection)
//===========================================================================================================


// const element = document.querySelector('p') // 06 - Trás apenas um elemento, o primeiro que encontrar (element)

// const element = document.querySelectorAll('p') // 07 - Trás TODOS os elementos que encontrar (NodeList)

// element.forEach(element => {
//     console.log(element)
// });


//const element = document.getElementsByName('my-input') // 08 -  Trás os elementos com o nome selecionado (NodeList)


//const element = document.querySelector('img') // 09 - Selecionando Atributos


//const element = document.querySelector('h1') // 10 - Manipulando Textos

//element.innerHTML = "Hello Word <i>My Paragraph</i>" // 10 - Manipulando Textos
// textContent e innerText - retorna somente texto, innerHTML -> texto e tags html
//console.log(element.src)

//const element = document.querySelector('body') // 11 - Manipulando Estilos

//element.style.backgroundColor = 'green' // 11 - Manipulando Estilos

// 12 - Eventos:
// const element = document.querySelector('input')
 
// const myFunction = () =>{  //Button
//     alert('Fui Pressionado')
// } OU ESTA FUNÇÃO:

//  element.onclick = () =>{   //Button
//     alert('Fui Pressionado')
//  }
// element.onkeypress = () => { //Função para input
//     console.log('Pressionei uma Tecla')
// } 
//============================================================================================================
// 13 - PROPRIEDADES EVENTOS:
// const element = document.querySelector('input')

//  element.onkeypress = (event) => { 
//         console.log(event.target.value) // Event.key 
//      } 
//============================================================================================================
// 14 - EVENT lISENING:

const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
      console.log('Dei um foco')
})

select.addEventListener('change', () => {
    console.log(select.value)
})

// button.addEventListener('click', () => {
//     alert('O Botão Foi Clicado')
// })

// OU PODE SER ASSIM, EXEMPLO:
const clickButton = () =>{
    alert('O Botão Foi Clicado')  
}
button.addEventListener('click', clickButton)




