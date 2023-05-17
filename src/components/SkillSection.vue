<template>
    <section id="skills" class="skills section-bg">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h2>Skills</h2>
                <p>
                    These are the skills I worked on past 2 to 3 years and still
                    working to improve constantly.
                </p>
            </div>
            <div class="row skills-content bg-dark" ref="skilsContent">
                <div class="card-container">
                    <div v-for="skill in skills" :key="skill.id" class="card">
                        <img :src="skill.img" width="100px" height="100px">
                        <h5 class="text-dark">{{ skill.name }}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template> 
       
<script>

export default {
    name: "SkillSection",
    data() {
        return {
            skills: [
                {
                    id: 1,
                    name: 'HTML',
                    img:"/img/skills/html-5.png",
                    description: 'Proficient in writing semantic and accessible HTML markup.',
                },
                {
                    id: 2,
                    name: 'CSS',
                    img:"/img/skills/css-3.png",
                    description: 'Skilled in styling web pages using CSS, including modern CSS frameworks.',
                },
                {
                    id: 3,
                    name: 'JavaScript',
                    img:"/img/skills/js.png",
                    description: 'Strong understanding of JavaScript and modern ES6+ features.',
                },
                {
                    id: 4,
                    name: 'React',
                    img:"/img/skills/react.png",
                    description: 'Proficient in writing semantic and accessible HTML markup.',
                },
                {
                    id: 5,
                    name: 'Vue',
                    img:"/img/skills/brands.png",
                    description: 'Skilled in styling web pages using CSS, including modern CSS frameworks.',
                },
                {
                    id: 6,
                    name: 'Node',
                    img:"/img/skills/nodejs.png",
                    description: 'Strong understanding of JavaScript and modern ES6+ features.',
                },
                {
                    id: 7,
                    name: 'SQL',
                    img:"/img/skills/sql-server.png",
                    description: 'Proficient in writing semantic and accessible HTML markup.',
                },
                {
                    id: 8,
                    name: 'Git',
                    img:"/img/skills/git.png",
                    description: 'Skilled in styling web pages using CSS, including modern CSS frameworks.',
                },
                // Add more skills as needed
            ],
        };
    },
};
</script>
  
<style scoped src="../style/css/style.css">
</style>
  