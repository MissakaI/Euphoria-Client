var UserProfile = (function() {
    var user_id="";
    var user_name = "";
    var user_email="";
  
    var getId = function() {
      return user_id;    
    };
    var getName = function() {
      return user_name;  
    };
    var getEmail = function() {
      return user_email;  
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
  
    return {
      getId: getId,
      setId: setId,
      getName: getName,
      setName: setName,
      getEmail: getName,
      setEmail: setName
    }
  
  })();
  
  export default UserProfile;