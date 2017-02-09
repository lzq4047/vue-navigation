<template>
  <li class="submenu" @click.stop="expand = !expand" :class="{active: active}">
    <span v-if="iconClass" class="icon" :class="iconClass">&nbsp;</span>
    <span v-if="rootMenu.expand" v-html="title"></span>
    <transition name="slide-fade">
      <ul v-show="expand">
        <slot></slot>
      </ul>
    </transition>
    <span :class="expand ? (rootMenu.sideNav ? 'caret-right' : 'caret-down') : (rootMenu.sideNav ? 'caret-left' : 'caret-up')">&nbsp;</span>
  </li>
</template>

<script>
  import mixin from './d-menu-mixin.js'
  export default {
    mixins: [mixin],
    data: () => {
      return {
        expand: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style>

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateY(-30px);
    opacity: 0;
  }

  .submenu{
    position: relative;
    padding: 10px 20px;
  }
  .top .submenu.active{
    background-color: #34414f;
    color: #ffffff;
  }
  .top .submenu{
    display: inline-block;
  }
  .sidenav .submenu:hover{
    color: #47b2fb;
  }
  .sidenav .submenu.active{
    background-color: #e5e9f2;
    color: #47b2fb;
  }
  .submenu ul{
    position: absolute;
    padding-left: 0;
    margin-left: -20px;
    top: 40px;
    min-width: 100%;
    border: 1px solid #e0e6ed;
    border-radius: 4px;
    background-color: #fff;
    font-size: 12px;
    color: #1f2d3d;
  }
  .sidenav .submenu ul{
    transform: translateX(100%);
    top: 0;
  }
  .top .submenu .menuitem{
    display: list-item;
    width: 100%;
  }
  .top .submenu .menuitem.active:after{
    background-color: transparent;
  }
  [class^=caret-]{
    display: inline-block;
    width: 0;
    height: 0;
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    border: 6px solid transparent;
    transition: transform .3s ease-in;
    border-top-color: inherit;
    border-bottom-width: 0;
  }
  .caret-up{
    transform: rotateZ(180deg);
  }
  .caret-left{
    transform: rotateZ(90deg);
  }
  .caret-right{
    transform: rotateZ(-90deg);
  }
  .sidenav .submenu [class^=caret]{
    position: absolute;
    right: 5px;
    top: 43%;
  }
  .sidenav .submenu .caret-right{
    transform: rotateZ(-90deg) translateY(-50%);
  }
  .sidenav .submenu .caret-left{
    transform: rotateZ(90deg) translateY(-50%);
  }
</style>