<template>
  <div>
    <div @click="mobileNavOpen = !mobileNavOpen">
    <i
      class="bi bi-list mobile-nav-toggle d-xl-none"
      :class="mobileNavOpen ? 'bi-x' : 'bi-list'"
      
    ></i>
</div>
    <header
      id="header"
      :class="{ 'mobile-nav-active': mobileNavOpen }"
      class="d-flex flex-column justify-content-center"
    >
      <nav id="navbar" class="navbar nav-menu">
        <ul>
          <li>
            <a
              href="#home"
              class="nav-link scrollto active"
              @click="navbarlinksActive()"
              
              ><i class="bx bx-home"></i> <span>Home</span></a
            >
          </li>
          <li>
            <a
              href="#about"
              class="nav-link scrollto"
              @click="navbarlinksActive()"
              ><i class="bx bx-user"></i> <span>About</span></a
            >
          </li>
          <li>
            <a
              href="#resume"
              class="nav-link scrollto"
              @click="navbarlinksActive()"
              ><i class="bx bx-file-blank"></i> <span>Resume</span></a
            >
          </li>
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
          <li>
            <a
              href="#contact"
              class="nav-link scrollto"
              @click="navbarlinksActive()"
              ><i class="bx bx-envelope"></i> <span>Contact</span></a
            >
          </li>
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
      mobileNavOpen: false,
    };
  },

  mounted() {
  },
  methods: {
    navbarlinksActive() {
      const navbarlinks = this.select("#navbar .scrollto", true);
      const sections = navbarlinks.map((navbarlink) => {
        if (!navbarlink.hash) return null;
        return this.select(navbarlink.hash);
      });
      const position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink, i) => {
        const section = sections[i];
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });

      //   let navbarlinks = this.select("#navbar .scrollto", true);
      //   let position = window.scrollY + 200;
      //   navbarlinks.forEach((navbarlink) => {
      //     if (!navbarlink.hash) return;
      //     let section = this.select(navbarlink.hash);
      //     if (!section) return;
      //     if (
      //       position >= section.offsetTop &&
      //       position <= section.offsetTop + section.offsetHeight
      //     ) {
      //       navbarlink.classList.remove("active");
      //       navbarlink.classList.add("active");
      //     } else {
      //       navbarlink.classList.remove("active");
      //     }
      //   });
    },
    // mobileview() {
    //   this.select("body").classList.toggle("mobile-nav-active");
    //   this.classList.toggle("bi-list");
    //   this.classList.toggle("bi-x");
    // },
  },
};
</script>
<style scoped src="../style/css/style.css"></style>