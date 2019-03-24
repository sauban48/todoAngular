import { Component, OnInit, NgModule, Pipe, PipeTransform} from "@angular/core";

interface Task {
	task: string;
	complete: boolean;
	description: string;
}

@Component({
	selector: "app-list-tasks",
	templateUrl: "./list-tasks.component.html",
	styleUrls: ["./list-tasks.component.css"]
})
export class ListTasksComponent implements OnInit {
	tasks: Array<Task> = [
		{
			task: "Finish Homework",
			complete: false,
			description: "Submit 630 Lab 4"
		},
		{
			task: "Exercise",
			complete: false,
			description: "Go for a run"
		},
		{
			task: "Driving Lesson",
			complete: true,
			description: "Practise for driving test"
		},
		{
			task: "Eat food",
			complete: true,
			description: "Make chicken for dinner"
		}
	];

	onSubmit(event: any) {
		let task = event.target.task.value;
		let desc = event.target.desc.value;
		for(let i = 0; i < this.tasks.length; i++){
			if(task == this.tasks[i].task && desc == this.tasks[i].description){
				return alert("Please enter a new task.");	
			}
		}
		this.tasks.push({ task: task, complete: false, description: desc });
	}

	deleteTask(idx) {
		this.tasks.splice(idx, 1);
	}

	complete(task) {
		task.complete = !task.complete;
	}

	constructor() {}

	ngOnInit() {}
}
