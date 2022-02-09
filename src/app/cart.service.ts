import { Injectable } from "@angular/core";
import { Product } from "./products";
import { HttpClient } from '@angular/common/http';

/* @Injectable definisce un servizio che è importabile dai componenti nei costructor */
@Injectable({
  providedIn: "root",
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
