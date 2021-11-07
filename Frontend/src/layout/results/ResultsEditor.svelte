<script>
    import {getContext, onMount} from "svelte";
    import Quill from 'quill';

    const context = getContext('results-creation');

    const toolbarOptions = [
        [{ header: 1 }, { header: 2 }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet"}, { align: [] }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'color': [] }, { 'background': [] }],
        ["blockquote", "link", "image"],
        ['clean']
    ];

    let node;

    onMount(() => {
        const quill = new Quill(node, {
            placeholder: "Saisissez votre texte ici",
            theme: "snow",
            modules: {
                toolbar: toolbarOptions
            },
        });

        const container = node.getElementsByClassName("ql-editor")[0];

        quill.setContents($context.deltas);

        quill.on("text-change", function() {
            $context.content = container.innerHTML;
            $context.deltas = quill.getContents();
        });
    });
</script>

<svelte:head>
    <link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" type="text/css">
</svelte:head>

<div class="editor" bind:this={node}></div>


<style>
    .editor{
        height:50em;
    }
</style>