import roboChefLogo from "../images/robo-chef.png"

export default function Header(){
  return(
    <header>
      <img src={roboChefLogo} alt='robot chef'/>
      <h1>Chef Claude</h1>
    </header>
  )
}