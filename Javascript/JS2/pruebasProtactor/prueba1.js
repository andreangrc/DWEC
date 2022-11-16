// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
      //PASO 1
        //ACCIÓN: Abrir la URL
        browser.get('C:\\Users\\SUP05\\Documents\\GitHub\\DWEC\\Javascript\\JS2\\index.html');
        // CONDICIÓN: Se muestra una lista de paises y capitales
        var filas = element.all(by.xpath('//tr'));
        element(filas.count()).toEqual(19);

      //PASO 2
        //ACCION: escribimos Berlin en el buscador de capitales
        var buscador = element.all(by.xpath('//input[@type="text"]'));
        buscador.click();
        buscador.sendKeys('Berlín');
        //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
        var capital = element.all(by.xpath('//tr[@id="visible"]'));
        expect(capital.count()).toEqual(1);
    });

    it('should have a title', function() {
      //PASO 1
        //ACCIÓN: Abrir la URL
        browser.get('C:\\Users\\SUP05\\Documents\\GitHub\\DWEC\\Javascript\\JS2\\index.html');
        // CONDICIÓN: Se muestra una lista de paises y capitales
        var filas = element.all(by.xpath('//tr'));
        element(filas.count()).toEqual(19);

      //PASO 2
        //ACCION: escribimos Berlin en el buscador de capitales
        var buscador = element.all(by.xpath('//input[@type="text"]'));
        buscador.click();
        buscador.sendKeys('cú');
        //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
        var capital = element.all(by.xpath('//tr[@id="visible"]'));
        expect(capital.count()).toEqual(1);
    });

    it('should have a title', function() {
      //PASO 1
        //ACCIÓN: Abrir la URL
        browser.get('C:\\Users\\SUP05\\Documents\\GitHub\\DWEC\\Javascript\\JS2\\index.html');
        // CONDICIÓN: Se muestra una lista de paises y capitales
        var filas = element.all(by.xpath('//tr'));
        element(filas.count()).toEqual(19);

      //PASO 2
        //ACCION: escribimos Berlin en el buscador de capitales
        var buscador = element.all(by.xpath('//input[@type="text"]'));
        buscador.click();
        buscador.sendKeys('cu');
        //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
        var capital = element.all(by.xpath('//tr[@id="visible"]'));
        expect(capital.count()).toEqual(1);
    });

    it('should have a title', function() {
      //PASO 1
        //ACCIÓN: Abrir la URL
        browser.get('C:\\Users\\SUP05\\Documents\\GitHub\\DWEC\\Javascript\\JS2\\index.html');
        // CONDICIÓN: Se muestra una lista de paises y capitales
        var filas = element.all(by.xpath('//tr'));
        element(filas.count()).toEqual(19);

      //PASO 2
        //ACCION: escribimos Berlin en el buscador de capitales
        var buscador = element.all(by.xpath('//input[@type="text"]'));
        buscador.click();
        buscador.sendKeys('Alemania');
        //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
        var capital = element.all(by.xpath('//tr[@id="visible"]'));
        expect(capital.count()).toEqual(1);
    });
  });