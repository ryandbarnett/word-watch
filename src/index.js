import $ from 'jquery';

$(document).ready(() => {

  $.get( "https://wordwatch-api.herokuapp.com/api/v1/top_word", (data) => {
    const topWord = Object.keys(data.word)[0];
    const count = data.word[topWord];
    updateTopWord(topWord, count);
  });


  $('.text-submission button').click(function(e) {
    const words = $(e.target).prev().val();
    breakDown(words);
  });

});

const updateTopWord = (word, count) => {
  $('.top-word h3').text(`Top word from Word Watch API: ${capitalize(word)} ${count}`);
}

const capitalize = (word) => {
  return word.substr(0,1).toUpperCase()+ word.substr(1);
}

const breakDown = (words) => {
  words.split(' ').forEach(word => postWord(word));
}

const postWord = (word) => {
  $.post("https://wordwatch-api.herokuapp.com/api/v1/words", { word: { value: word } });
}