var UserProfile = (function() {
    var user_id="1";
    var user_name = "";
    var user_email="dan@gmail.com";
    var user_type='user';
    var activated="yes";
  
   
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
  
    var setActivated = function(value) {
        activated = value;     
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
      
      getUserType:setUserType,
      setUserType:setUserType,

      getActivated:getActivated,
      setActivated:setActivated
    }
  
  })();
  
  export default UserProfile;