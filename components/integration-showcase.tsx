'use client'

import { useState } from 'react'
import Image from 'next/image'
import s from './continuity-home.module.css'

const featured = [
  ['SharePoint', 'sharepoint'],
  ['Outlook', 'outlook'],
  ['Jira', 'jira'],
  ['Confluence', 'confluence'],
] as const

const more = [
  ['Azure DevOps', 'azure-devops'],
  ['GitLab', 'gitlab'],
  ['Google Drive', 'google-drive'],
  ['Asana', 'asana'],
  ['Monday.com', 'monday'],
] as const

export function IntegrationShowcase() {
  const [enabled, setEnabled] = useState<string[]>(['sharepoint', 'outlook', 'jira'])

  function toggle(file: string) {
    setEnabled(current => current.includes(file) ? current.filter(item => item !== file) : [...current, file])
  }

  return <div className={s.integrationShowcase}>
    <div className={s.integrationCards} aria-label="Try the illustrative integration switches">
      {featured.map(([name, file]) => <div className={s.integrationCard} key={file}>
        <Image src={`/logos/${file}.svg`} alt="" width={30} height={30}/>
        <span>{name}</span>
        <button type="button" role="switch" aria-label={`${name} in illustration`} aria-checked={enabled.includes(file)} onClick={() => toggle(file)} className={s.integrationSwitch}><span/></button>
      </div>)}
    </div>
    <p className={s.integrationDemoNote}>Try the switches · Visual example only; no connection is changed.</p>
    <div className={s.integrationMore} aria-label="More tools">
      {more.map(([name, file]) => <span key={file}><Image src={`/logos/${file}.svg`} alt="" width={17} height={17}/>{name}</span>)}
    </div>
    <p className={s.note}>We’ll confirm which integrations fit your setup during the demo.</p>
  </div>
}
