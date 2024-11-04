function calcularIMC() {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");
    const container = document.querySelector(".container");
  
    // Remover classes de cor existentes antes de adicionar novas
    container.classList.remove("underweight", "normal", "overweight", "obese");
  
    if (isNaN(altura) || isNaN(peso)) {
      resultado.textContent = "Por favor, insira valores válidos!";
      resultado.classList.remove("show");
      resultado.classList.add("shake");
      setTimeout(() => resultado.classList.remove("shake"), 500);
      return;
    }
  
    const imc = (peso / (altura * altura)).toFixed(2);
  
    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
      container.classList.add("underweight"); // Cor para abaixo do peso
    } else if (imc < 24.9) {
      classificacao = "Peso normal";
      container.classList.add("normal"); // Cor para peso normal
    } else if (imc < 29.9) {
      classificacao = "Sobrepeso";
      container.classList.add("overweight"); // Cor para sobrepeso
    } else {
      classificacao = "Obesidade";
      container.classList.add("obese"); // Cor para obesidade
    }
  
    resultado.textContent = `IMC: ${imc} - ${classificacao}`;
    resultado.style.opacity = 0;
    resultado.classList.add("show");
    resultado.style.animation = "showResult 1s ease forwards";
  }
  