export default {
  props: {
    index: {
      type: String,
      required: true
    },
    iconClass: String
  },
  computed: {
    active: function () {
      return !!~this.rootMenu.activePath.indexOf(this.index)
    },
    path: function () {
      let pathNode = this.index.split('-')
      let path = []
      path.push(pathNode.join('-'))
      while (pathNode.pop() && pathNode.length) {
        path.push(pathNode.join('-'))
      }
      return path.reverse()
    },
    rootMenu: function () {
      let parent = this.$parent
      while (parent !== this.$root && parent.$options.name !== 'DMenu') {
        parent = parent.$parent
      }
      return parent
    }
  }
}
