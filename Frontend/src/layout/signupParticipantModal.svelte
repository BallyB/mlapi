<script>
    import axios from "axios";
    import {push} from "svelte-spa-router";
    import auth from "../store/auth";
    import Select from "svelte-select";


    let userType = 'participant';
    let userName;
    let sex = '';
    let birthdayDate;
    const departments = [
        {value: 0, label: 'Ain'},
        {value: 1, label: 'Aine'},
        {value: 2, label: 'Allier'},
        {value: 3, label: 'Hautes-Alpes'},
        {value: 4, label: 'Basses-Alpes'},
        {value: 5, label: 'Ardeche'},
    ];
    let dept;
    let disorder;
    const possibleLanguages = [
        {value: 0, label: 'Allemand'},
        {value: 1, label: 'Anglais'},
        {value: 2, label: 'Espagnol'},
        {value: 3, label: 'Français'},
    ];

    let motherTongues;
    let languages;
    const schoolLevels = [
        {value: 0, label: 'BAC',},
        {value: 1, label: 'BAC +1'},
        {value: 2, label: 'BAC +2'},
        {value: 3, label: 'BAC +3'},
        {value: 4, label: 'BAC +4'},
        {value: 5, label: 'BAC +5'},
    ];

    let school;
    let email;
    let password;


    async function signup(e) {
        e.preventDefault();
        //console.log(languages.map(v => v.value).toString());
        try {
            const res = await axios.post('http://localhost:3000/api/auth/signupParticipant', {
                nickname: userName,
                email: email,
                password: password,
                birthDate: birthdayDate,
                sex: sex,
                disorder: disorder,
                schoolDegreeID: school.value,
                maternalLanguageID: motherTongues.map(v => v.value).toString(),
                spokenLanguageID: languages.map(v => v.value).toString(),
                regionID: dept.value,
            });
            console.log(res)
            const { token, participantId } = res.data;

            auth.setAuth({ userType, participantId, token });
            await push('/home-p');
        } catch (error) {
            console.log(error)
        }
    }


</script>

<body>
<div>
    <h1>Inscription participant</h1>
</div>

<form id="formSignup" on:submit={signup}>

    <input id ="userName" required type="text" bind:value={userName} placeholder="Nom d'utilisateur">

    <p class="sex" >Êtes-vous</p>
    <div>
        <input required type="radio" name="sex" bind:group={sex} value="M"><label>Un homme</label>

        <input required type="radio" name="sex" bind:group={sex} value="F"><label>Une femme</label>

        <input required type="radio" name="sex" bind:group={sex} value="NA"><label>Je ne souhaite pas l'indiquer</label>
    </div>

    <input required type="date" id="start" bind:value={birthdayDate} min="1950-01-01" max="2020-12-31">

    <Select items={departments} selectedValue={dept} isRequired={true} isMulti={false} on:select={e => dept = e.detail} placeholder="Sélectionnez votre département"/>
    <!--<Select required id="dept" name="dept" bind:value={dept}>
        <option value = "" disabled selected>Sélectionnez votre département de résidence</option>
        {#each departments as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </Select>-->

    <p class="trouble">Souffrez-vous d un trouble du langage ? (écrit ou parlé)</p>
    <div>
        <input required type="radio" name="trouble" bind:group={disorder} value={true}><label>Oui</label>
        <input required type="radio" name="trouble" bind:group={disorder} value={false}><label>Non</label>
    </div>

    <Select items={possibleLanguages} selectedValue={motherTongues} isRequired={true} isMulti={true} on:select={e => {
        console.log(e.detail);motherTongues = e.detail}} placeholder="Sélectionnez votre ou vos langues(s) maternelle(s)"/>
    <!--<select required id = "motherTongue" name = "langue" bind:value={motherTongues}>
        <option value = "" disabled selected>Sélectionnez votre ou vos langue(s) maternelle(s)</option>
        {#each possibleLanguages as level}
            <option value ={level.value}>{level.label}</option>
        {/each}
    </select>-->
    <Select items={possibleLanguages} selectedValue={languages} isRequired={true} isMulti={true} on:select={e => languages = e.detail} placeholder="Sélectionnez la ou les autre(s) langue(s) que vous parlez"/>
    <!--<select id = "langue" name = "langue" bind:value={languages}>
        <option value = "" disabled selected>Sélectionnez la ou les autre(s) langue(s) que vous parlez</option>
        {#each possibleLanguages as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </select>-->

    <Select items={schoolLevels} selectedValue={school} isRequired={true} isMulti={false} on:select={e => school = e.detail} placeholder="Sélectionnez votre niveau scolaire"/>
    <!--<select required id = "scho" name = "scho" bind:value={school}>
        <option value = "" disabled selected>Sélectionnez votre niveau scolaire</option>
        {#each schoolLevels as level}
            <option value={level.value}>{level.label}</option>
        {/each}
    </select>-->

    <input required id="email"  type="email"  name="email" bind:value={email} placeholder="Adresse mail">
    <input required id="password" type="password"  name="password" bind:value={password} placeholder="Mot de passe">


    <input required type="checkbox" name = "accept" id="accept"><label id="terms" for="accept">En poursuivant je reconnais avoir pris connaissance des termes et conditions d'utilisation. </label>
    <br/>
    <a href>Comment sont utilisées mes données ?</a>
    <br/>
    <button type="submit" class="primary-button-black" style="margin-top: 25px">inscription participant</button>

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

    input:focus {
        outline: none;
    }

    .sex{
        font-size : 14px;
        color:#313131;
    }

    #userName, #dept, #motherTongue, #langue, #password, #email, #scho, #confirmPassword {
        background-color: #eee;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        padding: 12px 15px;
        margin: 8px auto;
    }

    #terms{
        font-size : 12px;
        color : #313131;
    }

    a {
        color : #eb2f06;
        text-decoration : underline;
        font-size : 12px;
    }
    a:hover{
        color : #b71540;
        font-weight: bold;
    }

    error-msg {
        color: #b71540;
    }

</style>