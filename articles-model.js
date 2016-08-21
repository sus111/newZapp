var ArticlesView = this.articlesView;
var articlesView = new ArticlesView();

(function(exports){

  function Articles(exports){
    this.url = 'http://content.guardianapis.com';
    this.apiKey = 'api-key=:)';
  }

  Articles.prototype = {
      getArticles: function(topic, callback) {
        var search = '/search?q=';
        var articleTopic = topic || 'headlines&';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.url + search + articleTopic + this.apiKey);
        xhr.send(null);

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200){
            var response = JSON.parse(xhr.responseText);
            var result = response.response.results;
            articlesView.renderArticles(result);
            callback(result);
          }
        };
      },

      getArticle: function(apiUrl){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', apiUrl);
        xhr.send(null);

        // xhr.onreadystatechange = function() {
        //   if (xhr.readyState === 4 && xhr.status === 200){
        //     console.log(xhr.responseText);
        //   }
        // };
      }
  };
exports.articles = Articles;
})(this);
