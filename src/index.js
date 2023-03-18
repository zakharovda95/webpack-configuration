import HeaderComponent from "@cmp/layout/Header/Header.component";
import '@/index.css'

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