VK.init(function() {
     // API initialization succeeded
     // Your code here
  }, function() {
     // API initialization failed
     // Can reload page here
}, '5.103');
VK.api("user.get", {"fields": "photo50, city", "v":"5.103"}, function (data) {

    console.log(data.response[o]); 

});
