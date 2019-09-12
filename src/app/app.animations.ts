import {animate, style, transition, trigger} from '@angular/animations';


export const scaleShowAnimation = trigger('scaleShowAnimation', [
  transition(':enter', [
    style({
      transform: 'scale(0.99)'
    }),
    animate('350ms ease-in-out', style({
      transform: 'scale(1)'
    }))
  ])
]);

export const fromDownShowAnimation = trigger('fromDownShowAnimation', [
  transition(':enter', [
    style({
      transform: 'translateY(5px)',
      opacity: 0
    }),
    animate('.3s', style({
      transform: 'translateY(0)',
      opacity: 1
    }))
  ])
]);

export const imgShowAnimation = trigger('imgShowAnimation', [
  transition(':enter', [
    style({
      filter: 'grayscale(1)'
    }),
    animate('2s', style({
      filter: 'grayscale(0)'
    }))
  ])
]);

export const img2ShowAnimation = trigger('img2ShowAnimation', [
  transition(':enter', [
    style({
      filter: 'sepia(100%)'
    }),
    animate('1s', style({
      filter: 'sepia(0)'
    }))
  ])
]);
