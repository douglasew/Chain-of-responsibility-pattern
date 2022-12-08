import { CreditCardHandler } from './handlers/credit-card-handler'
import { EmailHandler } from './handlers/email-handler'
import { ProductHandler } from './handlers/product-handler'
import { ProductInventoryHandler } from './handlers/product-inventory-handler'
import { SellerRequestHandler } from './handlers/seller-request-handler'
import { Inventory } from './inventory'

//Produtos no estoque
const inventory = new Inventory(2)

const product = new ProductHandler()
product
  .setNextHandler(new CreditCardHandler())
  .setNextHandler(new ProductInventoryHandler())
  .setNextHandler(new SellerRequestHandler())
  .setNextHandler(new EmailHandler())

product.handle(inventory)
console.log(inventory)
