import {Injectable} from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {AppCargandoService} from '../appBase/cargando/app.cargando.service';
import errorlab from './httpconfig_labels.json';
import {environment} from '../../environments/environment';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private cargandoService: AppCargandoService) {
    }

    lbl = errorlab;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = `${environment.apiUrl}`;
        request = request.clone({
            setHeaders: {
                Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjAxMzE1MDIzLCJleHAiOjE2MDEzMTUxNDN9.eT43p4PnkTronNX2ogKVzqY_l74F69hV6wasCxQDFd7xnWAPt90joG8ftNuxvuGkv-JlH4SBcD6Hsr-OrrjLOA'
            }
        });
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if ((error.status === 401) || (error.status === 403)) {

                } else {
                }
                this.cargandoService.detenCargando();
                return throwError(error);
            }));
    }
}
