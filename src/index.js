import Card from "./components/Card";
import {createCard} from "./methods/clickCounter";

const post = new Card('Какой то заголовок');

const card = createCard('Какое т отакое себе функциональное программирование')

console.log(post.toString())

console.log(card.toString())

card.getSomeStr()

console.log(card.date)