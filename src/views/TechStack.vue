<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Tech Stack
                </h2>
                <p class="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    To be the best, simplicity is the worst choice. That's why I am always
                    experimenting, always learning, and never bored..
                </p>
            </div>
            <div class="flex flex-wrap dark:text-white">
                <div v-for="(category, index) in code" :key="index" class="w-full border border-gray-700 dark:border-gray-200 p-4">
                    <h2 class="text-2xl font-bold mb-4 uppercase">{{ category.name }}</h2>
                    <div class="flex flex-wrap">
                        <div v-for="(tech, topic) in category.category" :key="topic"
                            class="w-full sm:w-1/2 md:w-1/3 border border-gray-600 dark:border-gray-100 p-4 text-center">
                            <h3 class="text-xl font-semibold mb-2">{{ topic.toUpperCase() }}</h3>
                            <ul>
                                <li v-for="(skills, techy) in tech" :key="techy" class="mb-2">
                                    <ul>
                                        <span class="mr-2">{{ skills.map(skill => skill.name).join(', ') }}</span>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="max-w-screen-lg mx-auto text-center mt-5">
                <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    Expertise</h2>
                <p class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                    The importance of your company's digital presence grows as the usage of technology grows. Keeping up
                    with the digital world is the most major challenge that businesses confront. The optimal solution is to
                    continue building cutting-edge software that allows the organisation to maintain its development
                    presence. I have worked with businesses from different niches so you can rely on me for yours. I can
                    provide you with the greatest thoughts and ideas for how we can move forward because I have experience
                    working on a variety of projects that are already operational. You won't have to agree to anything when
                    you're with me. I offer you several possibilities that we can consider together.
                </p>
            </div>
            <div class="space-y-8 mt-12 mb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 dark:text-white">
                <div v-for="(skill, index) in skills" :key="index"
                    class="border border-gray-100 p-9 lg:p-11 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h2 class="font-extrabold text-2xl leading-relaxed">{{ skill.title }}</h2>
                    <p class="">{{ skill.description }}
                    </p>
                    <div>
                        <h2 class="font-bold text-xl leading-relaxed text-goma-peach-3">Techonologies I use:</h2>
                        <p class="font-normal text-sm">
                            {{ skill.tech.join(', ') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import code from "../data/code";
import skills from '../data/skills';
</script>
