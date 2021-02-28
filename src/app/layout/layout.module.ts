import { NgModule } from '@angular/core';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from './core';
import { ApiUrl } from './shared/constant/apiurl.constant';
import { GenericService } from './shared/service/generic.service';



@NgModule({

    imports: [
        LayoutRoutingModule
    ],
    exports: [

    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent
    ],
    providers: [
        ApiUrl,
        GenericService
    ]
})

export class LayoutModule {

}