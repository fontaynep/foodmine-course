import { ApplicationConfig, NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { provideServerRendering } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { serverRoutes } from './app.routes.server';

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [provideServerRouting(serverRoutes),
    provideServerRendering()
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
