let cargarDatos = () =>{

    let Api = "https://api.jikan.moe/v4/";
    let arregloTitulos = []
    let arregloAnimes
    var dictAnime = {}

    fetch(Api + "top/anime?page=1")
        .then(response => response.json())
        .then(data => {
            arregloAnimes = data.data

            console.log(arregloAnimes)


            for(let i = 0; i < 10; i ++){
                let id = arregloAnimes[i].mal_id
                let title = arregloAnimes[i].title
                let rank =  arregloAnimes[i].rank
                let score = arregloAnimes[i].score
                
                arregloTitulos[i] = title
                    
                let arregloValor = [rank, score]
                dictAnime[title] = arregloValor

                let plantilla = `<option value="${id}">${title}</option>`

                document.querySelector("div.input-group > select").innerHTML += plantilla
                 
            }
            
            
        })
    .catch(console.error);

    console.log("Diccionario de top 10")
    console.log(dictAnime)
    console.log("Arreglo de titulos")
    console.log(arregloTitulos)
        
    let seccion = document.querySelector("#ListaAnime")
    const selectElement = document.querySelector("div.input-group > select")/*
    selectElement.addEventListener("change", (event) => {
        fetch(Api + "top/anime?page=1")
        .then(response => response.json())
        .then(data => {
            seccion.innerHTML = ""

            arregloAnimes = data.data

            let idSeleccionado = event.target.value

            console.log(idSeleccionado)

            for(let i = 0; i < 10; i ++){
                let id = arregloAnimes[i].mal_id

                if(idSeleccionado == id){
                    let rank = arregloAnimes[i].rank
                    let title = arregloAnimes[i].title
                    let anhoEstreno = arregloAnimes[i].year
                    let cantEpisodios = arregloAnimes[i].episodes
                    let sinopsis = arregloAnimes[i].synopsis

                    let plantilla = `<h2>${title}</h2>

                    <ul>
                      <li>Puesto en el ranking de mejores animes: ${rank}</li>
                      <li>Año de estreno: ${anhoEstreno}</li>
                      <li>Cantidad de episodios: ${cantEpisodios}</li>
                      <li>Sinopsis: ${sinopsis}</li>
                    </ul>  `

                    seccion.innerHTML += plantilla
                }

            }


        })
    })*/




}

window.addEventListener('DOMContentLoaded', (event) => {
    cargarDatos()
});
