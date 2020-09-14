<template>
    <b-container fluid>
        <h1> hi this is Test world </h1>
        <h1> Data from backend, {{this.testres}} </h1>
        <b-table :items="items"></b-table>
    </b-container>
</template>

<script>
export default {
  created(){
      this.$http.get('api/test').then((res) =>{
          this.testres = res.data.test
      });
  },
  data () {
      return{
        testres : 'loading...',
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
