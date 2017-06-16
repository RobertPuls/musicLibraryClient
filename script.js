const apiUrl = 'https://music-backend.herokuapp.com/users';

$(document).ready(function(){

  $.get(apiUrl).then(function(data){
    var source   = $("#users").html();
    var template = Handlebars.compile(source);
    for(var i=0; i < data.length; i++){
      var user_img = data[i].user_img;
      var context = {
        "user_img": user_img,
      }
      console.log(context)
      const html = template(context)
      $('body').append(html)
    }
  });
});
// const STICKERS_URL = 'http://localhost:3000/api/v1/stickers';
//
// $(appReady);
//
// function appReady() {
//   const source = $("#entry-template").html();
//   const template = Handlebars.compile(source);
//   const context = {
//     title: 'My New Post',
//     body: 'This is my first post!'
//   };
//   const html = template(context);
//   // $('main').append(html);
//
//   getStickers().then(showStickers);
// }
//
// function getStickers() {
//   return $.get(STICKERS_URL);
// }
//
// function showStickers(stickers) {
//   const source = $("#stickers-template").html();
//   const template = Handlebars.compile(source);
//   const html = template({
//     stickers
//   });
//   $('main').append(html);
// }
