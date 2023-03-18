import { hyperScript } from '../helpers/lib/hyper-script.method';
import HeaderComponent from '../components/layout/Header/Header.component';
import TaskListComponent from '../components/parts/task-list/TaskList.component';

export default class DefaultLayout {
  private readonly layout: Element;
  constructor() {
    this.layout = this.createElement();
    this.render();
  }
  private createElement(): Element {
    return hyperScript(`
            <div class="default-layout">
                <div id="container" class="container"></div>
            </div>
        `);
  }

  private render(): void {
    const header: Element = new HeaderComponent().Element;
    this.layout.prepend(header);

    const layoutContainer: Element = this.layout.querySelector('#container');
    const taskList: Element = new TaskListComponent().Element;
    layoutContainer.append(taskList);
  }

  public get Element(): Element {
    return this.layout;
  }
}
