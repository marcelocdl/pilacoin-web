import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { colegas } from 'src/app/core/model/colegas';
import { pilaCoin } from 'src/app/core/model/pilacoin';
import { Transacao } from 'src/app/core/model/transacao';

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
  formularioModal: FormGroup = new FormGroup({});
  nonce?: string;

  private pubKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuNcS7fGguRsl4SVOVpQhC+1nfAQIfPt7hpA28XP6v2bhc8xoO4xaeOcOnkPof5jbGQjhLlT+xH5GkNzQvRM07UdqoLnRBT7rZBtnJseHQc4rLy8w13vOpwpuPRpatpIhUkVSWEdq0L4wzzu2sCbc30S25/0eGbUjJBvxVVLNjVjM6R2UV0J/hP6eXtbDVYiwh0NsmQI8CIceL8/Wj0sshN07hSHNsCNF1W0FMOQ2l/LKvdg6oJG5LRlh56Q3/CwzKwms2E23A1cxHW3wdJa4mDnuA+cqagTIJ3xkPB4oG3RGSwawAJzXgfMI+hKHA4uuPT6Yj6lNVOR77uNytSj9xwIDAQAB"

  modalRef?: BsModalRef;
  @ViewChild('templateConfirm') templateConfirm:any

  constructor(
    private pilaCoinService: PilacoinService,
    private transacaoService: TransferenciaService
  ){}

  ngOnInit(): void {
    this.getMeusPilas()
    this.getColegas()
  }

  getMeusPilas(){
    this.pilaCoinService.getMeusPilas().subscribe( p => this.pilas = p )
  }

  getColegas(){
    this.pilaCoinService.getColegas().subscribe( c => this.colegas = c )
  }

  transferePila(){
    let transferencia: Transacao = new Transacao()

    transferencia.noncePila = this.nonce;
    transferencia.chaveUsuarioDestino = this.formularioModal.get('chaveUsuarioDestino')?.value
    transferencia.chaveUsuarioOrigem = this.pubKey;
    this.transacaoService.transferirPila(transferencia).subscribe( m => console.log(m))

  }

}
