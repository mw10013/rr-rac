import type { RouteConfig } from '@react-router/dev/routes'
import { index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('buttons', 'routes/buttons.tsx'),
  route('checkboxes', 'routes/checkboxes.tsx'),
  route('switches', 'routes/switches.tsx'),
] satisfies RouteConfig
