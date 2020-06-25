

(function (){

    const $ = q => document.querySelector(q)

    function addCarGarage(car){
        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${car.time}</td>

            <td>
                <button class = 'delete'>x</button>
            </td>    

            $(#garage).appendChild(row)
        `
    }

    $('#send').addEventListener('click', e => {

        const name = $('#name').value
        const licence = $('#licence').value

        if(!name || !licence){
            alert('Não pode ser vazio !!!')
            return
        }

        const car = {name,licence,time : new Date }

        const garage = localStorage.garage ? JSON.parse(localStorage.garage) : []
        garage.push(car)
        localStorage.garage = JSON.stringify(garage)
        console.log(garage)

        addCarGarage(car)

        $('#name').value = ''
        $('#licence').value = ''
    })
   
})()

