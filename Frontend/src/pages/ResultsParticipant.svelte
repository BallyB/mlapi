<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    import {onMount} from "svelte";
    import axios from "axios";

    export let params = {};

    let results;

    /*onMount(async () => {
        const {id} = params;

        try {
            const res = await axios.get(`http://localhost:3000/api/results/${id}`)
            results = res.body;
        } catch (e) {
            console.error(e)
        }
    })*/

</script>

<Navbar selectedResults={"selected"}/>

<!--{@html results}-->

<div class="contentResults">
    <h1>POLYSÉMIE ET TRONCATION DES NOMS EN -ION EN FRANÇAIS</h1>
    <p>
        Cet article présente une étude de corpus des effets sémantiques de la troncation des
        noms en -ion en français. Nous documentons trois effets : la distribution statistique
        des sens des noms tronqués est significativement différente de celle de leurs bases,
        elle est moins équilibrée, et les sens événementiels sont défavorisés. Ces observations suggèrent que les généralisations de Kerleroux (1999) sont valides si on leur
        donne une forme graduelle plutôt que catégorique.
    </p>
    <img class="article-lng" src="images/article-lng.png" alt="tableau de résultats" />
    <img class="article-lng" src="images/article-lng2.png" alt="graphe" />
    <p>
        Dans cet article, nous avons proposé une méthode pour explorer la polysémie des procédés constructionnels. À partir de la sélection d’un échantillon
        aléatoire d’attestations de bases et de dérivés, nous avons annoté manuellement les sens lexicaux rencontrés. Cette façon de faire nous a permis de faire
        des analyses statistiques sur les distributions de sens rencontrés, et nous a
        permis de valider sous une forme révisée une généralisation initialement
        proposée par Kerleroux (1999) : la troncation a un effet sur la distribution
        des sens des noms en -ion. Nous avons enfin discuté la manière dont un
        modèle théorique de la morphologie constructionnelle pourrait prendre en
        compte une telle généralisation.
    </p>

</div>







<style>
    h1{
        text-align: center;
        font-family: 'Varta', sans-serif;
    }

    .contentResults {
        margin: auto 75px;
    }

    p{
        font-family: 'Varta', sans-serif;
    }
</style>