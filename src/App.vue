<template>
  <div id="app">
    <d-menu>
      <d-menuitem index="1">item1</d-menuitem>
      <d-submenu index="2" title="item2">
        <d-menuitem index="2-1">item2-1</d-menuitem>
        <d-menuitem index="2-2">item2-2</d-menuitem>
        <d-menuitem index="2-3">item2-3</d-menuitem>
      </d-submenu>
      <d-menuitem index="3">item3</d-menuitem>
    </d-menu>

    <br>

    <d-menu :side-nav="true">
      <d-menuitem index="a" icon-class="d-icon-database">
        数据分配
      </d-menuitem>
      <d-submenu index="b" title="资源分配" icon-class="d-icon-user">
        <d-menuitem index="b-a" icon-class="d-icon-operat-para-config">
          数据库分配
        </d-menuitem>
        <d-menuitem index="b-c" icon-class="d-icon-tool-allocation">
          Hadoop分配
        </d-menuitem>
        <d-submenu index="b-d" title="服务器分配" icon-class="d-icon-tool-allocation">
          <d-menuitem index="b-d-a" icon-class="d-icon-agent-config">
            FTP 分配
          </d-menuitem>
          <d-menuitem index="b-d-b" icon-class="d-icon-command-config">
            SFTP 分配
          </d-menuitem>
          <d-menuitem index="b-d-c" icon-class="d-icon-data-dictionary">
            其他分配
          </d-menuitem>
        </d-submenu>
      </d-submenu>
      <d-menuitem index="c" icon-class="
      d-icon-api">
        租户配置
      </d-menuitem>
      <d-menuitem index="d" icon-class="d-icon-agent-config">
        工具分配
      </d-menuitem>
    </d-menu>
  </div>
</template>

<script>
import DMenu from './components/DMenu'
import DSubmenu from './components/DSubmenu'
import DMenuitem from './components/DMenuitem'

export default {
  name: 'app',
  components: {
    DMenu,
    DSubmenu,
    DMenuitem
  }
}
</script>

<style>
#app {
  font-family: Arial,Helvetica,"Microsoft YaHei","微软雅黑","SimHei",sans-serif;
  box-sizing: border-box;
}
</style>
