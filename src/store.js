import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import { firebaseAction, firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    sortByPrio: state => {
      let copy = state.todos.slice()
      return copy.sort((a, b) => a.priority > b.priority ? -1 : 1);
    }
  },
  mutations: firebaseMutations,
  actions: {
    initDb: firebaseAction(({ bindFirebaseRef }) => {
      bindFirebaseRef('todos', firebase.firestore().collection('todos'))
    }),
    addTodo(state, todo) {
      firebase.firestore().collection('todos').add(todo)
    },
    checkTodo(state, todo) {
      firebase.firestore().collection('todos').doc(todo.id).update({ done: !todo.done })
    },
    removeTodo(state, id) {
      firebase.firestore().collection('todos').doc(id).delete()
    }
  }
})

export default store