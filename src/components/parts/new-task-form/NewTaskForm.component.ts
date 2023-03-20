import { INewTaskForm } from '../../../helpers/interfaces/app.interface';
import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import { ITaskFormData } from '../../../helpers/interfaces/task-data.interface';

export default class NewTaskFormComponent implements INewTaskForm {
  private readonly component: Element;

  constructor() {
    this.component = this.createElement();
  }

  private createElement(): Element {
    return hyperScript(`
    <form>
        <div class="form-group">
            <label for="exampleFormControlInput1">Название таска</label>
            <input id="title-input" type="text" class="form-control" placeholder="Введите название">
        </div>
        
        <div class="form-group mt-3">
            <label for="exampleFormControlTextarea1">Описание таска</label>
            <textarea id="text-input" class="form-control" rows="5" placeholder="Введите описание" ></textarea>
        </div>
        
        <div class="form-check form-check-inline mt-3">
            <input id="important-input" class="form-check-input" id="inlineCheckbox1" type="checkbox" value="important">
            <label class="form-check-label" for="inlineCheckbox1">Важное</label>
        </div>
        
        <br>
        
        <button id="add-task-btn" type="button" class="btn btn-success mt-3">Создать</button>
    </form>
    `);
  }

  public createTask(): ITaskFormData {
    const titleInput: Element = this.component.querySelector('#title-input');
    const textInput: Element = this.component.querySelector('#text-input');
    const importantInput: Element =
      this.component.querySelector('#important-input');

    return {
      title: titleInput['value'],
      text: textInput['value'],
      important: importantInput['checked'],
    };
  }

  public get Element() {
    return this.component;
  }
}
