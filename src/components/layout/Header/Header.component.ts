import { hyperScript } from "../../../helpers/lib/hyper-script.method";
export default class HeaderComponent {

    private render(): Element {
        return hyperScript(`
        <div class="header bg-black">
            <div class="header_wrapper">
                <p> Какой то ХЕДЕР! </p>
            </div>
        </div>
        `)
    }

    public get Element(): Element {
        return this.render();
    }
}