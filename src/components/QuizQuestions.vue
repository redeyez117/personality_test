<template>
  <h3>{{ question.question }}</h3>
  <div class="answer-container">
    <ul class="answer-list">
      <li @click="answerQuestion(answer.point)" :key="answer" v-for="answer in question.answers">{{ answer.answer }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuizQuestions",
  props: ['question'],
  emits: ["incrementIndex"],
  methods: {
    answerQuestion(point) {
      this.$emit('incrementIndex', point)
    }
  }
}
</script>

<style scoped>
h3 {
  font-size: 22px;
  font-weight: 600;
}

.answer-list {
  list-style: none;
  padding: 0;
}

.answer-list li {
  border: 1px solid steelblue;
  font-size: 18px;
  font-weight: 300;
  padding: 6px 5px;
  width: 50%;
  margin-top: 10px;
  margin-inline: auto;
}

.answer-list li:hover {
  color: white;
  border-color: #2c3e50;
  background: #2c3e50;
  cursor: pointer;
}

</style>