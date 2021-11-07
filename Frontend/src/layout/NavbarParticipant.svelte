<script>
	export let selectedHome;
	export let selectedExpList;
	export let selectedRecommendations;
	export let selectedResults;
	import { link } from "svelte-spa-router";
	import { fly, fade } from "svelte/transition";
	import Signout from "../layout/Signout.svelte";
	import Overlay from "svelte-overlay";
</script>

<nav class="nav" role="navigation">
	<ul class="menu">
		<div class="left-links">
			<a class="logo" href="/home-p" use:link><img class="logo" src="images/llama.png" alt="logo" /></a>
		</div>
		<div class="menu">
			<li>
				<a class="links {selectedHome}" href="/home-p" use:link>Accueil</a>
			</li>

			<li>
				<p class="links">Ma liste</p>
				<!-- <a class="links {selectedExpList}" href="/maliste" use:link>Ma liste</a> -->
			</li>
			
			<li>
				<p class="links">Recommandations</p>
				<!-- <a class="links {selectedRecommendations}" href="/recommandations" use:link>Recommandations</a> -->
			</li>

			<li>
				<a class="links {selectedResults}" href="/resultats-p" use:link>Résultats</a>
			</li>
		</div>
		<div class="right-links menu">
			<li>
				<Overlay closeOnClickOutside={true} position={"bottom-left"} >
					<button
						class="profile-button"
						slot="parent"
						let:toggle
						on:click={toggle}>
						<img class="profile" src="images/user.png" alt="profile"/>
					</button>

					<div slot="content" class="profile-drop" transition:fly>
						<div>
							<a class="profile-links" href="/profil-p" use:link>Mon profil</a>
						</div>
						<div>Paramètres</div>
						<div>Aide</div>
						<div><Signout /></div>
					</div>
				</Overlay>
			</li>
			<li>
				<a class="chat" href="/messagerie-p" use:link><img class="chat" src="images/email.png" alt="chat" /></a>
			</li>
		</div>
	</ul>
</nav>

<style>
	.nav {
		padding-bottom: 8em;
	}
	.nav ul {
		position: fixed;
		width: 100%;
		margin: 0px;
		padding: 0px;
		background: white;
		list-style: none;
		box-shadow: 0px 15px 10px -15px #313131;
	}
	.nav .menu {
		display: flex;
		justify-content: space-between;
		/* height: auto; */
		height: 7em;
		align-items: center;
	}
	.links {
		padding: 0.5em 1em;
		display: inline-block;
		text-align:center;
		text-decoration: none;
		color: #313131;
		font-family: "Varta", sans-serif;
		font-size: 20px;
		border-bottom: 5px solid white;
	}	
	.links:hover {
		border-bottom: 5px solid #f6b93b;
	}
	.selected {
		border-bottom: 5px solid #f6b93b;
		font-weight: bolder;
	}
	.logo {
		height: 80px;
		display: inline-block;
		padding-right: 14px;
	}
	.chat,.profile {
		height: 25px;
		display: inline-block;
		padding-right: 14px;
	}
	.profile-button{
		background:none;
		border:none
	}
	.profile-button:focus{
		outline:none;
	}
	.profile-drop{
		width:12em;
		text-align: center;
		background:#fff;
		text-decoration:none;
		color:#3131319d;
		font-family: 'Varta', sans-serif;
		box-shadow: 0px 15px 10px -15px #313131;
		border: 1px solid rgba(0,0,0,.15);
	}
	.profile-links{
		color: black;
		text-decoration: none;
	}
	.profile-drop > div:hover{
		background-color: rgba(246, 185, 59, 0.3);
	}
	.profile-drop > div{
		display: flex;
		font-size: 18px;
		padding:1em;
	}	
</style>
