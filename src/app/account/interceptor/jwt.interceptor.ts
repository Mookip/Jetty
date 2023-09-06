import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authservice: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      }
    });
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          console.log('JWT invalid')
        }
        const error = err.error.message || err.statusText;
        return throwError(error);
      })
    );
  }
}
