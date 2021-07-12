// /**
//  * Mapやfilterを使った配列の処理
//  */

// const nameArr = ["田中", "山田", "じゃけぇ"];

// //従来の場合
// // for (let i = 0; i < nameArr.length; i++) {
// //   console.log(nameArr[i]);
// // }

// // const nameArr2 = nameArr.map((name) => console.log(name));

// // const numArr = [1, 2, 3, 4, 5];

// // const newNumArr = numArr.filter((num) => num % 2 === 1);

// // console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけぇ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr)

// const val1 = 1 > 0 ? true : false;
// console.log(val1);

// const num = 1300;

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値で入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};

console.log(checkSum(98, 2));
