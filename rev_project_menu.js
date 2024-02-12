const menu = {
    _meal: '',
    _price: 0,
    /**
  * @param {(arg0: string) => void} mealToCheck
  */
    set meal(mealToCheck) {
      if(typeof mealToCheck === "string") {
        this._meal = mealToCheck;
      }
    },
    /**
  * @param {(arg0: string) => void} priceToCheck
  */
    set price(priceToCheck) {
      if(typeof priceToCheck === "number" || priceToCheck > 0 ) {
        this._price = priceToCheck;
      }
    },
    get meal(){
      if(this._meal) {
        return this._meal;
      } else {
        console.log("Meal or price was not set correctly!")
      }
        
      
    },
    get price(){
      if(this._price) {
        return this._price
      } else {
        console.log("Meal or price was not set correctly!")
      }
    }
  }
  
  menu.meal = "Spaghetti";
  menu.price = 5
  
  const todaysSpecial = menu.meal;
  const price = menu.price;
  console.log(`Today’s Special is ${todaysSpecial} for $${price}!`)
  
  
  
  
  
  
  