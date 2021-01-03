<script>
export let isLocked
</script>

<style>

.crossPath {
    transition: all 0.3s ease-out;
    stroke: #878CB0;
}

.active {
    stroke: #d1d4e4;
}

</style>

<svg width="24" height="24" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path class={!isLocked ? 'crossPath' : 'crossPath active'} d="M23.25 23.25L10.75 10.75" stroke-width="3" stroke-linecap="round"/>
    <path class={!isLocked ? 'crossPath' : 'crossPath active'} d="M10.75 23.25L23.25 10.75" stroke-width="3" stroke-linecap="round"/>
    </svg>
    