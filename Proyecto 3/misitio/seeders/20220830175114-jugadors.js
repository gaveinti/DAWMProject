'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    for (let i = 0; i < 1000; i++) {  
      await queryInterface.bulkInsert('Jugadors', [{  
          id: 1001 + i,
          idEquipo: between(1,5),
          nombreInstagram: 'i' + '_' + 'exampleIg',
          apellido: ApellidosEj[Math.floor(Math.random()*ApellidosEj.length)],
          posicion: PosicionEj[Math.floor(Math.random()*PosicionEj.length)],
          marcaPatrocinadora: MarcaEj[Math.floor(Math.random()*MarcaEj.length)],
          fechaFichaje: new Date(),
          cantTitulosGanados: between(1,50),  
          createdAt: new Date(),  
          updatedAt: new Date()  
      }], {});  
    } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Jugadors', null, {}); 
  }
};


function between(min, max){
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

var ApellidosEj = [
  "Messi",
  "Ronaldo",
  "Neymar"
];
var PosicionEj = [
  "portero",
  "defensa",
  "mediocampista",
  "delantero"
]
var MarcaEj = [
  "Nike",
  "Adidas",
  "Puma"
]

/*var randomApellido = ApellidosEj[Math.floor(Math.random()*ApellidosEj.length)]*/