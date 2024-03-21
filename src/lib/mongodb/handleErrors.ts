export function handleErrors(code: number) {
  const errors: { [key: number | string]: string } = {
    11000: 'El campo ya existe',
    'Unexpected end of JSON input': 'El campo no puede estar vacío',
  }
  return errors[code] || `Ha ocurrido un error ${code}`;
}