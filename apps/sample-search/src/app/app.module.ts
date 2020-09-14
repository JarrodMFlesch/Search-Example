import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SearhbarComponent } from './searhbar/searhbar.component';
import { TileGridComponent } from './tile-grid/tile-grid.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearhbarComponent,
    TileGridComponent,
    LoadMoreComponent,
    ImageViewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
