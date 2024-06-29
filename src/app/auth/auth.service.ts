import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn: boolean;

  constructor() {
    this.isLoggedIn = !!localStorage.getItem('token'); // Initialize isLoggedIn based on token presence
  }

  logout(): void {
    localStorage.removeItem('token'); // Clear the token
    this.isLoggedIn = false; // Update isLoggedIn
  }

  getRole(): string | null {
    // Implement role retrieval logic if needed
    return null;
  }

  public getIsLoggedIn(): boolean {
    return this.isLoggedIn; // Return the current isLoggedIn status
  }

  public showStatus(): boolean {
    const token = localStorage.getItem('token');
    this.isLoggedIn = !!token; // Update isLoggedIn based on token presence
    return this.isLoggedIn;
  }
}

