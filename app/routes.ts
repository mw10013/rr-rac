import type { RouteConfig } from '@react-router/dev/routes'
import { index, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('buttons', 'routes/buttons.tsx'),
  route('checkboxes', 'routes/checkboxes.tsx'),
  route('switches', 'routes/switches.tsx'),
  route('text-fields', 'routes/text-fields.tsx'),
  route('shadcn-form', 'routes/shadcn-form.tsx'),
  route('forms', 'routes/forms.tsx'),
  route('forms1', 'routes/forms1.tsx'),
  route('list-boxes', 'routes/list-boxes.tsx'),
  route('radio-groups', 'routes/radio-groups.tsx'),
] satisfies RouteConfig
