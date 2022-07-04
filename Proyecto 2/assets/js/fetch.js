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
        
    let seccionGrafico = document.getElementById("#chart-line").getContext("2d");
    //1) Hacer el boton para que cuando se presione se cree el grafico (De los mejores 10 con su año de estreno y ranking)
    //2) Comentar el script del grafico que esta en dashboard
    //3) Poner los datos dinamicos en la tabla y prbar hasta que se muestre luego de presionar el boton
    /*new Chart(seccionGrafico, {
        type: "line",
      data: {
        labels: ["Buenas", "Tardes", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6

          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6
          },
        ],
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
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });*/




    /*const selectElement = document.querySelector("div.input-group > select")
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


/*var ctx2 = document.getElementById("chart-line").getContext("2d");

    var gradientStroke1 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke1.addColorStop(1, 'rgba(203,12,159,0.2)');
    gradientStroke1.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke1.addColorStop(0, 'rgba(203,12,159,0)'); //purple colors

    var gradientStroke2 = ctx2.createLinearGradient(0, 230, 0, 50);

    gradientStroke2.addColorStop(1, 'rgba(20,23,39,0.2)');
    gradientStroke2.addColorStop(0.2, 'rgba(72,72,176,0.0)');
    gradientStroke2.addColorStop(0, 'rgba(20,23,39,0)'); //purple colors

    new Chart(ctx2, {
      type: "line",
      data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#cb0c9f",
            borderWidth: 3,
            backgroundColor: gradientStroke1,
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6

          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6
          },
        ],
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
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              padding: 10,
              color: '#b2b9bf',
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5]
            },
            ticks: {
              display: true,
              color: '#b2b9bf',
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: 'normal',
                lineHeight: 2
              },
            }
          },
        },
      },
    });
*/ 