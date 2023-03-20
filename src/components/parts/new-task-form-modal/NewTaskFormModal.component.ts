import { INewTaskFormModal } from '../../../helpers/interfaces/app.interface';
import ModalComponent from '../../UI/Modal.component';
import NewTaskFormComponent from '../new-task-form/NewTaskForm.component';
import { ITaskFormData } from '../../../helpers/interfaces/task-data.interface';

export default class NewTaskFormModalComponent implements INewTaskFormModal {
  private readonly component: Element;
  private taskData: null | ITaskFormData;

  constructor() {
    this.component = this.createElement();
    this.taskData = null;
  }

  createElement(): Element {
    return new ModalComponent().Element;
  }

  render() {
    const formInstance: NewTaskFormComponent = new NewTaskFormComponent();
    const form: Element = formInstance.Element;
    const modalBody: Element = this.component.querySelector('.modal-body');

    modalBody.append(form);

    const createButton = form.querySelector('button[type=button]');
    createButton.addEventListener('click', () => {
      this.taskData = formInstance.createTask();
    });
  }

  public get Element(): Element {
    return this.component;
  }

  public get task(): null | ITaskFormData {
    return this.taskData;
  }
}
