$(function(){
    $('.listCol ul li img').click(function() {
      var isThisChara = $(this).attr('src');
      var isThisDetail = isThisChara.replace('charImag', 'charDetail').append('_big.png');
      $('#detailImg').attr('src',isThisDetail);
      $('.detailCol').get(0).scrollIntoView({behavior: "smooth"});
      //console.log(isThisDetail);
    });
  });