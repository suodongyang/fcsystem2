import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { modalRouters } from './index.route';
import { FcadModule, FcbasicModule, FclayoutModule, FcmodalModule, FcnavModule, FcprogressModule, FclistModule, FctlbModule } from 'fccomponent2';
import { ModalcardComponent } from './modalcard/modalcard.component';
import { ModaldangerComponent } from './modaldanger/modaldanger.component';
import { ModalinfoComponent } from './modalinfo/modalinfo.component';
import { ModallistComponent } from './modallist/modallist.component';
import { ModalsuccessComponent } from './modalsuccess/modalsuccess.component';
import { ModaltreelistComponent } from './modaltreelist/modaltreelist.component';
import { ModalwarnComponent } from './modalwarn/modalwarn.component';
import { ModalconfirmComponent } from './modalconfirm/modalconfirm.component';
import { ModaltemplateComponent } from './dialog/modaltemplate.component';
import { ModalinputComponent } from './modalinput/modalinput.component';
@NgModule({
  entryComponents: [
    ModaltemplateComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(modalRouters),
    FcbasicModule,
    FclayoutModule,
    FcadModule,
    FcnavModule,
    FclistModule,
    FcmodalModule
  ],
  exports: [],
  declarations: [
    ModalcardComponent,
    ModalconfirmComponent,
    ModaldangerComponent,
    ModalinfoComponent,
    ModallistComponent,
    ModalsuccessComponent,
    ModaltreelistComponent,
    ModalwarnComponent,
    ModaltemplateComponent,
    ModalinputComponent
  ],
  providers: [
  ]
})
export class ModalModule { }
