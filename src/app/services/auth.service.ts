import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly apiUrl = 'https://your-api-url.com';

    constructor(private http: HttpClient) { }

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
            .pipe(
                tap(response => {
                    if (response && response.token) {
                        localStorage.setItem('jwt_token', response.token);
                    }
                })
            );
    }
    logout(): void {
        localStorage.removeItem('jwt_token');
        // Additional cleanup actions can be performed here if needed
    }
}