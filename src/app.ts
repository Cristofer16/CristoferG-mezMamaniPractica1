function costo(x: string, y: string) {
    let n: number[] = [y.length];
    for (let i: number = 0; i < y.length; i++) {
        n[i] = 1;
    }
    let cont: number = 0;
    for(let i: number = 0; i < x.length; i++) {
        for(let j: number = 0; j < y.length; j++) {
            if(n[j] == 1) {
                if(x.charAt(i) == y.charAt(j)) {
                    n[j] = 0;
                    cont++;
                    break;
                }
            }
        }
    }
    return cont;
}
let a:string = "abca";
let b:string = "xyzbac";
console.log(costo(a, b));