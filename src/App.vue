<template>
  <div class="columns">
            <div class="column is-one-third main-task">
                <nav class="panel has-background-light">
                    <p class="panel-heading has-background-dark has-text-white">
                        Task List
                    </p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input v-model="newTask.title" class="input is-small" type="text" placeholder="New Task" @keyup.enter="addNewTask(newTask)">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>

                    <task-list :task-list="taskList" @updateSelectedTask="updateSelectedTask"></task-list>
                </nav>
            </div>
            <div class="column detail-task">
                <nav class="panel has-background-light">
                    <p class="panel-heading has-background-dark has-text-white">
                        Task Information
                    </p>
                    <div class="panel-block">
                        <p class="control has-icons-left">
                            <input v-model="selectedTask.title" :disabled="selectedTask.done" class="input is-small" type="text" placeholder="Tittle">
                            <span class="icon is-small is-left">
                                <i class="fas fa-search" aria-hidden="true"></i>
                            </span>
                        </p>
                    </div>
                    <a class="panel-block">
                        <textarea v-model="selectedTask.details" :disabled="selectedTask.done" class="textarea" placeholder="Other Details"></textarea>
                    </a>
                    <label class="panel-block">
                        <nav class="panel is-spaced" style="width: 100%">
                            <p class="panel-heading has-background-grey has-text-white">
                                Sub-Tasks
                            </p>
                            <div v-if="isTaskSelected">
                                <task-list :task-list="selectedTask.subtasks"></task-list>
                            </div>
                            <div v-else>
                                    No task selected.
                            </div>
                        </nav>
                    </label>
                </nav>
            </div>
  </div>
</template>

<script lang="script">
import TaskList from "./components/TaskList"; 

export default {
    components: {
        'task-list': TaskList
    },
    data() {
        return {
            newTask: {
                id: null,
                title: null,
                details: 'Default Title',
                done: false,
                subtasks: [
                    {id: 1, title: 'SubTask1', details: 'SubTask1 Great Details', done: false},
                    {id: 2, title: 'SubTask2', details: 'SubTask2 Great Details', done: false},
                ]
            },
            selectedTask: {
                id: null,
                title: null,
                details: null,
                done: null,
                subtasks: []
            },
            taskList : [
                {
                    id: 1,
                    title: 'Task1',
                    details: 'Task1 Great Details',
                    done: false,
                    subtasks: [
                        {id: 1, title: 'SubTask1', details: 'SubTask1 Great Details', done: false},
                        {id: 2, title: 'SubTask2', details: 'SubTask2 Great Details', done: false},
                        {id: 3, title: 'SubTask3', details: 'SubTask3 Great Details', done: false},
                        {id: 4, title: 'SubTask4', details: 'SubTask4 Great Details', done: true},
                    ]
                },
                {id: 2, title: 'Task2', details: 'Task2 Great Details', done: false, subtasks: []},
                {id: 3, title: 'Task3', details: 'Task3 Great Details', done: false, subtasks: []},
                {id: 4, title: 'Task4', details: 'Task4 Great Details', done: false, subtasks: []},
                {id: 5, title: 'Task5', details: 'Task5 Great Details', done: true, subtasks: []},
            ]
        }
    },
    computed: {
        isTaskSelected() {
            return this.selectedTask.id;
        },
    },
    methods: {
        updateSelectedTask($event) {
            this.selectedTask = $event;
        },
        addNewTask(task) {
            if(!task.title){
                return;
            }

            this.taskList.push({...task});
            this.newTask.title = null;
        }
    }
}
</script>

<style lang="css">
.task-done, .task-done:hover {
  text-decoration: line-through;
  color: #ccc;
}
</style>
