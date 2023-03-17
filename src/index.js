import HeaderComponent from "./components/layout/Header/Header.component.js";
import './index.css'
export default class Main {
    constructor() {
        this.app = document.querySelector('#app');
        this.header = new HeaderComponent().Element;
    }

    render() {
        this.app.append(this.header)
    }

}

const main = new Main();
main.render();