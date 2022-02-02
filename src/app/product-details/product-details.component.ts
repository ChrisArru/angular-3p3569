import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product, products } from "../products"; /* Importo sia l'interfaccia Product che l'array stesso products */

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent implements OnInit {
  /* Definisco la propreità products che è di tipo Product oppure undefined */
  product: Product | undefined;

  /* Dico al construttore che riceverà un oggetto di tipo ActivatedRoute che si chiama route */
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.route.snapshot permette di accedere alla route attualmente attiva per prelevare le informazioni necessarie.
    // Contiene il parametro paramMap che è un oggetto contenente tutti i parametri passati alla route inserendo : al path.
    // Nel nostro caso dentro app.module.ts il path è /products/:productId quindi avremo il parametro productId dentro l'oggetto
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    // Una volta ottenuto l'id è facile trovare l'elemento nell'array
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}
