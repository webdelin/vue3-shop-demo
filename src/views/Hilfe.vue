<template>
  <app-page back title="Hilfe">
    <question-item v-for="(q,i) in questions" :key="i" :question="q"></question-item>
  </app-page>
</template>

<script>
import AppPage from '@/components/ui/AppPage'
import QuestionItem from '@/components/question/QuestionItem'
export default {
  components: { AppPage,QuestionItem },
  setup(){
    const questions = [
      {title:'Frage 1',text:'Text Frage 1'},
      {title:'Frage 2',text:'Text Frage 2'},
      {title:'Frage 3',text:'Text Frage 3'},
    ]
    return {
      questions
    }
  }

}
</script>

<style>

</style>