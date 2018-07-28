String.prototype.formatToCompare = function () {
  return this.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
