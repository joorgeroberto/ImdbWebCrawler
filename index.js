var request = require("request");
var cheerio = require("cheerio");

request("http://www.imdb.com/chart/moviemeter", function (err, res, body) {
  if (err) console.log("Erro: " + err);

  var $ = cheerio.load(body);

  $(".lister-list tr").each(function () {
    const title = $(this).find(".titleColumn a").text().trim();
    let rating = $(this).find(".imdbRating strong").text().trim();

    if (!rating?.length) rating = "X.X";

    console.log(`${title} - ${rating}`);
  });
});
