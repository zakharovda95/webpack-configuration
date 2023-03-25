import { HeaderComponent } from './Header.component';

describe('Header', () => {
  let header;

  beforeEach(() => {
    header = new HeaderComponent();
  });

  test('should be defined', () => {
    expect(header).toBeDefined();
  });

  test('should be instance of HeaderComponent', () => {
    expect(header).toBeInstanceOf(HeaderComponent);
  });

  test('should include all elements', () => {
    expect(header).toMatchSnapshot();
  });
});
