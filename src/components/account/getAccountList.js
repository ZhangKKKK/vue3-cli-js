import { onMounted, ref, watch, reactive } from 'vue'
import { getAccountList as getAccountListApi } from '@/api/index'
// 获取客户列表
export default function getUserList () {
  const page = reactive({
    PageIndex: 1,
    PageSize: 10,
    Total: 0
  })
  
  const filter = reactive({
    accountName: '测试'
  })
  // 客户列表变量
  let accountList = ref([])
  // 获取客户列表
  const getAccountList = async () => {
    const params = {
      ...page,
      ...filter
    }
    const { CustomerModels, Total } = await getAccountListApi(params)
    accountList.value = CustomerModels || []
    page.Total = Total
  }
  const clickSearch = () => {
    page.PageIndex = 1
    page.PageSize= 10
    getAccountList()
  }
  const reset = () => {
    filter.accountName = undefined
    page.PageIndex = 1
    page.PageSize = 10
    getAccountList()
  }
  const pageChange = (current) => {
    page.PageIndex = current
    getAccountList()
  }
  watch(accountList, (newValue, oldValue) => {
    console.log(newValue, oldValue)
  }, { deep: true })
  onMounted(getAccountList)
  return {
    filter,
    page,
    getAccountList,
    pageChange,
    clickSearch,
    reset,
    accountList
  }
}