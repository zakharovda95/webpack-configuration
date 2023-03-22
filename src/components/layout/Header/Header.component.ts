import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import './Header.component.scss';
export class HeaderComponent {
  private readonly header: Element;

  constructor() {
    this.header = this.createElement();
  }

  protected createElement(): Element {
    return hyperScript(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Simple TODO App!</a>
            <form class="form-inline bg-dark">
            <input id="search-input" class="form-control mr-sm-2" type="search" placeholder="Поиск таска">
            
            <div id="dropdown" class="dropdown bg-dark position-relative">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Сортировка
                </button>
                
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item" data-value="newer">Сначала новые</div>
                    <div class="dropdown-item" data-value="older">Сначала старые</div>
                </div>
            </div>
        </form>
        
        <button id="add-btn" class="btn btn-warning my-2 my-sm-0" type="button" data-bs-target="#exampleModalCenter" data-bs-toggle="modal">Новый таск</button>
    </nav>
        `);
  }

  public get Element(): Element {
    return this.header;
  }
}
