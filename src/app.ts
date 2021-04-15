let a: number = 83;
function primo(a: number) {
    for (let i: number = 2; i < a/2; i++) {
        if (a%i == 0) {
            return false;
        }
    }
    return true;
}
if (primo(a)) {
    console.log("Es primo");
} else {
    console.log("No es primo");
}