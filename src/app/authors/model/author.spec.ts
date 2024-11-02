import { Author } from './author';

describe('Author', () => {
  it('should create an instance', () => {
    const mockAuthor = new Author(1, 'John', 'Doe'); // made mock values for id, firstName, and lastName
    expect(mockAuthor).toBeTruthy();
  });
});
