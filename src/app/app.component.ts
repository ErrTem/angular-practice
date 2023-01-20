import { ModalService } from './services/modal.service';
import { Observable, tap } from 'rxjs';
import { ProductsService } from './services/products.service';
import { IProduct } from './modesl/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'here we go again'
  // products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term =''

  constructor(
    private productsService: ProductsService,
    public modalService: ModalService
    ) {

  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(()=> this.loading = false)
    )
    // this.productsService.getAll().subscribe(products => {
    //   this.products = products
    //   this.loading = false
    // })
  }
}
