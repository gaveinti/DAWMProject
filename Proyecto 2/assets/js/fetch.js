let Api = "https://api.jikan.moe/v4";
let arregloM



function cargarListaMejores(){
    
    fetch(Api + "/top/anime?page=1")
        .then(response => response.json())
        .then(data => {
            let info = data;
            console.log(info)
            console.log(info.data)
            console.log(info.pagination)

            arregloM = info.data;
            console.log("-------------------------------")

            for(let anime of arregloM){
                let title = anime.title
                let rank =  anime.rank
                let score = anime.score
                console.log(rank)
                console.log(score)
            }
            
            
        })
    .catch(console.error);

}

cargarListaMejores();