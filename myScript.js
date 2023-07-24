/*let lotto = [];
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
lotto.push(parseInt(Math.random() * 45 + 1));
document.write(lotto)*/

// let lotto = [];
// for (let i = 0; i < 6; i++){
//         let num = parseInt(Math.random() * 45 + 1);
//         if (lotto.indexOf(num) === -1){
//             lotto.push(num);
//         }
//     }
// document.write(lotto)

// We don't use for. Why? if there is same number generated, it will show 5 numbers not 6.

// let lotto = [];
// while(lotto.length < 6 ){
//     let num = parseInt(Math.random() * 45 + 1);
//         if (lotto.indexOf(num) === -1){
//             lotto.push(num);
//         }
//     }
// lotto.sort((a,b)=>a-b)