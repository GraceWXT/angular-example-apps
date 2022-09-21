import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
// By default, pure: true only recalculates when the pipe args change
// When pure: false, also recalculates when value (data) changes
export class FilterPipe implements PipeTransform {
  transform(value: object[], filterString: string, propName): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
