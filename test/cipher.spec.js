describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "HIJKLMNOPQRSTUVWXYZABCDEFG");
    });

    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', () => {
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar "3456789012" para "0123456789" con offset 33', () => {
      assert.equal(cipher.encode(33,"0123456789"), "3456789012");
    });

    it('debería retornar " ¿¡-_#@%&=+" para " ¿¡-_#@%&=+" con offset 33 => algunos caracteres válidos', () => {
      assert.equal(cipher.encode(33," ¿¡-_#@%&=+"), " ¿¡-_#@%&=+");
    });

    it('debería retornar "" para "\134/:*?"<>|" con offset 33 => caracteres inválidos', () => {
      assert.equal(cipher.encode(33,'\134/:*?"<>|'), "");
    }); //NO FUNCIONA-BA
    //Intenté con caracteres hexadecimales, etc, pero no funciona tampoco.
    // ¿no será por el alert que no funciona? puede ser.
    // Tal vez si no estuviera el alert, funcionaría con caracteres especiales hexadecimales, &, etc. //ESO ERA
    // Con este caracter '\' no funciona.
    // Si reemplazo ese caracter con \134 , funciona.
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33', () => {
      assert.equal(cipher.decode(33, "hijklmnopqrstuvwxyzabcdefg"), "abcdefghijklmnopqrstuvwxyz");
    });

    it('debería retornar "0123456789" para "3456789012" con offset 33', () => {
      assert.equal(cipher.decode(33,"3456789012"), "0123456789");
    });

    it('debería retornar " ¿¡-_#@%&=+" para " ¿¡-_#@%&=+" con offset 33 => algunos caracteres válidos', () => {
      assert.equal(cipher.decode(33," ¿¡-_#@%&=+"), " ¿¡-_#@%&=+");
    });

    it('debería retornar "" para "\134/:*?"<>|" con offset 33 => caracteres inválidos', () => {
      assert.equal(cipher.decode(33,'\134/:*?"<>|'), "");
    }); //NO FUNCIONA-BA
    //Intenté con caracteres hexadecimales, etc, pero no funciona tampoco.
    // ¿no será por el alert que no funciona? puede ser.
    // Tal vez si no estuviera el alert, funcionaría con caracteres especiales hexadecimales, &, etc. //ESO ERA
    // Con este caracter '\' no funciona.
    // Si reemplazo ese caracter con \134 , funciona.
  });

});
