import Link from "next/link"
export default function MenLayout({children}
    :
   {children : React.ReactNode})
   {
    const Links = [ 

        { url: "/men/alingi", name: "ARBR" },
        { url: "/men/jackets", name: "JACKETS" },
        { url: "/men/technical-sailing", name: "TECHNICAL SAILING" },
        { url: "/men/sweater", name: "SWEATER & HOODIES" },
        { url: "/men/shirts", name: "SHIRTS" },
        { url: "/men/polo", name: "POLOS" },
        { url: "/men/t-shirt", name: "T-SHIRTS" },
        { url: "/men/shorts", name: "SHORTS" },
        { url: "/men/accessories", name: "ACCESSORIES" },
        { url: "/men/swimwear", name: "SWIMWEAR" },
        { url: "/men/limited-edition", name: "LIMITED EDITION" },
        { url: "/men/sailgp", name: "SAILGP" },
      
      ]
    return (
        <>
      
         <div 
              className="flex justify-start items-center h-10 whitespace-nowrap 
              overflow-hidden gap-9 text-sm font-extralight text-white/60 ml-4">
                  {Links.map((links, index)=>{
                      return (
                        <Link key={index} href={links.url} >{links.name}</Link>
                      )
                  })}
            </div> 
        {children}
       
        </>
    )
}