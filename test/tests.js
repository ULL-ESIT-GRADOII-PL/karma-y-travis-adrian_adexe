var expect = chai.expect;

describe("Creación de un objeto Medida", function(){
   it("Debe tener un número", function(){
      var medida = new Medida(23,'F');
      expect(medida.valor).to.equal(23);
   });
   it("Debe tener una unidad de medida", function(){
      var medida = new Medida(23,'F');
      expect(medida.tipo).to.equal('F');
   });
   it("Debe aceptar una cadena del tipo: '23f'", function(){
      var medida = new Medida('23F');
      expect(medida.valor).to.equal('23');
      expect(medida.tipo).to.equal('F');
   });
});

describe("Creación de un objeto Temperatura", function(){
   var temperatura = new Temperatura(23,'F');
   it("Debe tener un número", function(){
      expect(temperatura.valor).to.equal(23);
   });
   it("Debe tener una unidad de medida", function(){
      expect(temperatura.tipo).to.equal('F');
   });
});

describe("Creación de un objeto Kelvin", function(){
   var kelvin = new Kelvin(2);
   it("Debe tener un número", function(){
      expect(kelvin.valor).to.equal(2);
   });
   it("Debe tener una unidad de medida", function(){
      expect(kelvin.tipo).to.equal('k');
   });
});

describe("Creación de un objeto Celsius", function(){
   var celsius = new Celsius(3);
   it("Debe tener un número", function(){
      expect(celsius.valor).to.equal(3);
   });
   it("Debe tener una unidad de medida", function(){
      expect(celsius.tipo).to.equal('c');
   });
});

describe("Creación de un objeto Farenheit", function(){
   var farenheit = new Farenheit(10);
   it("Debe tener un número", function(){
      expect(farenheit.valor).to.equal(10);
   });
   it("Debe tener una unidad de medida", function(){
      expect(farenheit.tipo).to.equal('f');
   });
});

describe("Conversión de temperaturas", function(){
   describe("De celsius a kelvin", function(){
      var celsius = new Celsius(23);
      it("Valor", function(){
         expect(celsius.toKelvin().valor).to.equal(296.15);
      });
      it("Tipo", function(){
         expect(celsius.toKelvin().tipo).to.equal('k');
      });
   });
   describe("De celsius a farenheit", function(){
      var celsius = new Celsius(23);
      it("Valor", function(){
         expect(celsius.toFarenheit().valor).to.equal(73.4);
      });
      it("Tipo", function(){
         expect(celsius.toFarenheit().tipo).to.equal('f');
      });
      it("Devuelve un objeto Farenheit", function(){
         var far = celsius.toFarenheit();
         expect(far instanceof Farenheit).to.equal(true);
      });
   });
});
