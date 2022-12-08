import { Inventory } from '../inventory'
import { BaseHandler } from './base-handler'

export class EmailHandler extends BaseHandler {
  handle(product: Inventory): Inventory {
    console.log(
      'EMAIL: Obrigado! Seu pedido foi confirmado.\n Seu pedido será entregue nos próximos dias'
    )

    return product
  }
}
