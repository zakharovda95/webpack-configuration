import { hyperScript } from '../helpers/lib/hyper-script.method';
import HeaderComponent from '../components/layout/Header/Header.component';
import TaskListComponent from '../components/parts/task-list/TaskList.component';
import { IDefaultLayout } from '../helpers/interfaces/app.interface';

export default class DefaultLayout implements IDefaultLayout {
  private readonly component: Element;
  private readonly headerInstance: HeaderComponent;
  private readonly header: Element;
  private readonly taskListInstance: TaskListComponent;
  private readonly taskList: Element;
  constructor() {
    this.component = this.createElement();
    this.headerInstance = new HeaderComponent();
    this.header = this.headerInstance.Element;
    this.taskListInstance = new TaskListComponent();
    this.taskList = this.taskListInstance.Element;
  }
  private createElement(): Element {
    return hyperScript(`
            <div class="default-layout">
                <div id="container" class="container"></div>
            </div>
        `);
  }

  private renderHeader() {
    this.component.prepend(this.header);

    const addBtn: Element = this.header.querySelector('#add-btn');

    addBtn.addEventListener('click', () => {
      this.taskListInstance.add();
    });

    const dropdown: Element = this.header.querySelector('#dropdown');
    let sortValue: string = '';

    dropdown.addEventListener('click', (e: Event) => {
      const targetElement = e.target as Element;

      if (targetElement.closest('.dropdown-item')) {
        const dropdownPreview = dropdown.querySelector('#dropdownMenuButton');

        sortValue = targetElement.dataset.value;
        dropdownPreview.textContent = targetElement.textContent;

        this.taskListInstance.sort(sortValue);
      }
    });
  }

  private renderTaskList() {
    const layoutContainer: Element = this.component.querySelector('#container');

    layoutContainer.append(this.taskList);
    this.taskListInstance.render();

    this.taskList.addEventListener('click', (e: Event) => {
      const targetElement = e.target as Element;

      if (targetElement.closest('#remove-btn')) {
        const id: string = targetElement.dataset.id;

        this.taskListInstance.remove(id);
      }
    });
  }

  public render(): void {
    this.renderHeader();
    this.renderTaskList();
  }

  public get Element(): Element {
    return this.component;
  }
}
