import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
    transform(value: any[], property : string): any {
        return value && value.sort((left, right) => left[property] - right[property])
    }
}