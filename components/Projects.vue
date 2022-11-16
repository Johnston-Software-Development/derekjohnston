<template lang="pug">
.card.my-2
  .card-header.bg-success
    H1 Projects
  .card-body
    .row
      .col-sm-12.col-md-12.col-lg-6.col-xxl-4.my-1(v-for="project in projects")
        dropdown(:id="project.id",
          :title="project.name",
          :localLink="project.local && project.address.length > 0 && project.address",
          :link="!project.local && project.address.length > 0 && project.address")
          .card.m-0.p-0
            .card-header.text-black(v-if="project.quote")
                | "{{project.quote}}"
            .card-body(v-if="project.about")
              p.card-text {{project.about}}
            .card-footer(v-if="project.details || project.techs")
              .card-text(v-if="project.details") {{project.details}}
              .card-text(v-if="project.techs && project.techs.length > 0")
                | {{project.techs.join(', ')}}.
          
</template>
<script>
import dropdown from "~/components/Dropdown";
export default {
	components: {
		dropdown,
	},
	data() {
		return {
			projects: [
				{
					id: "5",
					name: "YHP",
					address: "https://youville-haussmannpark.com/",
					// local: true,
					// image: "https://avatars2.githubusercontent.com/u/41805626?s=200&v=4",
					about: "Lead Full Stack Developer",
					quote:
						"YHP is an experience agency. Not just experiential, and not just branded events. YHP specializes in tapping into human experiences to create lasting brand engagement for its clients. YHP works with brands to plan, execute and capture emotional and memorable moments. Through impossibly on-point experiential campaigns and industry best practices, YHP is strengthening relationships between brands and their customers. Armed with a deep understanding of the emerging arts, culture and the need to share human experiences, YHP builds unique brand experiences and engagement strategies to engage with the mindset and motivations of real people.",
					responsiblities: [
						"Constantly improving the code base",
						"Deciding if development is possible or not while giving possible alternatives",
						"Assisting with consultation and troubleshooting of technical problems",
						"Helping provide estimations of work",
						"Coachin",
						"Working on multiple projects at the same time",
						"Merging and Deploying projects",
						"Upgrading library dependancies.",
					],
					techs: [
						"GatsbyJS",
						"NextJS",
						"ReactJS",
						"TypeScript",
						"JavaScript",
						"WordPress",
						"Symfony",
						"PhP",
						"Docker",
						"AWS",
						"ClickUp",
						"TeamWork",
						"Bitbucket",
						"Playfab",
						"SaSS",
					],
				},
				{
					id: "2",
					name: "E-Data Now!",
					address: "./projects/EDataNow",
					local: true,
					image:
						"https://media-exp1.licdn.com/dms/image/C4D0BAQGKWsYf3h1Brg/company-logo_200_200/0?e=1597881600&v=beta&t=xCDbYKHX1utCfufYIgnG1Cd3EaSAXBXZrsxnM9Wn1ac",
					about:
						"At this Audit and Inspection company, working on a large administrative website and 2 supporting monbile apps.",
				},
				{
					id: "3",
					name: "Hackathons",
					address: "./projects/hackathons",
					local: true,
					image: "https://avatars2.githubusercontent.com/u/41805626?s=200&v=4",
					about: "Examples of Hackathon projects.",
				},
				{
					id: "2",
					name: "Oiika",
					address: "https://Oiika.com",
					image:
						"https://media-exp1.licdn.com/dms/image/C560BAQE4SjQ4e5b-sg/company-logo_200_200/0?e=1597881600&v=beta&t=i3hWuPgeSdgVqgUBJ9rPgA9Um6ItpRyLqrq5lJAP90Q",
					about: "Connecting tutors and tutees!",
				},
				{
					id: "1",
					name: "Who's Jimmy",
					address: "http://whosjimmy.com/",
					image: "http://whosjimmy.com/img/JIMMY_CLAWS.jpg",
					about:
						"Personal Portfolio of a Skilled Film Machinist, website has been reconstructed, deploy pending client approval.",
				},
				{
					id: "0",
					name: "TBD",
					address: "./projects/communication",
					local: true,
					image: "/taptalk.png",
					about:
						"Communication App(iOS, Andriod, and UWP), Designed for non-verbal or limited verbal people.",
				},
			],
		};
	},
};
</script>

<style scoped>
.card-header {
	background-color: #fff;
}
</style>
