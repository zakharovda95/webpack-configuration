import { hyperScript } from '../../../helpers/lib/hyper-script.method';
import './Header.component.scss';
export default class HeaderComponent {
  private createElement(): Element {
    return hyperScript(`
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Simple TODO App!</a>
            <form class="form-inline bg-dark">
            <input class="form-control mr-sm-2" type="search" placeholder="Поиск таска">
            
            <div class="dropdown bg-dark position-relative">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Сортировка
                </button>
                
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <div class="dropdown-item">Сначала новые</div>
                    <div class="dropdown-item">Сначала старые</div>
                </div>
            </div>
        </form>
        
        <button id="add-btn" class="btn btn-warning my-2 my-sm-0" type="submit">Новый таск</button>
    </nav>
        `);
  }

  public get Element(): Element {
    return this.createElement();
  }
}
