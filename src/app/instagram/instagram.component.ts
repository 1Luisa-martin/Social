import { Component } from '@angular/core';


@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent{
  respuestas: number[] = [0, 0, 0, 0, 0];
  preguntaActualIndex = 0;
  cuestionario = [
    {
      enunciado: ' ¿Revisas y ajustas regularmente tu configuración de privacidad en Instagram?',
      opciones: [
        { valor: 1, texto: 'Sí, reviso y ajusto mi configuración con regularidad   ' },
        { valor: 2, texto: 'No, no suelo revisar mi configuración de privacidad    ' },
      ],
    },

    {
      enunciado: '¿Compartes tu ubicación actual en tus historias o publicaciones de Instagram?',
      opciones: [
        { valor: 1, texto: 'Sí, comparto mi ubicación con frecuencia      ' },
        { valor: 2, texto: 'No, raramente comparto mi ubicación    ' },
      ],
    },

    {
      enunciado: '¿Aceptas solicitudes de seguimiento de personas que no conoces en la vida real?',
      opciones: [
        { valor: 1, texto: 'Sí, acepto solicitudes de personas desconocidas    ' },
        { valor: 2, texto: 'No, solo acepto solicitudes de personas que conozco      ' },
      ],
    },

    {
      enunciado: '¿ ¿Has vinculado tu cuenta de Instagram con otras redes sociales?',
      opciones: [
        { valor: 1, texto: 'Sí, he vinculado mi cuenta a otras plataformas   ' },
        { valor: 2, texto: 'No, no he vinculado mi cuenta a otras plataformas   ' },
      ],
    },

    {
      enunciado: '¿Actualmente tu cuenta puede ser vizualizada por cualquier persona ?',
      opciones: [
        { valor: 1, texto: 'Sí, mi cuenta es pública lo cual todos pueden ver mis publicaciones' },
        { valor: 2, texto: 'No, mi cuenta es privada solo mis seguidores pueden ver mi contenido' },
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
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Instagram es perfectamente adecuado';
    } else if (aciertos === 4) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Instagram es Adecuado'; 
    } else if (aciertos == 3) {
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de  Instagram es Ligeramente inadecuado';
    } else if (aciertos == 2){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Instagram  es  inadecuado';
    } else if (aciertos == 1){
      this.mensajeResultado = 'Tu nivel de riesgo ante las red social de Instagram es Absolutamente inadecuado';
    } else if (aciertos == 0){
      this.mensajeResultado = 'Mejor elimina tu cuenta';
    }
  }
  }