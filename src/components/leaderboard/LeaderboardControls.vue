<template>
    <article class="leaderboard-controls">
        <button @click="startSimulation">Start Simulation</button>
        <button @click="stopSimulation">Stop Simulation</button>
        <button @click="resetSimulation">Reset Simulation</button>
    </article>
</template>

<script>
export default {
    name: 'LeaderboardControls',
}
</script>
