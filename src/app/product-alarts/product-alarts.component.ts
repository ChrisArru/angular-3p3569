import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

/* @Component indentifica che è un componente */
@Component({
  selector: 'app-product-alarts',
  templateUrl: './product-alarts.component.html',
  styleUrls: ['./product-alarts.component.css'],
})
export class ProductAlartsComponent implements OnInit {
  /* Per passare dati da un componente padre al componente figlio bisogna usare Input() 
  definire la variabile e il tipo. Se il tipo è custom bisogna importarlo */
  @Input() product!: Product;

  /* Per passare un evento al componente padre bisogna usare il decorator Output() dichiarando 
  una variabile da usare per effettuare l'emit dell'evento */
  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  notifyMe(): void {
    alert('Notify me!');
  }
}
