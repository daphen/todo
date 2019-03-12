<template>
  <div class="to-do-list">
    <ul>
      <transition appear name="fade">
        <h1 class="to-do-header">Activities</h1>
      </transition>
      <transition-group name="stagger" :style="{ '--total': todos.length }">
        <ToDoItem v-for="(todo, key) in todos" :key="key + todo" :todo="todo" :style="{ '--i': key }" />
      </transition-group>
    </ul>

    <div class="add-todo">
      <input v-model="newTodo.text" @keydown.enter="addItem(newTodo)">
      
      <button class="set-prio" @click="togglePrioList">
        <h4 v-if="newTodo.priority === 0">Priority</h4>
        <h2 v-else>{{ newTodo.priority }}</h2>
        <transition name="prio">
          <ul class="prio-list" v-if="prioIsShowing">
            <li v-for="(prio, key) in prioList" :key="key" :style="{ '--i': key }" @click="setPrio(prio)">
              {{ prio }}
            </li>
          </ul>
        </transition>
      </button>

      <div class="add-todo-button" @click="addItem(newTodo)">
        <h4>+</h4>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from './ToDoItem'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'ToDo',
  data: () => ({
    newTodo: {
      text: '',
      priority: 0,
      done: false
    },
    prioIsShowing: false,
    prioList: [1, 2, 3, 4, 5]
  }),
  components: { ToDoItem },
  computed: {
    ...mapGetters({todos: 'sortByPrio'})
  },
  methods: {
    ...mapActions(['addTodo']),
    togglePrioList() {
      this.prioIsShowing = !this.prioIsShowing
    },
    setPrio(prio) {
      this.newTodo.priority = prio
    },
    addItem(todo) {
      this.addTodo(todo)
      this.newTodo.text = ''
      this.newTodo.priority = 0
      this.newTodo.done = false
    }
  }
}
</script>

<style lang="scss">
.to-do-list {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1.to-do-header {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 6rem;
    margin: 8rem 0 6rem;
    background: linear-gradient(#D56CB1, #9B6BE6);
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media screen and (max-width: 410px) {
      margin: 5rem 0 3rem;
    }
  }

  ul {
    overflow-y: scroll;
  }

  .add-todo {
    padding: 2rem 0 0;
    margin: 0 3rem 2rem;
    border-top: 1px solid #D7E8FC;
    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-gap: 1rem;
    height: 5rem;

    input {
      border-radius: 1rem;
      padding: 0 1rem;
      border: none;
      box-shadow: 0 0 0.2rem 0.1rem #CDE0FA;
      transition: box-shadow 0.2s ease-in-out;
      font-size: 1.5rem;

      &:focus {
        outline: none;
        box-shadow: 0 0 0.3rem 0.2rem #D7E8FC;
      }
    }

    h4 {
      font-weight: bold;
    }

    button.set-prio {
      border: none;
      border-radius: 1rem;
      width: 9rem;
      box-shadow: 0 0 0.2rem 0.1rem #CDE0FA;
      text-transform: uppercase;
      padding: 0 1rem;
      background-color: #fff;

      ul.prio-list {
        position: absolute;
        top: 0;
        left: 50%;
        transition: transform 0.2s, opacity 0.2s;
        transform: translate(-50%, -107%);
        border-radius: 1rem;
        background: #FFF;
        width: 8rem;
        font-size: 2.5rem;
        overflow: visible;
        padding: 1rem;
        box-shadow: 0 0 0.3rem 0.2rem #D7E8FC;

        li {
          margin-bottom: 0.4rem;
        }

        &:after {
          content: '';
          background: #FFF;
          position: absolute;
          bottom: -1rem;
          left: 50%;
          width: 2rem;
          height: 2rem;
          transform: translateX(-50%) rotate(45deg) ;
        }
      }
    }

    .add-todo-button {
      background: linear-gradient(to bottom right, #71A9FE, #6797FF);
      color: #FFF;
      border-radius: 50%;
      height: 3rem;
      width: 3rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        font-size: 3rem;
      }
    }
  }

  .stagger {
    &-move {
      transition: opacity .5s linear, transform .5s ease-in-out;
    }
    
    &-leave-active {
      transition: opacity .4s linear, transform .4s cubic-bezier(.64,.01,.67,.92); 
      transition-delay: calc( 0.1s * (var(--total) - var(--i)) );
    }
    
    &-enter-active { 
      transition: opacity .4s linear, transform .4s cubic-bezier(.29,.15,.24,.97);
      transition-delay: calc( 0.1s * var(--i) );
    }

    &-enter, 
    &-leave-to {
      opacity: 0;
    }
    
    &-enter { transform: translateY(2rem); }
    &-leave-to { transform: translateY(-2rem); }
  }

  .prio-enter-active, .prio-leave-active {
    transition: opacity .5s;
  }
  .prio-enter, .prio-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s 0.5s, transform 1s 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(1rem);
  }
}
</style>
