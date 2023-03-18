import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import TaskListItemComponent from '../task-list-item/TaskListItem.component';
import { ITaskData } from '../../../helpers/types/task-data.interface';

export default class TaskListComponent {
  private taskList: ITaskData[] = [
    {
      id: 1,
      important: true,
      title: 'Какая то важная задача',
      text: 'Сходить покурить, покушать, покакать и попукать минимум 2 раза за день',
      date: JSON.stringify(Date.now()),
    },
  ];
  private listGroup: Element;

  private createElement(): Element {
    return hyperScript(`
            <div class="list-group"></div>
        `);
  }

  private render() {
    this.taskList.forEach(task => {
      const listItem: Element = new TaskListItemComponent(task).render;
      this.listGroup.append(listItem);
    });
  }

  private addTask() {
    const mockTask: ITaskData = {
      id: 1,
      important: true,
      title: 'Какая то важная задача',
      text: 'Сходить покурить, покушать, покакать и попукать минимум 2 раза за день',
      date: JSON.stringify(Date.now()),
    };

    this.taskList.push(mockTask);
    this.render();
  }

  private init(): void {
    this.listGroup = this.createElement();
    this.render();

    const addButton: Element = document.querySelector('#add-btn');
    console.log(addButton);
    if (addButton) {
      addButton.addEventListener('click', () => {
        this.addTask();
        console.log('dsfsdfsdfsdf');
      });
    }
  }

  public get Element() {
    this.init();
    return this.listGroup;
  }
}
