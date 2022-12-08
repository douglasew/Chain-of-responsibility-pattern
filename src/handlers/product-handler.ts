import { Inventory } from '../inventory'
import { BaseHandler } from './base-handler'

export class ProductHandler extends BaseHandler {
  handle(product: Inventory): Inventory {
    if (product.available >= 1) {
      console.log('Existe produto no estoque')
      product.approved = true
      return super.handle(product)
    } else {
      console.log('Não existe produto no estoque')
      product.approved = false
      return product
    }
  }
}
