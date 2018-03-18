$('#modalOpen').click(function() {
    $('.modal').addClass('is-active');
    console.log('on');
});

$('#submitSlider').click(function() {
    $('.modal').removeClass('is-active');
    console.log('off');
});
