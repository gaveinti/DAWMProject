let Api = "https://api.jikan.moe/v4";
let arregloGeneros = []
let pagina = 1
//last_visible_page
let last_page = 10

/*Objeto anime*/
var AnimeTitleRank = {
    title: "",
    rank: 0
}

/* Arreglo de animes a graficar*/
let animes = {}


/*Dom del grafico*/
const grafico = document.querySelector("#grafica")

/*Datos del eje x*/
var ejeX = []
/*Datos del eje x*/
var ejeY = []


let myChart



const cargarListaMejores = async() => {

    
    await fetch(Api + "/genres/anime")
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            console.log(data.data[0])
            let info = data.data

            for(let elem of info){
                if(elem.name == "Action" || elem.name == "Adventure" || elem.name == "Award Winning" || elem.name == "Comedy" || elem.name == "Drama" || elem.name == "Sci-Fi" || elem.name == "Sports" || elem.name == "Mecha" || elem.name == "Music" || elem.name == "Seinen" || elem.name == "Shounen"){
                    arregloGeneros.push(elem.name)
                }
            }

            console.log(arregloGeneros)

            console.log("-------------------------------")
            for(let genero of arregloGeneros){
                let plantillaG = `<option value="${genero}">${genero}</option>`

                document.querySelector("div.input-group > select").innerHTML += plantillaG

            }

            
            
            
        })
    .catch(console.error);


    let grafico = document.querySelector("#grafica")
    const selectElement = document.querySelector("div.input-group > select")
    selectElement.addEventListener("change", (event) => {

        let generoSeleccionado = event.target.value
        //console.log(generoSeleccionado)

        //Contador que debe llegar hasta 6 (Se escogeran los 6 animes top del genero seleccionado)
        let cont = 0
        var l
        
        //Con esto se recorren todas las páginas
        if(cont < 6){
            for(let y = 1; y <= last_page; y ++){

                console.log(`Comienza el fetch en la pagina ${pagina}`)

                fetch(`../../Info/anime_Pagina${pagina}.json`)
                .then(response => response.json())
                .then(data => {
                //console.log("Datos: " + JSON.stringify(data.data))
                //console.log("Pagina actual: " + data.pagination.current_page)

                let arregloAnimes = data.data
                //console.log(arregloAnimes)
                //console.log(arregloAnimes.length) Sí me da la cantidad total de animes por pagina

                    
                //Recorro todos los animes de la pagina
                for(let i = 0; i < arregloAnimes.length; i ++){
                    if(cont < 6){
                        let anime = arregloAnimes[i]

                        let arregloGeneroAnime = anime.genres

                        //Recorro los generos del anime
                        for(let g of arregloGeneroAnime){
                            if(g.name == generoSeleccionado){
                                //Creo el objeto anime a ser guardado en el arreglo de los que van a estar en la gráfca
                                let objetoAnime = Object.create(AnimeTitleRank)
                                objetoAnime.title = anime.title
                                ejeX.push(anime.title)
                                objetoAnime.rank = anime.rank
                                ejeY[cont] = anime.rank
                                animes[cont] = objetoAnime
                                cont++
                            }
                        }
                    }

                }

                if(y == 6){
                    console.log(animes)
                    console.log(ejeX)
                    console.log(ejeY)
                    console.log(cont)


                     myChart = new Chart(grafico, {
                        type: "bar",
                        data: {
                          labels: ejeX,
                          datasets: [{
                            label: "Rank",
                            tension: 0.4,
                            borderWidth: 0,
                            borderRadius: 4,
                            borderSkipped: false,
                            backgroundColor: "#455",
                            data: ejeY,
                            maxBarThickness: 6
                          }, ],
                        },
                        options: {
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: {
                              display: false,
                            }
                          },
                          interaction: {
                            intersect: false,
                            mode: 'index',
                          },
                          scales: {
                            y: {
                              grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false,
                              },
                              ticks: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                beginAtZero: true,
                                padding: 15,
                                font: {
                                  size: 14,
                                  family: "Open Sans",
                                  style: 'normal',
                                  lineHeight: 2
                                },
                                color: "#654"
                              },
                            },
                            x: {
                              grid: {
                                drawBorder: false,
                                display: false,
                                drawOnChartArea: false,
                                drawTicks: false
                              },
                              ticks: {
                                display: false
                              },
                            },
                          },
                        },
                    });
        




                }

                })

                    
                pagina ++
                console.log("Pagina sgt:" + pagina)

            }
        }

        pagina = 1
        ejeX = []
        ejeY = []
        myChart.destroy()

            


        

        
    })

    

}

cargarListaMejores();


/*
2. Empezar a hacer el grafico
*/