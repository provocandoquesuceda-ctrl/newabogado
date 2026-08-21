import { casos } from '@/data/demo-data'

export default function Home() {
  const caso = casos[0];

  return (
    <main style={{padding: '40px', fontFamily: 'Arial', background: '#f8fafc', minHeight: '100vh'}}>
      <h1 style={{fontSize: '36px', fontWeight: 'bold', color: '#1e40af'}}>
        ABOGADO ACTIVO RD ⚖️
      </h1>
      <p style={{marginTop: '8px', fontSize: '16px'}}>MEJI v1.0 - Motor de Expedientes Jurídicos</p>

      <div style={{marginTop: '30px', padding: '20px', border: '2px solid #1e40af', borderRadius: '12px', background: 'white'}}>
        <h2 style={{fontWeight: 'bold', fontSize: '20px', marginBottom: '10px'}}>📂 Caso Activo</h2>
        <p><b>ID:</b> {caso.id}</p>
        <p><b>Cliente:</b> {caso.cliente}</p>
        <p><b>Demandado:</b> {caso.demandado}</p>
        <p><b>Objeto:</b> {caso.objeto}</p>
        <p><b>Tribunal:</b> {caso.tribunal}</p>
        <p><b>Audiencia:</b> {caso.audiencia}</p>
        <p><b>Estado:</b> <span style={{color: 'orange', fontWeight: 'bold'}}>{caso.estado}</span></p>
        <hr style={{margin: '15px 0'}}/>
        <p><b>Diagnóstico MEJI:</b> {caso.notas}</p>
      </div>

      <p style={{marginTop: '20px', color: 'green', fontWeight: 'bold'}}>✅ Deploy exitoso - Datos cargados</p>
    </main>
  )
}
