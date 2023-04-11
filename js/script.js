let btn = document.querySelector('button')
let all_inputs = document.querySelectorAll('input')
let nid_inputs = document.querySelectorAll('input#blue')
let h1 = document.querySelectorAll('h1')
let active = document.querySelector('active')
let img = document.querySelectorAll('.img img')
let p = document.querySelectorAll('.pool p')
let a = document.querySelector('#theere')
let success = document.querySelector('#two')
let all = document.querySelector('#one')
btn.onclick = () => {
    nid_inputs.forEach(inp => {
        h1.forEach(red => {
            if (inp.value === '') {
                inp.style.border = '2px solid red'
                inp.parentNode.previousSibling.previousSibling.style.color = 'red'
                inp.nextSibling.nextSibling.firstChild.classList.add('active_err')
            }
            else {
                inp.style.borderColor = 'green'
                inp.parentNode.previousSibling.previousSibling.style.color = 'blue'
                inp.nextSibling.nextSibling.firstChild.classList.remove('active_err')

            }
        })
    })
    let error = document.querySelectorAll('.active_err')
    a.innerHTML =`Error: ${error.length}/ ${all_inputs.length}`

    all.innerHTML =`All: ${all_inputs.length}`


}
let form = document.forms.reg


let pattern = {
    name: /^[a-z ,.'-]+$/i,
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    number: /^\d+$/,
    phone_number: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    text:/ab+c/
}



function validate(regex, field) {
    if (regex.test(field.value)) {
        field.classList.add('valid')
        field.classList.remove('invalid')
    } else {
        field.classList.add('invalid')
        field.classList.remove('valid')
    }
}
all_inputs.forEach(inp => {
    inp.onkeyup = () => {
        validate(pattern[inp.name], inp)
    }
})