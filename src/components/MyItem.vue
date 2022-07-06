<template>
  
  <div class="itemId">
      <ul class="item_ul">
        <li v-for="item in listArr" :key="item.name" class="item_li">
            {{item.name}}
        </li>
      </ul>
  </div>
</template>



<script>
export default {
  name: "MyItem",
  props:['label'],
  data() {
    return {
      checked: false,
      labelName: "事件",
      listArr:this.label,
    };
  },
};
</script>

<style scoped lang="less">

  .item_li{
    padding: 5px;
    border: 1px solid #ccc;
    margin-top: 10px;
    border-radius: 5px;
  }

</style>