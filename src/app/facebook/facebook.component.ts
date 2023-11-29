import { Component } from '@angular/core';

@Component({
  selector: 'app-facebook',
  templateUrl: './facebook.component.html',
  styleUrls: ['./facebook.component.css']
})
export class FacebookComponent {
  respuestas: number[] = [0, 0, 0, 0, 0];
  preguntaActualIndex = 0;
  cuestionario = [
    {
      enunciado: '¿Has revisado y ajustado tu configuración de privacidad en Facebook?',
      opciones: [
        { valor: 1, texto: 'Sí, he reviso y ajusto mi configuración regularmente' },
        { valor: 2, texto: 'No, no he revisado mi configuración de privacidad' },
      ],
    },

    {
      enunciado: '¿Compartes tu ubicación actual en tus publicaciones de Facebook?',
      opciones: [
        { valor: 1, texto: 'Sí, comparto mi ubicación regularmente' },
        { valor: 2, texto: 'No, raramente comparto mi ubicación' },
      ],
    },

    {
      enunciado: '¿Aceptas solicitudes de amistad de personas que no conoces en la vida real?',
      opciones: [
        { valor: 1, texto: 'Sí, acepto solicitudes de personas desconocidas' },
        { valor: 2, texto: 'No, solo acepto solicitudes de personas conocidas' },
      ],
    },

    {
      enunciado: '¿Publicas información sensible o comprometedora en tus publicaciones de Facebook?',
      opciones: [
        { valor: 1, texto: 'Sí, comparto información sensible a veces' },
        { valor: 2, texto: 'No, evito compartir información comprometedora' },
      ],
    },

    {
      enunciado: '¿Has vinculado tu cuenta de Facebook con otras redes sociales?',
      opciones: [
        { valor: 1, texto: 'Sí, he vinculado mi cuenta a otras plataformas' },
        { valor: 2, texto: 'No, no he vinculado mi cuenta a otras plataformas' },
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
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Facebook es perfectamente adecuado';
    } else if (aciertos === 4) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Facebook es Adecuado';
   }else if (aciertos === 3){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Facebook es Ligeramente inadecuado';
    } else if (aciertos == 2){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Facebook es  inadecuado';
    } else if (aciertos == 1){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Facebook es Absolutamente inadecuado';
    } else if (aciertos == 0){
      this.mensajeResultado = 'Mejor elimina tu cuenta';
    }
  }
  }

