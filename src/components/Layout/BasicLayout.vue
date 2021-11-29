<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline" @click="clickNav">
        <template v-for="item in menus" :key="item.path">
          <a-menu-item v-if="!item.children" :key="item.path">
            <pie-chart-outlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
          <a-sub-menu v-else :key="item.path">
            <template #title>
              <span>
                <user-outlined />
                <span>{{ item.meta.title }}</span>
              </span>
            </template>
            <a-menu-item v-for="child in item.children" :key="child.path">{{ child.meta.title }}</a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout style="min-height: 100vh">
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px;min-height: calc(100% - 64px - 70px)">
        <!-- 面包屑 -->
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="(item, index) in breadList" :key="item.name">
            <span v-if="index === breadList.length - 1">
              {{item.meta.title}}
            </span>
            <span v-else-if="item.children">
              {{item.meta.title}}
            </span>
            <router-link v-else :to="item.path">
              {{item.meta.title}}
            </router-link>
          </a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: 'calc(100% - 54px)' }">
          <router-view />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
import { PieChartOutlined, UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
import handleBread from './useBread'
import useMenu from './useMenu'
export default defineComponent({
  components: {
    PieChartOutlined,
    UserOutlined
  },

  setup () {
    // 面包屑
    const { breadList } = handleBread()
    // 菜单
    const { selectedKeys, collapsed, menus, clickNav } = useMenu()
    console.log(menus)
    return {
      breadList,
      selectedKeys,
      collapsed,
      menus,
      clickNav
    }
  },

  created () {
    console.log(this.$route.matched)
  }

});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>