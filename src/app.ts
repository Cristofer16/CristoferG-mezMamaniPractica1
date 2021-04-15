function grande(arre: number[]) {
    let x: number = arre.length - 2;
    let max: number = arre[0] * arre[1];
    for(let i: number = 1; i <= x; i++) {
        let m: number = arre[i] * arre[i+1];
        if(m > max) {
            max = m;
        }
    }
    return max;
}
let a: number[] = [1, 0, 1, 0, 1000];
console.log(grande(a));