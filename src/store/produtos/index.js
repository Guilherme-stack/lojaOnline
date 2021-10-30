 
const estadoInicial = []

 
 export default function reducer(state = estadoInicial,action){
     
    switch (action.type) {
        case 'ADD_CARRINHO':
            return [...state, action.item] 
            break;
        case 'ADD_MAIS_UM':   
            console.log(action.item.indice)
            return state.map((item,index)=>  action.item.indice === index? {...item,quantidadeProduto: item.quantidadeProduto+1 } : item )
            break;
        case 'ADD_MENOS_UM':   
        
            return state.map((item,index)=>   action.item.indice === index? {...item,quantidadeProduto: item.quantidadeProduto-1 } : item )
            break;
        case 'EXCLUIR_ITEM': 
       
            return   state.filter((item,index)=>  action.item.idProduto != item.idProduto )
             
            break;
    
        default:
            return state
            break;
    }
}