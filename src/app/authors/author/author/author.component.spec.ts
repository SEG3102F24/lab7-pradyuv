import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorComponent } from './author.component';
import { AuthorsService } from '../../service/author.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Author } from '../../model/author';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;
  let authorsService: jasmine.SpyObj<AuthorsService>;

  beforeEach(async () => {
    const authorsServiceSpy = jasmine.createSpyObj('AuthorsService', ['getAuthorById']);
    await TestBed.configureTestingModule({
      declarations: [ AuthorComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [
        { provide: AuthorsService, useValue: authorsServiceSpy }
      ]
    }).compileComponents();

    authorsService = TestBed.inject(AuthorsService) as jasmine.SpyObj<AuthorsService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display author details when an author is found', () => {
    const dummyAuthor = new Author(1, 'John', 'Doe');
    authorsService.getAuthorById.and.returnValue(of(dummyAuthor));

    component.authorId = 1;
    component.onSubmit();

    expect(authorsService.getAuthorById).toHaveBeenCalledWith(1);
    expect(component.author).toEqual(dummyAuthor);
    expect(component.errorMessage).toBeNull();
  });
});

