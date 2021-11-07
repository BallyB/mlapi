<script>
    import Router, {replace} from 'svelte-spa-router';
    import wrap from "svelte-spa-router/wrap";

    import LandingPage from '../pages/LandingPage.svelte';
    import ProfilR from '../pages/ProfilResearcher.svelte';
    import ProfilP from '../pages/ProfilParticipant.svelte';
    import Creation from '../pages/Creation.svelte';
    import Participation from '../pages/Participation.svelte';
    import HomeResearcher from '../pages/HomeResearcher.svelte';
    import HomeParticipant from '../pages/HomeParticipant.svelte';
    import ChatR from '../pages/ChatResearcher.svelte';
    import ChatP from '../pages/ChatParticipant.svelte';
    import ResultsR from '../pages/ResultsResearcher.svelte';
    import ResultsP from '../pages/ResultsParticipant.svelte';
    import auth from "../store/auth.js";
    import ResultsResearcher from '../pages/ResultsResearcher.svelte';
    import ResultsParticipant from '../pages/ResultsParticipant.svelte';

    function isAuthenticated() {
        return !!$auth.token
    }

    function isResearcher() {
        return $auth.userType === "researcher"
    }

    function isParticipant() {
        return $auth.userType === "participant"
    }

    export const routes = {
        '/': LandingPage,
        '/home-r': wrap({
            component: HomeResearcher,
            conditions: [
                isAuthenticated,
                isResearcher,
            ]
        }),
        '/home-p': wrap({
            component: HomeParticipant,
            conditions: [
                isAuthenticated,
                isParticipant,
            ]
        }),
        '/creation': wrap({
            component: Creation,
            conditions: [
                isAuthenticated,
                isResearcher,
            ]
        }),
        '/participation/:id': wrap({
            component: Participation,
            conditions: [
                isAuthenticated,
                isParticipant,
            ]
        }),
        '/messagerie-p': wrap({
            component: ChatP,
            conditions: [
                isAuthenticated,
                isParticipant,
            ]
        }),
        '/messagerie-r': wrap({
            component: ChatR,
            conditions: [
                isAuthenticated,
                isResearcher,
            ]
        }),
        '/resultats-p': wrap({
            component: ResultsP,
            conditions: [
                isAuthenticated,
                isParticipant,
            ]
        }),
        '/resultats-r': wrap({
            component: ResultsR,
            conditions: [
                isAuthenticated,
                isResearcher,
            ]
        }),
        '/profil-p': wrap({
            component: ProfilP,
            conditions: [
                isAuthenticated,
                isParticipant,
            ]
        }),
        '/profil-r': wrap({
            component: ProfilR,
            conditions: [
                isAuthenticated,
                isResearcher,
            ]
        }),
    };

    function onConditionsFailed() {
        replace('/');
    }

</script>

<Router {routes} on:conditionsFailed={onConditionsFailed} />