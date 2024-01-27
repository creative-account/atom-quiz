import { elements_list } from "./data.js";

//変数定義
const container = document.querySelector("#container");
var attributeValue, numericPart, correct;
var allCorrect = [];
var userCorrect = [];
var randoms = [];
var score = [];

console,console.log(elements_list);

//始めるボタンが押された時の処理
function start() {
    const buttonConfig = [
        { text: '番号 → 記号', click: () => generateNewQuestion(0, 1) },
        { text: '番号 → 名前', click: () => generateNewQuestion(0, 2) },
        { text: '記号 → 番号', click: () => generateNewQuestion(1, 0) },
        { text: '記号 → 名前', click: () => generateNewQuestion(1, 2) },
        { text: '名前 → 番号', click: () => generateNewQuestion(2, 0) },
        { text: '名前 → 記号', click: () => generateNewQuestion(2, 1) }
    ];

    const container = document.querySelector("#start");
    container.innerHTML = ''; // 子要素を全削除

    buttonConfig.forEach(config => {
        const button = document.createElement('button');
        button.setAttribute('class', 'button is-primary is-large is-fullwidth mb-4');
        button.textContent = config.text;
        button.addEventListener('click', config.click);
        container.appendChild(button);
    });
}




//問題を生成する関数
function generateNewQuestion(from, to, element) {

    //containerの初期化、boxとlevelを追加
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    var box = document.createElement('div');
    box.setAttribute('class', 'box has-text-center is-size-2');
    var level = document.createElement('div');
    level.setAttribute('class', 'is-flex is-justify-content-space-around is-flex-wrap-nowrap');
    level.setAttribute('id', 'level');
    container.appendChild(box);
    container.appendChild(level);

    if (element != null) {

        // ID属性の値を取得
        attributeValue = element.getAttribute('id');

        // 正規表現を使用して数字部分を取得し、数値型に変換
        numericPart = parseInt(attributeValue.match(/\d+/)[0]);
        if (randoms.length == 3){
            userCorrect.push(elements_list[randoms[numericPart]][0]);
        };
    };

    if (userCorrect.length >= 20) {

        //正解とユーザーの回答を比べてtrueかfalseを返す
        for (let l = 0; l < userCorrect.length; l++) {
            if (userCorrect[l] == allCorrect[l]) {
                score.push(true);
            }else if(userCorrect[l] != allCorrect[l]) {
                score.push(false);
            };
        };

        //20問答えたら結果を表示して処理を抜ける
        displayScore(from, to);
        return;
    };
    randoms = [];

    //重複チェックしながら乱数作成
    for(i = 0; i <= 2; i++){
        var tmp = Math.floor( Math.random() * 118);
        if(!randoms.includes(tmp)){
        randoms.push(tmp);
        }else{
            i--;
            continue;
        };
    };

    //ランダムに正解の元素を選択
    correct = elements_list[randoms[0]][from];
    allCorrect.push(elements_list[randoms[0]][0]);

    //変換対象からメッセージを決定
    switch (from) {
        case 0:
            message = '元素番号 ' + correct + ' 番';
            break;
        case 1:
            message = '元素記号 ' + correct;
            break;
        case 2:
            message = '元素名 ' + correct;
            break;
    };
    box.textContent = message;

    for (let i = randoms.length - 1; i > 0; i--) {

        // 0 から i までの範囲でランダムなインデックスを選ぶ
        let r = Math.floor(Math.random() * (i + 1));

        // 要素の並び替えを実行
        let tmp = randoms[i];
        randoms[i] = randoms[r];
        randoms[r] = tmp;
    };

    //ボタンを作成
    for (i = 0; i <= 2; i++) {
        var answerButton = document.createElement('button');
        answerButton.setAttribute('class', 'button is-large is-primary');
        answerButton.setAttribute('id', 'medium_' + i);
        answerButton.setAttribute('onclick', 'generateNewQuestion('+ from + ', ' + to + ',' + 'this' +  ')');
        answerButton.textContent = elements_list[randoms[i]][to];
        level.appendChild(answerButton);
    };

    var device = navigator.userAgent.match(/Android|iPhone/);
    if (device != null){
        document.querySelector('#level').removeAttribute('class');
        for (let i = 0; i <= 2; i++) {
        document.querySelector('#medium_' + i).setAttribute('class', 'button is-large is-primary is-fullwidth mb-4');
        }
    }
};



//結果を表示する関数
function displayScore(from, to) {

    //コンテナの初期化、boxの作成
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    var box1 = document.createElement('div');
    box1.setAttribute('class', 'box has-text-center is-size-2');

    // score 配列から true の数を調べる
    var trueCount = score.filter(function(item) {
        return item === true;
    }).length;
    box1.textContent = trueCount + '問正解';
    container.appendChild(box1);

    var box2 = document.createElement('div');
    box2.setAttribute('class', 'box');
    container.appendChild(box2);

    //テーブルを作成
    var table = document.createElement('table');
    table.setAttribute('class', 'table is-fullwidth is-striped');

    // テーブルヘッダを作成
    var headerRow = document.createElement('tr');
    var headerCells = ["問題", "答え", "あなたの答え", "正誤"];

    for (var c = 0; c < 4; c++) {
        var headerCell = document.createElement('td');
        headerCell.textContent = headerCells[c];
        headerRow.appendChild(headerCell);
    };

    box2.appendChild(table);
    table.appendChild(headerRow);

    // スコア情報をテーブルに追加
    for (let r = 0; r < userCorrect.length; r++) {
        var row = document.createElement('tr');
        table.appendChild(row);
        var cells = [];

        //セルを作成し、データを追加
        cells[0] = document.createElement('td');
        cells[1] = document.createElement('td');
        cells[2] = document.createElement('td');
        cells[3] = document.createElement('td');
        cells[0].textContent = elements_list[allCorrect[r]-1][from];
        cells[1].textContent = elements_list[allCorrect[r]-1][to];
        cells[2].textContent = elements_list[userCorrect[r]-1][to];
        cells[3].textContent = score[r].toString();

        if (score[r] == false) {
            cells[3].setAttribute('class', 'has-text-danger-dark');
        }else if (score[r] == true) {
            cells[3].setAttribute('class', 'has-text-primary');
        };

        // セルを行に追加
        for (var c = 0; c < 4; c++) {
            row.appendChild(cells[c]);
        };
    };

    //配列、変数の初期化
    randoms = [];
    allCorrect = [];
    userCorrect = [];
    score = [];
    correct = null;

    var box3 = document.createElement('div');
    box3.setAttribute('class', 'is-flex is-justify-content-space-around is-flex-warp-warp');
    container.appendChild(box3);

    //リトライボタンと問題選択ボタンの作成
    var retry_button = document.createElement('button');
    retry_button.setAttribute('class', 'button is-primary is-large is-justify-content-space-around is-flex-warp-warp');
    retry_button.setAttribute('onclick', 'generateNewQuestion(' + from + ',' + to + ')');
    retry_button.textContent = 'リトライ';
    var select_button = document.createElement('button');
    select_button.setAttribute('class', 'button is-primary is-large is-justify-content-space-around is-flex-warp-warp');
    select_button.setAttribute('onclick', 'start()');
    select_button.textContent = '問題選択へ';
    box3.appendChild(retry_button);
    box3.appendChild(select_button);
};
