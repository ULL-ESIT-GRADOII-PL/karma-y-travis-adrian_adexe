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
   it("Debe tener un número", function(){
      var temperatura = new Temperatura(23,'F');
      expect(temperatura.valor).to.equal(23);
   });
   it("Debe tener una unidad de medida", function(){
      var temperatura = new Temperatura(23,'F');
      expect(temperatura.tipo).to.equal('F');
   });
});

describe("Creación de un objeto Kelvin", function(){
   it("Debe tener un número", function(){
      var kelvin = new Kelvin(2);
      expect(kelvin.valor).to.equal(2);
   });
   it("Debe tener una unidad de medida", function(){
      var kelvin = new Kelvin(2);
      expect(kelvin.tipo).to.equal('k');
   });
});

describe("Creación de un objeto Celsius", function(){
   it("Debe tener un número", function(){
      var celsius = new Celsius(3);
      expect(celsius.valor).to.equal(3);
   });
   it("Debe tener una unidad de medida", function(){
      var celsius = new Celsius(3);
      expect(celsius.tipo).to.equal('c');
   });
});

describe("Creación de un objeto Farenheit", function(){
   it("Debe tener un número", function(){
      var farenheit = new Farenheit(10);
      expect(farenheit.valor).to.equal(10);
   });
   it("Debe tener una unidad de medida", function(){
      var farenheit = new Farenheit(10);
      expect(farenheit.tipo).to.equal('f');
   });
});

describe("Conversión de temperaturas", function(){
   describe("De celsius a kelvin", function(){
      it("Valor", function(){
         var celsius = new Celsius(23);
         expect(celsius.toKelvin().valor).to.equal(296.15);
      });
      it("Tipo", function(){
         var celsius = new Celsius(23);
         expect(celsius.toKelvin().tipo).to.equal('k');
      });
   });
   describe("De celsius a farenheit", function(){
      it("Valor", function(){
         var celsius = new Celsius(23);
         expect(celsius.toFarenheit().valor).to.equal(73.4);
      });
      it("Tipo", function(){
         var celsius = new Celsius(23);
         expect(celsius.toFarenheit().tipo).to.equal('f');
      });
      it("Devuelve un objeto Farenheit", function(){
         var celsius = new Celsius(23);
         var far = celsius.toFarenheit();
         expect(far.constructor.name).to.equal('Farenheit');
      });
   });
});
