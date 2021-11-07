<script>
    import { getContext } from "svelte";

    const state = getContext("experience");

    const filters = [
        { label: 'Age', value: 'age' },
        { label: 'Langue maternelle', value: 'motherTongue' },
        { label: 'Langue parlée', value: 'spokenLanguage' },
        { label: 'Département', value: 'department' },
        { label: 'Niveau scolaire', value: 'schoolLevel' },
        { label: 'Trouble du langage', value: 'trouble' },
    ]
        .map(filter => ({ label: filter.label, value: $state.experience[filter.value] }))
        .filter(({ value }) => !!value);
</script>

<div class="presentation-container">
    <p>{$state.experience.description}</p>
    <p>{$state.experience.guideline}</p>
    <p>{$state.experience.consentForm}</p>
    
    <p>Cette expérience est destinée à :</p>
    <div class="filter-container">
        {#each filters as filter}
            <div class="filter-item">
                <div>{filter.label} : {filter.value}</div>
            </div>
        {/each}
    </div>
</div>


<style>
    /* .filter-container{
        border-radius: 25px;
        border: 2px solid #f6b93b;
        padding: 4px;
        text-align: center;
        justify-content: space-around;
        font-family: "Varta", sans-serif;
    } */



    .filter-container {
        display: flex;
        flex-flow: row wrap;
        align-content: space-between;
        justify-content: center;
    }
    .filter-item {
        display: contents;
    }
    .filter-item > div {
        border-radius: 25px;
        border: 2px solid #f6b93b;
        padding: 4px;
        text-align: center;
        justify-content: center;
        justify-content: space-around;
        font-family: "Varta", sans-serif;
        margin: 10px;
        line-height: 20px;
    }
    .filter-item:nth-child(3n)::after {
        content: "";
        width: 100%;
    }

    .presentation-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .presentation-container p {
        font-family: "Varta", sans-serif;
        text-align: justify;
    }
</style>
