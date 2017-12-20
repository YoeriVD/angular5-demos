import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false
})

export class OrderByPipe implements PipeTransform {
    transform<T>(value: T[], property: string, reverse = false): T[] {
        console.log("sorting", property, reverse)
        if (!value) return value;
        var sorted = value.sort((left, right) => {
            const leftProp = left[property];
            const rightProp = right[property];
            if (leftProp > rightProp) return 1;
            if (leftProp < rightProp) return -1;
            return 0;
        });
        if (reverse) {
            return sorted.reverse();
        } else {
            return sorted;
        }
    }
}