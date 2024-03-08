function prueba(){
    var valor = document.getElementById('input-txt').value;
    location.href = 'https://api.whatsapp.com/send?phone=51941519960&text='+valor;
  console.log('Test de texto :',valor);
}

function prueba2(){
    location.href = 'https://api.whatsapp.com/send?phone=51941519960&text=Buen%20d%C3%ADa,%20quisiera%20informaci%C3%B3n%20sobre%20los%20m%C3%A9todos,%20precios%20y%20soluciones%20ofrecidos%20en%20MISO%20PERU';
  console.log('Test de texto :');
}