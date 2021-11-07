<script>
    import Select from "svelte-select";
    import axios from "axios";
    import { push } from "svelte-spa-router";
    import auth from "../store/auth";
    
    const lab =[
        {value: 'labo1', label: 'Laboratoire 1'},
        {value: 'labo2', label: 'Laboratoire 2'}
    ];
        
    let userType = 'researcher';
    let firstname;
    let name;
    let sex;
    let laboratory;
    let email;
    let password;

	
    async function signup(e) {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:3000/api/auth/SignupResearcher', {
                firstname: firstname,
                name: name,
                email: email,
                password: password,
                sex: sex,
                laboratory: laboratory,
            });
            console.log(res)
            const { token, researcherId } = res.data;

            auth.setAuth({ userType, researcherId, token });
            await push('#/home-r');
        } catch (error) {
            console.log(error)
        }
    }

</script>
  
    <h1> Inscription Chercheur </h1>
    <form id= "formSignup" on:submit={signup}>

        <input id ="firstname" required type="text" class="input-type" bind:value={firstname} placeholder="Prénom">
        <br/>

        <input id ="surname" required type="text" class="input-type" bind:value={name} placeholder="Nom">
        <br/>

        <p class="sex" >Êtes-vous</p>
        <div>
            <input required type="radio" name="sex" bind:group={sex} value="M"><label>Un homme</label>

            <input required type="radio" name="sex" bind:group={sex} value="F"><label>Une femme</label>

            <input required type="radio" name="sex" bind:group={sex} value="Undefined"><label>Je ne souhaite pas l'indiquer</label>
        </div>
        <br/>

            <div class='select-item'><Select items={lab} bind:value={laboratory} isMulti={false} placeholder="Sélectionnez votre laboratoire de rattachement"/></div>
        <!-- <select required id="lab" name="lab">
            <option value="" disabled selected>Sélectionnez votre laboratoire de rattachement</option>
            <option value="Labo1">Laboratoire 1</option>
        </select>   -->
        <br/>
        <label for="email" id="profEmail">Votre adresse email professionnelle nous permet de limiter l'accès aux chercheurs.</label>
        <input required id="email"  type="email"  name="email" bind:value={email} class="input-type" placeholder="Adresse mail professionnelle valide">
        <br/>
        <input required id="password" type="password"  name="password" bind:value={password}  class="input-type" placeholder="Mot de passe">
        <br/>


        <!-- <input required type = "password" id = "confirmPassword" placeholder = "Confirmation du mot de passe" /> -->
        <!-- <br/> -->

        <input required type="checkbox" name = "accept" id="accept"> <label id = "terms" for = "accept"> En poursuivant je reconnais avoir pris connaissance des termes et conditions d'utilisation.</label>
        <br/>
        <a href>Comment sont utilisées mes données ?</a>
        <br/>

        <button type="submit" class="primary-button-black">Inscription chercheur</button>

        <br/>
    </form>

<style>
    form {
       width: 450px;
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
        display: block;
        margin: 1.25rem auto;
        width: 193px;
        height: 46px;
        left: 394px;
        top: 509px;
    }

    #terms{
        font-size : 14px;
        color : #313131;
    }
    
    .sex{
        font-size : 14px;
        color:#313131;
    }
    #profEmail{
        color:#eb2f06;
        font-size:14px;
    }

    a {
        cursor : pointer;
        color : #eb2f06;
        text-decoration : underline;
        font-size : 14px;
    }
    a:hover{
        color : #b71540;
        font-weight: bold;
    }

</style>