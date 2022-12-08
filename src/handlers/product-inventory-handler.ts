import { Inventory } from '../inventory'
import { BaseHandler } from './base-handler'

export class ProductInventoryHandler extends BaseHandler {
  handle(product: Inventory): Inventory {
    product.available -= 1
    console.log(
      'Estoque: Baixa no produto, produtos restantes no estoque:',
      product.available
    )

    return super.handle(product)
  }
}
