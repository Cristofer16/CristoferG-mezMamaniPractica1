function invertir(cadena: string) {
    let cadIn: string = "";
    for(let i: number = cadena.length; i >= 0; i--) {
        cadIn += cadena.charAt(i);
    }
    if(cadIn == cadena) {
        return true;
    } else {
        return false;
    }
}
let cad: string = "this is a sample string";
console.log(invertir(cad));