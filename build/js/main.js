$((function(){$(".header__slider").slick({infinite:!0,fade:!0,prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',asNavFor:".slider-dotshead"}),$(".slider-dotshead").slick({slidesToShow:4,alidesToScroll:4,asNavFor:".header__slider",responsive:[{breakpoint:961,settings:"unslick"}]}),$(".surf-slider").slick({slidesToShow:4,alidesToScroll:1,prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />',asNavFor:".slider-map",responsive:[{breakpoint:1210,settings:{slidesToShow:3}},{breakpoint:970,settings:{slidesToShow:2}},{breakpoint:720,settings:{slidesToShow:1,centerMode:!0}},{breakpoint:426,settings:{slidesToShow:1,centerMode:!1}}]}),$(".slider-map").slick({slidesToShow:8,alidesToScroll:1,arrows:!1,focusOnSelect:!0,asNavFor:".surf-slider",responsive:[{breakpoint:1103,settings:{slidesToShow:3,centerMode:!0}},{breakpoint:970,settings:{slidesToShow:2,centerMode:!0}},{breakpoint:720,settings:{slidesToShow:1,centerMode:!0}}]}),$(".holder__slider, .shop-slider").slick({infinite:!0,fade:!0,prevArrow:'<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="" />',nextArrow:'<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="" />'}),$('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg"/></div><div class="quantity-button quantity-down"><img src="img/minus.svg"/></div></div>').insertAfter(".quantity input"),$(".quantity").each((function(){var s=$(this),i=s.find('input[type="number"]'),r=s.find(".quantity-up"),t=s.find(".quantity-down"),e=i.attr("min"),a=i.attr("max");r.click((function(){var r=parseFloat(i.val());if(r>=a)var t=r;else t=r+1;s.find("input").val(t),s.find("input").trigger("change")})),t.click((function(){var r=parseFloat(i.val());if(r<=e)var t=r;else t=r-1;s.find("input").val(t),s.find("input").trigger("change")}))})),$(".quantity-button").on("click",(function(){let s=$(".nights").val()*$(".summ").data("nights")+($(".guests").val()-1)*$(".summ").data("guests")-1;$(".summ").html(s)}));let s=$(".nights").val()*$(".summ").data("nights")+($(".guests").val()-1)*$(".summ").data("guests")-1;$(".summ").html(s),$(".surfboard__circle").on("click",(function(){$(this).toggleClass("active")})),$(".menu-btn").on("click",(function(){$(".main-nav__toggle").toggleClass("main-nav__toggle_active"),$(".menu").toggleClass("active")}))}));