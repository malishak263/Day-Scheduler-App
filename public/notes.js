class Notes {
    account;
    note;
    noteId;
    saveNote() {
        this.account = $('#acc_logged').html();
        this.note = $('#new_note_pad').val();
        if (this.note == '' || this.account == '####') {
            alert('empty note destroyed');
        } else {
            $.ajax({
                url: '/savenote',
                type: 'post',
                data: {
                    account: this.account,
                    note: this.note
                },
                success: (data) => {
                    this.getAllNotes();
                },

                fail: () => {
                    alert('fail');
                }

            });
        }
    }

    getAllNotes() {
        this.account = $('#acc_logged').html();
        $.ajax({
            url: '/getallnotes',
            type: 'post',
            data: {
                account: this.account,
            },
            success: (data) => {
                let list = data;
                let render = '';

                list.forEach(i => {

                    var noteid = i.id;
                    render += `<div class="flex w-1/3 h-1/3">`;
                    render += `<div class="flex justify-center items-center  w-full m-2 bg-white">
                            <textarea  onchange="updateNote(event,${noteid});" id="${i.id}" class="flex w-full h-full px-5 py-5 rounded-lg shadow-2xl">${i.note}</textarea>
                        </div>`;
                    render += `</div>`;
                });
                render += `<div class="flex w-1/3 h-1/3 hidden" id="new_note_pad_div">
                        <div class="flex justify-center items-center w-full h-full m-2 bg-white ">
                            <textarea placeholder="note here.. " onblur="saveNote(event);" id="new_note_pad" class="flex w-full h-full px-5 py-5 rounded-lg shadow-2xl "></textarea>
                        </div>
                    </div>  
                    <div class="flex w-1/3 h-1/3  " id="add_btns">
                        <div  class="flex justify-center items-center m-2 w-full h-full bg-teal-100 rounded-lg shadow-2xl ">
                            <button title="add new note" id="add_note_btn" type="submit " onclick="showNotepad(event);"   class="bg-blue-400 hover:bg-gray-800 rounded-full h-16 w-16 shadow-lg "><i class="typcn typcn-edit text-xl text-white "></i></button>
                            <button id="notes_back" type="submit"  onclick="home(event)" class="bg-blue-400 hover:bg-gray-800 text-white text-xl rounded-full h-16 w-16 shadow-lg ml-1"><i class="typcn typcn-arrow-back"></i></button>
                            </div>
                    </div>`;

                $('#play_ground').html(render);

            },

            fail: () => {
                alert('fail');
            }

        });

    }

    updateNote(noteid) {
        this.account = $('#acc_logged').html();
        this.noteId = noteid;
        this.note = $(`#${noteid}`).val();

        $.ajax({
            url: '/updatenote',
            type: 'post',
            data: {
                account: this.account,
                noteId: this.noteId,
                note: this.note
            },
            fail: () => {
                alert('fail');
            }

        });
    }

    deleteNote(noteid) {
        this.account = $('#acc_logged').html();
        this.noteId = noteid;
        $.ajax({
            url: '/deletenote',
            type: 'post',
            data: {
                account: this.account,
                noteId: this.noteId,
            },

            fail: () => {
                alert('fail');
            }

        });
    }

}