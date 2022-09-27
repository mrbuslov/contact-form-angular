$('.contact_input').on('blur', function(){
    if ($(this).is(':invalid')) { 
        $(this).addClass('invalid_input')
    }
});   
$('.contact_input').on('keyup', function(){
    if ($(this).is(':valid')) { 
        $(this).removeClass('invalid_input');
    }
    
    var isValid = []; // be sure to check all fields
    $(".contact_input").each(function() {
        if ($(this).val() !== "" && $(this).is(':valid')) {isValid.push(true);}
        else{isValid.push(false);}

        if(isValid.includes(false)){
            $( ".contact_submit_button" ).prop("disabled", true);
            $( ".contact_submit_button" ).removeClass('able_submit');
        }
        else{
            $( ".contact_submit_button" ).prop("disabled", false);
            $( ".contact_submit_button" ).addClass('able_submit');
        }
    });
    console.log(isValid)
});  