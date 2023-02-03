import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { colegas } from 'src/app/core/model/colegas';
import { pilaCoin } from 'src/app/core/model/pilacoin';
import { Transacao } from 'src/app/core/model/transacao';
import { LoginService } from 'src/app/core/service/login.service';

import { PilacoinService } from 'src/app/core/service/pilacoin.service';
import { TransferenciaService } from 'src/app/core/service/transferencia.service';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
  pilas: pilaCoin[] = []
  colegas: colegas[] = []

  meus_pilas: number = 0;

  transferencia: Transacao = new Transacao();

  formulario = this.formBuilder.group({
    chaveUsuarioDestino: ['', [Validators.required,Validators.minLength(5) ]],    
    nonce: ['', [Validators.required]],  
  })

  private pubKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuNcS7fGguRsl4SVOVpQhC+1nfAQIfPt7hpA28XP6v2bhc8xoO4xaeOcOnkPof5jbGQjhLlT+xH5GkNzQvRM07UdqoLnRBT7rZBtnJseHQc4rLy8w13vOpwpuPRpatpIhUkVSWEdq0L4wzzu2sCbc30S25/0eGbUjJBvxVVLNjVjM6R2UV0J/hP6eXtbDVYiwh0NsmQI8CIceL8/Wj0sshN07hSHNsCNF1W0FMOQ2l/LKvdg6oJG5LRlh56Q3/CwzKwms2E23A1cxHW3wdJa4mDnuA+cqagTIJ3xkPB4oG3RGSwawAJzXgfMI+hKHA4uuPT6Yj6lNVOR77uNytSj9xwIDAQAB"

  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any

  constructor(
    private pilaCoinService: PilacoinService,
    private transacaoService: TransferenciaService,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void {
    this.getMeusPilas()
    this.getColegas()
    this.getNumPilas()
  }

  getMeusPilas(){
    this.pilaCoinService.getMeusPilas().subscribe( p => this.pilas = p )
  }

  getNumPilas(){
    this.pilaCoinService.getNumPilas().subscribe( p => this.meus_pilas = p )
  }

  getColegas(){
    this.pilaCoinService.getColegas().subscribe( c => this.colegas = c )
  }

  transferePila(){
    console.log(""+this.formulario.value.chaveUsuarioDestino);
    console.log(""+this.formulario.value.nonce);
    
    this.transferencia.noncePila = this.formulario.value.nonce!;
    this.transferencia.chaveUsuarioDestino = this.formulario.value.chaveUsuarioDestino!;
    this.transferencia.chaveUsuarioOrigem = this.pubKey;
    
    this.transacaoService.transferirPila(this.transferencia).subscribe( m => console.log(m))

  }

  logout(){
    this.loginService.logout();
  }

}
