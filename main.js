

(function (){

    const $ = q => document.querySelector(q)

    $('#send').addEventListener('click', e => {
        const name = $('#name').value
        const licence = $('#licence').value

        const car = {name,licence,time : new Date }

        const garage = localStorage.garage ? JSON.parse(localStorage.garage) : []
        garage.push(car)
        localStorage.garage = JSON.stringify(garage)
        console.log(garage)
    })
   
})()

