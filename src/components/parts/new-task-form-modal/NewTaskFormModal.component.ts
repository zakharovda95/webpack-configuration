import { IRenderComponent } from '../../../helpers/interfaces/app.interface';
import ModalComponent from '../../UI/Modal.component';
import NewTaskFormComponent from '../new-task-form/NewTaskForm.component';

export default class NewTaskFormModalComponent implements IRenderComponent {
  private readonly component: Element;

  constructor() {
    this.component = this.createElement();
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
      formInstance.createTask();
    });
  }

  public get Element(): Element {
    return this.component;
  }
}
