// @ts-check

// console.log("This is the work.js file.");

// let text;
// let num

// num = 41;

// text = "Hello, World!";

// console.log(text);
// console.log(text);

// // もしも偶数の場合、
// if(num % 2 === 0) {
//     console.log(num + " is even.");
// } else {
//     console.log(num + " is odd.");
// }

// if(typeof text === "string") {
//     console.log("The variable 'text' is a string.");
// };

// let aaa = 1;

// aaa += 1;

// console.log(aaa);

// -----------------------------------

// prctice03

// 課題１-------------------
console.log("-----------------課題1---------------");

let aaa;

aaa = Math.floor(Math.random() * 6) + 1;

console.log(aaa);

// 課題２-------------------
console.log("-----------------課題2---------------");

let aa = Math.floor(Math.random() * 2) + 1;

console.log("ランダムな数値" + aa);

if (aa === 1) {
  console.log("晴れ");
} else {
  console.log("雨");
}

if (aa === 2) {
  console.log("雨をもつ");
}

// 課題3-------------------
console.log("-----------------課題3---------------");

let cough;

cough = Math.floor(Math.random() * 3) + 1;
// 3分の１でクシャミをするので
if (cough === 1) {
  console.log("くしゃみ");
}

Math.floor(Math.random() * 3) + 1;

// 課題4-------------------
console.log("-----------------課題4---------------");

let tanakaCough = Math.floor(Math.random() * 3) + 1;
let yamadaCough = Math.floor(Math.random() * 3) + 1;

console.log("田中さんの番号" + tanakaCough);
console.log("山田さんの番号" + yamadaCough);

if (tanakaCough === yamadaCough) {
  console.log("シンクロしました");
}

switch (tanakaCough) {
  case 1:
    console.log("田中さんはくしゃみをしました");
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
console.log("-----------------分岐１---------------");

// practice03分岐
console.log("サイコロ開始");

let dice = Math.floor(Math.random() * 3) + 1;

switch (dice) {
  case 1:
    console.log("サイコロの目は" + dice + "だった大吉");
    break;
  case 2:
    console.log("サイコロの目は" + dice + "だった中吉");
    break;
  case 3:
    console.log("サイコロの目は" + dice + "だった小吉");
    break;
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
console.log("-----------------分岐２---------------");

// 1〜12のランダムな数字を作成
const month = Math.floor(Math.random() * 12) + 1;
let holiday = "";

switch (month) {
  case 1:
    holiday = "元日、成人の日";
    break;
  case 2:
    holiday = "建国記念の日";
    break;
  case 3:
    holiday = "春分の日";
    break;
  case 4:
    holiday = "昭和の日";
    break;
  case 5:
    holiday = "憲法記念日、みどりの日、こどもの日";
    break;
  case 7:
    holiday = "海の日";
    break;
  case 9:
    holiday = "敬老の日、秋分の日";
    break;
  case 10:
    holiday = "体育の日";
    break;
  case 11:
    holiday = "文化の日、勤労感謝の日";
    break;
  case 12:
    holiday = "天皇誕生日";
    break;
  default:
    holiday = "祝日はありません";
}

console.log(month + "月：" + holiday);

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
console.log("-----------------while文---------------");

let count = 0;

while (count < 5) {
  console.log("カウント：" + count);
  count++;
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
console.log("-----------------while文---------------");

for (let i = 0; i < 5; i++) {
  console.log("カウント：" + i);
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー➀ーー
console.log("-----------------分岐課題➀---------------");

for (let j = 1; j <= 3; j++) {
  console.log("★★★★★★★★★★");
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー➀ーー
console.log("-----------------分岐課題➁---------------");

for (let j = 1; j <= 4; j++) {
  switch (j) {
    case 1:
      console.log("★");
      break;
    case 2:
      console.log("★★");
      break;
    case 3:
      console.log("★★★");
      break;
    case 4:
      console.log("★★★★");
      break;
  }
}

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー➀ーー
console.log("-----------------分岐課題➂---------------");

tanakaCough = Math.floor(Math.random() * 3) + 1;
yamadaCough = Math.floor(Math.random() * 3) + 1;

console.log("くしゃみは１とする");

console.log("田中の数値" + tanakaCough);
console.log("山田の数値" + yamadaCough);

// 抽選回数
let i = 0;

// くしゃみがシンクロするまでループ
while (true) {
  if (tanakaCough == 1) {
    console.log("田中さんがくしゃみをしました");
  }

  if (yamadaCough == 1) {
    console.log("田中さんがくしゃみをしました");
  }

  if (tanakaCough == 1 && yamadaCough == 1) {
    console.log("両方のくしゃみがシンクロしました");
    break;
  }

  console.log("抽選中です。" + i++ + "回目");

  tanakaCough = Math.floor(Math.random() * 3) + 1;
  yamadaCough = Math.floor(Math.random() * 3) + 1;
}

console.log("シンクロしました" + i + "回目でシンクロしました");

// ーーーーーーーーーーーーーーーーーーーーーーーーーーーループ課題➁ーー

// 分岐課題➁のループ版
console.log("-----------------ループ課題➁---------------");

let date = 0;
let kenshouen = 0;

while (true) {
  // 日付を進める
  date = date + 1;
  console.log(date + "日目");

  // 田中さんのくしゃみ判定
  let tanakaNum = Math.floor(Math.random() * 3) + 1;

  kenshouen = Math.floor(Math.random() * 10) + 1;
  if (kenshouen === 1) {
    console.log("田中さんが腱鞘炎になりました");
    break;
  }

  // くしゃみをした場合
  if (tanakaNum === 1) {
    console.log("田中さんがくしゃみをしました");
    //かつ腱鞘炎になるまでループ
    let kenshouenNumkenshouen = Math.floor(Math.random() * 30) + 1;
    if (kenshouen === 1) {
      console.log("田中さんが腱鞘炎になりました");
      break;
    }
  }
}

// chapter09ーーーーーーーーーーーーーーーーーーーーーーーーーーー配列ーー

console.log("-----------------配列---------------");

let fruits = ["apple", "banana", "grape", "orange", "melon"];

// chapter09ーーーーーーーーーーーーーーーーーーーーーーーーーーー配列ーー

console.log("-----practice04-------配列課題➀------------------");

let numberArray = [];
numberArray.push(0);

for (let i = 0; i < 9; i++) {
  numberArray.push(i + 1);
}

console.log(numberArray);

// chapter09ーーーーーーーーーーー課題➁ーーーーーーーーーーーー配列ーー

console.log("-----practice04-------配列課題➁------------------");

// Aさんがだしたジャンケンの配列
let arrA = new Array(9);
// Bさんがだしたジャンケンの配列
let arrB = new Array(9);

// Aさんの出したジャンケンの数値
let ANum;
// Bさんの出したジャンケンの数値
let BNum;

// 日付
let nam = 1;

while (nam === 10) {
  // Aさんのジャンケン判定
  ANum = Math.floor(Math.random() * 3) + 1;

  // Bさんのジャンケン判定
  BNum = Math.floor(Math.random() * 3) + 1;

  // ジャンケンの回数

  // Aさんの履歴
  switch (ANum) {
    case 1:
      console.log("Aさんはグーを出しました");
      break;
    case 2:
      console.log("Aさんはチョキを出しました");
      break;
    case 3:
      console.log("Aさんはパーを出しました");
      break;
  }
}

// bさんの履歴
switch (BNum) {
  case 1:
    console.log("Aさんはグーを出しました");
    break;
  case 2:
    console.log("Aさんはチョキを出しました");
    break;
  case 3:
    console.log("Aさんはパーを出しました");
    break;
}
arrA.push(ANum);
arrB.push(BNum);

nam = nam + 1;

console.log("aさんの履歴");

for (let i = 0; i < arrA.length; i++) {
  let Ajanken = arrA[i];
  // Aさんの履歴
  switch (Ajanken) {
    case 1:
      console.log(i + ".グーを出しました");
      break;
    case 2:
      console.log(i + ".チョキを出しました");
      break;
    case 3:
      console.log(i + ".パーを出しました");
      break;
  }
}

console.log("bさんの履歴");

for (let i = 0; i < arrA.length; i++) {
  let Bjanken = arrB[i];
  // Bさんの履歴
  switch (Bjanken) {
    case 1:
      console.log(i + ".グーを出しました");
      break;
    case 2:
      console.log(i + ".チョキを出しました");
      break;
    case 3:
      console.log(i + ".パーを出しました");
      break;
  }
}
