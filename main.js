var app = new Vue({
    el: '#app',
    data: {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      signs: ['+', '-', '/', '*', '.', '='],
      result: ''
    },
    methods: {
      setNumber: function(number) {
        this.result += String(number); 
      },
      getResult: function(sign) {
        sign == "=" ? this.result = eval(this.result) : this.setNumber(sign);
      },
      reset: function() {
        this.result = '';
      }
    }
  })