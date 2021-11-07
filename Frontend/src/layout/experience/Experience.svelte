<script>
    import ProgressBar from "./ProgressBar.svelte";
    import PresentationStep from "./steps/Presentation.svelte";
    import MainStep from "./steps/Main.svelte";
    import ThanksStep from "./steps/Thanks.svelte";
    import {writable} from "svelte/store";
    import {setContext} from "svelte";
    import axios from "axios";
    import {push} from "svelte-spa-router";

    export let experience;
    export let isPreview = false;

    const state = writable({
        experience,
        isPreview,
        results: {},
        steps: [PresentationStep, MainStep, ThanksStep],
        currentStep: 0,
        thanks: {
            toContact: false,
            toInform: false
        }
    });

    setContext('experience', state);

    function onBackClick(e) {
        e.preventDefault()
        if ($state.currentStep > 0) {
            $state.currentStep -= 1
        }
    }

    function onNextClick(e) {
        e.preventDefault()
        if ($state.currentStep < $state.steps.length - 1) {
            $state.currentStep += 1
        }
    }

    async function submitResults(e) {
        e.preventDefault();

        const { results, thanks } = $state;

        try {
            await axios.post(`http://localhost:3000/api/results/saveResults/${experience._id}`, { results, thanks });
            await push('#/home-p');
        } catch (e) {
            console.error(e);
        }
    }

</script>

<div class="exp-container">
    <h1 class="exp-title">{experience.title}</h1>
    <ProgressBar value={$state.currentStep} total={$state.steps.length}/>

    <svelte:component this={$state.steps[$state.currentStep]} />
    <div class="flex-container">
        {#if $state.currentStep > 0 }
            <button class="primary-button-black" on:click={onBackClick}>Retour</button>
        {/if}
        {#if $state.currentStep < $state.steps.length - 1}
            <button class="primary-button-black" on:click={onNextClick}>Suivant</button>
        {:else}
            {#if (!isPreview)}
                <button class="primary-button" on:click={submitResults}>Valider</button>
            {/if}
        {/if}
    </div>

</div>


<style>
    .exp-container {
        max-width: 75%;
        margin: 0 auto;
    }

    .exp-title {
        font-family: "Varta", sans-serif;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex-container {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
    }

    .primary-button-black {
        height: 50px;
        width: 80px;
    }
</style>