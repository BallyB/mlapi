<script>
    export let selectedValue = null;
    export let onValueSelected = null;
    export let minValue = 1;
    export let maxValue = 5;

    const values = Array.from({ length: maxValue - minValue + 1 }).map((_, i) => i);

    function onClick(e) {
        e.preventDefault();


        if (typeof onValueSelected === 'function') {
            const value = parseInt(e.target.value);
            onValueSelected(value);
        }
    }
</script>


<div class="flex-container">
    {#each values as value}
        <button class="discrete"
                class:selected={selectedValue === value}
                value={value}
                on:click={onClick}
        >
            {value}
        </button>
    {/each}
</div>

<style>
    .flex-container {
        max-width: 400px;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
    }

    .discrete {
        height: 40px;
        width: 40px;
        border-radius: 40px;
        background-color: #f4f4f4;
        border-style: none;
        outline: none;
        margin: 0 5px;
    }

    .discrete:hover {
        background-color: #f6b93b;
        cursor: pointer;
    }

    .selected {
        background-color: #f6b93b;
    }


</style>