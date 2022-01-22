class Accounts {
    username;
    password;
    signup() {
        this.username = $('#signup_name').val();
        this.password = $('#signup_password').val();
        if (this.username == '' || this.password == '') {
            alert('fields required');
        } else {
            $.ajax({
                url: '/signup',
                method: 'post',
                data: {
                    username: this.username,
                    password: this.password
                },
                success: (data) => {
                    //alert(data.message);
                    $('#signup_name').val('');
                    $('#signup_password').val('');
                    $('#result_msg').html(data.message);

                    if (data.success === true) {
                        $('#signup_page').hide();
                        $('#alert_result').show();

                        setTimeout(() => {
                            $('#alert_result').hide();
                            $('#login_page').show();
                        }, 2000);
                    } else {
                        $('#signup_page').hide();
                        $('#alert_result').show();
                        setTimeout(() => {
                            $('#alert_result').hide();
                            $('#signup_page').show();
                        }, 2000);
                    }
                },
                fail: () => {
                    alert('failed');
                }

            });
        }

    }

    login() {
        this.username = $('#login_name').val();
        this.password = $('#login_password').val();
        if (this.username == '' || this.password == '') {
            alert('fields required');
        } else {
            $.ajax({
                url: '/login',
                method: 'post',
                data: {
                    username: this.username,
                    password: this.password
                },
                success: (data) => {

                    $('#login_name').val('');
                    $('#login_password').val('');
                    if (data.success === true) {
                        $('#login_page').hide();
                        $('#who_is_logged').html(data.who_is_logged.username + ' is ready to get organised');
                        $('#acc_logged').html(data.who_is_logged.username);
                        showAlert(data.message);
                        setTimeout(() => {
                            $('#alert_result').hide();
                            $('#landing_page').show();
                        }, 2000);
                    } else {
                        $('#login_page').hide();
                        showAlert(data.message);

                        setTimeout(() => {
                            $('#login_page').show();
                        }, 2000);

                    }

                },
                fail: () => {
                    alert('failed');
                }

            });
        }

    }

}