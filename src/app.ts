function costo(arre: number[][]) {
    let x: number[] = [arre[0].length];
    for(let i: number = 0; i < arre[0].length; i++) {
        x[i] = 1;
    }
    let cont: number = 0;
    let suma: number = 0;
    for(let i: number = 0; i < arre.length; i++) {
        for(let j: number = 0; j < arre[0].length; j++) {
            if(cont == arre[i].length) {
                return suma;
            }
            if(x[j] == 1) {
                if(arre[i][j] == 0) {
                    x[j] = 0;
                    cont++;
                }
                suma += arre[i][j];
            }
        }
    }
    return suma;
}
let a: number[][] =[[1,1,1],[2,2,2],[3,3,3]];
console.log(costo(a));