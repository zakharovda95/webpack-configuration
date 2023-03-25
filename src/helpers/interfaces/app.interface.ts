import { ITaskData, ITaskFormData } from './task-data.interface';
import { HeaderComponent } from '../../components/layout/Header/Header.component';
import TaskListComponent from '../../components/parts/task-list/TaskList.component';

export interface IApp {
  init(): void;
}

export interface IComponent {
  Element: Element;
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
  add(task: ITaskData): void;
  remove(id: string): void;
  filter(filterValue: string): void;
  sort(sortValue: string): void;
}

export interface INewTaskForm extends IComponent {
  createTask(): ITaskFormData;
}

export interface INewTaskFormModal extends IRenderComponent {
  task: null | ITaskFormData;
}
