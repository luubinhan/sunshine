window.fbAsyncInit = function() {
  FB.init({
    appId            : '419885841755075',
    autoLogAppEvents : true,
    xfbml            : true,
    version          : 'v3.0',
    locale : 'vi_VN'
  });
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));
