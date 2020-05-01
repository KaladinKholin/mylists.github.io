// Ventana emergente

function start() {


    // Añadir libro
    
    const listaLibro = document.querySelector('.lista');
    
    eventListeners();
    
    function eventListeners() {
    
    
    
        document.querySelector('#formulario').addEventListener('submit', 
        agregarAlgo);
    
    }
    
    function agregarAlgo(e) {
        e.preventDefault();
        
        const textoLista = document.querySelector('#input-text').value;
    
        const libros = document.createElement('div');
        libros.className += 'apunte';
        const info = document.createElement('div');
        info.className += 'info';
        const imagen = document.createElement('img');
        imagen.className += 'imagen';
        const pLibro = document.createElement('p');
        pLibro.className += 'texto';
        const sesamo = document.createElement('p');
        sesamo.className += 'cerrar';
        textoLista.value = '';
    
        
        
        listaLibro.appendChild(libros);
        libros.appendChild(info);
        imagen.src = 'img/game.png';
        info.appendChild(imagen);
        pLibro.innerText = textoLista;
        info.appendChild(pLibro);
        sesamo.innerText = 'Eliminar';
        libros.appendChild(sesamo);
    
    
    
    
    
    
        // Eliminar libro
    
    var botones = document.getElementsByClassName('cerrar');
    
    for (var boton of botones) {
      boton.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.remove();
      });
    };
        
    }
    
    
      }
      
      window.onload = start;