<script xmlns="http://www.w3.org/1999/html">
    import { getContext } from 'svelte';

    const context = getContext('creation-form');
</script>

    <div class="input-container">
        <input type="text" name="title" bind:value={$context.formData.title} placeholder="Titre de l'expérience"/>
        <textarea type="text" id="description" name="description" bind:value={$context.formData.description} placeholder="Description de l'expérience"></textarea>
        <textarea type="text" id="instruction" name="instruction" bind:value={$context.formData.guideline} placeholder="Consigne de l'expérience"></textarea>
        <textarea type="text" id="consent" name="consent" bind:value={$context.formData.consentForm} placeholder="Formulaire de consentement"></textarea>

        <!-- <select  name="expType" bind:value={$context.formData.presentation.expType}>
            <option value="" disabled selected>Sélectionnez un type d'expérience</option>
            <option value="type1">Jugement d'acceptabilité</option>
            <option value="type2">Reconnaissance de mot</option>
        </select> -->
    </div>


<style>
    .input-container {
        margin: auto;
        width: 50%;
    }

    input:focus {
        outline: 0;
    }
    input, textarea {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
        resize: none;
    }
    
    #description, #instruction  {
        height: 140px ;
    }

    #consent {
        height: 180px;
    }

</style>