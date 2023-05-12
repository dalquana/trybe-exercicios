// Acesse o elemento where-are-you.
const whereAreYou = document.getElementById('where-are-you');
// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parent = whereAreYou.parentElement
parent.style.color = 'green'
// Acesse o first-child-of-child e adicione um texto a ele.
const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'first child of child'
// Acesse o first-child a partir de parent.
const firstChild = parent.firstElementChild
// Acesse o first-child a partir de where-are-you.
const firstChild2 = whereAreYou.previousElementSibling
// Acesse o texto Attention! a partir de where-are-you.
const attention = whereAreYou.nextSibling
// Acesse o third-child a partir de where-are-you.
const thirdChild = whereAreYou.nextElementSibling
// Acesse o third-child a partir de parent.
const thirdChild2 = parent.lastElementChild.previousElementSibling