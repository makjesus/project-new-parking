

(function (){

    const $ = q => document.querySelector(q)

    function rederGarage(){

        const garage = getGarage()

        garage.forEach(c => addCarToGarage(c))

    }

    function addCarToGarage(car){
        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${car.name}</td>
            <td>${car.licence}</td>
            <td>${new Date(car.time)
                .toLocaleString('pt-BR' ,{
                   hour: 'numeric', minute:'numeric' 

                })}</td>

            <td>
                <button class = 'delete'>x</button>
            </td>    

        `;

        $('#garage').appendChild(row)
    }

    const getGarage = () => localStorage.garage ? JSON.parse(localStorage.garage): []
    
    renderGarage()    
    $('#send').addEventListener('click', e => {
        const name = $('#name').value
        const licence = $('#licence').value

        if(!name || !licence){
            alert('Não pode ser vazio !!!')
            return
        }

        const car = {name,licence,time : new Date() }

        const garage = getGarage()
        garage.push(car)

        localStorage.garage = JSON.stringify(garage)

        addCarToGarage(car)

        $('#name').value = ''
        $('#licence').value = ''
    })
   
})()

