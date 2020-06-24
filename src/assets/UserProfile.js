var UserProfile = (function() {
    var user_id="1";
    var user_name = "";
    var user_email="dan@gmail.com";
    var user_type="formal";
    var activated="yes";
    var pic="me.jpeg";
  
   
    var getActivated = function() {
      return activated;  
    };
    var getId = function() {
      return user_id;    
    };
    var getName = function() {
      return user_name;  
    };
    var getEmail = function() {
      return user_email;  
    };
    var getUserType = function() {
      return user_type;  
    };
    var getPic = function() {
      return pic;  
    };
  
    var setActivated = function(value) {
        activated = value;     
    };
    var setPic = function(value) {
        pic = value;     
    };
    var setId = function(id) {
        user_id = id;     
    };
  
    var setName = function(name) {
      user_name = name;     
    };
  
    var setEmail = function(email) {
        user_email = email;     
    };
  
    var setUserType = function(type) {
        user_type = type;     
    };
  
    return {
      getId: getId,
      setId: setId,

      getName: getName,
      setName: setName,

      getEmail: getName,
      setEmail: setName,
      
      getUserType:getUserType,
      setUserType:setUserType,

      getActivated:getActivated,
      setActivated:setActivated,

      getPic:getPic,
      setPic:setPic

    }
  
  })();
  
  export default UserProfile;