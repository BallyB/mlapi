<script>
    import auth from "../store/auth";

    function logout() {
        auth.reset();
        localStorage= null;
    }
</script>

<a href="/" type="submit" on:click={logout}>Se déconnecter</a>


<style>
    a{
        text-decoration: none;
        font-family: 'Varta', sans-serif;
        color: black;
    }
</style>