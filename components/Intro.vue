<template lang="pug">
  transition(name="fade")  
    .card(v-if="isShowing")
      b-img.card-image-top(:src="require('~/assets/tech-bg.jpg')" fluid)
      .card-body.m-3
        p
          i “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
          br
          | ― Martin Fowler
        br
        | Currently developing projects with Azure, AWS, Docker, NuxtJS, VueJS, NextJS, ReactJS, NodeJS, Flutter(Dart).
        br
        br
</template>
<script>
export default {
  data() {
    return {
      isShowing: false
    };
  },
  mounted() {
    this.isShowing = true;
  }
};
</script>