var AGForm = function(source, id, container){
  this.load = function(){
    if (source && id && container) {
      var src = 'https://ag-forms-express.herokuapp.com/forms/html/';
      $.get(src + source + '/' + id, function(html){
        $(container).html(html);
      })
    } else {
      console.warn('AG forms initialized but missing params passed')
    }
  }
}