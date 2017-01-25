let vm = new Vue ({
  el: '#app',

  data: {
    message: 'Salut les gens',
    message2: "Test changement à l'input",
    link1: 'http://www.google.fr',
    link2: 'http://www.twitter.fr',
    success1: true,
    success2: true,
    persons: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain'],
    state1: 'true',
    state2 : 'open',
    checkbox: false,
    cls: 'alert-success',
    state: 'Décochée'
  },

  methods: {
    changestate: function () {
      if (this.success1 === true) {
      this.success1 = false
      this.state1 = 'false'
      }
      else {
      this.success1 = true
      this.state1 = 'true'
      }
    },
    close: function () {
      this.success2 = false
      this.state2 = 'close'

    },
    open: function () {
      this.success2 = true
      this.state2 = 'open'

    },
  }

})


let vm2 = new Vue ({
  el: '#app2',

  data: {
    persons2: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain'],
    demo: '',
    seconds: 0
  },

  methods: {
    addPerson: function () {
      this.persons2.push("Test"),
      this.demo = "Dunno"
    },
  },

  beforeCreate:
    function() {
      console.log('test beforeCreate ' + this.$el + ' : undefined car le beforeCreate se fait avant même d_observer les data:' )
    },

  mounted: function() {
      setInterval(() => {
        console.log('Time')
        this.seconds++
      }, 1000)
    },
})


let vm3 = new Vue ({
  el: '#app3',

  data: {

  },

})
