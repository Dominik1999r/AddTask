import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddListComponent } from './add-list/add-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { DoneComponent } from './done/done.component';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddListComponent,
    ShowListComponent,
    DoneComponent,
    CheckedDirective,
    DateDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
