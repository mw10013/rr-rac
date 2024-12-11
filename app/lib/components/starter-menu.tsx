import { Menu, MenuItem } from './starter/Menu'

export function StarterMenu() {
  return (
    <Menu>
      <MenuItem onAction={() => alert('open')}>Open</MenuItem>
      <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
    </Menu>
  )
}
