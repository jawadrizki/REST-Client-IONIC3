import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddLivrePage } from './add-livre';

@NgModule({
  declarations: [
    AddLivrePage,
  ],
  imports: [
    IonicPageModule.forChild(AddLivrePage),
  ],
})
export class AddLivrePageModule {}
