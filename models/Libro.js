module.exports = class Libro {
  constructor (titulo, descripcion, precio) {
    this.titulo = titulo
    this.descripcion = descripcion
    this.precio = precio
  }

  get getTitulo () {
    return this.titulo
  }

  get getDescripcion () {
    return this.descripcion
  }

  get getPrecio () {
    return this.precio
  }

  createTitleTemplate () {
    return `<b>${this.titulo}</b>`
  }

  createDescripcionTemplate () {
    return `<b>${this.descripcion}</b>`
  }

  createPrecioTemplate () {
    return `<b>${this.precio}</b>`
  }

  printTemplate () {
    return `
      ${this.createTitleTemplate()}\n
      ${this.createDescripcionTemplate()}\n
      ${this.createPrecioTemplate()}
      `
  }

  set setTitulo (titulo) {
    this.titulo = titulo
  }

  set setDescripcion (descripcion) {
    this.descripcion = descripcion
  }

  set setPrecio (precio) {
    this.precio = precio
  }
}
