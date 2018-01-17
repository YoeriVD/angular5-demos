import { NgModule } from '@angular/core';

import { OrderByPipe } from './orderBy.pipe';
import { SortableColumnDirective } from './sortableColumn.directive';
import { ColumnDirective, SelectableColumnDirective } from './selectable.directive';

@NgModule({
    imports: [],
    exports: [OrderByPipe, SortableColumnDirective, ColumnDirective, SelectableColumnDirective],
    declarations: [OrderByPipe, SortableColumnDirective, ColumnDirective, SelectableColumnDirective],
    providers: [],
})
export class GridModule { }
