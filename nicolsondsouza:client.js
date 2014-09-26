// Reload package
modifyReload();
function modifyReload(){
    var reloading = false;                                                                       
Package.reload.Reload._reload = function () {                                                               
    if (reloading)                                                                             
        return;                                                                                  
    reloading = true;                                                                          
                                                                                             
    var tryReload = function () {};                                                                                     
                                                                                             
  	tryReload();                                                                               
};
}
// Reload ends