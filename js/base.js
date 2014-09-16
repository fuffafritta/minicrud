var  storage ={"tasks":[
/*         {"id":"4f","title":"gt","completed":1},
        {"id":"5f","title":"fffff","completed":1},
        {"id":"6f","title":"ttttt","completed":0},
        {"id":"7f","title":"ggggg","completed":0},
        {"id":"8f","title":"ddddd","completed":false}
 */
		]
};

function readTask(){
	$("#task-list").empty();
	for (i = 0; i < storage.tasks.length; i++) {
		$("#task-list").append(
			$('<li></li>').html(storage.tasks[i].title),
			$('<input />', { type: 'checkbox', id: storage.tasks[i].id})
				.prop( "checked", storage.tasks[i].completed )
				.click(function(event) {editTask($(this).attr("id"));}),
			$('<button></button>')
				.html('delete')
				.attr('id',storage.tasks[i].id)
				.addClass('delButt')
				.click(function(event) {removeTask($(this).attr("id"));})
		);
	};
} 

function addTask(){
	if($("#new-task").val() !="") {
		var task = JSON.stringify({
			id    : Math.random().toString(36).substring(7),
			title  : $("#new-task").val(),
			completed : 1
		});
		storage.tasks.push(JSON.parse(task));
		$("#new-task").val('')
		readTask();
	}
} 

function removeTask(id_num){
	for (i = 0; i < storage.tasks.length; i++) {
		if( storage.tasks[i].id == id_num) {storage.tasks.splice(i,1);}
	}
	readTask();
}

function editTask(id_num){
	for (i = 0; i < storage.tasks.length; i++) {
		if( storage.tasks[i].id == id_num) {storage.tasks[i].completed = !storage.tasks[i].completed;}
	}
	readTask();
}