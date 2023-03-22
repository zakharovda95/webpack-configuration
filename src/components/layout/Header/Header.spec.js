import HeaderComponent from './Header.component';

describe('Header', () => {
  let header;
  beforeEach(() => {
    header = new HeaderComponent();
  });

  test('should be defined and should be instance of HeaderComponent', () => {
    expect(header).toBeDefined();
    expect(header).toBeInstanceOf(HeaderComponent);
  });
});
