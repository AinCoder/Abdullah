$(document).ready(function(){
    const duration = 5
    const nextSlide = $('.slider .next')
    const prevSlide = $('.slider .prev')
    const slideItem = $(".slider .slide-items .item");
    let count = 1 ;
    const slider = () => {
        slideItem.each(function(){
            $(this).hide();
            $(this).attr("data-id" , count) //?
            count++;
        });
        slideItem.first().fadeIn().addClass("show")
        setInterval(function(){
            let active = $(".slider .slide-items .item.show");
            let total = $(".slider .slide-items .item").length;
            let currentIndex = parseInt(active.attr("data-id"))
            let next = 1 
            if(currentIndex < total){
                next = currentIndex + 1
            }
            active.removeClass("show").fadeOut(function(){
                $(".slider .slide-items .item[data-id='"+next+"']").addClass("show").fadeIn()
            });
        },(duration*1000));
    }
    prevSlide.on('click', () => { 
        let active = $(".slider .slide-items .item.show");
            let total = $(".slider .slide-items .item").length;
            let currentIndex = parseInt(active.attr("data-id"))
            let next = 1 
            if(currentIndex == 1){
                next = total
            } else {
                next = currentIndex - 1
            }
            active.removeClass("show").fadeOut(function(){
                $(".slider .slide-items .item[data-id='"+next+"']").addClass("show").fadeIn()
            });
    })
    nextSlide.on('click', () => {
        let active = $(".slider .slide-items .item.show");
            let total = $(".slider .slide-items .item").length;
            let currentIndex = parseInt(active.attr("data-id"))
            let next = 1 
            if(currentIndex == total){
                next = 1
            } else {
                next = currentIndex + 1
            }
            active.removeClass("show").fadeOut(function(){
                $(".slider .slide-items .item[data-id='"+next+"']").addClass("show").fadeIn()
            });
     })
    slider();
});
