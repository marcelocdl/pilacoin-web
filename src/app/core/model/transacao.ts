export class Transacao{
    id?: number ;
    assinatura?: string ;
    chaveUsuarioDestino?: string | undefined;
    chaveUsuarioOrigem?: string ;
    dataTransacao?: string ;
    idBloco?: string ;
    noncePila?: string | undefined ;
    status?: string ;

    constructor(
        id?: number, assinatura?: string, chaveUsuarioDestino?: string, chaveUsuarioOrigem?: string,
        dataTransacao?: string, idBloco?: string, noncePila?: string, status?: string
    ){

        this.id = <number> id,
        this.assinatura = <string> assinatura,
        this.chaveUsuarioDestino = <string> chaveUsuarioDestino,
        this.chaveUsuarioOrigem = <string> chaveUsuarioOrigem,
        this.dataTransacao = <string> dataTransacao,
        this.idBloco = <string> idBloco,
        this.noncePila = <string> noncePila,
        this.status = <string> status

    }

}