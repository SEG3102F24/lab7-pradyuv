import { TestBed } from '@angular/core/testing';
import { AuthorsService } from './author.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Author } from '../model/author';

describe('AuthorsService', () => {
  let service: AuthorsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ AuthorsService ]
    });
    service = TestBed.inject(AuthorsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch an author by ID', () => {
    const dummyAuthor: Author = { id: 1, firstName: 'John', lastName: 'Doe' };

    service.getAuthorById(1).subscribe(author => {
      expect(author).toEqual(dummyAuthor);
    });

    const req = httpMock.expectOne('http://localhost:8080/books-api/authors/1');
    expect(req.request.method).toBe('GET');
    req.flush(dummyAuthor);
  });

  afterEach(() => {
    httpMock.verify();
  });
});
