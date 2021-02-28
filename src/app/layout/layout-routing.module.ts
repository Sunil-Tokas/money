import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const route: Routes = [
    {
        path: '', component: LayoutComponent,
        children : [
            { path: '' , redirectTo: '/budget', pathMatch: 'full'},
            { path: 'budget' , loadChildren: './budget/budget.module#BudgetModule' },
            { path: 'acount' , loadChildren: './acounts/acounts.module#AcountsModule' }
        ]
    }
]


@NgModule({

    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ],
    declarations: [

    ]
})

export class LayoutRoutingModule {

}