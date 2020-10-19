var app = new Vue({
    el: '#app',
    data: {
      array: []
    },
    computed: {
        arrayLength: function() {
            return this.array.length;
        },
        showMessage: function() {
            return this.arrayLength >= 10;
        }
    },
    methods: {
        setElement: function() {
            this.array.push('cat');
        },
        clear: function() {
            this.array = [];
        }
    }
  })