<template>
  <div>
    <MainSectionTitle fa-icon="fa fa-laptop-code" title-text="MATLAB PROJECTS" />
    <ProjectCard :page-theme-color="color" :projects="projects" />
  </div>
</template>

<script>

  import MainSectionTitle from '../../shared/MainSectionTitle'
  import ProjectCard from '../../shared/ProjectCard'
  
  export default {
    name: 'Matlab Projects',
    components: { MainSectionTitle, ProjectCard },
    data() {
      return {
        projects: [
          {
            id: "app_one",
            title: "Data Science App 1",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "completed",
            content: `This is a simple data science project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
          },
          {
            id: "app_two",
            title: "Data Science App 2",
            src: "/images/cover pictures/desktop-in-office.jpg",
            status: "pending",
            content: `This is a simple data science project for visualizing effects by a computer for the purpose of...men i don't know wtf to write here anymore.`
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