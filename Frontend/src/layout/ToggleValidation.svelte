<script>
    export let answer1;
    export let answer2;
  </script>
  
  <label class="switch">
    <input type="checkbox" id="togBtn" />
    <div class="slider round">
      <span class="answer-left">{answer1}</span>
      <span class="answer-right">{answer2}</span>
    </div>
  </label>
  
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 90px;
      height: 34px;
    }
  
    .switch input {
      display: none;
    }
  
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ca2222;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  
    input:checked + .slider {
      background-color: #2ab934;
    }
  
    input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }
  
    input:checked + .slider:before {
      -webkit-transform: translateX(55px);
      -ms-transform: translateX(55px);
      transform: translateX(55px);
    }
  
    .answer-left {
      display: none;
      left: 35%;
    }
  
    .answer-right {
      right: 8%;
    }
  
    .answer-left,
    .answer-right {
      color: white;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      font-size: 13px;
      font-family: "Varta", sans-serif;
    }
  
    input:checked + .slider .answer-left {
      display: block;
    }
  
    input:checked + .slider .answer-right {
      display: none;
    }
  
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      border-radius: 50%;
    }
  </style>
  