import { Component } from '@angular/core';

@Component({
  selector: 'app-tiktok',
  templateUrl: './tiktok.component.html',
  styleUrls: ['./tiktok.component.css']
})
export class TiktokComponent {
  respuestas: number[] = [0, 0, 0, 0, 0];
  preguntaActualIndex = 0;
  cuestionario = [
    {
      enunciado: ' Has configurado medidas de seguridad, como una contraseña fuerte y la verificación en dos pasos, para tu cuenta de TikTok?',
      opciones: [
        { valor: 1, texto: 'Sí, he tomado medidas de seguridad adicionales' },
        { valor: 2, texto: 'No, no he implementado medidas adicionales de seguridad' },
      ],
    },

    {
      enunciado: '¿Compartes detalles específicos de tu vida cotidiana en tus videos de TikTok?',
      opciones: [
        { valor: 1, texto: 'Sí, comparto detalles de mi vida cotidiana con frecuencia  ' },
        { valor: 2, texto: 'No, limito la información personal compartida en mis videos ' },
      ],
    },

    {
      enunciado: '¿Interactúas con usuarios desconocidos o aceptas solicitudes de amistad fácilmente en TikTok?',
      opciones: [
        { valor: 1, texto: 'Sí, interactúo con desconocidos con regularidad ' },
        { valor: 2, texto: 'No, soy selectivo/a con mis interacciones en la plataforma  ' },
      ],
    },

    {
      enunciado: '¿Utilizas etiquetas de ubicación en tus videos de TikTok?',
      opciones: [
        { valor: 1, texto: 'Sí, etiqueto mi ubicación con frecuencia  ' },
        { valor: 2, texto: 'No, raramente utilizo etiquetas de ubicación     ' },
      ],
    },

    {
      enunciado: '¿Estás al tanto de las amenazas comunes en línea, como el phishing y el acoso cibernético en TikTok?',
      opciones: [
        { valor: 1, texto: 'Sí, estoy al tanto y tomo medidas para protegerme ' },
        { valor: 2, texto: 'No, no estoy muy informado/a sobre estas amenazas' },
      ],
    },
    
  
  ];
  aciertos: number | null = null; 
  mensajeResultado: string | null = null; 

  obtenerPreguntaActual(): any {
    return this.cuestionario[this.preguntaActualIndex];
  }

  obtenerOpcion(indicePregunta: number, opcion: number): string {
    const opciones = this.cuestionario[indicePregunta].opciones;
    return opciones[opcion - 1].texto;
  }

  respuesta(indicePregunta: number, opcion: number): void {
    this.respuestas[indicePregunta] = opcion;
  }

  siguientePregunta(): void {
    if (this.preguntaActualIndex < this.cuestionario.length - 1) {
      this.preguntaActualIndex++;
    }
  }
  mostrarBoton(): boolean{
    return this.preguntaActualIndex === this.cuestionario.length -1;
  }

  corregir(): void {
    const respuestasCorrectas = [1, 2, 2, 2, 1];

    let aciertos = 0;
    for (let i = 0; i < respuestasCorrectas.length; i++) {
      if (this.respuestas[i] === respuestasCorrectas[i]) {
        aciertos++;
      }
    }

    this.aciertos = aciertos;

    if (aciertos === 5) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Tik Tok es perfectamente adecuado ';
    } else if (aciertos === 4) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Tik Tok es Adecuado'; 
    } else if (aciertos == 3) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Tik Tok es Ligeramente inadecuado';
    } else if (aciertos == 2){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Tik Tok es  inadecuado';
    } else if (aciertos == 1){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Tik Tok es Absolutamente inadecuado';
    } else if (aciertos == 0){
      this.mensajeResultado = 'Mejor elimina tu cuenta';
    }
  }
  }



