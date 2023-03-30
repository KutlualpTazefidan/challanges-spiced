// Store the cards in a global state
import { cards } from "./utils/cards.js";
import { Header } from "./components/Header/Header.js";
import { Form } from "./components/Form/Form.js";
import { CardList } from "./components/CardList/CardList.js";

const header = Header();
const form = Form();
CardList(cards);

import { App } from "./components/App/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
