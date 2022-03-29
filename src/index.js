/**
 * const let
 */

// var vall = "var変数";
// console.log(vall);

// //varは上書き可能
// vall = "上書き";
// console.log(vall);

// //再宣言
// var vall = "再宣言";
// console.log(vall);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を書き換え";
// console.log(val2);

// //再宣言不可能
// //let val2 = "let変数再宣言";

// const val3 = "際宣言不可能";

/**
 * テンプレート文字列
 */
// const name = "ジャケ";
// const age = "28歳";
// //従来
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);
// //テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("関数です."));

// const plus = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(plus(800, 10));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ジャケぇ",
//   age: 28
// };

// const message1 = `わたしの名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);
// const { name1, age1 } = myProfile;
// const message2 = `わたしの名前は${name1}です。年齢は${age1}です。`;
// console.log(message2);

// const myProfile = ["じゃケェ", 28];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ジャケ") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//　　まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//　配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "ジャケ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num >= 3;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "ジャケ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";

// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています。" : "許容範囲内です。";
};

console.log(checkSum(50, 30));
