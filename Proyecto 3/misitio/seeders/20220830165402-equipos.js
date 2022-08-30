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
    for (let i = 0; i < 5; i++) {  
      if(i == 0){
        await queryInterface.bulkInsert('Equipos', [{
          id: 1, 
          nombre: 'Barsa',
          anhoFundacion: new Date("1899-11-29"),  
          cantidadTrofeos: 97, 
          pais: 'España',
          liga: 'LaLiga',
          createdAt: new Date(),  
          updatedAt: new Date()  
        }], {});  
      }
      if(i == 1){
        await queryInterface.bulkInsert('Equipos', [{
          id: 2, 
          nombre: 'Madrid',
          anhoFundacion: new Date("1902-03-06"),  
          cantidadTrofeos: 98, 
          pais: 'España',
          liga: 'LaLiga',
          createdAt: new Date(),  
          updatedAt: new Date()  
        }], {});  
      }
      if(i == 2){
        await queryInterface.bulkInsert('Equipos', [{
          id: 3, 
          nombre: 'Milan',
          anhoFundacion: new Date("1899-12-16"),  
          cantidadTrofeos: 53, 
          pais: 'Italia',
          liga: 'Serie A',
          createdAt: new Date(),  
          updatedAt: new Date()  
        }], {});  
      }
      if(i == 3){
        await queryInterface.bulkInsert('Equipos', [{
          id: 4, 
          nombre: 'Bayern Munchen',
          anhoFundacion: new Date("1900-02-27"),  
          cantidadTrofeos: 83, 
          pais: 'Alemania',
          liga: 'Bundesliga',
          createdAt: new Date(),  
          updatedAt: new Date()  
        }], {});  
      }
      if(i == 4){
        await queryInterface.bulkInsert('Equipos', [{
          id: 5, 
          nombre: 'Emelec',
          anhoFundacion: new Date("1929-04-28"),  
          cantidadTrofeos: 14, 
          pais: 'Ecuador',
          liga: 'Serie A de Ecuador',
          createdAt: new Date(),  
          updatedAt: new Date()  
        }], {});  
      }
    } 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Equipos', null, {});  
  }
};
