
import Link from 'next/link'
const WomenLayout = ({children}: {
  children: React.ReactNode
}) => {
  const Links = [ 
    { url: "/women/w-alingi", name: "ARBR" },
    { url: "/women/w-jackets", name: "JACKETS" },
    { url: "/women/w-techsailing", name: "TECHNICAL SAILING" },
    { url: "/women/w-hoodies", name: "SWEATER & HOODIES" },
    { url: "/women/w-polo", name: "POLOS" },
    { url: "/women/w-tshirts", name: "T-SHIRTS" },
    { url: "/women/w-dress&skirts", name: "DRESSES & SKIRTS" },
    { url: "/women/w-pants", name: "PANTS" },
    { url: "/women/w-shorts", name: "SHORTS" },
    { url: "/women/w-accessories", name: "ACCESSORIES" },
    { url: "/women/w-sailgp", name: "SAILGP" },
  
  ]
  return (
    <div>
       <div className="flex justify-start items-center h-10 whitespace-nowrap 
              overflow-hidden gap-9 text-sm font-extralight text-white/60 ml-4">
                  {Links.map((links, index)=>{
                      return (
                        <Link key={index} href={links.url} >{links.name}</Link>
                      )
                  })}
            </div> 
      {children}
    </div>
  )
}

export default WomenLayout
