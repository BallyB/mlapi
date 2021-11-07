<script>
    import Sentence from './CreationSentences.svelte'
    import { getContext } from 'svelte';
    const context = getContext('creation-form');

    let newSentence = ''

    function addSentence () {
        if (newSentence.length > 0){
            $context.formData.content.sentences = [...$context.formData.content.sentences,{
            name: newSentence,
            id: Date.now()
        }]
        newSentence = ''}
        
    }    
    function deleteSentence (sentence) {
        $context.formData.content.sentences = $context.formData.content.sentences.filter(s => s !== sentence)
    }
    
</script>

<div class="input-container">
    <input type="text" name="question" bind:value={$context.formData.content.question} placeholder="Question / énoncé">

    <select  name="slider" bind:value={$context.formData.content.slider}>
        <option value="" disabled selected>Sélectionnez un type de curseur</option>
        <option value="discrete">Discret (e.g.)</option>
        <option value="continuous">Continu (e.g.)</option>
    </select>

    <p> Phrases pour jugement d'acceptabilité </p>
    <ul>
        {#each $context.formData.content.sentences as sentence (sentence.id)}
            <!-- name="sentenceID" bind:value={$context.formData.content.sentenceID} -->
            <Sentence
                sentence={sentence}
                on:delete={() => deleteSentence(sentence)}
            />
        {/each}
    </ul>
    <input type="text" bind:value={newSentence} placeholder="Ajouter une phrase">
    <button class="addSentence" on:click|preventDefault={addSentence}>+</button>
</div>





<style>				
    ul{list-style-type:none;}

    p{
        font-family: "Varta", sans-serif;
    }

    .input-container {
        margin: auto;
        width: 50%;
    }
    input, select {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }
    input:focus {
        outline: 0;
    }
    select:focus {
        outline: 0;
    }
    select:invalid {
        color: gray;
    }

    select:invalid {
        color: gray;
    }
    .addSentence{
        border-radius: 30px ;
        height: 35px ;
        width: 35px ;
        font-size: 1.8em ;
        transition: .3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .5);
        border:none;
        background-color: #F6B93B;
        font-family: 'Varela Round', sans-serif;
    }
    .addSentence:focus {
            outline: 0;
            transition: .3s ease;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .5);
            border:none;
    }
    .addSentence:hover{
        transform: rotate(90deg) scale(1.1);
        outline: none;
        border:none;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .5);
    }
    select{
        cursor: pointer;
    }
</style>