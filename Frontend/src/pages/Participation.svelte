  
<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    import Experience from "../layout/experience/Experience.svelte";
    import {onMount} from "svelte";
    import axios from "axios";
    import {replace} from "svelte-spa-router";
    import auth from "../store/auth";
    import formatExperience from '../utils/format-experiment';

    export let params = {};

    let experience;

    onMount(async () => {
        const { id } = params;

        try {
            const res = await axios.get(`http://localhost:3000/api/experiment/experiment/${id}`,
                {headers: { authorization: `Bearer ${$auth.token}`}});
            experience = formatExperience(res.data.data);
        } catch (e) {
            console.error(e);
            await replace('#/home-p');
        }
    });

</script>

<Navbar selectedParticipation={"selected"}/>

{#if (experience)}
    <Experience isPreview={false} experience={experience}/>
{/if}
