import { start } from "./functions.js";

const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');

easy.addEventListener('click', () => start(0));
normal.addEventListener('click', () => start(1));
hard.addEventListener('click', () => start(2));

