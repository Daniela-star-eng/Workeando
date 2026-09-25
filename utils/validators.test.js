import { validateEmail } from './validators';

describe('Validación de Email', () => {
  it('debe retornar true para un email válido', () => {
    expect(validateEmail('danielaog1808@gmail.com')).toBe(true);
  });

  it('debe retornar false si no tiene el formato correcto', () => {
    expect(validateEmail('correo_invalido.com')).toBe(false);
  });

  it('debe retornar false si está vacío', () => {
    expect(validateEmail('')).toBe(false);
  });
});