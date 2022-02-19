$('document').ready(() => {
    setTimeout(() => {
        $('#timer').html('GO!');
        setTimeout(() => {
            $('#welcome_screen').hide();
            $('#landing_page').show();
        }, 2000);
    }, 3000);


    $('#showLogin').click(() => {
        $('#landing_page').hide();
        $('#login_page').show();

    });



    $('#showSignup').click(() => {
        $('#landing_page').hide();
        $('#signup_page').show();

    });

    $('#loginCancel').click(() => {
        $('#login_page').hide();
        $('#landing_page').show();
    });

    $('#signupCancel').click(() => {
        $('#signup_page').hide();
        $('#landing_page').show();
    });

    $('#signupBtn').click((event) => {
        event.preventDefault();
    });


    $('#loginBtn').click((event) => {
        event.preventDefault();
    });


    showNotepad = (event) => {
        $('#new_note_pad_div').show();
        $('#add_btns').hide();
        event.preventDefault();
    }


    $('#add_to_do_btn').click((event) => {
        alert('to do');
        event.preventDefault();
    });



    $('#show_notes').click((event) => {

        if ($('#acc_logged').html() != '####') {
            $('#wrapper-container2').show();
            $('#wrapper-container1').hide();
        } else {
            showAlert('please login first');
        }
    });



    saveNote = (event) => {
        event.preventDefault();
    }


    showAlert = (data) => {
        $('#result_msg').html(data);
        $('#alert_result').show();

        setTimeout(() => {
            $('#result_msg').html('');
            $('#alert_result').hide();
        }, 2000);
    }


    allowDrop = (event) => {

        event.target.style.color = 'red';
        event.dataTransfer.setData(document.activeElement.id, event.target.id);
        event.preventDefault();

    }


    drag = (event) => {
        event.preventDefault();
    }

    home = (event) => {
        $('#wrapper-container1').show();
        $('#wrapper-container2').hide();
        event.preventDefault();
    }

    showScheduler = (event) => {

        if ($('#acc_logged').html() != '####') {
            $('#wrapper-container1').hide();
            $('#wrapper-container3').show();
        } else {
            showAlert('please login first');
        }

        event.preventDefault();
    }

    $('#scheduler_back').click((event) => {
        $('#wrapper-container1').show();
        $('#wrapper-container3').hide();
        event.preventDefault();
    });

    $('#add-event').click((event) => {
        $('#addEvtForm').hide();
        $('#addEvtFormTrigger').show();
        event.preventDefault();

    });
    $('#showAddEvtForm').click((event) => {
        $('#addEvtForm').show();
        $('#addEvtFormTrigger').hide();
        event.preventDefault();

    });
    donecancelShow = (event, rowid) => {
        document.getElementById(`${rowid}+'btns'`).style.display = 'block';
        event.preventDefault();
    }
    donecancelHide = (event, rowid) => {
        document.getElementById(`${rowid}+'btns'`).style.display = 'none';
        event.preventDefault();

    }


});