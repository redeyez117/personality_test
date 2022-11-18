<template>
<div class="quiz-container">
  <QuizQuestions v-if="!quizResult" @incrementIndex="nextQuestion($event)" :question="questions[currentIndex]"/>
  <div v-else class="result">
    <img :src="resultImg" />
    <h3>{{result}}</h3>
    <button @click="$emit('closeQuiz')">Try Again!</button>
  </div>
</div>
</template>

<script>
import QuizQuestions from "@/components/QuizQuestions";
import {questions} from "@/data/questions";
export default {
  name: "QuizContainer",
  components: {QuizQuestions},
  data() {
    return {
      currentIndex: 0,
      questions,
      quizResult: false,
      totalPoints: 0,
    }
  },
  methods: {
    nextQuestion(points) {
      if(this.currentIndex < this.questions.length) {
        this.totalPoints = this.totalPoints + points
        this.currentIndex++
        if(this.currentIndex === this.questions.length) {
          this.totalPoints = this.totalPoints + points
          this.showAnswer()
        }
      }
    },
    showAnswer() {
      this.quizResult = true
    }
  },
  computed: {
    result() {
      if(this.totalPoints <= 80) {
        return 'You are an EXTRAVERT!'
      }
      return 'You are an INTROVERT!'
    },
    resultImg() {
      if(this.totalPoints <= 80) {
        return require('../assets/images/extravert.gif')
      }
      return require('../assets/images/introvert.gif')
    },
  }
}
</script>

<style scoped>

.quiz-container {
  max-width:900px;
  width: 100%;
  margin-inline: auto;
  padding: 10px;
  background: white;
  border-radius: 5px;
  margin-top: 7rem;
}

.result {
  text-align: center;
}
.result img {
  margin-top:40px;
  width: 80px
}

.result h3 {
  margin-top: 15px;
  font-size: 2.3rem;
}

.result button {
  padding: 7px 10px;
  border-radius: 6px;
  background-color: lightsteelblue;
  color: white;
  font-size: 18px;
  font-weight: 600;
}
</style>