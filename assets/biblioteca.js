class Libro {
    _titulo          = '';
    _autor           = '';
    _anioPublicacion = '';
    _disponible      = true;

    constructor(_titulo = 'Sin nombre', _autor = 'Sin autor', _anioPublicacion = '0000', _disponible = true) {
        this._titulo          = _titulo;
        this._autor           = _autor;
        this._anioPublicacion = _anioPublicacion;
        this. _disponible     = _disponible;
    }

    info() {
        console.log(`El titulo del libro es: ${this._titulo}, 
                    su autor: ${this._autor}, 
                    el año de publicación: ${this._anioPublicacion}, disponibilidad: ${this._disponible}.`);
    }

    prestar() {
        return this._disponible = false;
    }

    devolver() {
        return this._disponible = true;
    }
}

class Usuario {
    _nombre          = '';
    _idUsuario       = '';
    _librosPrestados = [];

    constructor(_nombre = 'Sin nombre', _idUsuario = '0', _librosPrestados = []) {
        this._nombre          = _nombre;
        this._idUsuario       = _idUsuario;
        this._librosPrestados = _librosPrestados;
    }

    tomarPrestado() {
        
    }

    devolverLibro() {}

    mostrarLibrosPrestados() {}
}

class Biblioteca {
    constructor() {
        this._nombreBiblioteca = '';
        this._libros           = [];
        this._usuarios         = [];
    }

    agregarLibro() {
        for(let i = 0; i < 2; i++){
            const titulo          = prompt('Ingrese el nombre del nuevo libro:');
            const autor           = prompt('Ingrese el autor del libro:');
            const anioPublicacion = prompt('Ingrese el año de publicación del libro:');
            const disponible      = true;

            const libro = new Libro(titulo, autor, anioPublicacion, disponible);

           this._libros.push(libro);
        }
        console.log(this._libros);
    }

    registrarUsuario() {
        let idUsuario         = 0;

        for(let i = 0; i < 2; i++){
            const nombre          = prompt('Ingrese el nombre del usuario:');
            const librosPrestados = ['0 Libros prestados'];

            idUsuario++;

            const usuario = new Usuario(nombre, idUsuario, librosPrestados);

           this._usuarios.push(usuario);
        }
        console.log(this._usuarios);
    }

    mostrarLibrosDisponibles() {
        console.log(`Los libros disponibles son: ${JSON.stringify(this._libros)}`);
    }
}

const biblioteca = new Biblioteca();
biblioteca.agregarLibro();
biblioteca.mostrarLibrosDisponibles();
biblioteca.registrarUsuario();