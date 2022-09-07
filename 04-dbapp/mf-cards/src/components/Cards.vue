<template>
  <div>
    <h1 class="text-center font-bold text-3xl">DB MF</h1>

    <div class="bg-white">
      <div
        class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
        >
          <div v-for="personaje in personajes" :key="personaje.id">
            <a :href="`/personajes/${personaje.name}`">
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
              >
                <img
                  :src="personaje.imageUrl"
                  :alt="personaje.name"
                  height="150"
                  class="w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 class="mt-4 text-sm text-gray-700">
                Role: {{ personaje.role }}
              </h3>
              <p class="mt-1 text-lg font-medium text-gray-900">
                {{ personaje.name }}
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const personajes = ref([]);

const getPersonajes = async () => {
  const res = await fetch(
    "https://dragon-ball-super-api.herokuapp.com/api/characters"
  );
  const data = await res.json();

  personajes.value = data;
};

onMounted(() => {
  getPersonajes();
});
</script>
