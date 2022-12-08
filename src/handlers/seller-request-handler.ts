import { Inventory } from '../inventory'
import { BaseHandler } from './base-handler'

export class SellerRequestHandler extends BaseHandler {
  handle(product: Inventory): Inventory {
    console.log('Perdido ao vendedor: Pedido de compra enviado')

    return super.handle(product)
  }
}
