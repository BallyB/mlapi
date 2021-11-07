<script>
    import {getContext} from "svelte";
    import Toggle from "../../Toggle.svelte";

    const state = getContext('experience')

    const setType = (property, value) => () => $state.thanks[property] = value;

</script>

<div class="text">
    <h1>Merci pour votre participation !</h1>
    <h3>Cette expérience est désormais terminée.</h3>

    <p>Souhaitez-vous être recontacté par le chercheur ?</p>
    <div class="toggle"><Toggle value1={setType('toContact', false)} label1={"Non"} value2={setType('toContact', true)} label2={"Oui"}/></div>

    <p>Souhaitez vous être informé lors de la publication des résultats de cette expérience ? </p>
    <div class="toggle"><Toggle value1={setType('toInform', false)} label1={"Non"} value2={setType('toInform', true)} label2={"Oui"}/></div>
</div>

<style>
    .text {
        font-family: "Varta", sans-serif;
        text-align: center;
        margin-top: 90px;
        margin-bottom: 90px;
    }
    .toggle{
        width: 200px;
        margin: 0 auto;
    }
</style>
