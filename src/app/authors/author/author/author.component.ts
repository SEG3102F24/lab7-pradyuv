// src/app/authors/author/author.component.ts
import { Component } from '@angular/core';
import { AuthorsService } from '../../service/author.service';
import { Author } from '../../model/author';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-author',
  standalone: true, // Marks this as a standalone component
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  imports: [FormsModule] // Add FormsModule here for ngModel support
})
export class AuthorComponent {
  authorId: number | null = null;
  author: Author | null = null;
  errorMessage: string | null = null;

  constructor(private authorsService: AuthorsService) {}

  onSubmit(): void {
    if (this.authorId !== null) {
      this.authorsService.getAuthorById(this.authorId).subscribe({
        next: (data: Author) => {
          this.author = data;
          this.errorMessage = null;
        },
        error: () => {
          this.errorMessage = 'Author not found.';
          this.author = null;
        }
      });
    }
  }
}

