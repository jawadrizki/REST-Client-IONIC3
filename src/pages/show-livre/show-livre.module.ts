import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowLivrePage } from './show-livre';

@NgModule({
  declarations: [
    ShowLivrePage,
  ],
  imports: [
    IonicPageModule.forChild(ShowLivrePage),
  ],
})
export class ShowLivrePageModule {}
