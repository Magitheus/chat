function sentMessage() {
    document
      .getElementById("senting")
      
        var messages = document.getElementById("messages");
        var input = document.getElementById("input").value;
        
        const dataAtual = new Date();
        const horas = dataAtual.getHours();
        const minutos = dataAtual.getMinutes();

        var div = document.createElement("div");
        div.classList = "sent";
        div.innerHTML = (`<p>Você - ${horas + ":" + minutos}</p>
        <div class="message-s message"><p>${input}</p></div>`);
        
        messages.appendChild(div);
        document.getElementById("input").value = "";
      ;
  }