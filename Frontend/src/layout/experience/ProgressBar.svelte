<script>
    export let value;
    export let total;
    export let showBullets = true;

    const stepsId = Array.from({ length: total }).map((_, i) => i);
</script>



<div class="progress-bar">
    <div class="progression-container">
        <div class="progression-line" style={`width: ${value / (total - 1) * 100}%`}/>
    </div>

    {#if showBullets}
    <ul class="bullet-list">
        {#each stepsId as stepId}
            <li
                    class="bullet"
                    class:bullet-active={value === stepId}
                    style={`left: calc(${stepId / (total - 1) * 100}% - 20px)`}
            >
                {stepId + 1}
            </li>
        {/each}
    </ul>
    {/if}
</div>


<style>
    .progress-bar {
        font-family: "Varta", sans-serif;
        position: relative;
        height: 50px;
        width: 100%;
    }

    .progression-container {
        position: absolute;
        left: 0;
        right: 0;
        height: 14px;
        top: calc(50% - 7px);
        border: 1px solid #f6b93b;
        border-radius: 0 7px 7px 0;
    }

    .progression-line {
        height: 14px;
        background-color: #f6b93b;
        border-radius: 0 7px 7px 0;
        transition: all 0.34s;
    }

    .bullet-list {
        list-style-type: none;
        padding: 0;
    }

    .bullet {
        position: absolute;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        top: calc(50% - 20px);
        background-color: #f6b93b;
        font-size: 15px;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 10px 13px -7px #313131
    }

    .bullet-active {
        background-color: #e58e26;
    }
</style>