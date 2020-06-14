$(document).ready(function () {
  // header burger
  $('.headerBurger').click(function(){
    $('.headerNav').toggleClass('responsive');
  })
  // shopNav burger
  $('.shopNavBurger').click(function(){
    $('.recommended').toggleClass('adapt');
  })




  // Header search

  $(".headerSearch").click(function (e) {
    $(".searchItem").toggleClass("show");
  });

  $("#search").keyup(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      $(".searchItem")[0].reset();
    }
  });

  // Place And Affair

  $(".place").click(function (e) {
    $(".placeItem").slideToggle();
    $(this).toggleClass("up");
  });

  $(".affair").click(function (e) {
    $(".affairItem").slideToggle();
    $(this).toggleClass("up");
  });

  $(".btn").click(function () {
    let placeH3 = $(".placeHeading").text();
    let affairH3 = $(".affairHeading").text();
    if (this.parentNode.className == "placeItem") {
      let text = $(this).text();
      $(".placeHeading").text(text);
      $(this).text(placeH3);
    } else {
      let text = $(this).text();
      $(".affairHeading").text(text);
      $(this).text(affairH3);
    }
  });

  // Posts navigation

  $(".navPlace").click(function (e) {
    $(".navPlaceItem").slideToggle();
    $(this).toggleClass("up");
  });

  $(".navBtn").click(function () {
    let placeH3 = $(".navPlaceHeading").text();
    let text = $(this).text();
    $(".navPlaceHeading").text(text);
    $(this).text(placeH3);
  });

  $(".hideMap").click(function () {
    $(".intro").toggle("normal");
    $(this).toggleClass("hideMap hide");
    if (this.className == "hide") {
      $(this.firstChild).html("Show Map");
    } else {
      console.log($(this.firstChild).html());
      $(this.firstChild).html("Hide Map");
    }
  });

  // tabs
  $(".tabItem").not(":first").hide();
  $(".tabsBtn")
    .click(function () {
      $(".tabsBtn")
        .removeClass("currentTab")
        .eq($(this).index()/2)
        .addClass("currentTab");
      $(".tabItem").hide().eq($(this).index() / 2).fadeIn();
    })
    .eq(0)
    .addClass("currentTab");
});
