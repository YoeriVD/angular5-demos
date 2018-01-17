import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    previousPropertyName: string;
    transform<T>(value: T[], property: string): T[] {
        if (!value) { return value; }
        const sorted = value.sort((left, right) => {
            const leftProp = left[property];
            const rightProp = right[property];
            if (leftProp > rightProp) { return 1; }
            if (leftProp < rightProp) { return -1; }
            return 0;
        });
        if (this.previousPropertyName === property) {
            this.previousPropertyName = null;
            return sorted.reverse();
        } else {
            this.previousPropertyName = property;
            return sorted;
        }
    }
}
