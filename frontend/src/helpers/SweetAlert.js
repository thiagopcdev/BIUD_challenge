import swal from 'sweetalert';

export function alertSucess(name, action) {
  swal(`Prontinho! A ${name} foi ${action} com sucesso!`, {
    icon: 'success',
  });
}

export function alertError(name, description, action) {
  swal({
    title: 'Erro!',
    text: `Não foi possivel ${action} a ${name} [${description}]
    , tente novamente mais tarde!`,
    icon: 'error',
    buttons: true,
    dangerMode: true,
  });
}

export function alertOk(name) {
  swal(`Tudo bem, a ${name} está segura!`);
}

export function alertSure(name, description, action, callback) {
  swal({
    title: 'Tem certeza?',
    text: `Uma vez ${action}, você não poderá recuperar a ${name}
     [${description}] !`,
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  })
    .then(callback);
}
