import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import TaskListItemComponent from '../task-list-item/TaskListItem.component';
import { ITaskData } from '../../../helpers/interfaces/task-data.interface';
import { ITaskList } from '../../../helpers/interfaces/app.interface';
import { mockDataConstants } from '../../../helpers/constants/mock-data.constants';
import { getLocaleDateNow } from '../../../helpers/lib/get-locale-date-now.method';

const mockDataItem: ITaskData = {
  id: 3,
  important: false,
  title: 'Какая то не очень важная задача',
  text: 'Работать в поте лица весь день',
  date: getLocaleDateNow('ru'),
};

export default class TaskListComponent implements ITaskList {
  private taskList: ITaskData[] = mockDataConstants;
  private readonly component: Element;

  constructor() {
    this.component = this.createElement();
  }

  private createElement(): Element {
    return hyperScript(`
            <div class="list-group"></div>
        `);
  }

  private clearBeforeRender() {
    while (this.component.firstChild) {
      this.component.removeChild(this.component.firstChild);
    }
  }

  public render(): void {
    this.clearBeforeRender();
    this.taskList.forEach(task => {
      const listItem: Element = new TaskListItemComponent(task).Element;
      this.component.append(listItem);
    });
  }

  public add(): void {
    this.taskList.push(mockDataItem);
    this.render();
  }

  public remove(id: string): void {
    this.clearBeforeRender();
    this.taskList = this.taskList.filter(task => task.id !== Number(id));
    this.render();
  }

  public filter(): void {}

  public sort(sortValue: string): void {
    console.log(sortValue);
    this.taskList = this.taskList.sort((a: ITaskData, b: ITaskData) => {
      if (sortValue === 'older') {
        return b.id - a.id;
      } else {
        return a.id - b.id;
      }
    });

    console.log(this.taskList);
    this.render();
  }

  public get Element(): Element {
    return this.component;
  }
}
