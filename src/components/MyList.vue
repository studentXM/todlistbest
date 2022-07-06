<template>
  <div class="mylist" @click="test">
    <el-table
      :data="list"
      :show-header="false"
      ref="listtable"
      @selection-change="changebox"
      :row-key="getRowKeys"
    >
      <el-table-column
        prop="checked"
        label="勾选"
        type="selection"
        :reserve-selection="true"
      >
        <template  slot-scope="scope">
                  <el-checkbox v-model="scope.row.checked" @change="add(scope.row)"></el-checkbox>
              </template>
      </el-table-column>

      <el-table-column prop="name" label="名称"> </el-table-column>

      <el-table-column>
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="deletlist(scope)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div
      style="height: 30px;padding-left: 14px;padding-top:15px; flex;align-items: center;"
    >
      <el-checkbox @change="choce">全选/取消</el-checkbox>

      <el-button type="danger" size="small" @click="cleardone"
        >清除已完成任务</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  props: ["listLabel"],
  data() {
    return {
      list: this.listLabel,
      selected: [],
    };
  },
  components: {},
  computed: {},
  methods: {
    test() {
      this.$bus.$emit("test", "传递成功");
    },
    add(e){
      console.log(e)
      this.selected.push(e)
    },
    choce(e) {
      if (e) {
        this.$refs.listtable.toggleAllSelection();
      } else {
        this.$refs.listtable.clearSelection();
      }
    },
    changebox(e) {
      this.selected = e;
    },
    deletlist(index) {

      this.list.splice(index.$index, 1);
    },
    getRowKeys(e) {

      return e.name
    },
    cleardone() {
      // console.log(this.$refs.listtable.selection);
      this.list.map((element,i) => {

        if(element.checked == true){
          this.list.splice(i, 1);
          i--
        }
      });
    },
  },
};
</script>

<style scoped>
.el-button {
  float: right;
}
</style>