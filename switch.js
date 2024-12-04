const status = 700;

switch (status) {
    case 200:
    console.log('OK!');
    break; 
    case 400: // or
    case 500:  // or
    console.log('Erro08!');
    break;
    default: // else
    console.log('Unknow status');
}