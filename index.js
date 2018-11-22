function sumItems(array) {
  
  if(!(Array.isArray(array))) {
    if(isNaN(array)){
      return 0;
    }
    return array;
  }

  if(array.length < 1) {
    return 0;    
  }
  if(array.length === 1) {
    if(Array.isArray(array[0])) {
      return sumItems(array[0]);
    }
    
    return array[0];    
  }
  return sumItems(array[0]) + sumItems(array.splice(1));
}
  
   
  
  
  
    

module.exports = sumItems;