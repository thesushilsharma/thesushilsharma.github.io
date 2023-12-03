<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-lg">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Projects</h2>
                <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Learning, teaching, sharing,
                    and gaining experience may all be accomplished through open source initiatives. Contributing to an open
                    source project has various advantages. I've acquired and obtained a thorough grasp of web engineering
                    standards, the need of reusability/scalability in large business projects, and the importance of user
                    experience in large corporate applications from the beginning of my career in web development till
                    now.With creative, business-centric, and secure solutions, I assist organisations in making the
                    transition from physical to digital. Let's drive a successful digital transformation of your valuable
                    business.
                </p>
            </div>
            <div class="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div v-for="(project, index) in projects" :key="index"
                    class="mb-12 md:mb-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                        <div class="flex items-center justify-center space-x-3">
                            <div
                                :class="`w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 ${project.theme}`">
                                <span class="iconify" :data-icon="`ic:${project.svg}`"  data-width="50" data-height="50"></span>
                            </div>
                        </div>
                        <div class="mt-5 flex flex-col">
                            <h4 class="mb-4 text-lg font-bold dark:text-white">{{ project.title }}</h4>
                            <p class="text-neutral-500 dark:text-neutral-300">{{ project.description }}</p>
                            <div class="flex flex-wrap mt-4 justify-center">
                                <p v-for="(tech, index) in project.tags" :key="index"
                                    class="sm:w-1/2 md:w-1/3 text-sm text-white bg-transparent border border-white rounded w-full text-center">
                                    {{ tech }}
                                </p>
                            </div>

                            <div class="mt-5 mb-6 flex gap-2 justify-center font-poppins">
                                <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer"
                                    class="mt-3 inline-flex items-center font-semibold text-blue-600">
                                    Repository
                                    <svg class="w-4 h-4 ml-2 text-white" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                </svg>
                                </a>
                                
                                <a href="{{ project.url }}" target="_blank" rel="noopener noreferrer"
                                    class="mt-3 inline-flex items-center font-semibold text-blue-600">
                                    View
                                    <svg class="w-4 h-4 ml-2 text-white" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                                </svg>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import projects from '../data/projects';
</script>