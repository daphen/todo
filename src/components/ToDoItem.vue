<template>
  <li class="to-do-item" :class="{ 'done': todo.done }">
    <div class="checkmark" @click="checkTodo(todo)">
      <svg xmlns="http://www.w3.org/2000/svg" width="23" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
    </div>
    <h4>{{ todo.text }}</h4>
    <p>Priority: {{ todo.priority }}</p>

    <div class="trashcan" @click="removeTodo(todo.id)">
      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z"/></svg>
    </div>
  </li>
</template>
  
<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: Object
  },
  methods: {
    ...mapActions(['removeTodo', 'checkTodo'])
  }
}
</script>
  
<style lang="scss">
li.to-do-item {
  border: 2px solid rgb(227, 238, 253);
  background: #FFF;
  box-shadow: 0 0.1rem 1rem rgba(black, 0.1);
  margin: 1rem 3rem;
  border-radius: 0.5rem;
  min-height: 10rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  transition: border 0.3s ease-in-out;
  padding-left: 5rem;
  
  &.done {
    border: 2px solid #FDC888;

    h4 {
      color: #F8A476;
    }
    .checkmark {
      background: linear-gradient(to bottom right, #FCCD83, #F7A078);
    }
  }

  .checkmark {
    box-shadow: 0 0.3rem 1rem rgba(black, 0.1);
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 50%;
    min-width: 4rem;
    min-height: 4rem;
    transform: translate(-50%, -50%);
    background: linear-gradient(to bottom right, #CCE0FA, #CDE0FA);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-tap-highlight-color: transparent;

    svg {
      pointer-events: none;
      fill: #FFF;
    }
  }

  .trashcan {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    cursor: pointer;

    svg {
      fill: #F17594;
      pointer-events: none;
    }
  }

  h4 {
    transition: color 0.3s ease-in-out;
    font-size: 2rem;
  }

  p {
    color: #B8C4CF;
  }
  
}
</style>