import '@/index.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layouts/Default.layout';
import { IApp } from './helpers/interfaces/app.interface';

export default class Main implements IApp {
  init(): void {
    const app: Element = document.querySelector('#app');
    const layoutInstance: DefaultLayout = new DefaultLayout();
    const layout: Element = layoutInstance.Element;

    app.append(layout);
    layoutInstance.render();
  }
}

const main: Main = new Main();
main.init();
