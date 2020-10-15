// Vue.component('progressbar', {
//     props: {
//         value: Number
//     },
//     data: function() {
//         return {
//             arrayLength: 0
//         }
//     },
//     template: '<progress class="progress is-primary" v-bind:value="arrayLength" max="100"></progress>'
//   })
// // Vue.component('button-counter', {
//     data: function () {
//       return {
//         count: 0
//       }
//     },
//     template: '<button v-on:click="count++">Счётчик кликов — {{ count }}</button>'
//   })

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
            }
        }
    },
    methods: {
        setElement: function() {
            this.array.push('cat');
            this.arrayLength = this.array.length;
        }
    }
  })