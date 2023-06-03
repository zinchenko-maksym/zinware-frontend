import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.mode';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get('http://localhost:8080/api/categories/');
  }
  getProductsFromCategory(id: number) {
    return this.http.get(
      `http://localhost:8080/api/categories/${id}/products/`
    );
  }
  getProductFromCategoryById(categoryId: number, productId: number) {
    return this.http.get(
      `http://localhost:8080/api/categories/${categoryId}/products/${productId}/`
    );
  }
  registerUser(user: User) {
    return this.http.post('http://localhost:8080/auth/register/', user);
  }
}
