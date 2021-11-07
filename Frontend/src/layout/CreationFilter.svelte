<script>
    import { getContext } from 'svelte';
    import Select from "svelte-select";

    const context = getContext('creation-form');

    const age =[
        {value: '18-25 ans', label: '18-25 ans'},
        {value: '25-35 ans', label: '25-35 ans'}
    ];
    const spokenLanguage = [
        {value: 'allemand', label:'Allemand'},
        {value: 'anglais', label: 'Anglais'},
        {value: 'chinois', label:'Chinois'},
        {value: 'espagnol', label:'Espagnol'},
        {value: 'français', label: 'Français'}
    ];
    const motherTongue = [
        {value: 'allemand', label:'Allemand'},
        {value: 'anglais', label: 'Anglais'},
        {value: 'chinois', label:'Chinois'},
        {value: 'espagnol', label:'Espagnol'},
        {value: 'français', label: 'Français'}
    ];
    const department= [
        {value: 'ain', label: 'Ain'},
        {value: 'aine', label: 'Aine'},
        {value: 'allier', label: 'Allier'},
        {value: 'ardèche', label: 'Ardèche'}
    ];
    const schoolLevel = [
        {value: 'BAC', label: 'BAC'},
        {value: 'BAC +1', label: 'BAC +1'},
        {value: 'BAC +2', label: 'BAC +2'},
        {value: 'BAC +3', label: 'BAC +3'}
    ];
    const trouble = [
        {value: true, label: 'Oui'},
        {value: false, label: 'Non'}
    ];

    function handleSelectForFilter(filterName) {
        return event => {
            $context.formData[filterName] = (event.detail || []).map(item => item.value);
        }
    }

    function handleSelectTrouble(event) {
        $context.formData.trouble = event.detail ? event.detail.value : null;
    }

</script>


<div class="container">
    <!-- <div class='multiSelectItem'> -->
        <p> Indiquez les critères d'inclusion des participants (si besoin) :</p>

        <div class='multiSelectItem'><Select items={age} isMulti={true} on:select={handleSelectForFilter("age")} placeholder="Âge"/></div>

        <div class='multiSelectItem'><Select items={spokenLanguage} isMulti={true} on:select={handleSelectForFilter("spokenLanguage")} placeholder="Langue"/></div>

        <div class='multiSelectItem'><Select items={motherTongue} isMulti={true} on:select={handleSelectForFilter("motherTongue")} placeholder="Langue maternelle"/></div>

        <div class='multiSelectItem'><Select items={department} isMulti={true} on:select={handleSelectForFilter("department")} placeholder="Département"/></div>

        <div class='multiSelectItem'><Select items={schoolLevel} isMulti={true} on:select={handleSelectForFilter("schoolLevel")} placeholder="Niveau scolaire"/></div>

        <div class='multiSelectItem'><Select items={trouble} isMulti={false} on:select={handleSelectTrouble} placeholder="Trouble du langage"/></div>

    <!-- </div> -->
</div>

<style>
    p{
        font-family: "Varta", sans-serif;
        color:#313131;
        font-size: 17px;
    }
    .container {
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 400px;
        width:600px;
    }


</style>