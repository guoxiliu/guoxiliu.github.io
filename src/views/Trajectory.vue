<script setup>
import { ref, onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const places = ref([
  { name: 'Columbus, OH, USA', lat: 39.9612, lng: -82.9988 },
  { name: 'Clemson, SC, USA', lat: 34.6834, lng: -82.8374 },
  // Add more places as needed
]);

onMounted(() => {
  const map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
    boxZoom: false,
    keyboard: false,
    tap: false,
  }).setView([39.9612, -82.9988], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  // Add markers
  places.value.forEach(place => {
    L.marker([place.lat, place.lng])
      .addTo(map)
      .bindPopup(`<strong>${place.name}</strong>`);
  });

  // Draw simple polylines between places
  for (let i = 0; i < places.value.length - 1; i++) {
    const from = places.value[i];
    const to = places.value[i + 1];
    L.polyline(
      [
        [from.lat, from.lng],
        [to.lat, to.lng]
      ],
      {
        color: "#BA0C2F",
        weight: 5,
        opacity: 0.7,
        dashArray: "10,20"
      }
    ).addTo(map);
  }
});
</script>

<template>
  <div class="container py-4">
    <h2 class="mb-3">My World Trajectory</h2>
    <div
      id="map"
      style="height: 500px; width: 100%; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.15);"
    ></div>
  </div>
</template>

<style scoped>
/* Optional: style the map container */
</style>
