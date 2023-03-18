import '@/index.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/layouts/Default.layout';

export default class Main {
  init() {
    const app = document.querySelector('#app');
    const layoutInstance = new DefaultLayout();
    const layout = layoutInstance.Element;

    app.append(layout);
    layoutInstance.render();
  }
}

const main = new Main();
main.init();
