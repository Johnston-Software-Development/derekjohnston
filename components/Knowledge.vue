<template lang="pug">
div
  dropdown(title="Knowledge", isOpen=true)
    .row
      .col-12.pb-3(v-for="skill in skills")
        .row
          .col.text-left
            h5.card-title
              | {{skill.category}}
        .row
          .col-lg-3.col-md-4.col-sm-4(v-for="subSkill in skill.subSkills")
            | {{subSkill}}
    //- dropdown(:id="project.id",
      :title="project.name",
      variant="success",
      :localLink="project.local && project.address.length > 0 && project.address",
      :link="!project.local && project.address.length > 0 && project.address")
      .card-body
        b-collapse#collapse-primary(visible)
  Secondary
</template>

<script>
import dropdown from "~/components/Dropdown";
import Secondary from "~/components/Knowledge/Secondary";
export default {
  components: {
		dropdown,
    Secondary
  },
  data() {
    return {
      isShowing: false,
      skills: [
        {
          category: "JavaScript",
          subSkills: ["JavaScript", "ReactJS", "NodeJS", "NuxtJS/VueJS"]
        },
        {
          category: "Databases",
          subSkills: ["SQLite", "MongoDB", "SQLServer", "MySQLi", "PostgreSQL"]
        },
        {
          category: "Frameworks",
          subSkills: ["NuxtJS/VueJS", "Ruby on Rails", "Flutter"]
        },
        {
          category: "API Integration",
          subSkills: [
            "Google",
            "Facebook",
            "Twitter",
            "Twitch",
            "WoW",
            "Github"
          ]
        }
      ]
    };
  },
  head() {
    return {
      titleTemplate: "Contact: %s"
    };
  },
  mounted() {
    this.isShowing = true;
  }
};
</script>

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}

.card {
  margin-top: 10px;
}

.p {
  text-indent: 2em;
}
</style>