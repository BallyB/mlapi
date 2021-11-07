<script>
    import Modal from "../layout/Modal.svelte";
    import ConnexionComponent from "../layout/connexionComponent.svelte";
    import SignupResearchers from "../layout/SignupResearchersComponent.svelte";
    import SignupParticipants from "../layout/signupParticipantComponent.svelte";
</script>
        <div class="container">

            <div class="col-left">
                <div class="logo">
                    <img id="logo" class="logo" src="images/logo.png" alt="Logo" />
                </div>
                <div>
                    <p class="accroche">
                        Participez à des expériences en <em>linguistique </em> et
                        faites avancer la <em>recherche</em>
                    </p>
                </div>
                <div>
                    <p>Vous avez déjà un compte ?</p>
                    <Modal>
                        <ConnexionComponent />
                    </Modal>
                    
                </div>
                
                <div>
                    <p class="quote">
                        "LE meilleur (seul) site pour participer à des expériences
                        en linguistique !" Béatrice.
                    </p>
                </div>
                <div></div>
            </div>
            <div class="col-right">
                <div class="header-part">
                    <h2 class="header-top"> Rejoignez-nous</h2>
                    <hr />
                    <h2 class="header-bottom">dès maintenant</h2>
                </div>
                <div class="mid-part">
                    <div class="left-part">
                        <div class="img-left">
                            <div> <img id="creation" src="images/creation.png" alt="creation"/>  </div>
                            <div> <img id="participants" src="images/participants.png" alt="participants"/> </div>
                            <div> <img id="followup" src="images/followup.png" alt="followup"/> </div>
                        </div>
                        <div class="txt-left">
                            <div class="creation">
                                <p>Créez vos expériences</p></div>
                            <div class="participants">
                                <p>Trouvez des participants</p>
                            </div>
                            <div class="followup">
                                <p>Réalisez le suivi</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="right-part">
                        <div class="txt-right">
                            <div class="participation">
                                <p>Participez aux expériences</p></div>
                            <div class="results">
                                <p>Accédez aux résultats</p>
                            </div>
                            <div class="reward">
                                <p>Soyez récompensés</p>
                            </div>
                        </div>
                        <div class="img-right">
                            <div> <img id="participation" src="images/participation.png" alt="participation"/>  </div>
                            <div> <img id="results" src="images/results.png" alt="results"/> </div>
                            <div> <img id="reward" src="images/reward.png" alt="reward"/> </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-part">
                    <div class="signup-researchers">
                        <Modal>
                            <SignupResearchers />
                        </Modal>
                    </div>
                    <div class="signup-participants">
                        <Modal>
                            <SignupParticipants />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    

    
    <style>
        .container {
            display:flex;
            z-index: 0;
            height:100vh;
            width:100%;
            margin:0;
        }

        /* Control the left side */
        .col-left {
            width: 30%;
            text-align: center;
            font-size: 20px;
            font-family: "Varta", sans-serif;
            margin:0;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
        .logo{
            text-align: left;
        }

        #logo{
            width: 10vw;
        }
        .quote {
            margin-left: 5vw;
            margin-right: 5vw;
            font-size: 22px;
            font-family: "Nothing you could do";
        }
        .accroche {
            font-size: 26px;
            margin-left: 5vw;
            margin-right: 5vw;
            /* margin-top: 15%; */
        }
        .accroche em {
            font-size: 26px;
            font-family: "Nothing You Could Do", cursive;
            font-weight: bold;
        }





        /* Control the right side */
        .col-right {
            width: 70%;
            background-color: #f6b93b;
            text-align: center;
            font-family: "Varta", sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .header-part{
            display:flex;
            flex-direction: column;
            justify-content: center;
        }

        .mid-part {
            width:100%;
            display: flex;
            justify-content: space-around;

        }

        .left-part{
            display: flex;
            justify-content: flex-start;
        }

        .txt-left{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }
        .img-left{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;
        }
        .txt-right{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
        }
        .img-right{
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
        }
        #creation{
            width: 50%;
            /* width: 3em; */
        }
        .creation{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }
        #participants{
            width: 50%;
            /* width: 3em; */
        }
        .participants{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }
        #followup{
            width: 50%;
            /* width: 3em; */
        }
        .followup{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }
        .right-part{
            display: flex;
            justify-content: flex-start;
        }

        #participation{
            width: 50%;
            /* width: 3em; */
        }
        .participation{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }
        #results{
            width: 50%;
            /* width: 3em; */
        }
        .results{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }
        #reward{
            width: 50%;
            /* width: 3em; */
        }
        .reward{
            font-size: 1.7em;
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            font-weight: 600;
            color: #313131;
        }

        .bottom-part{
            width:100%;
            display: flex;
            justify-content: space-around;
        }
     
        p {
            text-align: "center";
            /* margin-top: 10%; */
        }
        h2 {
            color: #fff;
            font-size: 36px;
            margin:0;
        }
        hr {
            display: block;
            height: 0.5vh;
            width: 7vw;
            border: 0;
            border-top: 1px solid #fff;
            padding: 0;
        }
        
    </style>