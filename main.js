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
            return this.arrayLength >= 10 ? true : false;
        }
    },
    watch: {
        arrayLength: function() {
            this.arrayLength >= 10 ? this.arrayLength = 10 : this.arrayLength;
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