<script>
	import Router from './layout/Router.svelte';
    import {onMount} from "svelte";
    import axios from 'axios';
    import auth from './store/auth';

	/*onMount(async () => {
	   const token = localStorage.getItem('jwt');

	   if (token) {
	       const res = await axios.post('http://localhost:3000/api/auth/tokenLogin', {}, {
	           headers: {
	               'Authorization': `Bearer ${token}`
               }
           })

           if (res.status === 200) {
               const { userType, user } = res.data;
               auth.setAuth({ userType, user, token, userId: user._id });
           }
       }
    });*/
</script>

<main>
    <Router />
</main>
