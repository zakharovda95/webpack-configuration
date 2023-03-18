import '@/index.scss';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '@/layouts/Default.layout';

export default class Main {
  constructor() {
    this.app = document.querySelector('#app');
    this.layout = new DefaultLayout().Element;
  }

  render() {
    this.app.append(this.layout);
  }
}

const main = new Main();
main.render();
