import { Pipe, PipeTransform } from '@angular/core';


const URL= 'https://firebasestorage.googleapis.com/v0/b/tulcan-be024.appspot.com/o/'
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string []): string {

    if (!img){
      return;
    }
    const imgUrl = `${ URL }/${img}`;
    console.log('URL',imgUrl);
    
    return imgUrl;
  }

}
