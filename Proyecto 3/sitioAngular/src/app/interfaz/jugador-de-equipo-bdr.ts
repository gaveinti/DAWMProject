export interface JugadorDeEquipoBDR {
    id: BigInteger;
    idEquipo: BigInteger;
    nombreInstagram: string;
    apellido: string;
    posicion: string;
    marcaPatrocinadora: string;
    fechaFichaje: Date;
    cantTitulosGanados: BigInteger;
    createdAt: Date;
    updatedAt: Date;
}
