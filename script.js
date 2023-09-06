function removeActive() {
    $('.page').addClass('off')
    $('span').removeClass('active')
}
$('#chat-menu').click(function() {
    removeActive();
    $('#chat').removeClass('off')
    $(this).addClass('active')
})
$('#users-menu').click(function() {
    removeActive();
    $('#users').removeClass('off')
    $(this).addClass('active')
})
$('#add-user-menu').click(function() {
    removeActive();
    $('#add-user').removeClass('off')
    $(this).addClass('active')
})
$('#settings-menu').click(function() {
    
})
