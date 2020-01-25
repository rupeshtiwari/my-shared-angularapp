import {Injectable} from '@angular/core';

@Injectable({providedIn:'root'})
export class ProductService {
    get allProducts() {
        return ["prod1", "prod2"]
    }
}