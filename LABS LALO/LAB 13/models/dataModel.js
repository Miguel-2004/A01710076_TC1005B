const fs = require('fs');
const path = require('path');

// Ruta al directorio donde se almacenarán los datos
const dataDirectory = path.join(__dirname, '..', 'data');

// Función para leer datos desde un archivo JSON
exports.readData = (fileName, callback) => {
    const filePath = path.join(dataDirectory, fileName);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }

        const parsedData = JSON.parse(data);
        callback(null, parsedData);
    });
};

// Función para escribir datos en un archivo JSON
exports.writeData = (fileName, newData, callback) => {
    const filePath = path.join(dataDirectory, fileName);
    const jsonData = JSON.stringify(newData, null, 2);

    fs.writeFile(filePath, jsonData, 'utf8', (err) => {
        if (err) {
            callback(err);
            return;
        }

        callback(null);
    });
};
