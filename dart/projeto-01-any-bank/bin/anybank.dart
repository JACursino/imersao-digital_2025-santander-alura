/* No Dart, quando você está importando uma biblioteca do diretório 'lib', deve usar uma importação 'package:' em vez de um caminho relativo.(import '../lib/conta.dart';) */

import 'package:anybank/conta.dart';

void main() {
  ContaCorrente contaChris = ContaCorrente("Chris", 4000);
  ContaPoupanca contaDenize = ContaPoupanca("Denize", 4000);
  ContaEmpresa contaMatheus = ContaEmpresa("Matheus", 2000);
  ContaInvestimento contaRoberta = ContaInvestimento("Roberta", 2000);

  contaChris.imprimeSaldo();
  contaChris.enviar(4300);

  contaDenize.imprimeSaldo();
  contaDenize.enviar(4300);
  contaDenize.calcularRendimento();
  contaDenize.imprimeSaldo();

  contaMatheus.enviar(1000);
  contaRoberta.receber(1000);

}
