import { IComponent } from '../../../helpers/interfaces/app.interface';
import { hyperScript } from '../../../helpers/lib/hyper-script.method';

export default class NewTaskFormComponent implements IComponent {
  private readonly component: Element;

  constructor() {
    this.component = this.createElement();
  }
  private createElement(): Element {
    return hyperScript(`
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            
                <div class="modal-body">
                    Модал боди
                </div>
            
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
`);
  }

  public get Element(): Element {
    return this.component;
  }
}
