// variables
//neel
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
//harsh
const stockBtn = document.getElementById("stock");
const healthBtn = document.getElementById("health");
// const lifestyleBtn = document.getElementById("lifestyle");
const cryptoBtn = document.getElementById("cryptocurrency");
// const weatherBtn = document.getElementById("weather");
// const searchBtn = document.getElementById("searchBtn");

// const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis
// const API_KEY = "9411efe63ff6427ca1ca36cc6a6adfdc";//neel goyani
const API_KEY = "2b9d15c042fd45dc9e26e2a21dfc0fc8"; //harsh dudhat
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";
const STOCK_NEWS =
  "https://newsapi.org/v2/everything?domains=wsj.com&pageSize=8&apiKey=";
const HEALTH_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=";
// const LIFESTYLE_NEWS =
//   "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=";
const CRYPTOCURRENCY_NEWS =
  "https://newsapi.org/v2/everything?q=bitcoin&apiKey=";
// const WEATHER_NEWS =
// "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";


function displayNews() {
  newsdetails.innerHTML = "";

  // if(newsDataArr.length == 0) {
  //     newsdetails.innerHTML = "<h5>No data found.</h5>"
  //     return;
  // }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 m-2 p-2 card card-body";
  
    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src =
      news.urlToImage ||
      "https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg";

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}

window.onload = function () {
  newsType.innerHTML = "<h4>Headlines</h4>";
  fetchHeadlines();
};

generalBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General news</h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business</h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports</h4>";
  fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Entertainment</h4>";
  fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology</h4>";
  fetchTechnologyNews();
});

stockBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Stocks</h4>";
  fetchStockNews();
});

healthBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Health</h4>";
  fetchHealthNews();
});

// lifestyleBtn.addEventListener("click", function () {
//   newsType.innerHTML = "<h4>LifeStyle</h4>";
//   fetchLifeStyleNews();
// });

cryptoBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>CryptoCurrency</h4>";
  fetchCryptoNews();
});

// weatherBtn.addEventListener("click", function () {
//   newsType.innerHTML = "<h4>Weather</h4>";
//   fetchWeatherNews();
// });

// searchBtn.addEventListener("click", function () {
//   newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
//   fetchQueryNews();
// });

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchGeneralNews = async () => {   //async has been a keyword for syncing the data
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchStockNews = async () => {
  const response = await fetch(STOCK_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchHealthNews = async () => {
  const response = await fetch(HEALTH_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

// const fetchLifeStyleNews = async () => {
//   const response = await fetch(LIFESTYLE_NEWS + API_KEY);
//   newsDataArr = [];
//   if (response.status >= 200 && response.status < 300) {
//     const myJson = await response.json();
//     newsDataArr = myJson.articles;
//   } else {
//     // handle errors
//     console.log(response.status, response.statusText);
//     newsdetails.innerHTML = "<h5>No data found.</h5>";
//     return;
//   }

//   displayNews();
// };


const fetchCryptoNews = async () => {
  const response = await fetch(CRYPTOCURRENCY_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

// const fetchWeatherNews = async () => {
//   const response = await fetch(WEATHER_NEWS + API_KEY);
//   newsDataArr = [];
//   if (response.status >= 200 && response.status < 300) {
//     const myJson = await response.json();
//     newsDataArr = myJson.articles;
//   } else {
//     // handle errors
//     console.log(response.status, response.statusText);
//     newsdetails.innerHTML = "<h5>No data found.</h5>";
//     return;
//   }

//   displayNews();
// };

// const fetchQueryNews = async () => {
//   if (newsQuery.value == null) return;

//   const response = await fetch(
//     SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
//   );
//   newsDataArr = [];
//   if (response.status >= 200 && response.status < 300) {
//     const myJson = await response.json();
//     newsDataArr = myJson.articles;
//   } else {
//     //error handle
//     console.log(response.status, response.statusText);
//     newsdetails.innerHTML = "<h5>No data found.</h5>";
//     return;
//   }

//   displayNews();
// };


