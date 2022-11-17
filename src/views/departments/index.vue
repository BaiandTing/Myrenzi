<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 组织架构多常采用树形金字塔式结构 -->

      <!-- 首先实现头部的结构，采用element的**行列布局** -->
      <el-card class="tree-card">
        <!-- 用了一个行列布局 -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <!-- 放置树形结构 -->
        <el-tree
          :data="departs"
          :props="defaultProps"
          :default-expand-all="true"
        >
          <!-- 传入内容 插槽内容 会循环多次 有多少节点 就循环多少次 -->
          <!-- 作用域插槽 slot-scope="obj" 接收传递给插槽的数据   data 每个节点的数据对象-->
          <tree-tools
            slot-scope="{ data }"
            :tree-node="data"
            @delDepts="getDepartments"
            @addDepts="addDepts"
          />
          <!-- 放置树形结构 -->
        </el-tree>
      </el-card>
    </div>

    <!-- 放置新增弹层组件 -->
    <add-dept :show-dialog="showDialog" :tree-node="node" />
  </div>
</template>

<script>
import TreeTools from './components/tree-tools.vue'
import { getDepartments } from '@/api/departments'
import { tranListToTreeData } from '@/utils/index'
import AddDept from './components/add-dept.vue'
export default {
  components: { TreeTools, AddDept },
  data() {
    return {
      departs: [],
      defaultProps: {
        label: 'name' // 表示 从这个属性显示内容
      },
      company: { }, // 就是头部的数据结构
      showDialog: false, // 显示窗体
      node: null
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    // 得到 设置 信息
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人', id: '' }
      this.departs = tranListToTreeData(result.depts, '') // 需要将其转化成树形结构
      // console.log(result)
      // this.departs = result.depts
    },
    // 删除
    delDepts() {

    },
    // 弹出层
    addDepts(node) {
      this.showDialog = true // 显示弹层
      // 因为node是当前的点击的部门， 此时这个部门应该记录下来,
      this.node = node
    }
  }
}
</script>

<style scoped>
.tree-card {
  padding: 30px 140px;
  font-size: 14px;
}
</style>
