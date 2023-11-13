<template lang="pug"> 
b-container-fluid.text-center.vh-100
  b-row.justify-content-center.vh-100.px-3.py-2
    b-col.h-100.d-flex.flex-column
      b-row
        b-col
          nuxt-link(to="/")
            b-img.rounded-circle(src="~assets/me2.jpg" alt="Derek Johnston" fluid thumbnail)
      b-row.pt-2
        b-col.p-0
          nuxt-link(to="/")
            h1 Derek Johnston
      b-row.pt-2
        b-col.p-0
            b-button.m-1(variant="success"
              activeClass="active",
              to="/knowledge") Knowledge
      b-row
        b-col.p-0
            b-button.m-1(variant="success"
              activeClass="active",
              to="/projects"
              v-if="!currentRouteName.includes('projects')") Projects
      b-row.pt-2.bg-dark.bg-opacity-10(v-if="currentRouteName.includes('projects')")
        b-col.p-0
          b-button.mt-1(variant="success"
            activeClass="active",
            to="/projects") Projects 
          hr
          b-row
            b-col.p-0
              a(href="https://www.workatyhp.com/" target="_blank")
                b-button.m-1(variant="success")
                  | YHP
          b-row
            b-col.p-0
              a(href="https://www.edatanow.com/" target="_blank")
                b-button.m-1(variant="success")
                  | E-Data Now!
          b-row
            b-col.p-0
              b-button.m-1(variant="success"
                activeClass="active",
                to="/projects/hackathons") Hackathons
          b-row.pt-2
            b-col.p-0
              b-button.m-1(variant="success"
                activeClass="active",
                to="/projects/communication") Communication
          b-row.pt-2
            b-col.p-0
              b-button.m-1(variant="success"
                activeClass="active",
                to="/projects/EDataNow") EDataNow
      b-row
        b-col.p-0
          b-button.m-1(variant="success"
            activeClass="active",
            to="/contact") Contact
      b-row.flex-grow-1.align-items-end.px-3.py-2
        b-col
          b-row.social-footer-icons
            //- a.col-sm-3(href="https://www.facebook.com/DJDesign.ca")
              i.fa.fa-facebook(aria-hidden="true")
            b-col
              a.text-white(href="https://github.com/derekjj")
                i.fa.fa-github(aria-hidden="true")
            b-col
              a.text-white(href="https://gitlab.com/derekjj")
                i.fa.fa-gitlab(aria-hidden="true")
            b-col
              a.text-white(href="https://www.linkedin.com/in/derekjjohnston")
                i.fa.fa-linkedin(aria-hidden="true")
            b-col
              router-link.text-white(to="/contact")
                i.fa.fa-address-card-o(aria-hidden="true")
</template>

<script>
// TODO: add from validation
export default {
  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }
}
</script>

<style>
a.text-white {
  text-shadow: #222 0.1em 0.1em 0.1em;
}
.b-sidebar-body {
  overflow-x: hidden !important;
} 
#__layout{
  overflow-x: hidden !important;
}
</style>