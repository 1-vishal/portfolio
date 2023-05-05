<template>
  <div>
    <div @click="mobileNavOpen = !mobileNavOpen">
      <i class="bi bi-list mobile-nav-toggle d-xl-none" :class="mobileNavOpen ? 'bi-x' : 'bi-list'"></i>
    </div>
    <header id="header" :class="{ 'mobile-nav-active': mobileNavOpen }" class="d-flex flex-column justify-content-center">
      <nav id="navbar" @scroll="navbarlinksActive()" class="navbar nav-menu">
        <ul>
          <li v-for="(section, index) in sections" :key="index">
            <a :href="'#'+section.id" class="nav-link scrollto" @click.prevent="scrollToSection(section)" :class="{ 'active': isActive(index) }"><i :class="section.iconClass"></i>
              <span>{{ section.name }}</span></a>
          </li>
          <!-- <li>
            <a href="#about" class="nav-link scrollto" @click="navbarlinksActive()"><i class="bx bx-user"></i>
              <span>About</span></a>
          </li>
          <li>
            <a href="#resume" class="nav-link scrollto" @click="navbarlinksActive()"><i class="bx bx-file-blank"></i>
              <span>Resume</span></a>
          </li> -->
          <!-- <li>
            <a
              href="#portfolio"
              class="nav-link scrollto"
              @click="navbarlinksActive()"
              ><i class="bx bx-book-content"></i> <span>Portfolio</span></a
            >
          </li> -->
          <!-- <li>
            <a
              href="#services"
              class="nav-link scrollto"
              @click="navbarlinksActive()"
              ><i class="bx bx-server"></i> <span>Services</span></a
            >
          </li> -->
          <!-- <li>
            <a href="#contact" class="nav-link scrollto" @click="navbarlinksActive()"><i class="bx bx-envelope"></i>
              <span>Contact</span></a>
          </li> -->
        </ul>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name: "NavMenu",
  data() {
    return { 
      sections: [
        { title: 'Home', id: 'home', iconClass: 'bx bx-home' },
        { title: 'About', id: 'about', iconClass: 'bx bx-user' },
        { title: 'Resume', id: 'resume', iconClass: 'bx bx-file-blank' },
        { title: 'Contact', id: 'contact', iconClass: 'bx bx-envelope' }
      ],
      activeIndex: null,
      mobileNavOpen: false,
    };
  },

  methods: {
    scrollToSection(section) {
      const target = document.querySelector(`#${section.id}`);
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    },
    isActive(index) {
      return this.activeIndex === index;
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    handleScroll() {
      const position = window.scrollY;
      this.sections.forEach((section, index) => {
        const target = document.querySelector(`#${section.id}`);
        if (target) {
          const isSectionActive = position >= target.offsetTop - 200 && position <= target.offsetTop + target.offsetHeight - 200;
          if (isSectionActive) {
            this.setActiveIndex(index);
          }
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style scoped src="../style/css/style.css"></style>
