<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"> 🙏 Hello Folks!</span>
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Nice to meet you, I'm
          <span
            class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 hover:box-decoration-slice">{{
              portfolio.Fname }} {{ portfolio.surname }}</span>!
        </h1>
        <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          who focuses on creating great web experiences. Since the days when I started working with computers,
          designing and coding have been my passion, but since 2016 I have been in web design/development. I enjoy
          creating intuitive and usable websites that are beautifully crafted. I have been working with some of the
          best digital agencies and fantastic customers for the past 4 years to generate some amazing works. And,
          for your company as well, I can make this happen.
        </p>
        <a href="/facts"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Learn more
          <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
        <a href="/contacts"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
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
              <!-- <svg class="h-9 hover:text-gray-900 dark:hover:text-white" viewBox="0 0 125 35" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M64.828 7.11521C64.828 8.52061 63.6775 9.65275 62.2492 9.65275C60.8209 9.65275 59.6704 8.52061 59.6704 7.11521C59.6704 5.70981 60.7813 4.57766 62.2492 4.57766C63.7171 4.6167 64.828 5.74883 64.828 7.11521ZM54.1953 12.2293C54.1953 12.4636 54.1953 12.854 54.1953 12.854C54.1953 12.854 52.9655 11.2923 50.3469 11.2923C46.0225 11.2923 42.6502 14.5327 42.6502 19.0221C42.6502 23.4726 45.9829 26.7518 50.3469 26.7518C53.0051 26.7518 54.1953 25.1513 54.1953 25.1513V25.815C54.1953 26.1272 54.4334 26.3615 54.7508 26.3615H57.9644V11.6828C57.9644 11.6828 55.0285 11.6828 54.7508 11.6828C54.4334 11.6828 54.1953 11.956 54.1953 12.2293ZM54.1953 21.6378C53.6002 22.4966 52.41 23.2383 50.9818 23.2383C48.4426 23.2383 46.4985 21.6768 46.4985 19.0221C46.4985 16.3675 48.4426 14.806 50.9818 14.806C52.3703 14.806 53.6399 15.5867 54.1953 16.4065V21.6378ZM60.3448 11.6828H64.1535V26.3615H60.3448V11.6828ZM117.237 11.2923C114.619 11.2923 113.389 12.854 113.389 12.854V4.6167H109.58V26.3615C109.58 26.3615 112.516 26.3615 112.794 26.3615C113.111 26.3615 113.349 26.0882 113.349 25.815V25.1513C113.349 25.1513 114.579 26.7518 117.198 26.7518C121.522 26.7518 124.895 23.4726 124.895 19.0221C124.895 14.5717 121.522 11.2923 117.237 11.2923ZM116.603 23.1993C115.135 23.1993 113.984 22.4575 113.389 21.5986V16.3675C113.984 15.5867 115.254 14.7668 116.603 14.7668C119.142 14.7668 121.086 16.3284 121.086 18.9831C121.086 21.6378 119.142 23.1993 116.603 23.1993ZM107.597 17.6557V26.4005H103.788V18.0852C103.788 15.6648 102.994 14.6888 100.852 14.6888C99.7015 14.6888 98.5113 15.2744 97.7574 16.1332V26.3615H93.9488V11.6828H96.964C97.2814 11.6828 97.5195 11.956 97.5195 12.2293V12.854C98.6302 11.7218 100.098 11.2923 101.566 11.2923C103.233 11.2923 104.621 11.7609 105.732 12.6977C107.081 13.7908 107.597 15.1962 107.597 17.6557ZM84.7048 11.2923C82.0862 11.2923 80.8564 12.854 80.8564 12.854V4.6167H77.0476V26.3615C77.0476 26.3615 79.9834 26.3615 80.2611 26.3615C80.5787 26.3615 80.8166 26.0882 80.8166 25.815V25.1513C80.8166 25.1513 82.0465 26.7518 84.665 26.7518C88.9895 26.7518 92.3617 23.4726 92.3617 19.0221C92.4015 14.5717 89.0292 11.2923 84.7048 11.2923ZM84.0699 23.1993C82.602 23.1993 81.4515 22.4575 80.8564 21.5986V16.3675C81.4515 15.5867 82.721 14.7668 84.0699 14.7668C86.6091 14.7668 88.5531 16.3284 88.5531 18.9831C88.5531 21.6378 86.6091 23.1993 84.0699 23.1993ZM73.7547 11.2923C74.9052 11.2923 75.5003 11.4876 75.5003 11.4876V14.9621C75.5003 14.9621 72.3264 13.908 70.3427 16.1332V26.4005H66.534V11.6828C66.534 11.6828 69.4699 11.6828 69.7476 11.6828C70.065 11.6828 70.3029 11.956 70.3029 12.2293V12.854C71.0171 12.0342 72.5644 11.2923 73.7547 11.2923ZM32.4423 24.4806C32.2699 24.0722 32.0976 23.6297 31.9252 23.2554C31.6493 22.6427 31.3736 22.0641 31.1322 21.5197L31.0978 21.4855C28.719 16.3804 26.1678 11.2073 23.4787 6.10219L23.3752 5.89799C23.0995 5.38748 22.8237 4.84294 22.5479 4.29839C22.2031 3.68577 21.8584 3.03913 21.3068 2.42652C20.2036 1.06516 18.6177 0.316406 16.9284 0.316406C15.2046 0.316406 13.6533 1.06516 12.5156 2.35845C11.9985 2.97107 11.6192 3.61771 11.2745 4.23032C10.9987 4.77486 10.7229 5.31941 10.4471 5.82992L10.3436 6.03413C7.68904 11.1392 5.10339 16.3124 2.7246 21.4175L2.69012 21.4855C2.44879 22.0301 2.17299 22.6087 1.89719 23.2214C1.72481 23.5957 1.55244 24.0041 1.38006 24.4466C0.93188 25.7058 0.793978 26.897 0.966355 28.1222C1.34558 30.6748 3.06935 32.8189 5.44815 33.7719C6.3445 34.1463 7.27534 34.3164 8.24065 34.3164C8.51645 34.3164 8.8612 34.2824 9.137 34.2483C10.2747 34.1122 11.4468 33.7378 12.5845 33.0912C13.9981 32.3083 15.3425 31.1852 16.8595 29.5517C18.3764 31.1852 19.7554 32.3083 21.1344 33.0912C22.2721 33.7378 23.4443 34.1122 24.5819 34.2483C24.8577 34.2824 25.2025 34.3164 25.4782 34.3164C26.4436 34.3164 27.4089 34.1463 28.2708 33.7719C30.6841 32.8189 32.3733 30.6408 32.7526 28.1222C33.0283 26.931 32.8904 25.7398 32.4423 24.4806ZM16.9259 25.893C15.1377 23.6468 13.9786 21.5327 13.5812 19.7488C13.4156 18.9891 13.3825 18.3284 13.4818 17.7338C13.5481 17.2053 13.7467 16.7429 14.0118 16.3465C14.6409 15.4546 15.7007 14.893 16.9259 14.893C18.1512 14.893 19.2441 15.4216 19.8402 16.3465C20.1051 16.7429 20.3037 17.2053 20.37 17.7338C20.4694 18.3284 20.4363 19.0221 20.2707 19.7488C19.8733 21.4995 18.7142 23.6136 16.9259 25.893ZM30.3665 27.6033C30.1305 29.3326 28.9509 30.8293 27.2993 31.4945C26.4903 31.8269 25.6139 31.9267 24.7376 31.8269C23.895 31.7273 23.0523 31.4611 22.176 30.9623C20.9624 30.2971 19.749 29.2662 18.3334 27.7363C20.558 25.0424 21.9062 22.5813 22.4118 20.3864C22.6477 19.3554 22.6815 18.4242 22.5804 17.5595C22.4456 16.7281 22.1422 15.9632 21.6703 15.298C20.6255 13.8014 18.8727 12.9367 16.9178 12.9367C14.9628 12.9367 13.21 13.8347 12.1652 15.298C11.6933 15.9632 11.39 16.7281 11.2551 17.5595C11.1203 18.4242 11.154 19.3887 11.4237 20.3864C11.9293 22.5813 13.3112 25.0757 15.5021 27.7695C14.1202 29.2994 12.873 30.3304 11.6596 30.9955C10.7832 31.4945 9.94059 31.7605 9.09795 31.8603C8.18787 31.9599 7.31152 31.8269 6.53628 31.5277C4.88468 30.8625 3.70497 29.366 3.46902 27.6365C3.36791 26.8051 3.43531 25.9737 3.77238 25.0424C3.8735 24.7098 4.04202 24.3774 4.21055 23.9782C4.4465 23.4461 4.71615 22.8807 4.9858 22.3153L5.0195 22.2489C7.34523 17.2935 9.83948 12.2383 12.4349 7.31623L12.536 7.11668C12.8056 6.61782 13.0753 6.0857 13.3449 5.58684C13.6146 5.05472 13.9179 4.55585 14.2886 4.12351C14.9965 3.32532 15.9403 2.89298 16.9852 2.89298C18.03 2.89298 18.9738 3.32532 19.6817 4.12351C20.0524 4.55585 20.3557 5.05472 20.6255 5.58684C20.8951 6.0857 21.1647 6.61782 21.4343 7.11668L21.5355 7.31623C24.0971 12.2716 26.5914 17.3267 28.9171 22.2821V22.3153C29.1867 22.8475 29.4227 23.4461 29.6924 23.9782C29.8609 24.3774 30.0294 24.7098 30.1305 25.0424C30.4003 25.9071 30.5013 26.7385 30.3665 27.6033Z"
                fill="currentColor" />
            </svg> -->
              <img size="2rem" class="h-9 hover:text-gray-900 dark:hover:text-white"
                :src="`https://cdn.simpleicons.org/${social.icon}/skyblue`" />
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