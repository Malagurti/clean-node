export const totalOrderedItens = 3
export const invoiceCpf = "03816446183"
export const total = 200.3
export const discount = 20
export const discountToken = true

export function CreateOrder (totalOrderedItens:number, invoiceCpf:String, total:number, discount:number){
    if (discountToken){
        const totalOrderPrice = (total-(((total)) * discount/100))
        const order = {
            "finalPrice": totalOrderPrice,
            "invoiceCpf": invoiceCpf,
            "totalOrderedItens": totalOrderedItens,
        }
        const savedOrder = order
        console.log(savedOrder)
    }
    else{
        console.log("Erro no envio da Ordem")
    }
}
