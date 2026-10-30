import Sidebar from "@/components/UserPanel/Sidebar/Sidebar";
import UserProfile from "@/components/UserPanel/UserProfile/UserProfile";

export default function userPage(){
    return (
      <>
          <div className="h-[140px] bg-[#061A40]">

          </div>

           <div className="grid grid-cols-1 md:grid-cols-[250px_minmax(0,1fr)] gap-6 ">
               <Sidebar />
               <main className="  sm:p-6 lg:p-8">
                   <UserProfile />
               </main>
           </div>
       </>
    )
}