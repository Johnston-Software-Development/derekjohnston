<template lang="pug">
div
  .d-md-none
    Header
    nuxt.body.mt-5.mb-2.pt-3
  .d-none.d-md-block
    .row.mx-0
      .col-md-4.col-lg-3.bg-success
      .col-md-4.col-lg-3.bg-success.position-fixed
        side-nav
      .col-md-8.col-lg-9.pr-4
        nuxt.body.my-2
  b-sidebar#sidebar-variant(title="" bg-variant="success" text-variant="light" shadow)
    side-nav
</template>

<script>
import Header from "~/components/Header.vue";
import SideNav from "~/components/SideNav.vue";
export default {
	components: {
		Header,
		SideNav,
	},
};
</script>

<style>
.carousel-indicators,
.carousel-control-prev,
.carousel-control-next {
	background-color: #222;
	opacity: 0.1;
	transition: opacity 0.15s ease;
}
.carousel-indicators {
	margin-bottom: -0.01em;
	opacity: 0.3;
	height: 40px;
}

h1,
h4 {
	text-shadow: #222 0.1em 0.1em 0.1em;
	color: #fff;
}

h2 {
	color: #28a745;
}

.card-header {
	background-color: #28a745;
	color: #fff;
}

.body {
	margin: 0 auto;
	/* display: flex; */
	justify-content: center;
	align-items: center;
	text-align: center;
}

::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}

.bg-transparent {
	opacity: 1;
	filter: alpha(opacity=0); /* For IE8 and earlier */
}

.hoverable:hover {
	-webkit-box-shadow: none;
	box-shadow: 3px 5px #cccccc;
	-webkit-transition: all 0.8s ease-in-out;
	transition: all 0.8s ease-in-out;
}
.hoverable {
	-webkit-box-shadow: none;
	box-shadow: 0px 0px 0px 0px #cccccc;
	-webkit-transition: all 0.5s ease-out;
	transition: all 0.5s ease-out;
}

html {
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
		Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
a {
	color: black;
	text-decoration: none !important;
}
.dropdown-item.active {
	background-color: #cccccc;
}
.dropdown-item.active:active {
	background-color: #cccccc;
}

.button--green {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #3b8070;
	color: #3b8070;
	text-decoration: none;
	padding: 10px 30px;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	display: inline-block;
	border-radius: 4px;
	border: 1px solid #35495e;
	color: #35495e;
	text-decoration: none;
	padding: 10px 30px;
	margin-left: 15px;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.75s ease-in;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
