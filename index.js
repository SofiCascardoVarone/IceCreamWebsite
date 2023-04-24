let httpRequest= new XMLHttpRequest();
httpRequest.open('GET', 'https://ws.smn.gob.ar/map_items/weather', true)
httpRequest.setRequestHeader('Accept', 'application/json')
httpRequest.onload = async () => {
    if (httpRequest.status === 200){
        const datosApi = await JSON.parse(httpRequest.responseText)
        
        datosApi.forEach(temperatura => {
            if (temperatura.int_number===87544 || temperatura.int_number===87574) {
                 const li= document.createElement("li")
                li.textContent = "La temperatura en nuestro local de  " + temperatura.name + " es de " + temperatura.weather.tempDesc + " y con un ambiente " + temperatura.weather.description
                 document.getElementById("listaCriptos").appendChild(li)
            }
            
        })
    }
}
httpRequest.send()