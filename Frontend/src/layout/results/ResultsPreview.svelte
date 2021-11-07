<script>
    import {getContext} from "svelte";

    const context = getContext('results-creation');


</script>

{@html $context.content}
