import { Component, OnDestroy, inject } from '@angular/core';
import { Author } from '../model/author';
import { Subscription } from 'rxjs';
import { AuthorsService } from '../service/author.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnDestroy {
  authorDetails: Author | null = null;
  private subscriptions = new Subscription(); // Manages multiple subscriptions
  private authorServiceInstance = inject(AuthorsService);

  // Method to search for an author by ID
  onSearch(id: string): void {
    const authorId = Number(id);
    
    if (isNaN(authorId)) {
      // Handle invalid ID input
      this.authorDetails = null;
      return;
    }
    
    const subscription = this.authorServiceInstance.getAuthorById(authorId).subscribe({
      next: (authorData: Author) => {
        this.authorDetails = authorData;
      },
      error: () => {
        this.authorDetails = null; // Reset if author not found
      }
    });
    
    // Add this subscription to the manager to handle multiple requests
    this.subscriptions.add(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe(); // Unsubscribe from all subscriptions
  }
}
