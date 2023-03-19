import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import { ITaskData } from '../../../helpers/interfaces/task-data.interface';
import { ITaskListItem } from '../../../helpers/interfaces/app.interface';
import './TaskListItem.component.scss';

export default class TaskListItemComponent implements ITaskListItem {
  private readonly task: ITaskData;
  private readonly component: Element;
  constructor(task: ITaskData) {
    this.task = task;
    this.component = this.createElement();
  }
  private createElement(): Element {
    return hyperScript(`
        <div class="card">
            <h5 class="card-header">
               ${this.task.important ? 'Важное задание' : 'Обычное задание'}
               
               <button 
                    id="remove-btn" 
                    class="btn btn-danger btn-sm" 
                    data-id="${this.task.id}">
                        &#10006;
               </button>
            </h5>
            
            <div class="card-body">
                <h5 class="card-title">
                    Задача-${this.task.id}. ${this.task.title}
                </h5>
                <p class="card-text">${this.task.text}</p>
                <br/>
                <p class="card-text">${this.task.date}</p>
            </div>
        </div>
        `);
  }

  public get Element(): Element {
    return this.component;
  }
}
