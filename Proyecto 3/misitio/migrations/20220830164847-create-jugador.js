'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jugadors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEquipo: {
        type: Sequelize.INTEGER
      },
      nombreInstagram: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      posicion: {
        type: Sequelize.STRING
      },
      marcaPatrocinadora: {
        type: Sequelize.STRING
      },
      fechaFichaje: {
        type: Sequelize.DATE
      },
      cantTitulosGanados: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jugadors');
  }
};