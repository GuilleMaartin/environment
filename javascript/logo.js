let ul = document.querySelector('#ul')
console.log(ul)

function generarLogos(){
    const li = document.createElement('li')
    li.setAttribute("class", "li-logo")  
    li.innerHTML = `<li><i class='bx bxl-facebook'></i></li>
    <li><i class='bx bxl-twitter'></i></li>
    <li><i class='bx bxl-youtube' ></i></li>
    <li><i class='bx bxl-instagram-alt' ></i></li>`
    li.style.background = "transparent"
    ul.append(li)
}
generarLogos()

let secondUl = document.querySelector("#second-ul")
function secondLogos(){
    const li = document.createElement("li")
    li.style.display = "flex"
    li.style.gap = "1rem"
    li.setAttribute("class", "second-logo")
    li.innerHTML = `<li><i class='bx bxl-facebook'></i></li>
    <li><i class='bx bxl-twitter'></i></li>
    <li><i class='bx bxl-youtube' ></i></li>
    <li><i class='bx bxl-instagram-alt' ></i></li>`
    secondUl.append(li)
}
secondLogos()



