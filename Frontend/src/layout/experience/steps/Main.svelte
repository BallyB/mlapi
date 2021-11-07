<script>
    import {getContext, onMount} from "svelte";
    import ProgressBar from "../ProgressBar.svelte";
    import Discrete from "./sliders/Discrete.svelte";

    const state = getContext('experience')
    let currentSentence = 0;

    const sentences = $state.experience.content.sentences

    onMount(() => {
       $state.results.sentences = sentences.map(() => ({ value: null, comment: null }));
    });

    function onBackClick(e) {
        e.preventDefault()
        if (currentSentence > 0) {
            currentSentence -= 1
        }
    }

    function onNextClick(e) {
        e.preventDefault()
        if (currentSentence < sentences.length - 1) {
            currentSentence += 1
        }
    }

    function onValueChange(value) {
        $state.results.sentences[currentSentence].value = value;
    }

    function onCommentChange(e) {
        e.preventDefault();
        const value = e.target.value;
        $state.results.sentences[currentSentence].comment = value;
    }
</script>

<div class="main-container">

    {#if Array.isArray($state.results.sentences) && sentences && sentences.length > 0}
        <ProgressBar showBullets={false} value={currentSentence} total={sentences.length}/>

        <h3>{$state.experience.content.question}</h3>

        <p class="sentence">{sentences[currentSentence].name}</p>

        <Discrete selectedValue={$state.results.sentences[currentSentence].value} onValueSelected={onValueChange}/>

        <textarea disabled={$state.isPreview} bind:value={$state.results.sentences[currentSentence].comment} placeholder="Une question, un commentaire ? (optionnel)"></textarea>

        <button class="arrow arrow-left" on:click={onBackClick}/>
        <button class="arrow arrow-right" on:click={onNextClick}/>
    {:else }
        <p class="text-error">Aucune phrase dans l'onglet Expérience n'a été ajoutée</p>
    {/if}

</div>

<style>

    .main-container{
        max-width: 750px;
        margin: 35px auto 0 auto;
        position: relative;
        padding: 50px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 300px;
        flex-direction: column;
    }

    h3 {
        font-family: "Varta", sans-serif;
        text-align: center;
        width: 100%
    }

    .sentence {
        font-family: "Varta", sans-serif;
        text-align: center;
        width: 100%;
    }

    textarea {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
        resize: none;
    }

    .arrow {
        position: absolute;
        box-sizing: border-box;
        height: 17px;
        width: 17px;
        border-style: solid;
        border-color: black;
        border-width: 0px 1px 1px 0px;
        transition: border-width 150ms ease-in-out;
        background-color: white;
        border-image: none;
        outline: none;
        top: calc(50% - 9px);
    }

    .arrow-left {
        left: 17px;
        transform: rotate(133deg);
    }

    .arrow-right {
        right: 17px;
        transform: rotate(-45deg);
    }

    .arrow:hover {
        border-bottom-width: 4px;
        border-right-width: 4px;
        cursor: pointer;
    }

    .text-error {
        font-family: "Varta", sans-serif;
        text-align: center;
        width: 100%;
    }

</style>