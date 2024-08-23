




// function onClick() {

// const isDarkMode = document.body.style.backgroundColor = 'rgb (30, 30, 30)'

//     if (!isDarkMode) {
//         document.body.style.backgroundColor = '#1e1e1e'
//         document.querySelector('.header-pro').style.backgroundColor = '#2c2c2c'
//         document.querySelector('.flex-container').style.color = '#e0e0e0'
//         document.querySelector('h3').style.color = '#e0e0e0'
//     }
//     else {
//         document.body.style.backgroundColor = 'white'
//         document.querySelector('.header-pro').style.backgroundColor = '#f5f8ff'
//         document.querySelector('.flex-container').style.color= 'black' 
//         document.querySelector('h3').style.color= 'black'
//     }
// }

// document.querySelector('.fa-toggle-off').addEventListener('click', onClick)

function onClick() {
    document.body.classList.toggle('dark-mode')
    const toggleOff = document.querySelector('.fa-toggle-off')
    const toggleOn = document.createElement('i')
    toggleOn.className = 'fa-solid fa-toggle-on'
    
}

document.querySelector('.fa-toggle-off').addEventListener('click', onClick)