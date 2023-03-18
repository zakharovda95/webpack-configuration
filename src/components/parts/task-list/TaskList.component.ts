import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import TaskListItemComponent from '../task-list-item/TaskListItem.component';
import { ITaskData } from '../../../helpers/types/task-data.interface';

const mockData: ITaskData[] = [
  {
    id: 1,
    important: true,
    title: 'Какая то важная задача',
    text: 'Сходить покурить, покушать, покакать и попукать минимум 2 раза за рабочий день',
    date: JSON.stringify(Date.now()),
  },
  {
    id: 2,
    important: false,
    title: 'Какая то не очень важная задача',
    text: 'Работать в поте лица весь день',
    date: JSON.stringify(Date.now()),
  },
];

const mockDataItem: ITaskData = {
  id: 3,
  important: false,
  title: 'Какая то не очень важная задача',
  text: 'Работать в поте лица весь день',
  date: JSON.stringify(Date.now()),
};

export default class TaskListComponent {
  private taskList: ITaskData[] = mockData;
  private readonly listGroup: Element;

  constructor() {
    this.listGroup = this.createElement();
  }

  private createElement(): Element {
    return hyperScript(`
            <div class="list-group"></div>
        `);
  }

  public render(): void {
    while (this.listGroup.firstChild) {
      this.listGroup.removeChild(this.listGroup.firstChild);
    }

    this.taskList.forEach(task => {
      const listItem: Element = new TaskListItemComponent(task).Element;
      this.listGroup.append(listItem);
    });
  }

  public addTask(): void {
    this.taskList.push(mockDataItem);
    this.render();
  }

  public get Element(): Element {
    return this.listGroup;
  }
}
