/**
 * @fileoverview button
 * @author: burning <www.cafeinit.com>
 * @version: 2016-10-27
 */

export default {
  name: 'ci-button',

  props: {
    ns: {
      type: String,
      default: ''
    },

    to: {
      type: [Object, String],
      default: ''
    },

    type: {
      type: String,
      default: 'button'
    },

    style: {
      type: String,
      default: 'default'
    },

    size: {
      type: String,
      default: ''
    },

    block: {
      type: String,
      default: ''
    },

    radius: {
      type: String,
      default: ''
    },

    round: {
      type: String,
      default: ''
    },

    status: {
      type: String,
      default: ''
    }
  },

  computed: {
    className: function () {
      return [
        this.ns + 'btn',
        this.style ? (this.ns + 'btn-' + this.style) : '',
        this.size ? (this.ns + 'btn-' + this.size) : '',
        this.block ? (this.ns + 'btn-block') : '',
        this.radius ? (this.ns + 'btn-radius') : '',
        this.round ? (this.ns + 'btn-round') : '',
        (this.status === 'active') ? (this.ns + 'active') : ''
      ]
    }
  },

  mounted() {
    console.log('_button', this.style)
  },

  methods: {
    click(evt) {
      this.$emit('click', evt)
    }
  }
}
