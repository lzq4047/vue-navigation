<template>
  <ul class="menu" :class="{top: !sideNav, sidenav: sideNav, expand: sideNav && expand, shrink: sideNav && !expand}">
    <li class="display-style" v-if="sideNav" @click="expand = !expand" :class="{'text-right': expand}">
      <span class="icon fa" :class="expand ? 'fa-th' : 'fa-th-list'">&nbsp;</span>
    </li>
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    data: () => {
      return {
        expand: true,
        activePath: []
      }
    },
    props: {
      router: {
        type: Boolean,
        default: false
      },
      sideNav: {
        type: Boolean,
        default: false
      },
      defaultExpand: {
        type: Boolean,
        default: true
      },
      defaultActive: {
        type: String,
        default: '1'
      }
    },
    mounted: function () {
      var vm = this
      this.$nextTick(() => {
        vm.expand = this.defaultExpand
      })
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
  .slide-fade-enter
  /* .slide-fade-leave-active for <2.1.8 */ {
    width: 140px;
  }
  .slide-fade-leave{
    width: 50px;
  }
  .menu{
    margin: 0;
    padding: 0;
    background-color: #475669;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.33);
    color: #fff;
    font-size: 14px;
  }
  .menu.sidenav{
    background-color: #f9fafc;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.33);
    letter-spacing: normal;
    color: #1f2d3d;
    font-size: 12px;
  }
  .sidenav{
    transition: width .3s ease;
    width: 65px;
    height: 350px;
  }
  .sidenav.expand{
    width: 140px;
  }
  .menu li{
    cursor: pointer;
    padding: 10px 20px;
    list-style: none;
    white-space: nowrap;
    text-align: left;
    box-sizing: border-box;
  }
  .menu.shrink li{
    text-align: center;
  }
  .text-right{
    text-align: right !important;
  }
  .icon{
    font-size: 16px;
    vertical-align: middle;
  }
  .menu .display-style{
    padding-left: 0;
    padding-right: 0;
  }
  .display-style .icon{
    font-size: 10px;
  }
  .display-style .icon:before{
    padding: 10px;
    background-color: #e5e9f2;
  }
</style>