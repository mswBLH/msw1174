<template>
  <div class="home">
       <div class="header">
           <span><</span>
           <span>多加网</span>
           <span></span>
       </div>
       <div class="main">
           <div class="swiper-container">
               <div class="swiper-wrapper">
                   <div class="swiper-slide">1</div>
                    <div class="swiper-slide">2</div>
                     <div class="swiper-slide">3</div>
               </div>
           </div>
       </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import "swiper/css/swiper.min.css"
export default {
    name:'home',
    created(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container')
        })
    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>
.swiper-container{
    width:100%;
    height: 200px;
    background: red;
}
</style>