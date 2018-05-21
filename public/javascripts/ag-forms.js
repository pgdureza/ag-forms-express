(function(config) {
  var host = (Shopify && Shopify.shop) || window.location.host;
  document.querySelectorAll("[data-agform]").forEach(function(object, index){
    var xhr = new XMLHttpRequest();
    var src = 'https://ag-forms-express.herokuapp.com/forms/html/';
    var id = object.dataset['agform'];
    xhr.open('GET', src + host + '/' + id);
    xhr.onload = function() {
        if (xhr.status === 200) {
          object.innerHTML = xhr.responseText
        }
        else {
          console.error('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
  })
}())