<template lang="pug">
dropdown(title="Additional")
  .row.mb-2
    .col-12.pb-3(v-for="skill in skills")
      .row
        .col.text-left
          h5.card-title
            | {{skill.category}}
      .row
        .col-lg-3.col-md-4.col-sm-4(v-for="subSkill in skill.subSkills")
          | {{subSkill}}
</template>

<script>
import dropdown from "~/components/Dropdown";
export default {
  components: {
		dropdown
  },
  data() {
    return {
      skills: [
        {
          category: "Languages",
          subSkills: [
            "HTML5",
            "ASP",
            "C++",
            "C#",
            "COBOL",
            "Html",
            "Java",
            "PHP",
            "Visual Basic",
            "Python",
            "PowerShell",
          ]
        },
        {
          category: "Testing",
          subSkills: ["Pester", "Gatling", "Cypress", "Scout", "Sentry"]
        },
        {
          category: "OS",
          subSkills: ["Dos", "Unix", "Mac", "Windows", "Ubuntu"]
        },
        {
          category: "Windows 365",
          subSkills: [
            "Project",
            "Access",
            "Word",
            "Excel",
            "FrontPage",
            "PowerPoint",
            "VISIO"
          ]
        },
        {
          category: "Other",
          subSkills: [
            "Dreamweaver",
            "PHPmyAdmin",
            "AndrioStudio",
            "Xamarin",
            "JIRA",
            "Docker"
          ]
        }
      ]
    };
  },
  head() {
    return {
      titleTemplate: "Contact: %s"
    };
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