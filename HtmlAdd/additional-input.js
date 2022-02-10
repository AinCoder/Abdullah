$(document).ready(function () {
    console.clear()
    let formContainer = $('[data-de-type="order2step"] .o2step_step1');
    let email = formContainer.find('input[name="email"]');
    let cloneEmail = email.clone();
    cloneEmail.removeClass('elS1Email').addClass('abdullah_phone').attr('name', 'phone');
    $(cloneEmail).insertAfter(email);
    $('<span style="color:red; display: none;" class="phone-error">Please enter your phone.</span>').insertAfter(cloneEmail);
    $('[href*="#submit-form-2step"]').on('click', (e) => {
        console.clear();
        if(!$('.abdullah_phone').val()){
            $('.phone-error').show();
            return false;
        } else {
            $('.phone-error').hide();
            return true;
        }
    })
});