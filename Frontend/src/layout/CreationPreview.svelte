<script>
    import Experience from "./experience/Experience.svelte";
    import {getContext} from "svelte";

    const context = getContext('creation-form');
</script>

<Experience isPreview={true} experience={$context.formData} />
