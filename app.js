const plus = $('#plus');
const minus = $('#minus');
let count = 1;

// $('html, body').animate({scrollTop: $('#section1').offset().top}, 1000);

minus.click(function(){
    if ( count < 4){
        count++;
        console.log(count)
        $('html, body').animate({scrollTop: $('#section' + count).offset().top}, 1000);
    }
});

plus.click(function(){
    if ( count > 1){
        count--;
        $('html, body').animate({scrollTop: $('#section' + count).offset().top}, 1000);
    }
});