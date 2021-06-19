import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

const UserDetail: React.FC<any> = (props) => {
  if (!props.data) {
    return <div>loading...</div>
  }

  return (
    <div>
      {props.data.id}:{props.data.title}
      <Link href="/todo-page">
        戻る
      </Link>
    </div>
  )
}
export default UserDetail

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await response.json()
  
  const paths = data.map((x:any) => {
    return {
      params: {
        id: String(data.id),
      },
    }
  })

  return {
    paths: paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = await response.json()
  return {
    props: {
      data
    }
  }
}