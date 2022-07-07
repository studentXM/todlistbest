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
        <template slot-scope="scope">
          <el-checkbox
            v-model="scope.row.checked"
            @change="add(scope.row)"
          ></el-checkbox>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="名称">
          <template slot-scope="scope">  
            <el-input v-if="shownow == scope.row.name" size="mini" v-model="nowinp" @blur="savevalue(scope)" v-focus></el-input>
            <span v-show="shownow != scope.row.name">{{scope.row.name}}</span>
          </template>
      </el-table-column>

      <el-table-column>
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            @click="deletlist(scope)"
            style="margin-left: 10px"
          >
            删除
          </el-button>
          <el-button size="mini" @click="showoption(scope)"> 编辑 </el-button>
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
      nowinp:'',
      shownow:'',
    };
  },
  components: {},
  computed: {},
  directives: {
    focus: {
      // 指令的定义
      inserted: (el) => {
        // 聚焦元素
        el.querySelector('input').focus()
        el.focus()
      }
    }
  },
  methods: {
    test() {
      this.$bus.$emit("test", "传递成功");
    },

    add(e) {
      console.log(e);
      this.selected.push(e);
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
      return e.name;
    },
    showoption(e){
      this.shownow = e.row.name
      this.nowinp = e.row.name
    },
    savevalue(e){
      // alert()
      this.list[e.$index].name = this.nowinp;
      this.shownow = ''
    },
    cleardone() {
      // 循环判断再删除时 索引值应该在修改原数组之后 进行对应的修改 才能匹配进度
      // forEach 会跟不上删除的进度 即使修改了 索引值 还是会继续前进 所以这里使用普通for循环
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].checked == true) {
          this.list.splice(i, 1);
          i--;
        }
      }
    },
  },
};
</script>

<style scoped>
.el-button {
  float: right;
}
</style>