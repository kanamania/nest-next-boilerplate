export default function Heading(props: {title: any, description: any}) {
  return (
    <>
      <title>{props.title} | Alpha Project</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={props.description} />
      <link rel="icon" href="/favicon.ico" />
    </>
  )
}
