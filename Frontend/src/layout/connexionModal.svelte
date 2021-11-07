<script>
    import auth from "../store/auth";
    import {replace} from 'svelte-spa-router'
    import axios from 'axios';
    import Toggle from './Toggle.svelte'


    let userType = "researcher";
    let email;
    let password;

    async function request(route, targetRoute) {
        const res = await axios.post(`http://localhost:3000/api/auth/${route}`, {
            email,
            password
        });

        const { token } = res.data;
        const user = res.data[userType];
        const userId = res.data[`${userType}Id`];

        auth.setAuth({ userType, userId, user, token});
        localStorage.setItem("jwt", token);

        await replace(targetRoute);
    }

    async function login(e) {
        e.preventDefault();
        if (userType === 'researcher') {
            await request('signinResearcher', '/home-r');
        } else {
            await request('signinParticipant', '/home-p');
        }
    }

    const setType = value => () => userType = value;
</script>


<body>
<div>
    <h1>Connexion</h1>
</div>

<form id='signupForm' on:submit={login}>
    <Toggle value1={setType('researcher')} label1={"Chercheur"} value2={setType('participant')} label2={"Participant"}/>

    <input type="email" name="email" bind:value={email} placeholder="Adresse mail">
    <input type="password" name="password" bind:value={password} placeholder="Mot de passe">
    <a href="#"> Mot de passe oublié ? </a>

    <button type="submit" class="primary-button-black">Connexion</button>
</form>
</body>


<style>

   form {
       width: 400px;
       margin: auto;
   }

    h1 {
        font-size: 2rem;
        text-align: left;
        color: #F6B93B;
        width: 400px;
        margin: 0 auto 13px;
    }

    .primary-button-black {
        width: 115px;
        height: 47px;
        display: block;
        margin: 1.25rem auto;
    }


    a {
        color: red;
        font-size: 14px;
        text-align: left;
        display: block;
        margin: 0.5rem auto;
    }

    input {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }

</style>