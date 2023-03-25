import { IComponent } from '../../helpers/interfaces/app.interface';
import { hyperScript } from '../../helpers/lib/hyper-script.method';

export class ModalComponent implements IComponent {
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
                    <h5 class="modal-title" id="exampleModalLongTitle">Новый таск</h5>
                </div>
                <div class="modal-body">
                  
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
