import mixpanel from 'mixpanel-browser';
mixpanel.init('12340fffd25b463ce9ccffb23fec3b8f', {debug: true}); 
mixpanel.track('Sign up');
document.getElementById("button").addEventListener("click", function(){
    console.log("button was clicked");
    mixpanel.track("testing that button was clicked");
});