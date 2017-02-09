<template>
  <li @click="selectItem" class="menuitem" :class="{active: active}">
    <span v-if="iconClass" class="icon" :class="iconClass">&nbsp;</span>
    <template v-if="rootMenu.expand">
      <router-link class="text" v-if="isRouter">
        <slot></slot>
      </router-link>
      <span class="text" v-else>
        <slot></slot>
      </span>
    </template>
  </li>
</template>

<script>
  import mixin from './d-menu-mixin.js'
  export default {
    mixins: [mixin],
    data: () => {
      return {}
    },
    methods: {
      selectItem: function () {
        this.rootMenu.activePath = this.path
      }
    },
    computed: {
      isRouter: function () {
        return false
      }
    }
  }
</script>

<style>
  .top .menuitem{
    position: relative;
    display: inline-block;
  }
  .top .menuitem:after{
    position: absolute;
    left: 50%;
    content: '';
    display: block;
    margin-top: 1px;
    width: 24px;
    height: 2px;
    transform: translateX(-50%);
    background-color: transparent;
  }
  .top .menuitem.active{
    background-color: #34414f;
    color: #ffffff;
  }
  .top .menuitem.active:after{
    background-color: currentColor;
  }
  .sidenav .menuitem:hover{
    color: #47b2fb;
  }
  .sidenav .menuitem.active{
    background-color: #e5e9f2;
    color: #47b2fb;
  }
</style>