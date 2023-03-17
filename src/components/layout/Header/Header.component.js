import { hyperScript } from "../../../helpers/lib/hyper-script.method.js";

export default class HeaderComponent {

    render() {
        return hyperScript(`
        <div class="header bg-black">
            <div class="header_wrapper">
                <p> Какой то ХЕДЕРHHHHHHHHHHHHH </p>
            </div>
        </div>
        `)
    }

    get Element() {
        return this.render();
    }
}