var app = new Vue({
    el: '#app',
    data: {
        array: [],
        count: ""
    },
    computed: {
        isFull: function() {
            return this.countIsEmpty ? false : this.array.length >= this.count;
        },
        length: function() {
            return this.array.length;
        },
        countIsEmpty: function() {
            return this.count == "";
        }
    },
    methods: {
        setElement: function() {
            if (!this.countIsEmpty && !this.isFull) {
                this.array.push('cat');
            }
        },
        
        clear: function() {
            this.array = [];
        }
    }
})