<template>  
  <div>
    <MainSectionTitle fa-icon="fa fa-bezier-curve" title-text="MACHINE LEARNING PROJECTS" />
    <ProjectCard :page-theme-color="color" :projects="projects" />
  </div>
</template>

<script>

  import MainSectionTitle from '../../shared/MainSectionTitle'
  import ProjectCard from '../../shared/ProjectCard'

  export default {
    name: 'Python Projects',
    components: { MainSectionTitle, ProjectCard },
    data() {
      return {
        projects: [
          {
            id: "app_one",
            title: "AI App 1",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "completed",
            content: `This is a machine learning project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
          },
          {
            id: "app_two",
            title: "AI App 2",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "pending",
            content: `This is a machine learning project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
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