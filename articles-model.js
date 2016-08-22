var ArticlesView = this.articlesView;
var articlesView = new ArticlesView();
var ArticleView = this.articleView;
var articleView = new ArticleView();

(function(exports){

  function Articles(exports){
    this.url = 'http://content.guardianapis.com';
    this.apiKey = 'api-key=53d56d39-fc33-4a33-bc74-747e5c8b266c';
    this.aylienUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
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
            console.log(response);
            articlesView.renderArticles(result);
            callback(result);
          }
        };
      },

      getArticle: function(webUrl){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.aylienUrl + webUrl);
        xhr.send(null);

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200){
            articleView.renderArticle(xhr.responseText);
          }
        };
      }
  };
exports.articles = Articles;
})(this);
