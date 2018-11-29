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

                    <task-list :task-list="taskList" @updateSelectedTask="updateSelectedTask($event)"></task-list>
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
import { mapGetters, mapActions} from "vuex";

export default {
    components: {
        'task-list': TaskList
    },
    created() {
        this.fetchTaskList();
    },
    computed: {
     ...mapGetters({
        isTaskSelected: 'isTaskSelected',
        selectedTask: 'selectedTask',
        newTask: 'newTask',
        taskList: 'taskList',
    })
    },
    methods: {
    ...mapActions({
        fetchTaskList: 'fetchTaskList',
        addNewTask: 'addNewTask',
        updateSelectedTask: 'updateTask',
    })
    }
}
</script>

<style lang="css">
.task-done,
.task-done:hover {
  text-decoration: line-through;
  color: #ccc;
}
</style>
