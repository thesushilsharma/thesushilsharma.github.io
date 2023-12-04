<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"> 🙏 Hello Folks!</span>
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Nice to meet you, I'm
          <span
            class="underline decoration-wavy decoration-sky-500">{{
              portfolio.Fname }} {{ portfolio.surname }}</span>!
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          who focuses on creating great web experiences. Since the days when I started working with computers,
          designing and coding have been my passion, but since 2016 I have been in web design/development. I enjoy
          creating intuitive and usable websites that are beautifully crafted. I have been working with some of the
          best digital agencies and fantastic customers for the past 4 years to generate some amazing works. And,
          for your company as well, I can make this happen.
        </p>
        <a :href="`/facts`"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Learn more
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
        <a :href="`/techstack`"
          class="rounded-md bg-white px-3.5 py-2.5 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-whiteinline-flex items-center justify-center text-center border focus:ring-4 focus:ring-gray-100 dark:text-black">
          Hire me
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <!--?xml version="1.0" standalone="no"?--> <svg id="sw-js-blob-svg" viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop id="stop1" stop-color="rgba(0, 166, 251, 1)" offset="0%"></stop>
              <stop id="stop2" stop-color="rgba(31, 251, 239.821, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <mask id="mask1" mask-type="alpha">
            <path fill="url(#sw-gradient)"
              d="M18.3,-23.2C21.5,-19.2,20.1,-11.3,19,-5.2C18,0.9,17.2,5.2,16.8,13.3C16.4,21.5,16.5,33.5,13,34.1C9.5,34.8,2.3,24,-5.5,19.3C-13.2,14.6,-21.7,16,-28.7,12.4C-35.6,8.8,-41.2,0.3,-39.5,-6.6C-37.8,-13.5,-29,-18.7,-21.2,-21.9C-13.4,-25.1,-6.7,-26.2,0.4,-26.7C7.6,-27.2,15.2,-27.2,18.3,-23.2Z"
              width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
              style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>
          </mask>
          <g mask="url(#mask1)">
            <path fill="url(#sw-gradient)"
              d="M18.3,-23.2C21.5,-19.2,20.1,-11.3,19,-5.2C18,0.9,17.2,5.2,16.8,13.3C16.4,21.5,16.5,33.5,13,34.1C9.5,34.8,2.3,24,-5.5,19.3C-13.2,14.6,-21.7,16,-28.7,12.4C-35.6,8.8,-41.2,0.3,-39.5,-6.6C-37.8,-13.5,-29,-18.7,-21.2,-21.9C-13.4,-25.1,-6.7,-26.2,0.4,-26.7C7.6,-27.2,15.2,-27.2,18.3,-23.2Z"
              width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
              style="transition: all 0.3s ease 0s;" stroke="url(#sw-gradient)"></path>
            <image class="h-auto max-w-lg transition-all duration-300 rounded-lg blur-sm hover:blur-none"
              href="https://github.com/thesushilsharma.png" alt="/" x='18' y='22' width="50" />
          </g>
        </svg>
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="gap-6 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">About Me</h2>
        <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">A developer programmer who uses
          cutting-edge technology to help with digital transformation. I've spent the last few years working on a number
          of projects, developing, and testing on a range of platforms and languages. I'm fascinated by how cutting-edge
          technologies may be used to tackle a wide range of difficulties, from commercial to societal issues.</p>
      </div>
      <div class="space-y-8 text-center lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div
          class="flex flex-col p-6 max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h2
            class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Email</h2>
          <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <a :href="`mailto:${portfolio.email}`">{{ portfolio.email }}</a>
          </p>
        </div>
        <div
          class="flex flex-col p-6 max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h2
            class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Location</h2>
          <p class="text-base inline-flex items-center justify-center leading-relaxed text-gray-500 dark:text-gray-400 gap-4"><img
              :src="portfolio.flag" class="w-10 h-10 rounded " /> {{
                portfolio.location }}</p>
        </div>
        <div
          class="flex flex-col p-6 max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h2
            class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Socials</h2>
          <div class="grid grid-cols-4 gap-4 content-center">
            <a v-for="(social, index) in portfolio.socials" :key="index" :href="social.url" target="_blank"
              :title="social.name" class="flex justify-center items-center">
              <img size="2rem" class="h-9 hover:text-gray-900 dark:hover:text-white"
                :src="`https://cdn.simpleicons.org/${social.icon}`" />
            </a>
          </div>
        </div>
        <div
          class="flex flex-col p-6 max-w-lg text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h2
            class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-gray-900 dark:text-white md:text-4xl">
            Languages</h2>
          <div v-for="(language, index) in portfolio.languages" :key="index"
            class="flex items-center md:p-5 md:text-center">
            <p class="mb-1 text-base flex font-medium text-gray-500 dark:text-gray-400 mx-auto md:mx-0">{{ language.name
            }}</p>
          </div>
        </div>
      </div>
    </div>
    <CTA />
  </section>
</template>

<script setup>
import CTA from "../components/CTA.vue";
import portfolio from '../data/portfolio';
</script>