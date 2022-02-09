import { Injectable } from "@angular/core";
import { Product } from "./products";

/* @Injectable definisce un servizio che è importabile dai componenti nei costructor */
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.items.push(product)
    console.log("[CartService] - Aggiunto al carrello")
  }

  removeToCart() {
    console.log("[CartService] - Rimosso dal carrello")
  }

  getAllItems() {
    console.log("[CartService] - get items")
    return this.items
  }
}
