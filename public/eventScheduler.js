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
                    account: this.account.trim(),
                    task: this.task.trim(),
                    start_date: this.start_date.trim(),
                    start_time: this.start_time.trim(),
                    end_date: this.end_date.trim(),
                    end_time: this.end_time.trim()
                },
                success: (data) => {
                    //alert(data.message);
                    //  $('#notification_area').empty();
                    this.getAllTasks();
                },
                fail: () => {
                    alert('failed');
                }

            });
        }

    }

    getAllTasks() {
        $('#calendar').html('');
        $('#notification_area').html('');
        $('#tablediv').html('');
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
                    var viewAll = '';
                    var events = [];
                    var dueToday = '';
                    data.forEach(i => {
                        viewAll += `<div id="${i.id}" onmouseenter="donecancelShow(event,${i.id});" onmouseleave="donecancelHide(event,${i.id});">
                        <table class="border rounded-lg w-full p-3">
                            <caption class="text-black w-full p-2 text-sm">${i.task}</caption>
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
                                        <button type="submit" id="" class="w-1/3 border rounded-lg p-1 bg-blue-400 text-white hover:bg-gray-800" onclick="markAsDone(${i.id});"><i class="typcn typcn-input-checked text-sm "></i>done</button>
                                        <button type="submit" id="" class="w-1/3 border rounded-lg p-1 bg-red-600 text-white hover:bg-red-900" disabled><i class="typcn typcn-trash text-sm "></i>cancel</button>
                                </div>
                             </div>
                             </div>`;
                        $('#tablediv').html(viewAll);

                        var date = new Date().toISOString().slice(0, 10);
                        if (date == i.end_date) {
                            dueToday += `<div class="w-full shadow-lg rounded flex justify-start p-2 ">
                            <button type="submit " class="border border-blue-800 bg-white text-blue-800 text-sm rounded-lg h-10 w-10 shadow-lg ml-1 " id="notification_details "><i class="typcn typcn-message "></i></button>
                            <div class="h-full w-full shadow-lg bg-blue-100 rounded px-1 flex items-center ml-3 ">
                            <label for=" ">${i.task} is due today</label> <button type="submit" id="" onclick="markAsDone(event, ${i.id})" class="my-2 py-1 px-2 border rounded-lg w-1/6 ml-auto bg-gray-800 hover:bg-blue-400 text-white"><i class="typcn typcn-tick text-sm "></i></button>
                            </div>
                            </div>`;
                            $('#notification_area').html(dueToday);
                        }
                        var startDateString = i.start_date;
                        startDateString.toString();
                        var newDateString = startDateString.replace(/-/g, ',');
                        events.push({
                            'Date': new Date(newDateString),
                            'Title': i.task,
                        });

                    });

                    var settings = {
                        Color: '',
                        LinkColor: 'blue',
                        NavShow: true,
                        NavVertical: false,
                        Navlocation: '',
                        DateTimeShow: true,
                        DateTimeFormat: 'mmm,yyyy',
                        DateTimeLocation: '',
                        EventClick: () => {},
                        EventTargetWholeDay: true,
                        DisabledDays: [],
                    };
                    var element = document.querySelector('#calendar');
                    caleandar(element, events, settings);
                },
                fail: () => {
                    alert('failed');
                }

            });
        }
    }

    deleteOneTask(id) {
        this.account = $('#acc_logged').html();
        this.taskId = id;
        $.ajax({
            url: '/deleteonetask',
            method: 'post',
            data: {
                account: this.account.trim(),
                taskId: this.taskId
            },
            success: () => {
                this.getAllTasks();
            },
            fail: () => {
                alert('failed');
            }

        });

    }
}