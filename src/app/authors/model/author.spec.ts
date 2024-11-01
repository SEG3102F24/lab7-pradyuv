import { Author } from './author';

describe('Author', () => {
  it('should create an instance', () => {
    expect(new Author(1, 'John', 'Doe')).toBeTruthy();
  });
});
