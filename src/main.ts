import './style.css'
import { navigationMenu } from './component/navigation-header.ts'
import { mainHero } from './component/main-hero.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div style="height: 100%">
    <nav id="nav-header"></nav>
    <div id="main-hero"></div>
  </div>
`

navigationMenu(document.querySelector<HTMLDivElement>('#nav-header')!)
mainHero(document.querySelector<HTMLDivElement>('#main-hero')!);
