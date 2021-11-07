<script>
    import Navbar from '../layout/NavbarParticipant.svelte';
    import {onMount} from "svelte";
    import auth from '../store/auth';
    import axios from "axios";
    import formatExperience from "../utils/format-experiment";
    import {replace} from "svelte-spa-router";

    let experiments = [];

    onMount(async () => {
        const res = await axios.get('http://localhost:3000/api/experiment/experiment', { headers: { authorization: `Bearer ${$auth.token}`}})

        experiments = res.data.data.map(formatExperience);
    });
</script>

<Navbar selectedHome={"selected"}/>
<div class="experimentList">
    {#each experiments as experiment}
        <div class="experiment-card">
            <div class="experiment-card1">
                <div class="type-exp">
                    <div class="image">
                        <img src="images/pen (2).png"/>
                    </div>
                    <div class="titre">
                        <h3>Jugement d'acceptabilité</h3>
                    </div>
                </div>
                <h2>{experiment.title}</h2>
                <div class="buttonLink">
                    <a class="participationLink" href={`#/participation/${experiment._id}`}><img class="arrowImage" src="images/right-arrow.png"/></a>
                </div>
            </div>
            <p class="description">{experiment.description}</p>
        </div>
    {/each}
</div>

<style>
    h2, h3 {
        font-family: "Varta", sans-serif;
        color: #FFFFFF;
        text-align: center;
        margin: 0;
    }

    h2 {
        font-weight: bolder;
        margin:0;
        padding:0;
    }

    .type-exp {
        display: flex;
        justify-content: center;
        padding: 15px;
    }

    .image {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
    }

    .experimentList {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 30px auto;
        flex-wrap: wrap;
    }

    .experiment-card {
        width: 420px;
        height: 244px;
        background: #FFFFFF;
        box-sizing: border-box;
        box-shadow: 0 7px 30px -10px rgba(150,170,180);
        border-radius: 10px;
        overflow: hidden;
        margin: 15px;
    }

    .experiment-card1 {
        width: 420px;
        height: 122px;
        background: linear-gradient(89.82deg, #F6B93B 0.11%, rgba(229, 80, 57, 0.74) 99.8%);
        box-shadow: 0 7px 15px -10px rgba(150,170,180);
    }

   .description {
       font-size: 13px;
       font-family: "Varta", sans-serif;
       text-align: justify;
       padding: 13px;
       height: 100px;
   }

   .buttonLink {
       display: flex;
       justify-content: flex-end;
   }

   a.participationLink {
       -webkit-appearance: button;
       -moz-appearance: button;
       appearance: button;
       text-decoration: none;
       width: 2.5rem;
       height: 2.5rem;
       border-radius: 1.5rem;
       border: none;
       background-color: #f6b93b;
       box-shadow: 0px 10px 13px -7px #313131;
       justify-content: center;
       margin-right: 20px;
       display: flex;
   }

   .arrowImage {
       height: 25px;
       margin-top: 7px;
   }

</style>
