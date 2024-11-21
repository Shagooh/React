import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'shagooh',
    name: 'santi',
    isFollowing: true
  },
  {
    userName: 'carli',
    name: 'protoss',
    isFollowing: true
  }
]
export function App () {
  return (
    <section className='App'>
      {
				users.map(({ userName, name, isFollowing }) => (
  <TwitterFollowCard
    key={userName}
    userName={userName}
    initialIsFollowing={isFollowing}
  >
    {name}
  </TwitterFollowCard>

				))

			}

    </section>

  )
}
