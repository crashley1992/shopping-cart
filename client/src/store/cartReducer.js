import image1 from '../images/shrek.jpg';
import image2 from '../images/StarWars.jpg';
import image3 from '../images/up.jpg';
import image4 from '../images/wallie.jpg';
import image5 from '../images/zoolander.jpg';
import { addToCart } from '../components/addToCart/addToCart';


const initState = {
    items: [
        { id: 1 , title: "Shrek" , desc: "Dank movie", price: 5.99, img: image1 },
        { id: 2 , title: "Empire Strikes Back" , desc: "Best Star Wars movie. Fight me lol", price: 8.99, img: image2},
        { id: 3 , title: "Up" , desc: "If you didn't cry at least once...who are you?", price: 5.99, img: image3},
        { id: 4 , title: "Walli-e" , desc: "Poluation Bad!!", price: 6.99, img: image4},
        { id: 5 , title: "Zoolander" , desc: "It's hard being this good looking", price: 7.99, img: image5}
    ],
    addedItems: [],
    total: 0
}

const cartReducer= (state = initState, action) => {
   
    //INSIDE HOME COMPONENT
    if(action.type === addToCart){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    else{
        return state
    }
  }


export default cartReducer;