import { useRef } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
function Helix(){const g=useRef<any>(null);useFrame((_,d)=>{if(g.current)g.current.rotation.y+=d*0.4});const b=[];for(let i=0;i<16;i++){const a=i*0.5;b.push(<mesh key={i} position={[Math.cos(a)*1.4,i*0.35-2.5,Math.sin(a)*1.4]}><sphereGeometry args={[0.18,16,16]}/><meshStandardMaterial color={i%2?'#22d3ee':'#a855f7'}/></mesh>)}return <group ref={g}>{b}</group>}
export default function DNAScene(){return(<div style={{height:420,borderRadius:18,overflow:'hidden',border:'1px solid #26375c'}}><Canvas camera={{position:[0,0,8]}}><ambientLight/><directionalLight/><Helix/><OrbitControls/></Canvas></div>)}