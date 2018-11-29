<template>
    <div>
        <a v-for="task in taskList" :key="task.id" @click="updateSelectedTask(task)" :class="'panel-block' + (task.done ? ' task-done': '')">
            <input type="checkbox" v-model="task.done">
            {{ task.title }}
        </a>
    </div>
</template>

<script lang="script">
    export default {
        props: ['taskList'],
        methods: {
            updateSelectedTask(task) {
                this.$emit('updateSelectedTask', task);
            }
        }
    }
</script>
