$(document).ready(function () {

   $('.list-item').click(function(){
       $(this).addClass('active').siblings().removeClass('active');
       let filter = $(this).attr('data-filter');
       if(filter == 'All'){
           $('.filter-item').show(600);
       }else{
        $('.filter-item').not('.'+filter).hide(600);
        $('.filter-item').filter('.'+filter).show(600);
       }
   });


     $('.filter-container').magnificPopup({
         delegate:'a',
         type:'image',
         gallery:{
             enabled:true,
         },
         showCloseBtn:true,
         closeBtnInside:true,
         closeOnBgClick:true,
         alignTop:false,
     });
 

});
