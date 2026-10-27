import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSubject } from '../data/curriculum'
import { useStore } from '../store/useStore'
import SceneRouter from '../three/SceneRouter'
import NotFound from './NotFound'
export default function LabPage(){const{id}=useParams();const s=getSubject(id??'');const{completeLab,labs}=useStore();const[report,setReport]=useState('');const[done,setDone]=useState(false);if(!s)return<NotFound/>;return(<div className="page space"><div className="card"><h1>{s.icon} {s.name} Virtual Lab</h1></div><div className="card"><SceneRouter scene={s.topics[0].scene}/></div><div className="card"><h2>Observation report</h2><textarea rows={5} value={report} onChange={e=>setReport(e.target.value)}/><button className="btn-success" style={{marginTop:12}} disabled={done||report.trim().length<10} onClick={()=>{completeLab(s.id+'-lab');setDone(true)}}>{done?'Completed':'Submit'}</button></div></div>)}