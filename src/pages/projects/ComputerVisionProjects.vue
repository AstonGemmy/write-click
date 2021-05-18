<template>  
  <div>
    <MainSectionTitle fa-icon="fa fa-robot" title-text="COMPUTER VISION PROJECTS" />
    <ProjectCard :page-theme-color="color" :projects="projects" />
  </div>
</template>

<script>

  import MainSectionTitle from '../../shared/MainSectionTitle'
  import ProjectCard from '../../shared/ProjectCard'

  export default {
    name: 'Computer Vision Projects',
    components: { MainSectionTitle, ProjectCard },
    data() {
      return {
        projects: [
          {
            id: "app_one",
            title: "Computer Vision App 1",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "completed",
            content: `This is a simple computer vision project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
          },
          {
            id: "app_two",
            title: "Computer Vision App 2",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "pending",
            content: `This is a simple computer vision project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
          }
        ]
      }
    },
    props: {
      color: String
    },
    methods: {
      setColor(color) {
        this.$emit('setColor', color)
      }
    },
    created() {
      this.setColor(this.color)
    }
  }
</script>