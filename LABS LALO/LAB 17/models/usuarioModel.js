const db = require('../util/database');

class Usuario {
    constructor(nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM usuarios');
    }

    save() {
        return db.execute(
            'INSERT INTO usuarios (nombre, correo) VALUES (?, ?)',
            [this.nombre, this.correo]
        );
    }

    static findById(id) {
        return db.execute('SELECT * FROM usuarios WHERE id = ?', [id]);
    }

    update() {
        return db.execute(
            'UPDATE usuarios SET nombre = ?, correo = ? WHERE id = ?',
            [this.nombre, this.correo, this.id]
        );
    }

    static deleteById(id) {
        return db.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    }
}

module.exports = Usuario;
