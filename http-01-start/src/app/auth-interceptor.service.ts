import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Add conditions to only intercept certain requests
    // e.g. if (req.url...)
    console.log('Request being intercepted...');

    // req is an immutable object
    const modifiedReq = req.clone({
      // url: ''
      headers: req.headers.append('auth-key', 'value')
      // params: req.params.append('key', 'value')
    });

    // To continue sending the request
    return next.handle(modifiedReq);
  }
}
