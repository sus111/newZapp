(function(exports) {

  function ArticleView(){

  }

  ArticleView.prototype = {
    renderArticle: function(results){
      console.log(results);
      var arr = JSON.parse(results).sentences;
      var content = "";
      for(i = 0; i < arr.length; i++) {
        content += '<p>' + arr[i] + '</p>';
      }
      document.getElementById('article').innerHTML = content;
    }
  };

exports.articleView = ArticleView;
})(this);
