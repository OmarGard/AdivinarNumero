numero=Math.floor(Math.random()*100+1);
cadena="Elementos usados: ";
max_tries=6;
cont=0;
band=false;
function compara(){
  if(band)
    return;
  var dato=document.getElementById('caja1').value;
  if(dato!=='')
  {
      var numi=parseInt(dato);
      var box=document.getElementById('resultado');
      var texto1=document.getElementById('texto1');
      var num1=document.getElementById('num');
      cont++;
      if(numi===numero)
      {
        texto1.innerHTML="Felicidades, has adivinado el numero";
        box.style.backgroundColor="rgb(89, 199, 44)";
        num1.style.color="black";
        num1.innerHTML=numero;
        document.getElementById('boton1').style.display="none";
        band=true;
      }
      else
      {
        if(numi>numero)
        {
          texto1.textContent="Oops, el número es mas chico que:";
          box.style.backgroundColor="red";
          num1.innerHTML=numi;
        }
        else
        {
          texto1.innerHTML="Oops, el número es mas grande que:";
          box.style.backgroundColor="red";
          num1.innerHTML=numi;
        }
      }
      box.style.display="block";
      document.getElementById('caja1').value="";
      document.getElementById('caja1').focus();
      cadena=cadena + " " + numi;
      console.log(cadena);
      var parrafo1=document.getElementById('usados');
      var parrafo2=document.getElementById('tries');
      parrafo1.innerHTML=cadena;
      if(cont>max_tries)
      {
        texto1.innerHTML="Intentos agotados";
        box.style.backgroundColor="red";
        texto1.style.Color="white";
        num1.style.display="none";
        document.getElementById('boton1').style.display="none";
      }
      parrafo2.innerHTML="Intentos: " + cont;
  }
  else
    alert('Casilla vacia');
}
