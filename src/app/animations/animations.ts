import { animation, style, animate } from '@angular/animations';

export const transitionAnimation = animation([
      style({opacity: 0}),
      animate(900)
]);