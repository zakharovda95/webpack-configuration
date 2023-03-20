import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import TaskListItemComponent from '../task-list-item/TaskListItem.component';
import {
  ITaskData,
  ITaskFormData,
} from '../../../helpers/interfaces/task-data.interface';
import { ITaskList } from '../../../helpers/interfaces/app.interface';
import { mockDataConstants } from '../../../helpers/constants/mock-data.constants';
import { getLocaleDateNow } from '../../../helpers/lib/get-locale-date-now.method';

export default class TaskListComponent implements ITaskList {
  private taskList: ITaskData[] = mockDataConstants;
  private readonly taskListProxy: ITaskData[];
  private readonly component: Element;

  constructor() {
    this.component = this.createElement();
    this.taskListProxy = [...this.taskList];
  }

  private createElement(): Element {
    return hyperScript(`
            <div class="list-group gap-3 mt-3"></div>
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

  public add(task: ITaskFormData): void {
    const taskData: ITaskData = {
      ...task,
      id: this.taskList.length + 1,
      date: getLocaleDateNow('ru'),
    };
    this.taskList.push(taskData);
    this.render();
  }

  public remove(id: string): void {
    this.clearBeforeRender();
    this.taskList = this.taskList.filter(task => task.id !== Number(id));
    this.render();
  }

  public filter(filterValue: string): void {
    this.clearBeforeRender();

    if (!filterValue) {
      this.taskList = this.taskListProxy;
    } else {
      this.taskList = this.taskList.filter(task => {
        return (
          task.title.toLowerCase().includes(filterValue.toLowerCase()) ||
          task.text.toLowerCase().includes(filterValue.toLowerCase()) ||
          task.date.toLowerCase().includes(filterValue.toLowerCase()) ||
          `Задача-${task.id}.`.toLowerCase().includes(filterValue.toLowerCase())
        );
      });
    }

    this.render();
  }

  public sort(sortValue: string): void {
    this.taskList = this.taskList.sort((a: ITaskData, b: ITaskData) => {
      if (sortValue === 'older') {
        return a.id - b.id;
      } else {
        return b.id - a.id;
      }
    });
    this.render();
  }

  public get Element(): Element {
    return this.component;
  }
}
