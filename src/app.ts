function agregar(arre: number[]) {
    let x: number[] = arre.sort();
    let max: number = arre.length-1;
    let m: number = x[0];
    let cont: number = 0;
    for(let i: number = 0; i <= max; i++) {
        while(m != x[i]) {
            cont++;
            m++;
        }
        m++;
    }
    return cont;
}
let a: number[] =[0, 3];
console.log(agregar(a));