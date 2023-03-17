import { hyperScript } from "@/helpers/lib/hyper-script.method";

export default class HeaderComponent {

    render() {
        return hyperScript(`
        <div class="header bg-black">
            <div class="header_wrapper">
                <p> Какой то ХЕДЕР! </p>
            </div>
        </div>
        `)
    }

    get Element() {
        return this.render();
    }
}