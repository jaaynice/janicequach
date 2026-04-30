interface TextSlide {
  num: string
  headline: string
  body: string
}

interface ScrollConfig {
  sectionSelector: string
  bubbleId: string
  numId: string
  headlineId: string
  bodyId: string
  diagramId: string
  slides: TextSlide[]
}

export function initScrollSections(config: ScrollConfig): void {
  const bubble = document.getElementById(config.bubbleId) as HTMLElement
  const bubbleNum = document.getElementById(config.numId) as HTMLElement
  const bubbleH2 = document.getElementById(config.headlineId) as HTMLElement
  const bubbleBody = document.getElementById(config.bodyId) as HTMLElement
  const diagramFixed = document.getElementById(config.diagramId) as HTMLElement
  const scrollTrack = document.querySelector('.scroll-track') as HTMLElement

  let currentSection = 0
  let ticking = false

  function getActiveSection(): number {
    const section = document.querySelector(config.sectionSelector) as HTMLElement
    return Math.min(Math.round(window.scrollY / section.offsetHeight), config.slides.length - 1)
  }

  function onScroll(): void {
    if (!ticking) {
      ticking = true
      requestAnimationFrame(() => {
        const active = getActiveSection()
        if (active !== currentSection) {
          currentSection = active
          const data = config.slides[active]
          bubble.style.opacity = '0'
          setTimeout(() => {
            bubbleNum.textContent = data.num
            bubbleH2.textContent = data.headline
            bubbleBody.textContent = data.body
            bubble.style.opacity = '1'
          }, 150)
        }

        const trackBottom = scrollTrack.getBoundingClientRect().bottom
        const pastTrack = trackBottom < window.innerHeight * 0.5
        diagramFixed.style.opacity = pastTrack ? '0' : '1'
        bubble.style.display = pastTrack ? 'none' : ''

        ticking = false
      })
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true })
}
