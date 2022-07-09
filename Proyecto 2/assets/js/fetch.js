let Api = "https://api.jikan.moe/v4";
let arregloGeneros = []
let pagina = 1
//last_visible_page
let last_page = 2

/*Objeto anime*/
var AnimeTitleRank = {
    title: "",
    rank: 0
}

/* Arreglo de animes a graficar*/
let animes = []



function cargarListaMejores(){
    
    fetch(Api + "/genres/anime")
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
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


    let seccion = document.querySelector("#ListaAnime")
    const selectElement = document.querySelector("div.input-group > select")
    selectElement.addEventListener("change", (event) => {

        let generoSeleccionado = event.target.value
        //console.log(generoSeleccionado)

        //Contador que debe llegar hasta 6 (Se escogeran los 6 animes top del genero seleccionado)
        let cont = 0

        
            //Con esto se recorren todas las páginas
            for(let y = 1; y <= last_page; y ++){

                console.log("Comienza el fetch")

                fetch(`../../Info/anime_Pagina${pagina}.json`)
                .then(response => response.json())
                .then(data => {
                //console.log("Datos: " + JSON.stringify(data.data))
                console.log("Pagina actual: " + data.pagination.current_page)

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
                                objetoAnime.rank = anime.rank
                                animes[cont] = objetoAnime
                                cont ++
                            }
                        }
                    }

                }
                
                })

                pagina ++
                console.log(pagina)


            }

            console.log(animes)
        

        
    })

}

/*const cargarPorPagina = async(pagina) => {

    await fetch(Api + `/top/anime?page=${pagina}`)
    .then(response => response.json())
    .then(data => {
    console.log("Datos: " + data)
    console.log("Pagina actual: " + data.pagination.current_page)

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
                if(g.name == generoSeleccionado && data.pagination.current_page == 2){
                    //Creo el objeto anime a ser guardado en el arreglo de los que van a estar en la gráfca
                    let objetoAnime = Object.create(AnimeTitleRank)
                    objetoAnime.title = anime.title
                    objetoAnime.rank = anime.rank
                    animes[cont] = objetoAnime
                    cont ++
                }
            }
        }

    }
    pagina ++
    console.log(pagina)


    })



}*/


cargarListaMejores();


/*
2. Empezar a hacer el grafico
*/