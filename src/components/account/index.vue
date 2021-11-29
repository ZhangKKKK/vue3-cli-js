<template>

  <a-row style="margin-bottom: 20px">
    <a-col :md="{ span: 8}" :xl="{ span: 8}" :xxl="{ span: 6}" class="item">
      <span>客户名称：</span>
      <a-input v-model:value="filter.accountName" placeholder="请输入客户名称" @pressEnter="clickSearch" style="flex: 1"/>
    </a-col>
    <a-col :md="{ span: 8, offset: 1 }" :xl="{ span: 8, offset: 1 }" :xxl="{ span: 5, offset: 1 }">
      <a-button type="primary" style="margin-right: 20px;" @click="clickSearch">查询</a-button>
      <a-button @click="reset">重置</a-button>
    </a-col>
  </a-row>

  <a-table rowKey="AccountId" :dataSource="dataSource" :columns="columns" :pagination="false" />

  <a-pagination :current="page.PageIndex" :pageSize="page.PageSize" :total="page.Total" @change="pageChange" show-less-items />
</template>
<script>
import getAccountListApi from './getAccountList'
import { useStore } from 'vuex'
export default {
  setup () {
    const { getAccountList, accountList, filter, pageChange, clickSearch, reset, page } = getAccountListApi()
    const store = useStore()
    console.log(store.state, page)
    return {
      clickSearch,
      reset,
      getAccountList,
      accountList,
      filter,
      page,
      pageChange,
      dataSource: accountList,
      columns: [
        { title: 'ID', dataIndex: 'AccountId' },
        { title: '客户名称', dataIndex: 'AccountName' }
      ]
    }
  }
}
</script>