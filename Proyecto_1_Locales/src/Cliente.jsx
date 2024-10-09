import './Index.css'

export function Registro() {
  
    return (
      <>
        <div className="contenedorInp">
          <input type="text" className='InputsCliente' placeholder='Nombre' />
          <input type="text" className='InputsCliente' placeholder='Nombre' />
          <input type="text" className='InputsCliente' placeholder='Nombre' />
          <input type="text" className='InputsCliente' placeholder='Nombre' />
        </div>
      </>
    )
  }

export function Login(){
  return (
    <>
      <div className="contenedorInp">
        <input type="text" className='InputsCliente' placeholder='Nombre' />
        <input type="text" className='InputsCliente' placeholder='Nombre' />
        <button className='aceptar'>Iniciar</button>
      </div>
    </>
  )
}

export function Header(){
  var Array = [
    {Servicio:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512 " className='icono'><path d="M384 48c8.8 0 16 7.2 16 16l0 384c0 8.8-7.2 16-16 16L96 464c-8.8 0-16-7.2-16-16L80 64c0-8.8 7.2-16 16-16l288 0zM96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM240 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-32 32c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80l-64 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z"/> </svg>
    ,Opciones:["Registro","Control"]},
    {Servicio:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icono'><path d="M280 64l40 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 128C0 92.7 28.7 64 64 64l40 0 9.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64l9.6 0zM64 112c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16l-16 0 0 24c0 13.3-10.7 24-24 24l-88 0-88 0c-13.3 0-24-10.7-24-24l0-24-16 0zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
      ,Opciones:["Historial","Análisis","Crear Plan","Consultas","Recordatorios"]},
    {Servicio:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='icono'><path d="M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"/></svg>
      ,Opciones:["Productos","Categorias"]}, 
    {Servicio:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='perfil'><path d="M256 288A144 144 0 1 0 256 0a144 144 0 1 0 0 288zm-94.7 32C72.2 320 0 392.2 0 481.3c0 17 13.8 30.7 30.7 30.7l450.6 0c17 0 30.7-13.8 30.7-30.7C512 392.2 439.8 320 350.7 320l-189.4 0z"/></svg>
      ,Opciones:["Mis datos","Agenda"]}
    //"Planes de Nutrición", 
    //"Progreso del Cliente", 
    //"Exportar a Excel", 
    //"Envío por WhatsApp", 
  ];
  return(
    <> 
   <nav className='header'>
      {Array.map((element, index) => (
        <ul key={index} className='opciones' tabIndex="0">
          {element.Servicio}
          <div className='divOp'>
          {element.Opciones.map((element, index) => (
            <li>{element}</li>
          ))}
          </div>
        </ul>
      ))}
    </nav>

    </>
  )
}
