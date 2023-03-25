import { ModalComponent } from './Modal.component';

describe('Modal', () => {
  let modal;

  beforeEach(() => {
    modal = new ModalComponent();
  });

  test('should be defined', () => {
    expect(modal).toBeDefined();
  });

  test('should be instance of HeaderComponent', () => {
    expect(modal).toBeInstanceOf(ModalComponent);
  });

  test('should include all elements', () => {
    expect(modal).toMatchSnapshot();
  });
});
