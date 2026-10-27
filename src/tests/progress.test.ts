import { describe,expect,it } from 'vitest'
import { scoreQuiz } from '../store/useStore'
import { subjects } from '../data/curriculum'
describe('scoring',()=>{it('works',()=>{const r=scoreQuiz({q1:'nucleus'},[{id:'q1',answer:'Nucleus'}]);expect(r.passed).toBe(true)})})
describe('curriculum',()=>{it('has 32 topics',()=>{expect(subjects.reduce((n,s)=>n+s.topics.length,0)).toBe(32)})})