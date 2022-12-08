import { Inventory } from '../inventory'

export abstract class BaseHandler {
  protected nextHandler: BaseHandler | null = null

  setNextHandler(handler: BaseHandler): BaseHandler {
    this.nextHandler = handler
    return handler
  }

  handle(product: Inventory): Inventory {
    if (this.nextHandler) return this.nextHandler.handle(product)
    return product
  }
}
