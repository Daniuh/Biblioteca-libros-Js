# Biblioteca-libros-Js
Este proyecto es para poder poner en práctica conocimientos básicos de Poo en Js



Info Reto:

Ejercicio: Sistema de Gestión de Biblioteca
Crea un sistema de gestión para una biblioteca utilizando Programación Orientada a Objetos. Deberás trabajar con las siguientes clases:

Requisitos:

Clase Libro

Atributos: titulo, autor, anioPublicacion, disponible (booleano que indique si el libro está disponible o no).

Métodos:
info(): Muestra la información del libro.
prestar(): Cambia el estado de disponible a false si está disponible.
devolver(): Cambia el estado de disponible a true.


Clase Usuario

Atributos: nombre, idUsuario, librosPrestados (array de libros que el usuario tiene prestados).

Métodos:
tomarPrestado(libro): Permite al usuario tomar un libro prestado si está disponible.
devolverLibro(libro): Permite devolver un libro que haya tomado prestado.
mostrarLibrosPrestados(): Muestra los libros que el usuario tiene prestados.


Clase Biblioteca

Atributos: nombre, libros (array de libros), usuarios (array de usuarios).

Métodos:
agregarLibro(libro): Agrega un nuevo libro a la biblioteca.
registrarUsuario(usuario): Registra un nuevo usuario en la biblioteca.
mostrarLibrosDisponibles(): Muestra todos los libros que están disponibles para préstamo.

Reto Extra (Opcional):
Agrega una funcionalidad para que cada usuario solo pueda tener un máximo de 3 libros prestados al mismo tiempo.
Implementa un método para buscar libros por título o autor dentro de la clase Biblioteca.