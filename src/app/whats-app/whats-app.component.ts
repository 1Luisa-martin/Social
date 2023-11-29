import { Component } from '@angular/core';

@Component({
  selector: 'app-whats-app',
  templateUrl: './whats-app.component.html',
  styleUrls: ['./whats-app.component.css']
})
export class WhatsAppComponent {
  respuestas: number[] = [0, 0, 0, 0, 0];
  preguntaActualIndex = 0;
  cuestionario = [
    {
      enunciado: '¿Has habilitado la verificación en dos pasos para tu cuenta de WhatsApp?',
      opciones: [
        { valor: 1, texto: 'Sí, tengo la verificación en dos pasos habilitada  ' },
        { valor: 2, texto: 'No, no he configurado la verificación en dos pasos ' },
      ],
    },

    {
      enunciado: '¿Aceptas mensajes de personas desconocidas en WhatsApp?',
      opciones: [
        { valor: 1, texto: 'Sí, acepto mensajes de personas desconocidas ' },
        { valor: 2, texto: 'No, solo acepto mensajes de contactos conocidos' },
      ],
    },

    {
      enunciado: '¿Participas en grupos de WhatsApp con personas que no conoces personalmente?',
      opciones: [
        { valor: 1, texto: 'Sí, participo en grupos con personas desconocidas' },
        { valor: 2, texto: 'No, solo estoy en grupos con contactos conocidos ' },
      ],
    },

    {
      enunciado: '¿Abres enlaces o archivos adjuntos de fuentes desconocidas en WhatsApp?',
      opciones: [
        { valor: 1, texto: 'Sí, abro enlaces o archivos de fuentes desconocidas' },
        { valor: 2, texto: 'No, solo abro contenido de fuentes confiables    ' },
      ],
    },

    {
      enunciado: '¿Has vinculado tu cuenta de WhatsApp con otras plataformas o aplicaciones?',
      opciones: [
        { valor: 1, texto: 'Sí, he vinculado mi cuenta a otras plataformas  ' },
        { valor: 2, texto: 'No, no he vinculado mi cuenta a otras plataformas ' },
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
    const respuestasCorrectas = [1, 2, 2, 2, 2];

    let aciertos = 0;
    for (let i = 0; i < respuestasCorrectas.length; i++) {
      if (this.respuestas[i] === respuestasCorrectas[i]) {
        aciertos++;
      }
    }

    this.aciertos = aciertos;

    if (aciertos === 5) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de WhatsApp es perfectamente adecuado';
    } else if (aciertos === 4) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de WhatsApp es Adecuado'; // Agrega tu mensaje específico aquí
    } else if (aciertos == 3) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de WhatsApp es Ligeramente inadecuado';
    } else if (aciertos == 2){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de WhatsApp es  inadecuado';
    } else if (aciertos == 1){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de WhatsApp es Absolutamente inadecuado';
    } else if (aciertos == 0){
      this.mensajeResultado = 'Mejor elimina tu cuenta';
    }
  }
  }
  

