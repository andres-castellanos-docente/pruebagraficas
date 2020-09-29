import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {AppMenuComponent, AppSubMenuComponent} from './appBase/menu/app.menu.component';
import {AppTopBarComponent} from './appBase/topbar/app.topbar.component';
import {AppFooterComponent} from './appBase/footer/app.footer.component';
import {DatePipe, HashLocationStrategy, LocationStrategy} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AppprincComponent} from './appBase/princ/appprinc.component';
import {AppCargandoComponent} from './appBase/cargando/app.cargando.component';
import {AppCargandoService} from './appBase/cargando/app.cargando.service';
import {BlankComponent} from './formas/blank';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatStepperModule } from '@angular/material/stepper';
import {DataViewModule} from 'primeng/dataview';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {environment} from '../environments/environment';
import {TranslateLoader, TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {AppSidebarComponent} from './appBase/sidebar/app.sidebar.component';
import {OnlyStringsDirective} from './directives/onlyStrings';
import {AuthGuardHome} from './guards';
import {ClockComponent} from './appBase/clock/clock.component';
import {XsegundoService} from './appBase/clock/xsegundo.service';
import {HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';
import {ChartModule} from 'primeng/chart';
import {BarrasComponent} from './formas/barras';
import {PiechartComponent} from './formas/piechart';
import {LinearComponent} from './formas/linear';


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AppRoutes,
        HttpClientModule,
        ScrollPanelModule,
        DialogModule,
        FormsModule,
        ToastModule,
        MessagesModule,
        MessageModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatDividerModule,
        MatRadioModule,
        MatCheckboxModule,
        InputTextModule,
        DataViewModule,
        ChartModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })

    ],
    declarations: [
        // Directivas
        OnlyStringsDirective,
        // Componentes
        AppComponent,
        AppCargandoComponent,
        AppprincComponent,
        AppSidebarComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopBarComponent,
        AppFooterComponent,
        BarrasComponent,
        PiechartComponent,
        LinearComponent,
        BlankComponent,
        ClockComponent
    ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpConfigInterceptor,
            multi: true
        },
        {provide: MAT_DATE_LOCALE, useValue: navigator.language},
        MessageService, XsegundoService, AppCargandoService, AuthGuardHome, DatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(
        http,
        `${environment.i18nPrefix}/assets/i18n/`,
        '.json'
    );
}

