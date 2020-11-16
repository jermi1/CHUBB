import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StringMaxLenght'
})
export class StringMaxLenghtPipe implements PipeTransform {

  transform(value: string): any {

    var n = value.length;
    if(n > 30) {
      return '<span title="'+value+'">' + value.substring(0,30) + '...</span>';
    }

    return value;
    
  }

}
