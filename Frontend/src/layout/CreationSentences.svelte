<script>
    import {createEventDispatcher} from 'svelte'
    import {fade} from 'svelte/transition'
    export let sentence = {}
    const dispatch = createEventDispatcher()
    function onInput (e) {
            dispatch('change', {name:e.target.value})
    }
    function onDelete () {
            dispatch('delete')
    }
</script>

<li transition:fade>
    <input type="text" value={sentence.name} on:input={onInput} class="sentence"/>
    <span class="delete" on:click|preventDefault={onDelete}> Supprimer </span>
</li>


<style>
    span{
        font-family: "Varta", sans-serif;
    }
    .delete{
            cursor: pointer;
            color: grey;
            font-size: 15px;
    }
    .sentence:focus {
            outline: 0;
    }
    .sentence {
            cursor: pointer;
            background-color: #eee;
            width: 100%;
            box-sizing: border-box;
            border: none;
            border-radius: 6px;
            padding: 12px 15px;
            margin: 8px auto;
    }
</style>