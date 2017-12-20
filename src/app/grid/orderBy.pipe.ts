import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false
})

export class OrderByPipe implements PipeTransform {
    previousPropertyName: string;
    transform<T>(value: T[], property: string): T[] {
        if (!value) return value;
        var sorted = value.sort((left, right) => {
            const leftProp = left[property];
            const rightProp = right[property];
            if (leftProp > rightProp) return 1;
            if (leftProp < rightProp) return -1;
            return 0;
        });
        if (this.previousPropertyName === property) {
            return sorted.reverse();
        } else {
            this.previousPropertyName = property;
            return sorted;
        }
    }
}