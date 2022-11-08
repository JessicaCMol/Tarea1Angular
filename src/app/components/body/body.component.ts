import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent  {


    mostrar = true;

    frase_1:any ={
    mensaje: 'Por muchos aliados que te rodeen, un hechicero siempre muere solo.',
    autor: 'Satoru Gojo'
    }

    frase_2:any ={
      mensaje: 'Quiero creer que está bien seguir viviendo',
      autor: 'Okkotsu Yuta'
      }

    frase_3:any ={
      mensaje: 'En este trabajo, llegara el momento en que tengas que matar a otras personas, pero ese momento no es ahora, entiéndelo, por favor, seguir siendo un niño no es un pecado.',
      autor: 'Kento Nanami'
      }

    mostrar2 = true;
      
    personajes: string[] = ['Kugisaki Nobara', 'Megumi Fushiguro', 'Inumaki Toge']
    


}
