import getSingleProject from "@/controllers/singleproject";

async function Details({ params: { id } }) 
{
    
const project = await getSingleProject(id); 
  return (
    <>
    <div className="min-h-screen max-w-[1550px] mx-auto mb-40">

    <div>{project.title}</div>
    <div>{project.info}</div>
    </div>

    </>
  )
}

export default Details