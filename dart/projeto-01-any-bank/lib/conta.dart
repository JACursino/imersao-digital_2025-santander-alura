abstract class Conta {
  //Class é como um molde
  String titular;

  /*     Em Dart, assim como em muitas outras linguagens de programação orientadas a objetos, podemos controlar o acesso aos atributos de uma classe utilizando modificadores de acesso. Um dos mais importantes é o private. */
  double
  _saldo; //adicionado o método privado utilizando o underscode antes do saldo

  Conta(this.titular, this._saldo); //função construtora da classe

  void receber(double valor) {
    //função para receber dinheiro
    _saldo += valor;
    imprimeSaldo();
  }

  void enviar(double valor) {
    //função para enviar dinheiro
    if (_saldo >= valor) {
      _saldo -= valor;
      imprimeSaldo();
    }
  }

  void imprimeSaldo() {
    //função para imprimir o saldo
    print("O saldo atual de $titular, é: R\$$_saldo");
  }
}

class ContaCorrente extends Conta {
  double emprestimo = 300;
  ContaCorrente(super.titular, super._saldo);

  @override
  void enviar(double valor) {
    if (_saldo + emprestimo >= valor) {
      _saldo -= valor;
      imprimeSaldo();
    }
  }
}

class ContaPoupanca extends Conta {
  double rendimento = 0.05;
  ContaPoupanca(super.titular, super._saldo);
  void calcularRendimento() {
    _saldo += _saldo * rendimento;
  }
}

class ContaSalario extends Conta {
  String cnpjEmpresa;
  String nomeEmpresa;

  ContaSalario(super.titular, super._saldo, this.cnpjEmpresa, this.nomeEmpresa);

  void depositarSalario(double valor) {
    _saldo += valor;
    print(
      "O salário da empresa: $nomeEmpresa, de CNPJ: $cnpjEmpresa no valor de R\$$valor foi depositado!",
    );
  }
}

mixin Imposto {
  double taxaImposto = 0.03;

  double valorTaxado(double valor) {
    return valor * taxaImposto;
  }
}

class ContaEmpresa extends Conta with Imposto {
  ContaEmpresa(super.titular, super._saldo);

  @override
  void enviar(double valor) {
    if(_saldo >= valor + valorTaxado(valor)) {
      _saldo -= valor + valorTaxado(valor);
      imprimeSaldo();
    }
  }

  @override
  void receber(double valor) {
     _saldo += valor - valorTaxado(valor);
      imprimeSaldo();
  }
}
class ContaInvestimento extends Conta with Imposto {
  ContaInvestimento(super.titular, super._saldo);

    @override
    void enviar(double valor) {
      if(_saldo >= valor + valorTaxado(valor)){
        _saldo -= valor + valorTaxado(valor);
        imprimeSaldo();
      }
    }

    @override
    void receber(double valor) {
        _saldo += valor - valorTaxado(valor);
        imprimeSaldo();
    }
 }
