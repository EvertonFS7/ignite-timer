import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { CyclesContentProvider } from './contexts/CyclesContext'
import { Router } from './Router'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  )
}
