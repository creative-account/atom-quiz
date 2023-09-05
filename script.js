//元素の色々をまとめた表
const atom_list = [
    [1,"H","水素"],
    [2,"He","ヘリウム"],
    [3,"Li","リチウム"],
    [4,"Be","ベリリウム"],
    [5,"B","ホウ素"],
    [6,"C","炭素"],
    [7,"N","窒素"],
    [8,"O","酸素"],
    [9,"F","フッ素"],
    [10,"Ne","ネオン"],
    [11,"Na","ナトリウム"],
    [12,"Mg","マグネシウム"],
    [13,"Al","アルミニウム"],
    [14,"Si","ケイ素"],
    [15,"P","リン"],
    [16,"S","硫黄"],
    [17,"Cl","塩素"],
    [18,"Ar","アルゴン"],
    [19,"K","カリウム"],
    [20,"Ca","カルシウム"],
    [21,"Sc","スカンジウム"],
    [22,"Ti","チタン"],
    [23,"V","バナジウム"],
    [24,"Cr","クロム"],
    [25,"Mn","マンガン"],
    [26,"Fe","鉄"],
    [27,"Co","コバルト"],
    [28,"Ni","ニッケル"],
    [29,"Cu","銅"],
    [30,"Zn","亜鉛"],
    [31,"Ga","ガリウム"],
    [32,"Ge","ゲルマニウム"],
    [33,"As","ヒ素"],
    [34,"Se","セレン"],
    [35,"Br","臭素"],
    [36,"Kr","クリプトン"],
    [37,"Rb","ルビジウム"],
    [38,"Sr","ストロンチウム"],
    [39,"Y","イットリウム"],
    [40,"Zr","ジルコニウム"],
    [41,"Nb","ニオブ"],
    [42,"Mo","モリブデン"],
    [43,"Tc","テクネチウム"],
    [44,"Ru","ルテニウム"],
    [45,"Rh","ロジウム"],
    [46,"Pd","パラジウム"],
    [47,"Ag","銀"],
    [48,"Cd","カドミウム"],
    [49,"In","インジウム"],
    [50,"Sn","スズ"],
    [51,"Sb","アンチモン"],
    [52,"Te","テルル"],
    [53,"I","ヨウ素"],
    [54,"Xe","キセノン"],
    [55,"Cs","セシウム"],
    [56,"Ba","バリウム"],
    [57,"La","ランタン"],
    [58,"Ce","セリウム"],
    [59,"Pr","プラセオジム"],
    [60,"Nd","ネオジム"],
    [61,"Pm","プロメチウム"],
    [62,"Sm","サマリウム"],
    [63,"Eu","ユウロピウム"],
    [64,"Gd","ガドリニウム"],
    [65,"Tb","テルビウム"],
    [66,"Dy","ジスプロシウム"],
    [67,"Ho","ホルミウム"],
    [68,"Er","エルビウム"],
    [69,"Tm","ツリウム"],
    [70,"Yb","イッテルビウム"],
    [71,"Lu","ルテチウム"],
    [72,"Hf","ハフニウム"],
    [73,"Ta","タンタル"],
    [74,"W","タングステン"],
    [75,"Re","レニウム"],
    [76,"Os","オスミウム"],
    [77,"Ir","イリジウム"],
    [78,"Pt","白金"],
    [79,"Au","金"],
    [80,"Hg","水銀"],
    [81,"Tl","タリウム"],
    [82,"Pb","鉛"],
    [83,"Bi","ビスマス"],
    [84,"Po","ポロニウム"],
    [85,"At","アスタチン"],
    [86,"Rn","ラドン"],
    [87,"Fr","フランシウム"],
    [88,"Ra","ラジウム"],
    [89,"Ac","アクチニウム"],
    [90,"Th","トリウム"],
    [91,"Pa","プロトアクチニウム"],
    [92,"U","ウラン"],
    [93,"Np","ネプツニウム"],
    [94,"Pu","プルトニウム"],
    [95,"Am","アメリシウム"],
    [96,"Cm","キュリウム"],
    [97,"Bk","バークリウム"],
    [98,"Cf","カリホルニウム"],
    [99,"Es","アインスタイニウム"],
    [100,"Fm","フェルミウム"],
    [101,"Md","メンデレビウム"],
    [102,"No","ノーベリウム"],
    [103,"Lr","ローレンシウム"],
    [104,"Rf","ラザホージウム"],
    [105,"Db","ドブニウム"],
    [106,"Sg","シーボーギウム"],
    [107,"Bh","ボーリウム"],
    [108,"Hs","ハッシウム"],
    [109,"Mt","マイトネリウム"],
    [110,"Ds","ダームスタチウム"],
    [111,"Rg","レントゲニウム"],
    [112,"Cn","コペルニシウム"],
    [113,"Nh","ニホニウム"],
    [114,"Fl","フレロビウム"],
    [115,"Mc","モスコビウム"],
    [116,"Lv","リバモリウム"],
    [117,"Ts","テネシン"],
    [118,"Og","オガネソン"]
];

//変数定義
const container = document.querySelector("#container");
var attributeValue, numericPart, correct;
var allCorrect = [];
var userCorrect = [];
var randoms = [];
var score = [];



//始めるボタンが押された時の処理
function start() {

    //子要素を全削除
    const start = document.querySelector("#start");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };

    //ボタンの生成
    for (var i = 0; i <= 5; i++) {
        var button = document.createElement('button');
        button.setAttribute('class', 'button is-primary is-large is-fullwidth mb-4');
        switch (i) {
            case 0:
                button.textContent = '番号 → 記号';
                button.setAttribute('onclick', 'generateNewQuestion(0, 1)');
                break;
            case 1:
                button.textContent = '番号 → 名前';
                button.setAttribute('onclick', 'generateNewQuestion(0, 2)');
                break;
            case 2:
                button.textContent = '記号 → 番号';
                button.setAttribute('onclick', 'generateNewQuestion(1, 0)');
                break;
            case 3:
                button.textContent = '記号 → 名前';
                button.setAttribute('onclick', 'generateNewQuestion(1, 2)');
                break;
            case 4:
                button.textContent = '名前 → 番号';
                button.setAttribute('onclick', 'generateNewQuestion(2, 0)');
                break;
            case 5:
                button.textContent = '名前 → 記号';
                button.setAttribute('onclick', 'generateNewQuestion(2, 1)');
                break;
        };

        //ボタンの追加、button変数の初期化
        container.appendChild(button);
        button = null;
    };
};



//問題を生成する関数
function generateNewQuestion(from, to, element) {

    //containerの初期化、boxとlevelを追加
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    var box = document.createElement('div');
    box.setAttribute('class', 'box has-text-center is-size-2');
    var level = document.createElement('div');
    level.setAttribute('class', 'is-flex is-justify-content-space-around is-flex-wrap-wrap');
    container.appendChild(box);
    container.appendChild(level);

    if (element != null) {

        // ID属性の値を取得
        attributeValue = element.getAttribute('id');

        // 正規表現を使用して数字部分を取得し、数値型に変換
        numericPart = parseInt(attributeValue.match(/\d+/)[0]);
        if (randoms.length == 3){
            userCorrect.push(atom_list[randoms[numericPart]][0]);
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
    correct = atom_list[randoms[0]][from];
    allCorrect.push(atom_list[randoms[0]][0]);

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
        answerButton.setAttribute('class', 'button is-large is-primary is-justify-content-space-around is-flex-wrap-wrap');
        answerButton.setAttribute('id', 'medium_' + i);
        answerButton.setAttribute('onclick', 'generateNewQuestion('+ from + ', ' + to + ',' + 'this' +  ')');
        answerButton.textContent = atom_list[randoms[i]][to];
        level.appendChild(answerButton);
    };
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
        cells[0].textContent = atom_list[allCorrect[r]-1][from];
        cells[1].textContent = atom_list[allCorrect[r]-1][to];
        cells[2].textContent = atom_list[userCorrect[r]-1][to];
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
