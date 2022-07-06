<template>
  <div id="app">
    <div class="content">
      <my-header @addevent="getvalue" />
      <my-list :listLabel="listLabel" />
      <my-footer />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  data(){
    return {
      listLabel: JSON.parse(window.localStorage.getItem('list')) || [
        { name: "vue", checked: true },
        { name: "uni-app", checked: false },
        { name: "axios", checked: false },
        { name: "webpack", checked: false },
      ],
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  watch:{
    // watch完整写法 然后开启深度监视,数据内部的布尔值就会被监听到然后布尔值发生改变的时候也会被存贮
    listLabel:{
      deep:true,
      handler(val){
        window.localStorage.setItem('list',JSON.stringify(val))
      },

      
    }
  },
  methods:{
    getvalue(e){
      this.listLabel.push({
        name: e, checked: false
      })
    }
  }
};
</script>

<style>
  .content{
    width: 800px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
  }
  ul,li{
    list-style: none;
    /* outline: none; */
    margin: 0;
    padding: 0;
  }

</style>
