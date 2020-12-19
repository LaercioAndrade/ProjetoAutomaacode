class testElements{
    firstName = () => {return '.form-group:nth-child(1)'}
    lastName = () => {return '.col-md-4:nth-child(3)'}
    
    address = () => {return '.col-md-8 > .form-control'}
    email = () => {return '#eid'}
    telefone = () => {return ' :nth-child(4) > .col-md-4 > .form-control'}
    sexo = () => {return ':nth-child(1) > .ng-pristine'}
    hobbies = () => {return '#checkbox2'}
    clicarlanguage = () => {return '#msdd'}
    selecionarlanguage = () => {return ':nth-child(1) > .ui-corner-all'}

    skills = () => {return '#Skills'}
    localização = () => {return '#countries'}
    selecionarlocalização = () => {return '#country'}
    
    selecionarano = () => {return '#yearbox'}
    selecionarmes = () => {return ':nth-child(11) > :nth-child(3) > .form-control'}
    selecionardia = () => {return '#daybox'}

    password = () => {return '#firstpassword'}
    confirmpassword = () => {return '#secondpassword'}

    salvar = () => {return '#submitbtn'}
    validartela = () => {return 'h1'}

    languageincorreto = () => {return ':nth-child(1) > .ui-corner-all'}

}
export default testElements;