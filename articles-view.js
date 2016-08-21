(function(exports) {

  function ArticlesView(){

  }

  ArticlesView.prototype = {
    renderArticles: function(results){
      var arr = results;
      console.log(arr);
      var content = '<ul>';
      for(i = 0; i < arr.length; i++) {
        content += '<li><a target="_blank" class="article ' + i + '" href="' + arr[i].webUrl + '">' + arr[i].webTitle + '</a></li>';
      }
      content += '</ul>';
      document.getElementById('articles').innerHTML = content;
    }
  };

exports.articlesView = ArticlesView;
})(this);
