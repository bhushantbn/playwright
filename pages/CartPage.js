export class CartPage{

    constructor(page) {
      this.page=page
      this.product='//tbody[@id="tbodyid"]/tr/td[2]'
     

    }
    async checkProductInCart(productName){
        const productInCart=await this.page.$$(this.product)
        for(const product of productInCart){
            console.log(await product.textContent())
            if(productName=== await product.textContent()){
                return true;
                break;
            }
        }
    }
}