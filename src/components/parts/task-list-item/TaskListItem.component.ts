import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import { ITaskData } from '../../../helpers/types/task-data.interface';

export default class TaskListItemComponent {
  private readonly task: ITaskData;
  constructor(task: ITaskData) {
    this.task = task;
  }
  private createElement(): Element {
    return hyperScript(`
        <div class="card">
            <h5 class="card-header">
               ${this.task.important ? 'Важное задание' : 'Обычное задание'}
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

  public get render(): Element {
    return this.createElement();
  }
}
