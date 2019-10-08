function getTimeForEducation(preferences,knowsProgramming,config){
  
  if(knowsProgramming===true){
    return 800/config[preferences];
    
    }else{
      
    return (800+500)/config[preferences];
    }
  
  
}



/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      return 0;
  };
  
