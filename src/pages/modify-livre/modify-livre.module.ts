import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifyLivrePage } from './modify-livre';

@NgModule({
  declarations: [
    ModifyLivrePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifyLivrePage),
  ],
})
export class ModifyLivrePageModule {}
