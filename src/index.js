import $ from 'jquery';

$(document).ready(() => {
  $.get( "https://wordwatch-api.herokuapp.com/api/v1/top_word", (data) => {
    let topWord = Object.keys(data.word)[0];
    let count = data.word.vincerulz;
    topWord = topWord.substr(0,1).toUpperCase()+ topWord.substr(1);
    $('.top-word h3').text(`Top word from Word Watch API: ${topWord} ${count}`);
  });
});
