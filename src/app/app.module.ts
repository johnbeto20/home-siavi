import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { MatChipsModule, MatListModule, MatSidenavModule, MatRadioModule,  MatExpansionModule, MatNativeDateModule, MatDatepickerModule,  MatMenuModule, MatCheckboxModule, MatDialogModule,  MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent
  ],
  imports: [
    
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatChipsModule,
    MatListModule,
    MatSidenavModule,
    MatRadioModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDatepickerModule, 
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
