document.addEventListener('DOMContentLoaded', function(){
  (function renderPage() {
    var Articles = this.articles;
    var articles = new Articles();

    window.addEventListener("load", function(){
      articles.getArticles("", function(result){
        var articleElements = document.getElementsByClassName('article');
        for(var i = 0; i < articleElements.length; i++){
          articleElements[i].addEventListener('click', function(clickEvent){
            var buttonNumber = clickEvent.srcElement.classList[1];
            var apiUrl = result[buttonNumber].apiUrl;
            articles.getArticle(apiUrl);
        });
      }

      });
    });

    document.getElementById('headlines-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('headlines&');
    });

    document.getElementById('world-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('world&');
    });

    document.getElementById('economy-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('economy&');
    });

    document.getElementById('comment-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('comment&');
    });

    document.getElementById('sport-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('sport&');
    });

    document.getElementById('fashion-button').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      articles.getArticles('fashion&');
    });

    document.getElementsByClassName('article').addEventListener('click', function(clickEvent){
      clickEvent.preventDefault();
      console.log(clickEvent);
    });


  })();

});
