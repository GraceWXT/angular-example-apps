import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Outgoing Req', req.method, req.url);
    return (
      next
        .handle(req)
        // In an interceptor, tap always receives an event regardless of the responseType config

        .pipe(
          tap((event) => {
            console.log('event', event);
            if (event.type === HttpEventType.Response) {
              console.log('Response body: ', event.body);
            }
          })
        )
    );
  }
}
