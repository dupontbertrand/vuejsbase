new Vue ({
  el: '#app',

  data: {
    message: 'Salut les gens',
    link1: 'http://www.google.fr',
    link2: 'http://www.twitter.fr',
    success1: true,
    success2: true,
    persons: ['Bertrand', 'Ivan', 'Wilfried', 'Yoann', 'Ophélie', 'GuillaumeG', 'GuillaumeL', 'Ahrry', 'Robin', 'Romain']
  },

  methods: {
    changestate: function () {
      if (this.success1 === true) {
      this.success1 = false
      }
      else {
      this.success1 = true
      }
    },
    close: function () {
      this.success2 = false
    },
    open: function () {
      this.success2 = true
    },
  }

})
