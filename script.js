'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//１つ目のボタンが押されたときにテキストボックスなどを表示させるためのもの
const countUpCalc = document.getElementsByClassName("countUp")[0];


const screen1 = document.getElementById('screen1');

countUpCalc.addEventListener('click', () => {

  console.log("aaaaaaa")
  screen1.style.visibility = "visible";
  if (screan2.style.visibility = "visible") {
    screan2.style.visibility = "hidden"
  }

  //   if (screan3.style.visibility = "visible") {
  //   screan3.style.visibility = "hidden"
  // }

});


// テキストボックスに値を入力させて保存
const calcBtn = document.getElementById("calcBtn");
let error = false;
sessionStorage.setItem('roundSum', 0);
let roundCount = 1;

//次のラウンドボタンが押された場合に、テキストの値を合計した値が別のテキストに表示される
calcBtn.addEventListener("click", () => {
  // htmlからテキストボックスの値を取得、変数宣言
  let value1 = calcu("num1");
  let value2 = calcu("num2");
  let value3 = calcu("num3");
  let sum = value1 + value2 + value3 + Number(sessionStorage.getItem('roundSum'));
  console.log(sum);
  let oneRoundSum = document.getElementById('sum');

  // 最終ラウンド以外の処理
  if (roundCount < 8) {
    if (error !== true) {
      sessionStorage.setItem('roundSum', sum);
      oneRoundSum.value = sum;
      roundCount++;

    } else {
      alert("入力に間違いがあります")
    }

    // 最終ラウンドの処理
  } else if (roundCount = 8) {
    if (error !== true) {
      sessionStorage.setItem('roundSum', sum);
      oneRoundSum.value = sum;
      roundCount++;
      alert("ゲーム終了")

      const finalSum = oneRoundSum.value;
      count++;
      // 1000足して強引にカウントアップ計算と合計値計算の両方からベストスコアを表示できる
      localStorage.setItem(`sumInput${count}`, finalSum);

      num1.value = "";
      num2.value = "";
      num3.value = "";

    } else {
      alert("入力に間違いがあります")
    }

  }
  // リセットボタンが押されたときの処理
  const reset = document.getElementById("initialize");
  reset.addEventListener("click", () => {
    const sum = document.getElementById("sum");
    // テキストの中身をリセットする
    sum.textContent = 0;
    sessionStorage.setItem('roundSum', 0);
    roundCount = 1;
  });

  function calcu(num) {
    const textStr = document.getElementById(`${num}`).value;
    const resultArray = textStr.split("");
    // console.log(resultArray);
    // 初動の文字の確認後計算して値を返す
    if (resultArray[0] === "s") {
      // console.log("isifnfiofvdndfnkla")
      let str = "";
      for (let i = 1; i <= resultArray.length - 1; i++) {
        str = str + resultArray[i];
      }
      // ２１より大きい数字用のエラー確認
      if (str < 21) {
        return str * 1;
      } else {
        alert("入力エラー");
      }

      console.log(str * 1);
    } else if (resultArray[0] === "b") {
      return 50;
    } else if (resultArray[0] === "t") {
      let str = "";
      for (let i = 1; i <= resultArray.length - 1; i++) {
        str = str + resultArray[i];
      }
      if (str < 21) {
        return str * 3;
      } else {
        alert("入力エラー");
      }

    } else if (resultArray[0] === "d") {

      let str = "";
      for (let i = 1; i <= resultArray.length - 1; i++) {
        str = str + resultArray[i];
      }
      if (str < 21) {
        return str * 2;
      } else {
        alert("入力エラー");
      }

    } else {

      error = true;
    }
  }
  // 表示を空にする
  num1.value = "";
  num2.value = "";
  num3.value = "";

});



//２つめのボタンが押されたときにテキストボックスを表示させる
const roundSum = document.getElementsByClassName("roundSum")[0];

const screan2 = document.getElementById('screan2');

roundSum.addEventListener('click', () => {

  console.log("aaaaaaa")
  screan2.style.visibility = "visible";
  if (screen1.style.visibility = "visible") {
    screen1.style.visibility = "hidden"
  }
});

//２つめのテキストボックスに値を入力し、登録を押すと値を登録する
const sumInput = document.getElementById('sumInput');
const registerBtn = document.getElementById('registration');

let count = 0;
registerBtn.addEventListener('click', () => {
  const inputValue = sumInput.value; // テキストボックスの現在の値を取得
  // 登録ボタンを押したときの処理

  // `sumInput${count}`　これによって、キーの数を増やしてvalueが上書きされないようになる
  count++;
  localStorage.setItem(`sumInput${count}`, inputValue); // localStorageに保存する

  sumInput.value = "";


  alert('登録が完了しました！'); // 完了通知（任意）
});


// ベストスコアの表示,3つ目のボタン
const bestDisplay = document.getElementsByClassName("bestDisplay")[0];


const screan3 = document.getElementById('screan3');
const scoreArea = document.getElementById('score-area');

// console.log(Object.keys(localStorage));
function bestScore(array) {
  let best = 0;
  for (const key of array) {
    console.log(key);

    const num = localStorage.getItem(`${key}`);
    console.log(num);
    if (Number(num) > best) {
      console.log(num);
      best = num;
    }
  }
  return best;
}


bestDisplay.addEventListener('click', () => {


  screan3.style.visibility = "visible";
  console.log(Object.keys(localStorage));
  const data = bestScore(Object.keys(localStorage));
  scoreArea.textContent = data;
// 他の処理が見えなくなる
  if (screen1.style.visibility = "visible") {
    screen1.style.visibility = "hidden"
  }

  if (screan2.style.visibility = "visible") {
    screan2.style.visibility = "hidden"
  }
});




