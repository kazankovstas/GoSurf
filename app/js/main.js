$(function () {
  $(".header__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    alidesToScroll: 4,
    asNavFor: ".header__slider",
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    alidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',
    asNavFor: ".slider-map",
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    alidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: ".surf-slider",
  });

  $(".holder__slider").slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',
  });

  // Input-number
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"/></div><div class="quantity-button quantity-down"><img src="img/minus.svg"/></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // Счетчик за отель
  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".summ").data("nights") +
      ($(".guests").val() - 1) * $(".summ").data("guests") -
      1;
    $(".summ").html(summ);
  });

  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    ($(".guests").val() - 1) * $(".summ").data("guests") -
    1;
  $(".summ").html(summ);
});
