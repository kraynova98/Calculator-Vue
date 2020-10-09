var app = new Vue({
    el: '#app',
    data: {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: ''
    },
    methods: {
      setNumber: function(number) {
        this.result += number; 
      },

    }
  })