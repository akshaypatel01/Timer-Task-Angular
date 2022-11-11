import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customtime'
})
export class CustomtimePipe implements PipeTransform {

  transform(value: number): string {

    // let hh = Math.floor(value / 3600)
    // let mm = Math.floor((value - (hh / 3600)) / 60)
    // let ss =Math.floor(value - (hh / 3600) - (mm / 60))%60
    let ss  = Math.floor(value % 60)
    let mm =  Math.floor((value-ss)/60)%60
    let hh = Math.floor((value-ss-mm)/3600)%60

    const hour = hh < 10 ? "0" + hh : hh
    const mint = mm < 10 ? "0" + mm : mm
    const secnd = ss < 10 ? "0" + ss : ss
    return hour + ":" + mint + ":" + secnd;
  }

}
