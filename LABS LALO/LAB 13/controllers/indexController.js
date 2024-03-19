const fs = require('fs');

// Controlador para la página de inicio
exports.getIndexPage = (req, res) => {
    // Lee los datos del archivo de ejemplo
    fs.readFile('./data/indexData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer los datos');
            return;
        }

        const exampleData = JSON.parse(data);

        // Renderiza la vista index.ejs con los datos proporcionados
        res.render('index', { data: exampleData });
    });
};

// Controlador para la página "Acerca de"
exports.getAboutPage = (req, res) => {
    // Lee los datos del archivo de ejemplo
    fs.readFile('./data/aboutData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error al leer los datos');
            return;
        }

        const exampleData = JSON.parse(data);

        // Renderiza la vista about.ejs con los datos proporcionados
        res.render('about', { data: exampleData });
    });
};

// Controlador para la página de contacto
exports.getContactPage = (req, res) => {
    // Renderiza la vista contact.ejs
    res.render('contact');
};

// Controlador para procesar el formulario de contacto
exports.postContactForm = (req, res) => {
    const { name, email, message } = req.body;

    // Aquí puedes agregar la lógica para guardar los datos del formulario en una base de datos, enviar un correo electrónico, etc.

    // Por ahora, solo imprimimos los datos en la consola
    console.log('Nombre:', name);
    console.log('Email:', email);
    console.log('Mensaje:', message);

    // Envía una respuesta de confirmación al cliente
    res.send('¡Formulario de contacto recibido!');
};
