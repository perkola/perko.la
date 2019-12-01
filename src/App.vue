<template>
  <div id="app">
    <div class="bg-gray-200 w-full">
      <div class="container mx-auto px-8 pb-16 sm:pb-0 flex flex-col justify-center h-40">
        <h1 class="text-4xl text-gray-600 font-thin text-center sm:text-left">William Perkola</h1>
        <h4 class="hidden sm:block text-blue-500 leading-none sm:ml-8">"I can't decide on an inspiring quote to place here..."</h4>
      </div>
    </div>
    <div class="container mx-auto px-4 sm:px-8">
      <div class="flex flex-wrap sm:flex-row-reverse">
        <div class="w-full sm:w-40 sm:border-l-8 border-gray-200 sm:pl-8 pt-8 sm:pb-8 relative">
          <div class="flex justify-center">
          <img src="./assets/me.jpg" class="rounded-full border-8 border-gray-200 absolute w-40 -mt-20 top-0 sm:left-0 sm:-ml-20">
          </div>

            <h1 class="hidden sm:block text-xl mt-4 sm:mt-0 sm:text-2xl leading-none text-gray-600 text-right font-thin">Skills</h1>

            <div class="mt-16 sm:mt-8 flex justify-between sm:block">
                <span class="flex-1 block text-gray-800 mb-1 text-right sm:text-left mr-2 mr-2">Clojure</span>
                <div class="flex-1 sm:flex justify-between ml-2 ml-2 sm:ml-0">
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                </div>
            </div>
            <div class="mt-2 sm:mt-4 flex justify-between sm:block">
                <span class="flex-1 block text-gray-800 mb-1 text-right sm:text-left mr-2">Python</span>
                <div class="flex-1 sm:flex justify-between ml-2 sm:ml-0">
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                  <span class="inline-block w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                </div>
            </div>
            <div class="mt-2 sm:mt-4 flex justify-between sm:block">
                <span class="flex-1 block text-gray-800 mb-1 text-right sm:text-left mr-2">Go</span>
                <div class="flex-1 sm:flex justify-between ml-2 sm:ml-0">
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                  <span class="inline-block w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                </div>
            </div>
            <div class="mt-2 sm:mt-4 flex justify-between sm:block">
                <span class="flex-1 block text-gray-800 mb-1 text-right sm:text-left mr-2">HTML / CSS</span>
                <div class="flex-1 sm:flex justify-between ml-2 sm:ml-0">
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block w-5 h-5 bg-love-400 rounded-full"></span>
                </div>
            </div>
            <div class="mt-2 sm:mt-4 flex justify-between sm:block">
                <span class="flex-1 block text-gray-800 mb-1 text-right sm:text-left mr-2">Javascript</span>
                <div class="flex-1 sm:flex justify-between ml-2 sm:ml-0">
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-love-400 rounded-full"></span>
                  <span class="inline-block mr-2 sm:mr-0 w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                  <span class="inline-block w-5 h-5 bg-none rounded-full border-2 border-love-100 sm:border-love-200"></span>
                </div>
            </div>

            <div class="flex justify-center sm:justify-between text-3xl sm:text-2xl mt-8 text-gray-600">
                <a href="mailto:perkola.william@gmail.com" class="leading-none hover:text-red-600 mx-2">
                    <svg class="icon icon-mail4"><use xlink:href="#icon-mail4"></use></svg>
                </a>
                <a href="https://github.com/perkola" target="_blank" class="leading-none hover:text-black mx-2">
                  <svg class="icon icon-github"><use xlink:href="#icon-github"></use></svg>
                </a>
                <a href="https://www.linkedin.com/in/perkola/" target="_blank" class="leading-none hover:text-blue-600 mx-2">
                  <svg class="icon icon-linkedin"><use xlink:href="#icon-linkedin"></use></svg>
                </a>
            </div>
        </div>
        <div class="w-full sm:flex-1 py-8 sm:pr-8">
            <h1 class="text-xl sm:text-xl sm:text-2xl leading-none text-gray-600 font-thin">Experience</h1>
            <resume-entry
              v-for="entry in experiences"
              v-bind:key="entry.title"
              :title="entry.title"
              :company="entry.company"
              :location="entry.location"
              :dates="entry.dates"
              :techs="entry.techs"
            >
              {{ entry.description }}
            </resume-entry>

            <h1 class="mt-8 text-xl sm:text-2xl leading-none text-gray-600 font-thin">Education</h1>
            <resume-entry
              v-for="entry in education"
              v-bind:key="entry.title"
              :title="entry.title"
              :company="entry.company"
              :location="entry.location"
              :dates="entry.dates"

            ></resume-entry>

            <div class="text-center sm:text-right text-gray-600 mt-8 sm:mt-16">
              <p class="text-sm">Copyright &copy; 2019 William Perkola</p>
              <p class="text-sm mt-2">Built with <a href="https://vuejs.org/" class="text-love-300 hover:underline" target="_blank">Vue.js</a> and <a href="https://tailwindcss.com/" class="text-love-300 hover:underline" target="_blank">Tailwind CSS</a>. Source code available on <a href="https://github.com/perkola/perko.la" class="text-love-300 hover:underline" target="_blank">GitHub</a>.</p>
            </div>
        </div>
      </div>
    </div>

    <symbol id="icon-mail4" viewBox="0 0 32 32">
    <title>mail4</title>
    <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
    </symbol>
    <symbol id="icon-github" viewBox="0 0 32 32">
    <title>github</title>
    <path d="M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"></path>
    </symbol>
    <symbol id="icon-linkedin" viewBox="0 0 32 32">
    <title>linkedin</title>
    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 26h-4v-14h4v14zM10 10c-1.106 0-2-0.894-2-2s0.894-2 2-2c1.106 0 2 0.894 2 2s-0.894 2-2 2zM26 26h-4v-8c0-1.106-0.894-2-2-2s-2 0.894-2 2v8h-4v-14h4v2.481c0.825-1.131 2.087-2.481 3.5-2.481 2.488 0 4.5 2.238 4.5 5v9z"></path>
    </symbol>
  </div>
</template>

<script>
import ResumeEntry from './components/ResumeEntry.vue'

export default {
  name: 'app',
  components: {
    ResumeEntry
  },
  data: function () {
    return {
      experiences: [
        {
          title: 'Software engineer',
          company: 'TriOptima',
          location: 'Stockholm, Sweden',
          dates: {
            from_month: 8,
            from_year: 2017
          },
          description: 'Working full-stack in a small, but highly efficient team.',
          techs: ['Clojure', 'Python', 'Go', 'Docker', 'Kubernetes']
        },
        {
          title: 'Software consultant',
          company: 'Self-employed',
          location: 'Stockholm, Sweden',
          dates: {
            from_month: 9,
            from_year: 2014
          },
          description: 'Working with mainly non-profit organizations, I design, build and maintain solutions according to their needs.',
          techs: ['PHP', 'JavaScript', 'HTML / CSS']
        },
        {
          title: 'Student intro ...',
          company: 'Scania',
          location: 'Södertälje, Sweden',
          dates: {
            from_month: 3,
            from_year: 2016,
            to_month: 6,
            to_year: 2017
          },
          techs: ['C#', 'React Native', 'Python']
        },
        {
          title: 'Software consultant',
          company: 'Academic Work',
          location: 'Stockholm, Sweden',
          dates: {
            from_month: 6,
            from_year: 2014,
            to_month: 1,
            to_year: 2015
          },
          description: 'Working part time as a consultant at an advertising company, I was responsible for maintaining several of their existing websites while developing a new job search engine leveraging the API of the Swedish Public Employment Service (Arbetsförmedlingen).',
          techs: ['PHP', 'JavaScript', 'HTML / CSS']
        },
      ],
      education: [
        {
        title: 'MSc. Computer Science and Engineering',
        company: 'KTH, Royal Institute of Technology',
        location: 'Stockholm, Sweden',
        dates: {
          from_month: 8,
          from_year: 2015,
          to_month: 6,
          to_year: 2017
        }
        },
        {
        title: 'BSc. Computer Science and Engineering',
        company: 'KTH, Royal Institute of Technology',
        location: 'Stockholm, Sweden',
        dates: {
          from_month: 8,
          from_year: 2012,
          to_month: 6,
          to_year: 2015
        }
        },
        {
        title: 'Introduction to gender studies',
        company: 'Stockholm University',
        location: 'Stockholm, Sweden',
        dates: {
          from_month: 8,
          from_year: 2017,
          to_month: 1,
          to_year: 2018
        }
        }
      ],
    }
  }
}
</script>

<style lang="scss">
@tailwind base;

@tailwind components;

@tailwind utilities;

@import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:200,400,700&display=swap');

body {
    font-family: 'IBM Plex Sans', sans-serif;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
}
</style>
