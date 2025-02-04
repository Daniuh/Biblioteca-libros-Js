class Libro {
    _titulo          = '';
    _autor           = '';
    _anioPublicacion = '';
    _disponible      = true;

    constructor(_titulo = 'No hay titulo', _autor = 'Sin autor', _anioPublicacion = 0, _disponible = true) {
        _titulo          = this._titulo;
        _autor           = this._autor;
        _anioPublicacion = this._anioPublicacion;
        _disponible      = this._disponible;
    }

    info() {
        console.log(`El titulo del libro es: ${this._titulo}, 
                    su autor: ${this._autor}, 
                    el año de publicación: ${this._anioPublicacion}, ${this._disponible}`);
    }

    prestar() {
        return this._disponible = false;
    }

    devolver() {
        return this._disponible = true;
    }
}