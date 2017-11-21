import { NgModule } from '@angular/core';

import { OrderByPipe } from './orderBy.pipe';
import { SortableColumnDirective } from './sortableColumn.directive';

@NgModule({
    imports: [],
    exports: [OrderByPipe, SortableColumnDirective],
    declarations: [OrderByPipe, SortableColumnDirective],
    providers: [],
})
export class GridModule { }
