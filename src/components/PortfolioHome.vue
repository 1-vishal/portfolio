<template>
  <div>
    <!-- ======= Mobile nav toggle button ======= -->
    <!-- <button type="button" class="mobile-nav-toggle d-xl-none"><i class="bi bi-list mobile-nav-toggle"></i></button> -->
    <NavMenu />

    <section id="home" class="d-flex flex-column justify-content-center">
      <div class="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Vishal Rajput</h1>
        <p>
          I'm
          <span
            class="typed"
            ref="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
          ></span>
        </p>
        <div class="social-links">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
    <!-- End home -->

    <main id="main">
      <!-- ======= About Section ======= -->
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>About</h2>
            <p></p>
          </div>

          <div class="row">
            <!-- <div class="col-lg-4">
              <img src="/img/profile-img.jpg" class="img-fluid" alt="" />
            </div> -->
            <div class="col-lg-12 pt-4 pt-lg-0 content">
              <h3>Web Developer.</h3>
              <p class="fst-italic">
                Hi! I am Vishal Rajput. I am a full stack developer with mostly
                proficient in frontend development with having 2 year of
                experience.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Birthday:</strong> <span>6 Feb 1999</span>
                    </li>
                    <!-- <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Website:</strong> <span>www.example.com</span>
                    </li> -->
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Phone:</strong> <span>+91 9557823957</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>City:</strong> <span>Delhi, India</span>
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li>
                      <i class="bi bi-chevron-right"></i> <strong>Age:</strong>
                      <span>24</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Degree:</strong>
                      <span>Masters In Computer Applications</span>
                    </li>
                    <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>rajputvishal5748@gmail.com</span>
                    </li>
                    <!-- <li>
                      <i class="bi bi-chevron-right"></i>
                      <strong>Freelance:</strong> <span>Available</span>
                    </li> -->
                  </ul>
                </div>
              </div>
              <p>
                I am a recent Computer Application post graduate with combined
                expertise in web development & design. I have been committed to
                building my career in web development & design since I began my
                career working for a software development comnpany for 2 years
                now, along with my studies. I enjoy watching my ideas and skills
                transform into innovative content that drive solutions and boost
                business performance. I am seeking a position in a leading web
                development agency, where I can use my skills to make a
                difference in my clients’ lives and further develop as a
                professional.
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- End About Section -->

      <!-- ======= Facts Section ======= -->
      <section id="facts" class="facts">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Facts</h2>
            <p>
              Here are the some personal projects which I worked on to honed my
              skills and improve my expertise in web design and development.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="count-box">
                <i class="bi bi-emoji-smile"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="232"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div class="count-box">
                <i class="bi bi-journal-richtext"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="521"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Projects</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="bi bi-headset"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="1463"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div class="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div class="count-box">
                <i class="bi bi-award"></i>
                <span
                  data-purecounter-start="0"
                  data-purecounter-end="25"
                  data-purecounter-duration="1"
                  class="purecounter"
                ></span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Facts Section -->

      <!-- ======= Skills Section ======= -->
      <SkillSection/>
      <!-- End Skills Section -->

      <!-- ======= Resume Section ======= -->
      <section id="resume" class="resume">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Resume</h2>
            <p>
              To work in an environment which encourages me to succeed and grow
              professionally where I can utilize my skills and knowledge
              appropriately
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <h3 class="resume-title">Summary</h3>
              <div class="resume-item pb-0">
                <h4>Vishal Rajput</h4>
                <p>
                  <em
                    >Innovative and deadline-driven Web Developer with 2+ years
                    of experience designing and developing Websites and WebApp
                    from initial concept to final, polished deliverable.</em
                  >
                </p>
                <ul>
                  <li>New Delhi, India</li>
                  <li>9557823957</li>
                  <li>rajputvishal5748@gmail.com</li>
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Master of Computer Applications</h4>
                <h5>2019 - 2021</h5>
                <p><em>Dr. Bhimrao Ambedkar Unversity, Agra</em></p>
                <p>
                  Persued my master along side with my job to gain experience
                  and completed my maters with 73%.
                </p>
              </div>
              <div class="resume-item">
                <h4>Bachelor of Science (Computer Science & Maths)</h4>
                <h5>2016 - 2019</h5>
                <p><em>Dev Sanskriti Vishvavidhayalya, Haridwar</em></p>
                <p>
                  To pursued my goal to be a Programmer/Developer I started with
                  Bachelor of Science with computer science and completed with
                  77% of marks
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Intermediate Web Developer</h4>
                <h5>2019 - Present</h5>
                <p><em>Clickvalley, New Delhi, India </em></p>
                <ul>
                  <li>
                    Lead in the development, and implementation of the a website
                    design, layout, and production of projects.
                  </li>
                  <li>
                    When I lead a team for a project, I ensure that I provide
                    counsel on all aspects of the project and assign the task
                    according to their skills.
                  </li>
                  <li>The work I do has quality and accuracy.</li>
                  <li>I ensure the delivery of project/task be on time.</li>
                </ul>
              </div>
              <!-- <div class="resume-item">
                <h4>Graphic design specialist</h4>
                <h5>2017 - 2018</h5>
                <p><em>Stepping Stone Advertising, New York, NY</em></p>
                <ul>
                  <li>
                    Developed numerous marketing programs (logos,
                    brochures,infographics, presentations, and advertisements).
                  </li>
                  <li>
                    Managed up to 5 projects or tasks at a given time while
                    under pressure
                  </li>
                  <li>
                    Recommended and consulted with clients on the most
                    appropriate graphic design
                  </li>
                  <li>
                    Created 4+ design presentations and proposals a month for
                    clients and account managers
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </section>
      <!-- End Resume Section -->

      <!-- ======= Portfolio Section ======= -->
      <!-- <section id="portfolio" class="portfolio section-bg">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
        </div>
      </section> -->
      <!-- End Portfolio Section -->

      <!-- ======= Contact Section ======= -->
      <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Contact</h2>
          </div>

          <div class="row mt-1">
            <div class="col-lg-4">
              <div class="info">
                <div class="address">
                  <i class="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Bijnor, Uttar Pradesh, India</p>
                </div>

                <div class="email">
                  <i class="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>rajputvishal5748@gmail.com</p>
                </div>

                <div class="phone">
                  <i class="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 9557823957</p>
                </div>
              </div>
            </div>

            <div class="col-lg-8 mt-5 mt-lg-0">
              <form role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <textarea
                    class="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <!-- End Contact Section -->
    </main>
    <!-- End #main -->

    <footer id="footer">
      <div class="container">
        <h3>Vishal Rajput</h3>
        <p>
          I seek challenging opportunities where I can fully use my skills for
          the success
        </p>
        <div class="social-links">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Typed from "typed.js";
import NavMenu from "./NavMenu.vue";
import SkillSection from "./SkillSection.vue"
export default {
  name: "Portfolio",
  components: {
    NavMenu,
    SkillSection,
  },
  data() {
    return {
      skills: [
        { name: "HTML", value: 90 },
        { name: "CSS", value: 80 },
        { name: "JavaScript", value: 70 },
        // add more skills here
      ],
    };
  },

  mounted() {
    const typed = this.$refs.typed;
    if (typed) {
      let typed_strings = typed.getAttribute("data-typed-items");
      typed_strings = typed_strings.split(",");
      new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });
    }
    this.setProgressBarWidths();
  },
  methods: {
    setProgressBarWidths() {
      const skillsContent = this.$refs.skillsContent;
      if (skillsContent) {
        const progressBars = skillsContent.querySelectorAll(".progress-bar");
        progressBars.forEach((progressBar) => {
          const value = progressBar.getAttribute("aria-valuenow");
          progressBar.style.width = value + "%";
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../style/css/style.css"></style>
