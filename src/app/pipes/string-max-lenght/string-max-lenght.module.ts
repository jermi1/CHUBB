import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringMaxLenghtPipe } from './string-max-lenght.pipe';


@NgModule({
  declarations: [StringMaxLenghtPipe],
  imports: [
    CommonModule
  ],
  exports: [StringMaxLenghtPipe]
})
export class StringMaxLenghtModule {
}
