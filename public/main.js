$('document').ready(() => {
    accounts = new Accounts();
    notes = new Notes();
    tasks = new Tasks();

    $('#signupBtn').click(() => {
        accounts.signup();
    });

    $('#loginBtn').click(() => {
        accounts.login();
        setTimeout(() => {
            notes.getAllNotes();
            tasks.getAllTasks();
        }, 1000);
    });

    saveNote = () => {
        notes.saveNote();
    }

    updateNote = (event, noteid) => {


        notes.updateNote(noteid);
    }

    drop = (event) => {
        var noteid = document.activeElement.id;
        notes.deleteNote(noteid);
        $(`#${noteid}`).parentsUntil('#play_ground').remove();
        event.target.style.color = '#062a5a';
    }

    $('#add-event').click((event) => {
        tasks.addTask();
        event.preventDefault();

    });

});