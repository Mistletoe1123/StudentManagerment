<template>
  <div>{{content}}</div>
</template>

<script>
// @ is an alias to /src

export default {
  data(){
    return{
      content:""
    }
  },
  mounted(){
    this.content = process.env.VUE_APP_NAME
    console.log(process.env)//{NODE_ENV: "development", BASE_URL: ""}
    //console.log(process.env.NODE_ENV);//development
  }
};
</script>
