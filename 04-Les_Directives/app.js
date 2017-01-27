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
    }
})


let vm3 = new Vue ({
  el: '#app3',

  data: {
    success3: false,
    message3: 'Message3',
    success4: false,
    message4: 'Message4',
    firstname: 'Prénom',
    lastname: 'Nom',
  },

  methods: {
    cls2: function() {
      console.log('test appel method cls2')
      return this.success3 === true ? 'alert-success' : 'alert-danger'
    }
  },

  computed: {
    cls3: function() {
      console.log('test appel method cls3')
      return this.success4 === true ? 'alert-success' : 'alert-danger'
    },
    fullname: {
      get: function() {
        return this.firstname + ' ' + this.lastname
      },
      set: function (value){
        console.log(value)
        let parts = value.split(' ')
        this.firstname = parts[0]
        this.lastname = parts[1]
      }
    }
  },

  watch: {
    fullname: function (value) {
      console.log('Watch ' + value)
    }
  }
})

Vue.directive('salut', {
  bind: function(el, binding, vnode) {
    console.log('Notre directive salut est bind' + el + binding)
    el.value = binding.value
  },
  update: function(el, binding, vnode, oldvnode) {
    console.log('Directive salut update')
  }
})

// Les deux directives ci-dessous et ci-dessus auront le même comportement, c'est la manière de les écrire qui change

Vue.directive('salut2', function(el, binding) {
    console.log('Notre directive salut2 est bind' + el + binding)
    el.value = binding.value
})

let salut3 = function(el, binding) {
    console.log('Notre directive salut3 est bind' + el + binding + ' OU celle ci a été appelée')
    el.value = binding.value
}

let vm4 = new Vue ({
  el: '#app4',

  directives: {
    salut3: salut3
  },

  data: {
    firstname: 'Prénom',
    lastname: 'Nom',
    message5: 'Message5',
    message6: 'Message6.lazy',
    message7: 'Message7.number',
    message8: 'trim',
    message9: 'test_directive',
    message10: 'test_directive_2',
    message11: 'test_directive_3'
  },

  methods: {
    demo: function (e) {
      console.log('demo', e.preventDefault())
    },
    demo2: function () {
      console.log('demo2')
    },
    demo3: function () {
      console.log('demo3')
    },
    test: function () {
      console.log('test')
    },
    demo4: function () {
      console.log('demo4')
    },
    test2: function () {
      console.log('test2')
    },
    testspace: function() {
      console.log("test keyup space")
    }
  }
})
