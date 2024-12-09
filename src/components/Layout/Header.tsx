import { Button, Flex, Group, Menu, Text } from "@mantine/core"
import { useAuth } from "../../context/AuthContext"

const Header = () => {
  const {logout, user} = useAuth()
  
  return (
    <header style={{position:"sticky", top:0, zIndex:1}}>
      <Flex justify="space-between" bg="blue" px="lg" py="md" align="center">
        <Text c="white" fz={{lg:"30"}} fw="bold">GitHub Jobs</Text>
        <Menu>
          <Menu.Target>
            <Text c="white">Hi, {user?.displayName}</Text>
          </Menu.Target>
          <Menu.Dropdown>
          <Button onClick={logout}>Logout</Button>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </header>
  )
}

export default Header