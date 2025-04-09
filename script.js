function converterTemperatura() {
    const tipo = document.getElementById('tipoConversao').value;
    const valor = parseFloat(document.getElementById('inputTemperatura').value);
    const resultado = document.getElementById('resultado');
  
    if (isNaN(valor)) {
      resultado.textContent = 'Por favor, insira um número válido.';
      btnRefazer.style.display = 'none'; // continua oculto se input for inválido
      return;
    }
  
    let convertido;
    let textoResultado;
  
    if (tipo === 'cToF') {
      convertido = (valor * 9/5) + 32;
      textoResultado = `${valor.toFixed(1)}°C é igual a ${convertido.toFixed(1)}°F`;
    } else {
      convertido = (valor - 32) * 5/9;
      textoResultado = `${valor.toFixed(1)}°F é igual a ${convertido.toFixed(1)}°C`;
    }
  
    resultado.textContent = textoResultado;   
    btnRefazer.style.display = 'inline-block'; // exibe o botão de refazer
  }

  function refazerConversao() {
    document.getElementById('inputTemperatura').value = '';
    document.getElementById('tipoConversao').value = 'cToF';
    document.getElementById('resultado').textContent = '';
    document.getElementById('btnRefazer').style.display = 'none';
  }
