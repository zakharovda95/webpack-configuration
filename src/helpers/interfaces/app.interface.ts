import { ITaskData } from './task-data.interface';
import HeaderComponent from '../../components/layout/Header/Header.component';
import TaskListComponent from '../../components/parts/task-list/TaskList.component';

export interface IApp {
  init(): void;
}

export interface IComponent {
  component: Element;
  Element: Element;
  createElement(): Element;
}

export interface ILayout extends IComponent {
  render(): void;
}

export interface IDefaultLayout extends ILayout {
  headerInstance: HeaderComponent;
  header: Element;
  taskListInstance: TaskListComponent;
  taskList: Element;

  renderHeader(): void;
  renderTaskList(): void;
}

export interface IRenderComponent extends IComponent {
  render(): void;
}

export interface ITaskListItem extends IComponent {
  task: ITaskData;
}

export interface ITaskList extends IRenderComponent {
  taskList: ITaskData[];
  clearBeforeRender();
  add(): void;
  remove(id: string): void;
  filter(): void;
  sort(sortValue: string): void;
}
