import { hyperScript } from '../helpers/lib/hyper-script.method';
import {HeaderComponent} from '../components/layout/Header/Header.component';
import TaskListComponent from '../components/parts/task-list/TaskList.component';
import { IDefaultLayout } from '../helpers/interfaces/app.interface';
import NewTaskFormModalComponent from '../components/parts/new-task-form-modal/NewTaskFormModal.component';

export default class DefaultLayout implements IDefaultLayout {
  private readonly component: Element;
  private readonly layoutContainer: Element;
  private readonly headerInstance: HeaderComponent;
  private readonly header: Element;
  private readonly taskListInstance: TaskListComponent;
  private readonly taskList: Element;
  private readonly modalInstance: NewTaskFormModalComponent;
  private readonly modal: Element;
  constructor() {
    this.component = this.createElement();
    this.headerInstance = new HeaderComponent();
    this.header = this.headerInstance.Element;
    this.taskListInstance = new TaskListComponent();
    this.taskList = this.taskListInstance.Element;
    this.modalInstance = new NewTaskFormModalComponent();
    this.modal = this.modalInstance.Element;
    this.layoutContainer = this.component.querySelector('#container');
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

    const dropdown: Element = this.header.querySelector('#dropdown');
    let sortValue: string = '';

    dropdown.addEventListener('click', (e: Event) => {
      const targetElement = e.target as Element;
      if (targetElement.closest('.dropdown-item')) {
        const dropdownPreview = dropdown.querySelector('#dropdownMenuButton');
        dropdownPreview.textContent = targetElement.textContent;
        sortValue = targetElement['dataset'].value;

        this.taskListInstance.sort(sortValue);
      }
    });

    const searchInput = this.header.querySelector('#search-input');
    searchInput.addEventListener('input', (e: InputEvent) => {
      const targetValue = e.target['value'];
      this.taskListInstance.filter(targetValue);

      if (!targetValue) {
        this.taskListInstance.sort(sortValue);
      }
    });
  }

  private renderTaskList() {
    this.layoutContainer.append(this.taskList);
    this.taskListInstance.render();

    this.taskList.addEventListener('click', (e: Event) => {
      const targetElement = e.target as Element;

      if (targetElement.closest('#remove-btn')) {
        const id: string = targetElement['dataset'].id;

        this.taskListInstance.remove(id);
      }
    });
  }

  private renderModal() {
    this.layoutContainer.append(this.modal);
    this.modalInstance.render();
    const addBtn: Element = this.modal.querySelector('#add-task-btn');
    addBtn.addEventListener('click', () => {
      this.taskListInstance.add(this.modalInstance.task);
    });
  }

  public render(): void {
    this.renderHeader();
    this.renderTaskList();
    this.renderModal();
  }

  public get Element(): Element {
    return this.component;
  }
}
