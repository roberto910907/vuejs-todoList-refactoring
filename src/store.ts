import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newTask: {
      id: null,
      title: null,
      details: 'Default Title',
      done: false,
      subtasks: [
        { id: 1, title: 'SubTask1', details: 'SubTask1 Great Details', done: false },
        { id: 2, title: 'SubTask2', details: 'SubTask2 Great Details', done: false },
      ]
    },
    selectedTask: {
      id: null,
      title: null,
      details: null,
      done: null,
      subtasks: []
    },
    taskList: [
      {
        id: 1,
        title: 'Task1',
        details: 'Task1 Great Details',
        done: false,
        subtasks: [
          { id: 1, title: 'SubTask1', details: 'SubTask1 Great Details', done: false },
          { id: 2, title: 'SubTask2', details: 'SubTask2 Great Details', done: false },
          { id: 3, title: 'SubTask3', details: 'SubTask3 Great Details', done: false },
          { id: 4, title: 'SubTask4', details: 'SubTask4 Great Details', done: true },
        ]
      },
      { id: 2, title: 'Task2', details: 'Task2 Great Details', done: false, subtasks: [] },
      { id: 3, title: 'Task3', details: 'Task3 Great Details', done: false, subtasks: [] },
      { id: 4, title: 'Task4', details: 'Task4 Great Details', done: false, subtasks: [] },
      { id: 5, title: 'Task5', details: 'Task5 Great Details', done: true, subtasks: [] },
    ]
  },
  getters: {
    isTaskSelected(state) {
      return state.selectedTask.id;
    },
    selectedTask(state) {
      return state.selectedTask;
    },
    newTask(state) {
      return state.newTask;
    },
    taskList(state) {
      return state.taskList;
    }
  },
  mutations: {
    ['FETCH_TASK_LIST'](state) {
      return state.taskList;
    },
    ['UPDATE_TASK'](state, task) {
      state.selectedTask = task;
    },
    ['ADD_NEW_TASK'](state, task) {
      if (!task.title) {
        return;
      }

      state.taskList.push({ ...task });
      state.newTask.title = null;
    }
  },
  actions: {
    fetchTaskList({ commit }) {
      commit('FETCH_TASK_LIST');
    },
    addNewTask({ commit }, task) {
      commit('ADD_NEW_TASK', task);
    },
    updateTask({ commit }, task) {
      commit('UPDATE_TASK', task);
    }
  }
})
