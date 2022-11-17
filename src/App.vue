<template>
  <div>
    <div v-if="!quizStarted" class="homepage">
      <div class="title">
        <p>Find which type of personality you have</p>
      </div>
      <div class="button-container">
        <button @click="startQuiz" class="start-button">Start Quiz!</button>
      </div>
    </div>
    <quiz @closeQuiz="quizStarted = false" v-if="quizStarted"/>
  </div>
</template>

<script>
import quiz from "@/components/Quiz";
export default {
  name: 'App',
  components: {
    quiz
  },
  data() {
    return {
      quizStarted: false
    }
  },
  methods: {
    startQuiz() {
      this.quizStarted = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
