module.exports = function parseStringAsArry( arrayAsString ) {
    return arrayAsString.split( ',' ).map( tech => tech.trim() )
}