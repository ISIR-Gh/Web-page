<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/carousel.css'
// import Stethoscope form '../assets/'
import Stethoscope from '../../assets/stethoscope.png';


const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay:6000
}

const arouselConfig = {
  height: 200,
  itemsToShow: 1,
  gap: 5,
  autoplay:6000,
//   wrapAround: true,
  snapAlign: 'center',

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: 'carousel',

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 400px and up
    400: {
      itemsToShow: 1,
      snapAlign: 'start',
    },
    // 500px and up
    500: {
      itemsToShow: 1,
      snapAlign: 'start',
    },
  },
}

const heroContent =[
    {
    title:'<span class="">Healthcare Consulting</span>',
    description:'<span class="">Helping hospitals, NGOs, and governments improve efficiency, compliance, and patient care through strategic health solutions.</span>',
    button:'Book now',
    link:'#',
    image:'bg-[url(/Logistics/Sea.png)]' 
    },
    {
    title:'<span class="">Healthcare Auditing</span>',
    description:'<span class="">Independent audits to assess quality, safety, and compliance — from maternal reviews to full hospital evaluations.</span>',
    button:'Explore now',
    link:'#',
    image:'bg-[url(/Logistics/Transportation.png)]' 
    },
    {
    title:'<span class="">Risk Management</span>',
    description:'<span class="">Protecting patients and institutions with tailored risk assessments, safety programs, and crisis response plans.</span>',
    button:'Get quote',
    link:'#',
    image:'bg-[url(/Logistics/Rail.png)]' 
    },
    {
    title:'<span class="">Medico-Legal Consulting</span>',
    description:'<span class="">Independent expert reviews for medical disputes, incident investigations, and insurance or litigation support.</span>',
    button:'Get quote',
    link:'#',
    image:'bg-[url(/Logistics/Air-cargo.png)]' 
    },
]

const donors = [
   
  {
    name: "Mr. Koecher Thomas",
    location: "Garbsen, Germany",
    project: "ISIR Ghana's Solar-powered Borehole Project",
    amount: "50 Euros",
    message:
      "Supporting initiatives like ISIR Ghana's mission to bring portable water to communities in Northern Ghana is a worthwhile investment. It's a privilege to contribute to such impactful work, and I know it won't diminish my own wealth.",
  },
];
</script>

<template>
        <Carousel v-bind="carouselConfig" class=''>
            <Slide v-for="(slide, k) in donors" :key="k" class=''>
            <div class="carousel__item relative  ">
                <div class='max-w-3xl mx-auto w-full p-4 space-y-3'>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-800 mb-1">
                                {{ slide.name }}
                            </h3>
                            <p class="text-sm text-gray-500 mb-3">{{ slide.location }}</p>
                            <p class="text-sm text-gray-700">
                                Supported
                                <span class="font-medium text-green-700">{{ slide.project }}</span>
                                with an amount of
                                <span class="font-semibold">{{ slide.amount }}</span>.
                            </p>
                        </div>
                        <div class="border-l-4 pl-4 border-green-600  italic text-gray-600 text-sm">
                        "{{ slide.message }}"
                        </div>

                </div>
            </div>
            </Slide>

            <template #addons>
            <!-- <Navigation class=''/> -->
            <Pagination class='text-[#012C95]!'/>
            </template>
        </Carousel>
</template>