import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TriesComponent } from './tries/tries.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { TopComponent } from './top/top.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TriesComponent,
    PanelComponent,
    ProgressComponent,
    TopComponent,
  ],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
