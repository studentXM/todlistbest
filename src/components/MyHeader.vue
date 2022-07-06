<template>
  <div>
      <el-input class="" size="small"
      v-model="headervalue" 
      placeholder="请输入你的任务名称,按回车添加"
      @keydown.enter.native="addeven">

      </el-input>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data(){
    return{
      headervalue:''
    }
  },
  methods:{
    addeven(){
      if(this.headervalue!=''){
        this.$emit('addevent',this.headervalue)
        this.headervalue=''
      }
    },
    tx(e){
      // alert(e)
      console.log(e)
    }
  },
  mounted(){
    this.$bus.$on('test',this.tx)
  }
};
</script>

<style lang="less" scoped>


</style>
