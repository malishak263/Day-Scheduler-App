class Tasks {
    account;
    taskId
    task;
    start_date;
    start_time;
    end_date;
    end_time;
    addTask() {
        this.account = $('#acc_logged').html();
        this.task = $('#task').val();
        this.start_date = $('#start_date').val();
        this.start_time = $('#start_time').val();
        this.end_date = $('#end_date').val();
        this.end_time = $('#end_time').val();

        if (this.task == '' || this.account == '####' || this.start_date == '' || this.start_time == '' || this.end_date == '' || this.end_time == '') {
            alert('all fields required');
        } else {
            $.ajax({
                url: '/addtask',
                method: 'post',
                data: {
                    account: this.account,
                    task: this.task,
                    start_date: this.start_date,
                    start_time: this.start_time,
                    end_date: this.end_date,
                    end_time: this.end_time
                },
                success: (data) => {
                    alert(data.message);
                },
                fail: () => {
                    alert('failed');
                }

            });
        }

    }

    getAllTasks() {
        this.account = $('#acc_logged').html();
        if (this.account == '####') {
      alert('error');
        } else {
            $.ajax({
                url: '/getalltasks',
                method: 'post',
                data: {
                    account: this.account,
                },
                success: (data) => {
                let tasklist=data;
                var render='';

                    tasklist.forEach(i => {

                        var taskid = i.id;

                        render += ``;
                        render += `<div class="flex justify-center items-center  w-full m-2 bg-white">
                            <textarea  onchange="updateNote(event,${taskid});" id="${i.id}"class="flex w-full h-full px-5 py-5 rounded-lg shadow-2xl">${i.note}</textarea>
                        </div>`;
                        render += `</div>`;
                    });

                },
                fail: () => {
                    alert('failed');
                }

            });
        }
    }
}