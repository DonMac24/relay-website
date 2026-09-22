'use client'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { Sparkles, X, ArrowUpRight, ArrowUp, Square } from 'lucide-react'
import s from './website-chat.module.css'
type Message = { role: 'user' | 'assistant'; content: string }
const prompts = ['How does Relay work?', 'Does HR have to start every handoff?', 'Show me a handoff example']
export function WebsiteChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [question, setQuestion] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const dialog = useRef<HTMLDialogElement>(null)
  const input = useRef<HTMLTextAreaElement>(null)
  const end = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const request = useRef<AbortController | null>(null)
  useEffect(() => {
    if (open) { dialog.current?.showModal(); input.current?.focus() }
    else if (dialog.current?.open) { dialog.current.close(); trigger.current?.focus() }
  }, [open])
  useEffect(() => { if (open) end.current?.scrollIntoView({ block: 'nearest' }) }, [messages, busy, open])
  useEffect(() => () => request.current?.abort(), [])
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previous }
  }, [open])
  async function ask(text: string) {
    if (request.current || !text.trim()) return
    const controller = new AbortController(); request.current = controller
    const history = messages.slice(-6)
    setMessages(current => [...current, {role:'user', content:text.trim()}])
    setQuestion(''); setError(''); setBusy(true)
    try {
      const response = await fetch('/api/website-chat', {method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({question:text.trim(),history})})
      const data = await response.json()
      if (!response.ok || typeof data.answer !== 'string') throw new Error(data.error || 'Chat is unavailable. Please try again.')
      setMessages(current => [...current,{role:'assistant',content:data.answer}])
    } catch (e) {
      setQuestion(text)
      setError(controller.signal.aborted ? 'Response stopped. You can edit and resend your question.' : e instanceof Error ? e.message : 'Could not connect. Please try again.')
    } finally { request.current = null; setBusy(false); input.current?.focus() }
  }
  function submit(e: FormEvent) { e.preventDefault(); void ask(question) }
  function close() { request.current?.abort(); setOpen(false) }
  return <>
    <button ref={trigger} className={s.launcher} onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} aria-controls="website-relay-chat"><Sparkles size={19}/> Ask Relay Sales Agent</button>
    <dialog ref={dialog} id="website-relay-chat" className={s.drawer} aria-labelledby="website-chat-title" onCancel={e => {e.preventDefault();close()}} onClick={e => {if(e.target === e.currentTarget && e.clientX < e.currentTarget.getBoundingClientRect().left) close()}}>
      <header className={s.header}><div><h2 id="website-chat-title"><Sparkles size={21}/> Ask Relay Sales Agent</h2><p>AI product guide</p></div><button className={s.icon} onClick={close} aria-label="Close Ask Relay"><X/></button></header>
      <div className={s.messages} role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions text">
        <div className={s.assistant}>Hi! I’m the Ask Relay Sales Agent, an AI guide to Relay. Ask me how Relay helps teams keep work moving when someone leaves, changes roles or takes leave.</div>
        {messages.map((m,i) => <div key={i} className={m.role === 'user' ? s.user : s.assistant}><span className={s.speaker}>{m.role === 'user' ? 'You' : 'Ask Relay'}</span>{m.content}</div>)}
        {busy && <p className={s.thinking} role="status">Thinking…</p>}<div ref={end}/>
      </div>
      <div className={s.bottom}>
        {!messages.length && <div className={s.prompts}>{prompts.map(p => <button key={p} onClick={() => void ask(p)}>{p}<ArrowUpRight size={15}/></button>)}</div>}
        <a href="#demo" className={s.demo} onClick={close}>Request a demo <ArrowUpRight size={16}/></a>
        {error && <p className={s.error} role="alert">{error}</p>}
        <form className={s.form} onSubmit={submit}><label className={s.sr} htmlFor="relay-public-question">Ask a question about Relay</label><textarea ref={input} id="relay-public-question" rows={2} maxLength={1000} value={question} onChange={e=>setQuestion(e.target.value)} placeholder="Ask about Relay…" onKeyDown={e=>{if(e.key==='Enter' && !e.shiftKey && !e.nativeEvent.isComposing){e.preventDefault();if(!busy)void ask(question)}}}/>{busy ? <button type="button" className={s.send} aria-label="Stop response" onClick={()=>request.current?.abort()}><Square size={16}/></button> : <button className={s.send} disabled={!question.trim()} aria-label="Send question"><ArrowUp size={19}/></button>}</form>
        <p className={s.notice}>Public product information only. Please don’t share confidential details. Messages are sent to our AI provider to generate answers.</p>
      </div>
    </dialog>
  </>
}
