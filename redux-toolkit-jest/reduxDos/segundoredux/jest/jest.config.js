// jest.config.js
module.exports = {
    testEnvironment: 'jsdom', // Configura el entorno para React
    moduleNameMapper: {
      '\\.(css|scss)$': 'identity-obj-proxy', // Opcional: Para manejar estilos en los tests
    },
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Transforma archivos .js y .jsx con babel-jest
    },
    setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'], // Configuración adicional, como jest-dom
  };
  