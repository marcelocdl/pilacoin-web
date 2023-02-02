import { Component } from '@angular/core';
import { PilacoinService } from 'src/app/core/service/pilacoin.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(
    private pilacoinService: PilacoinService,
  ){}

  startMineracao(){
    this.pilacoinService.startMineracao().subscribe(e=>{
      alert("Mineração iniciada!!")
    }) 
  }

  stopMineracao(){
    this.pilacoinService.stopMineracao().subscribe(e=>{
      alert("Mineração PARADA!!")
    })
  }
}
