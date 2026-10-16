import { validateEmail } from './validators';

describe('validateEmail', () => {
  test('acepta un correo valido', () => {
    expect(validateEmail('usuario@correo.com')).toBe(true);
  });
  test('rechaza un correo sin arroba', () => {
    expect(validateEmail('usuariocorreo.com')).toBe(false);
  });
  test('rechaza valores vacios', () => {
    expect(validateEmail('')).toBe(false);
    expect(validateEmail(undefined)).toBe(false);
  });
});
