import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorComponent } from './author.component';

describe('Testing AuthorComponent', () => {
  let componentUnderTest: AuthorComponent;
  let testFixture: ComponentFixture<AuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorComponent]  // Include standalone component
    }).compileComponents();

    // Create component and assign to variables
    testFixture = TestBed.createComponent(AuthorComponent);
    componentUnderTest = testFixture.componentInstance;
    testFixture.detectChanges();  // Trigger initial data binding
  });

  it('should initialize AuthorComponent successfully', () => {
    expect(componentUnderTest).toBeDefined();  // Check if component exists
  });
});
