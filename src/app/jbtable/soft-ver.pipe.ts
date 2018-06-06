import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'softVer'
})
export class SoftVerPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (value.startsWith('GJ'))
      return '普通机';
    else if (value.startsWith('SM'))
      return '扫码机';

    return '未知类型';
  }

}
