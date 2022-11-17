// spec.js
describe('Conjunto de pruebas para comprobar la funcionalidad del boletín JS2', function () {
  it('Prueba 1: Berlín', function () {
    browser.waitForAngularEnabled(false);
    //PASO 1 ->
    //ACCIÓN: Abrir la URL
    browser.get('file:///B:/Usuarios/ADA%20ITS%202021-2023/SEGUNDO%20CURSO/DWEC/Javascript/JS2/index.html');
    browser.sleep(3000);
    //CONDICIÓN: Se muestra una lista de paises y capitales
    var filas = element.all(by.xpath('//tr'));
    expect(filas.count()).toEqual(21);
    browser.sleep(3000);

    //PASO 2 ->
    //ACCION: escribimos Berlin en el buscador de capitales
    var buscador = element.all(by.xpath('//input[@type="text"]'));
    buscador.click();
    buscador.sendKeys('Berlín');
    browser.sleep(3000);
    //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
    var capital = element.all(by.xpath('//tr[@id="visible"]'));
    expect(capital.count()).toEqual(1);
    browser.sleep(5000);
  });

  it('Prueba 2: cú', function () {
    //PASO 1 ->
    //ACCIÓN: Abrir la URL
    browser.get('file:///B:/Usuarios/ADA%20ITS%202021-2023/SEGUNDO%20CURSO/DWEC/Javascript/JS2/index.html');
    // CONDICIÓN: Se muestra una lista de paises y capitales
    var filas = element.all(by.xpath('//tr'));
    expect(filas.count()).toEqual(21);
    browser.sleep(3000);

    //PASO 2 ->
    //ACCION: escribimos Berlin en el buscador de capitales
    var buscador = element.all(by.xpath('//input[@type="text"]'));
    buscador.click();
    buscador.sendKeys('cú');
    //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
    var capital = element.all(by.xpath('//tr[@id="visible"]'));
    expect(capital.count()).toEqual(1);
    browser.sleep(5000);
  });

  it('Prueba 3: cu', function () {
    //PASO 1 ->
    //ACCIÓN: Abrir la URL
    browser.get('file:///B:/Usuarios/ADA%20ITS%202021-2023/SEGUNDO%20CURSO/DWEC/Javascript/JS2/index.html');
    // CONDICIÓN: Se muestra una lista de paises y capitales
    var filas = element.all(by.xpath('//tr'));
    expect(filas.count()).toEqual(21);
    browser.sleep(3000);

    //PASO 2 ->
    //ACCION: escribimos Berlin en el buscador de capitales
    var buscador = element.all(by.xpath('//input[@type="text"]'));
    buscador.click();
    buscador.sendKeys('cu');
    browser.sleep(3000);
    //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
    var capital = element.all(by.xpath('//tr[@id="visible"]'));
    expect(capital.count()).toEqual(0);
    browser.sleep(5000);
  });
      
  it('Prueba 4: Alemania', function () {
    //PASO 1 ->
    //ACCIÓN: Abrir la URL
    browser.get('file:///B:/Usuarios/ADA%20ITS%202021-2023/SEGUNDO%20CURSO/DWEC/Javascript/JS2/index.html');
    // CONDICIÓN: Se muestra una lista de paises y capitales
    var filas = element.all(by.xpath('//tr'));
    expect(filas.count()).toEqual(21);
    browser.sleep(3000);

    //PASO 2 ->
    //ACCION: escribimos Berlin en el buscador de capitales
    var buscador = element.all(by.xpath('//input[@type="text"]'));
    buscador.click();
    buscador.sendKeys('Alemania');
    browser.sleep(3000);
    //CONDICIÓN: Se muestra la tabla con esa capital y país únicamente
    var capital = element.all(by.xpath('//tr[@id="visible"]'));
    expect(capital.count()).toEqual(0);
    browser.sleep(5000);
  });
});