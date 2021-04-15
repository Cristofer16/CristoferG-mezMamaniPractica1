function invertir(cadena: string) {
    let cadIn: string = "";
    for(let i: number = cadena.length; i >= 0; i--) {
        cadIn += cadena.charAt(i);
    }
    return cadIn;
}
let cad: string = "this is a sample string";
console.log(invertir(cad));