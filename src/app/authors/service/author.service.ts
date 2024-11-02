// src/app/authors/service/author.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from '../model/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  private baseUrl = 'http://localhost:8080/books-api/authors'; // Update as necessary

  constructor(private http: HttpClient) {}

  getAuthorById(id: number): Observable<Author> {
    return this.http.get<Author>(`${this.baseUrl}/${id}`);
  }
}
