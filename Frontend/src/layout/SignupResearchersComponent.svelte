<script>
    import { getContext } from 'svelte';

    import popup from './SignupResearchersModal.svelte';


    const { open } = getContext('simple-modal');

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    const showPopup = () => {
        open(popup, { message: "It's a popup!" });
    };

</script>

<section>
    <button class = "primary-button-black" on:click={showPopup}><b>Inscription chercheur</b></button>
    <br/>


    <div id="state">
        {#if opening}
            <p>opening modal...</p>
        {:else if opened}
            <p>opened modal!</p>
        {:else if closing}
            <p>closing modal...</p>
        {:else if closed}
            <p>closed modal!</p>
        {/if}
    </div>
</section>

<style>
    section {
        padding-top: 0.5em;
    }
    
    /* .primary-button-black {
        display: block;
        margin: auto;
        width: 193px;
        height: 46px;
        left: 394px;
        top: 509px;
    } */

    #state {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0.33;
        font-size: 0.8em;
    }

</style>