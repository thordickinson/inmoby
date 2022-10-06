var crypto = require('crypto');
var mongoose = require('mongoose')

function md5(data) {
    return crypto.createHash('md5').update(data).digest('hex')
}

/**
* Genera un número aleatorio entre cero y el valor max
*/
function randInt(max) {
    return Math.round(Math.random() * max);
}
/* Genera un valor boolean aleatorio ( true | false)*/
function randBool() {
    return Math.random() > 0.5;
}
/* Genera una palabra aleatoria de longitud aleatoria entre minLength y maxLength*/
function randWord(minLengt, maxLength) {
    let letters = "abcdefghijlmnopqrstuvwxyz";
    let length = minLengt + randInt(maxLength - minLengt);
    let word = "";
    for (let i = 0; i < length; i++) {
        word += letters.charAt(randInt(letters.length));
    }
    return word;
}

/* Genera una fecha aleatoria entre fromDate y toDate */
function randomDate(fromDate, toDate) {
    toDate = toDate || new Date();
    fromDate = typeof fromDate == "string" ? new Date(fromDate) : fromDate;
    let max = toDate.getTime();
    let min = fromDate.getTime();
    let delta = randInt(max - min);
    return new Date(min + delta);
}

/* Genera un grupo de palabras aleatorias, la cantidad de palabras será entre minWordCount y maxWordCount*/
function randomText(minWordCount, maxWordCount) {
    let text = "";
    let length = minWordCount + randInt(maxWordCount - minWordCount);
    for (let i = 0; i < length; i++) {
        text += " " + randWord(4, 20);
    }
    return text;
}

function hashedId(text) {
    const hash = md5(text);
    return new mongoose.Types.ObjectId(hash.substring(0, 24))
}

/* retorna un elemento aleatorio de un arreglo randElement([1,2,3,4])*/
function randElement() {
    let array = [...arguments];
    if (array.length == 1 && Array.isArray(array[0])) {
        array = arguments[0];
    }
    let index = randInt(array.length)
    if (index >= array.length) index = array.length - 1
    let element = array[index];
    return element
}

/* Genera una url de una imagen aleatoria del ancho y alto dado */
function randImage(width, height, seed = undefined) {
    width = width || 1024;
    height = height || 768;
    seed = seed || randWord(5, 10);
    return "https://picsum.photos/seed/" + seed + "/" + width + "/" + height;
}

/* Convierte una palabra o grupo de palabras en una clave unica en minúscula, removiendo todos los acentos y convirtiendo
  los espacios en guiones _. 
  
  Por ejemplo, al generar una clave para el nombre "Santa fe de Bogotá", retorna "santa_fe_de_bogota"
  Usado para generar identificadores
*/
function getKey(value) {
    let replaceMap = { " ": "_", "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u", "ñ": "ni", "ü": "u" }
    let lower = value.toLocaleLowerCase()
    return Object.keys(replaceMap).reduce((p, c) => p.replace(c, replaceMap[c]), lower)
}

function randEnumerable(labels) {
    const label = randElement(labels)
    return toEnumerable(label)
}

/* Algunos elementos en la db se almacenan como id, label, esta funcion convierte una string en un objeto.
 
  Ejemplo: Bogotá  ->   {"label": "Bogotá", "key": "bogota"}
*/
function toEnumerable(label) {
    return { key: getKey(label), label }
}

function randPhone() {
    const indicativo = randElement(["300", "301", "302", "304", "315"])
    const numero = randElement(["1234567", "1111111", "0000000"])
    return `${indicativo}${numero}`
}

function randEmail() {
    const dominio = randElement(["gmail", "hotmail", "outlook", "yopmail", "yahoo"])
    const usuario = randWord(randBetween(5, 15), "aaassdddffgggsdggsdfgqwertzxcvb1234534")//More chances to asdf
    return `${usuario}@${dominio}`
}

function randName() {
    const generate = randBool()
    if (!generate) {
        const nombre = randElement(["Pepito", "Nombre", "Prueba", "No", "Aja"])
        const apellido = randElement(["Perez", "rodriguez", "Martinez", "Apellido", "No llamar", "Prueba"])
        return nombre + " " + apellido
    }
    const twoNames = randBool()
    if (twoNames) {
        return randWord(randBetween(5, 15)) + " " + randWord(randBetween(5, 15))
    }
    return randWord(randBetween(5, 15))
}

function randBetween(start, end) {
    return Math.round(Math.random() * (end - start)) + start
}

module.exports = {
    randBool, randInt, randElement, randEnumerable, randImage, randWord, randomDate,
    randomText, hashedId, randEmail, randName, randPhone, randBetween
}