<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Work Experience</h1>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">A software developer with an interest and experience
                    in various technologies including but not limited to blockchain, web development, frontend and backend
                    development, I always look forward to expanding my skill set by gaining knowledge and emerge with
                    innovative ideas based on my experience. I love creative coding because I do both coding & designing.
                    Making beautiful art with code is very satisfying to me. I tend to make use of modern web technologies
                    to build websites that look great, feel fantastic, and function correctly. I work on client websites,
                    our website, and internal projects. I do not treat front-end as an afterthought and strive to build
                    interfaces for everyone. I pride myself on attention to detail and can implement pixel perfect user
                    interfaces.</p>
            </div>
            <div class="lg:w-1/2 md:w-2/3 mx-auto mb-8 lg:mb-16">
                <div class="flex flex-wrap -m-2">
                    <ol v-for="(work, index) in experience" :key="index"
                        class="relative border-s border-gray-200 dark:border-gray-700">
                        <li class="mb-10 ms-6">
                            <span
                                class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">{{ work.title }}</h3>
                            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{
                                work.period }}</time>
                            <p class="text-base px-4 py-2 font-normal text-gray-500 dark:text-gray-400">{{
                                work.workplace
                            }}</p>
                            <ul v-if="work.description"
                                class="text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li v-for="(task, task_index) in work.description" :key="task_index"
                                    class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                    {{ task }}</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>
            <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Academic Experience
                </h2>
                <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Passionate about computers and
                    emerging tech. Exp in web & mobile app dev, sys automation & DB management. Confident in overcoming
                    programming challenges.</p>
            </div>
            <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div
                v-for="(degree, index) in education" :key="index" class="flex flex-col p-6 max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 class="mb-4 text-2xl font-semibold">{{ degree.course }}</h3>
                    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">{{ degree.institution }}</p>
                    <div class="flex flex-col my-8">
                        <span class="mr-2 text-base font-extrabold">{{ degree.city }}</span>
                        <span class="text-gray-500 dark:text-gray-400">{{ degree.period }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import experience from '../data/experience';
import education from '../data/education';
</script>

