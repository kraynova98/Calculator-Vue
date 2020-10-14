var app = new Vue({
    el: '#app',
    data: {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      signs: ['+', '-', '/', '*', '.'],
      result: ''
    },
    methods: {
      setNumber: function(sign) {
        this.result += String(sign); 
      },
      getResult: function() {
        this.result = eval(this.result);
      },
      reset: function() {
        this.result = '';
      }
    }
  })