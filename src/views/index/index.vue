<template>
  <div class="index">
      <div class="main">
          <router-view/>
      </div>
      <footer>
           <span v-for="(item,index) in foot" :key="index" @click="btnFn(index)" :class="{active:ind===index}">{{item.txt}}</span>
      </footer>
  </div>
</template>

<script>
export default {
      data(){
          return {
              ind:0,
              foot:[
                  {
                      url:'/index/home',
                      txt:'首页',
                     
                  },
                    {
                      url:'/index/my',
                      txt:'我的',
                     
                  }
              ]
          }
      },
      methods:{
          btnFn(index){
              this.ind=index
              this.$router.push({path:this.foot[index].url}).catch(el=>{})
          }
      }
}
</script>

<style>
    .main{
        flex: 1;
        width:100%;
        background: #f4f4f4;
    }
    footer{
        width:100%;
        height:50px;
       border-top: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    footer span{
        flex:1;
        height:100%;
        text-align: center;
        line-height: 50px;
    }
     footer span.active{
         color: red;
     }
</style>