<template>
  <article class="flex mt-8">
    <div class="hidden sm:block sm:w-40">
      <p v-if="dates" class="leading-tight text-gray-600">
        {{ dates.from_month }} / {{ dates.from_year }}
        -
        <span v-if="dates.to_month">
          {{ dates.to_month }} / {{ dates.to_year }}
        </span>
        <span v-else>
          Present
        </span>
      </p>
    </div>
    <div class="flex-1">
      <h2 class="text-lg sm:text-xl leading-none text-gray-800">{{ title }}</h2>
      <div class="flex justify-between mt-2 sm:mt-1">
        <h3 class="text-sm sm:text-base text-gray-600 leading-none">{{ company }}</h3>
        <p v-if="dates" class="block sm:hidden text-sm sm:text-base leading-tight text-gray-600">
                {{ dates.from_month }} / {{ dates.from_year }}
                -
                <span v-if="dates.to_month">
                  {{ dates.to_month }} / {{ dates.to_year }}
                </span>
                <span v-else>
                  Present
                </span>
              </p>
      </div>
      <p class="mt-2 text-sm">
        <slot></slot>
      </p>
      <div class="mt-2">
        <span class="inline-block bg-love-100 text-love-600 text-xs font-bold rounded-full py-1 px-2 mr-2" v-for="tech in techs" v-bind:key="tech">{{ tech }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {

  name: 'ResumeEntry',

  props: {
    title: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    dates: {
      type: Object
    },
    description: {
      type: String
    },
    techs: {
      type: Array
    }
  }

}
</script>
