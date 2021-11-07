<script>
    import axios from "axios";
    import { writable } from "svelte/store";
    import {setContext} from "svelte";
    import ResultsEditor from "./ResultsEditor.svelte";
    import ResultsTabs from './ResultsTabs.svelte';
    import ResultsPreview from './ResultsPreview.svelte';

    export let experience;

    const items = [
        {
            label: "Editor",
            value: 1,
            component: ResultsEditor
        },
        {
            label: "Preview",
            value: 2,
            component: ResultsPreview
        },
    ];
    export const state = writable({
        items,
        activeItem: items[0].value,
        content: '',
        deltas: [],
    });

    setContext('results-creation', state);

    async function send(event) {
        event.preventDefault();

        const result = await axios.post(`/api/experiment/result/${experience.id}`, {
            result: $state.content,
        });

        alert(JSON.stringify(result, null, 2));
    }

</script>

<!--<h2>{experience.title}</h2>-->

<ResultsTabs/>

<button type="submit" class="primary-button" on:click={send}>Valider</button>

<style>
    .primary-button {
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        margin: 10px auto;
        justify-content: space-around;
        align-items: center;
    }
</style>


