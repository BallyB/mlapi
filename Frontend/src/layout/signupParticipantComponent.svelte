<script>
    import { getContext } from 'svelte';

    import popup from './signupParticipantModal.svelte';

    const { open } = getContext('simple-modal');

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    const showPopup = () => {
        open(popup);
    };

</script>

<section>
    <button type="submit" class="primary-button-black" on:click={showPopup}><b>Inscription participant</b></button>

    <div>
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


</style>