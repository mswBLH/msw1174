<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style >
    *{
         padding: 0;
         margin: 0;
         list-style: none;
     }
     html,body,#app{
       width:100%;
       height:100%;
     }
     #app>div{
       width:100%;
       height:100%;
       display: flex;
       flex-direction: column;
       
     }
</style>
