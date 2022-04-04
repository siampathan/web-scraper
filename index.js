const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 4000;

const app = express();
const url = "https://en.wikipedia.org/wiki/COVID-19_pandemic_in_Bangladesh";
axios(url)
.then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
    const list = [];

    $(".mw-headline",html).each(function () {
        const title = $(this).text();
        //const url = $(this).find("a").attr("href"); //this line for link find
        list.push({
            title ,
            //url
        });
    });
    console.log(list);
});

app.listen(PORT, () => console.log(`Server listen at ${PORT}`));