import { NgModule }      from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { KegListComponent }  from './keg-list.component';
import { PatronKegListComponent }  from './patron-keg-list.component';
import { EditKegComponent } from './edit-keg.component';
import { NewKegComponent } from './new-keg.component';
import { EmptinessPipe } from './emptiness.pipe';
import { BeerStylesPipe } from './beerStyles.pipe';



@NgModule({
  imports: [ BrowserModule,
                  FormsModule ],
  declarations: [ AppComponent, KegListComponent, PatronKegListComponent, EditKegComponent, NewKegComponent, EmptinessPipe, BeerStylesPipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
