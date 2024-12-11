import { MenuTrigger } from 'react-aria-components'
import { Button } from './starter/Button'
import { Menu, MenuItem } from './starter/Menu'

export function StarterMenu() {
  return (
    <>
      <p>Starter menu</p>
      <MenuTrigger>
      <Button>Menu</Button>
        <Menu placement="bottom">
          <MenuItem onAction={() => alert('open')}>Open</MenuItem>
          <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
        </Menu>
      </MenuTrigger>
    </>
  )
}
