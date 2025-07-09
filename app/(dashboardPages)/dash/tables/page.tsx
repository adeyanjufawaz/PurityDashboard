import Card from "@/app/components/general/Card";
import AlignedImage from "@/app/components/table/AlignedImage";
import { authorsData, projects } from "@/utils/datas";
import Image from "next/image";

function Table() {
  const tableHeader = Object.keys(authorsData[0]);
  return (
    <div className="bg-pry text-textCol w-full mt-8 px-6 ">
      <Card>
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Author Table</h2>
          <div className=" w-full">
            <table className="py-3 text-left table-auto w-full mt-8 ">
              <thead>
                <tr className=" text-left p-4">
                  <th className="uppercase p-4 text-sm font-semibold py-3">
                    Author
                  </th>
                  <th className="uppercase p-4 text-sm font-semibold py-3">
                    Function
                  </th>
                  <th className="uppercase p-4 text-sm font-semibold py-3">
                    Status
                  </th>
                  <th className="uppercase p-4 text-sm font-semibold py-3">
                    Employed
                  </th>
                </tr>
              </thead>

              <tbody>
                {authorsData.map((author) => (
                  <tr key={author.name}>
                    <td className="py-4 p-4">
                      <div className="flex gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-sec">
                          <Image src={author.image} alt="Authir" className="w-full h-full rounded-2xl object-cover"/>
                        </div>
                        <div className="flex flex-col">
                          <h2 className="text-lg font-semibold">
                            {author.name}
                          </h2>
                          <p className="text-sm text-textGreyCol">
                            {author.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">
                          {author.organization}
                        </h2>
                        <p className="text-sm text-textGreyCol">
                          {author.role}
                        </p>
                      </div>
                    </td>
                    <td className="p-4">
                      <button
                        className={`${
                          author.status.toLowerCase() == "online"
                            ? "bg-sec"
                            : "bg-tet"
                        } rounded-lg text-white text-sm font-medium py-1 px-4`}
                      >
                        {author.status}
                      </button>
                    </td>
                    <td className="text-base p-4 font-semibold"> {author.date}</td>
                    <td className="text-base p-4 font-semibold text-gray-500">
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      <div className="mt-10">
        <Card>
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Project Table</h2>
            <div className=" w-full">
              <table className="py-3 text-left table-auto w-full mt-8 ">
                <thead>
                  <tr className=" text-left">
                    <th className="uppercase min-w-[250px] p-3 py-3">Comapnies</th>
                    <th className="uppercase p-3 py-3">Budget</th>
                    <th className="uppercase p-3 min-w-30 py-3">Status</th>
                    <th className="uppercase p-3 py-3">Completion</th>
                  </tr>
                </thead>

                <tbody>
                  {projects.map((project) => (
                    <tr key={project.title}>
                      <td className={`py-6 p-3 min-w-[250px] ${project.color} `}>
                        <div className="flex justify-start gap-6 items-center">
                          {<project.icon size={20} />}
                          <h2 className="text-textCol text-lg font-normal">
                            {project.title}
                          </h2>
                        </div>
                      </td>
                      <td className="p-3">{project.budget}</td>
                      <td className="p-3 min-w-30">{project.status}</td>
                      <td className="text-base p-3 font-semibold text-tet">
                        <div className="flex flex-col">
                          <h2 className="text-sec">{project.completion}</h2>
                        <div className="h-1 w-[60%] bg-gray-400 rounded-full ">
                          <div style={{width:`${project.completion}`}} className={`h-full bg-sec rounded-full `}></div>
                        </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Table;
