var app = new Vue({
    el: '#app',
    data: {
      array: [],
      arrayLength: 0,
      showMessage: false
    },
    computed: {
        get: function() {
            this.arrayLength >= 10 ? true : false; 
        }
    },
    watch: {
        arrayLength: function() {
            if(this.arrayLength >= 10) {
                this.showMessage = true;
                this.arrayLength = 10;
            }else {
                this.showMessage = false;
            }
        }
    },
    methods: {
        setElement: function() {
            this.array.push('cat');
            this.arrayLength = this.array.length;
        },
        clear: function() {
            this.array = [];
            this.arrayLength = 0;
        }
    }
  })