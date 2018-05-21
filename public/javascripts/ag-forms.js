(function(config) {
  var host = (Shopify && Shopify.shop) || window.location.host;
  $("[data-agform]").each(function(){
    $el = $(this);
    var id = $el.data('agform');
    var src = 'https://ag-forms-express.herokuapp.com/forms/html/';
    $.get(src + host + '/' + id, function(html){
      $el.html(html);
    })
  })
}())