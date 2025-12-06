import 'dart:io';

void main() {
  print("Qual o seu nome?");
  String? nome = stdin.readLineSync();
    print("Qual a sua idade");
  String? idade = stdin.readLineSync();
  print("Olá $nome, você tem $idade, anos.");
}


