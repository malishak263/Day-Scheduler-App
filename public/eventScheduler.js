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
                    //alert(data.message);
                    this.getAllTasks();
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
                        render += `<div onmouseenter="donecancelShow(event,${i.id});" onmouseleave="donecancelHide(event,${i.id});">
                        <table class="border rounded-lg w-full p-3">
                            <caption class="text-black w-full p-2 text-lg">${i.task}</caption>
                            <tr id="theader" class="w-full">
                                <th class="p-1 ">start date</th>
                                <th class="p-1 ">start time</th>
                                <th class="p-1">end date</th>
                                <th class="p-1">end time</th>
                            </tr>
                            <tr class="w-full">
                                <td class="p-1 text-center">${i.start_date}</th>
                                <td class="p-1 text-center">${i.start_time}</th>
                                <td class="p-1 text-center">${i.end_date}</th>
                                <td class="p-1 text-center">${i.end_time}</th>
                            </tr>
                        </table>
                            <div class="w-full  hidden" id="${i.id}+'btns'" >
                                <div class="flex justify-center mx-auto">
                                        <button type="submit" id="" class="w-1/3 border rounded-lg bg-blue-400 text-white hover:bg-blue-800 "><i class="typcn typcn-input-checked text-xl "></i>done</button>
                                        <button type="submit" id="" class="w-1/3 border rounded-lg bg-red-600 text-white hover:bg-red-900 "><i class="typcn typcn-trash text-xl "></i>cancel</button>
                                </div>
                             </div>
                             </div>`;
                     $('#tablediv').html(render);
                    });

                },
                fail: () => {
                    alert('failed');
                }

            });
        }
    }
}