import { elements_list } from "./data.js";

//変数定義
const main_screen = document.getElementById('main_screen');
var attributeValue, numericPart, correct;
var allCorrect = [];
var userCorrect = [];
var randoms = [];
var score = [];

export function start(level){
    const buttonConfig = [
        { text: '番号 → 記号', click: () => generateNewQuestion(0, 1, level) },
        { text: '番号 → 名前', click: () => generateNewQuestion(0, 2, level) },
        { text: '記号 → 番号', click: () => generateNewQuestion(1, 0, level) },
        { text: '記号 → 名前', click: () => generateNewQuestion(1, 2, level) },
        { text: '名前 → 番号', click: () => generateNewQuestion(2, 0, level) },
        { text: '名前 → 記号', click: () => generateNewQuestion(2, 1, level) }
    ];

    main_screen.innerHTML = ''; // 子要素を全削除

    buttonConfig.forEach(config => {
        const button = document.createElement('button');
        button.setAttribute('class', 'button is-primary is-large is-fullwidth mb-4');
        button.textContent = config.text;
        button.addEventListener('click', config.click);
        main_screen.appendChild(button);
    });
}

