export default async function Page({ params }: {
    params: { id: string }
}) {
    return (
        <div>
         <h1>hello Artists! </h1>
         {/* <h2>ID: { params.id } </h2> */}
        </div>         
    )
}