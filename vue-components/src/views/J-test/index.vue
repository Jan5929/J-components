<template>
  <!-- <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </el-row> -->
  <VirtualList :listData="data" :itemSize="100" />
</template>
<script lang="ts">
import VirtualList from '../J-list/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  // setup () {},
  components: { VirtualList },
  data () {
    const d = []
    for (let i = 0; i < 100000; i++) {
      d.push({ id: i, value: i })
    }
    return {
      data: d
    }
  }
})
</script>
<style scoped>
.infinite-list-container {
  height: 900px;
}
</style>
