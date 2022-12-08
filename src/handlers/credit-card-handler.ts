import { Inventory } from '../inventory'
import { BaseHandler } from './base-handler'

export class CreditCardHandler extends BaseHandler {
  handle(product: Inventory): Inventory {
    console.log('Cartão de credito: A transação foi aprovada')

    return super.handle(product)
  }
}
