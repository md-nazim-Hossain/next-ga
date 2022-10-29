export function pageView (url:string){
    window.gtag('config',`${process.env.ANALYTICS_ID}`,{
        path_url:url
    })
}

//h
export const event = ({action,category,label,value}) =>{
    window.gtag('event',action,{
        event_category:category,
        event_label:label,
        value:value
    })
}

