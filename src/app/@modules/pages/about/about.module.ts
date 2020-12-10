import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from '@modules/pages/about/about-routing.module';
import { AboutComponent } from '@modules/pages/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
