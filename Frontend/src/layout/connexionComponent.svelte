<script>
    import { getContext } from "svelte";

    import popup from "./connexionModal.svelte";

    const { open } = getContext("simple-modal");

    let opening = false;
    let opened = false;
    let closing = false;
    let closed = false;

    const showPopup = () => {
        open(popup);
    };
</script>

<section>
    <button type="submit" class="primary-button" on:click={showPopup}><b>Connexion !</b></button>

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
