import { hyperScript } from '../helpers/lib/hyper-script.method';
import HeaderComponent from '../components/layout/Header/Header.component';
import TaskListComponent from '../components/parts/task-list/TaskList.component';

export default class DefaultLayout {
  private readonly layout: Element;
  constructor() {
    this.layout = this.createElement();
  }
  private createElement(): Element {
    return hyperScript(`
            <div class="default-layout">
                <div id="container" class="container"></div>
            </div>
        `);
  }

  public render(): void {
    const header: Element = new HeaderComponent().Element;
    this.layout.prepend(header);

    const layoutContainer: Element = this.layout.querySelector('#container');
    const taskListInstance: TaskListComponent = new TaskListComponent();
    const taskList: Element = taskListInstance.Element;

    layoutContainer.append(taskList);
    taskListInstance.render();

    const addBtn = document.querySelector('#add-btn');
    addBtn.addEventListener('click', () => {
      taskListInstance.addTask();
    });
  }

  public get Element(): Element {
    return this.layout;
  }
}
